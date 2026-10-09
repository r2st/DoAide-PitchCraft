from __future__ import annotations

import json
import logging
import re
import time
from typing import Any

from app.core.config import settings

logger = logging.getLogger(__name__)


class GeminiError(RuntimeError):
    pass


def is_configured() -> bool:
    return bool(settings.gemini_api_key)


def extract_json_object(raw: str) -> dict[str, Any] | None:
    if not raw:
        return None
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw.strip(), flags=re.S)
    start, end = text.find("{"), text.rfind("}")
    if start == -1 or end <= start:
        return None
    try:
        parsed = json.loads(text[start : end + 1])
    except (ValueError, TypeError):
        return None
    return parsed if isinstance(parsed, dict) else None


def _build_contents(messages: list[dict[str, Any]]) -> tuple[str | None, list[dict]]:
    system_instruction = None
    contents = []
    for msg in messages:
        role = msg.get("role", "user")
        text = msg.get("content", "")
        if role == "system":
            system_instruction = text
        else:
            contents.append({
                "role": "model" if role == "assistant" else "user",
                "parts": [{"text": text}],
            })
    return system_instruction, contents


def chat_completion(
    messages: list[dict[str, Any]],
    *,
    model: str | None = None,
    temperature: float = 0.1,
    max_tokens: int = 2000,
    timeout: float | None = None,
) -> str:
    if not is_configured():
        raise GeminiError("GEMINI_API_KEY is not set")

    from google import genai
    from google.genai import types

    client = genai.Client(api_key=settings.gemini_api_key)
    system_instruction, contents = _build_contents(messages)

    config = types.GenerateContentConfig(
        temperature=temperature,
        max_output_tokens=max_tokens,
    )
    if system_instruction:
        config.system_instruction = system_instruction

    used_model = model or settings.gemini_model

    max_attempts = 3
    last_error: GeminiError | None = None

    for attempt in range(1, max_attempts + 1):
        try:
            response = client.models.generate_content(
                model=used_model,
                contents=contents,
                config=config,
            )
            text = response.text
            if not text:
                raise GeminiError("Gemini returned an empty completion")
            return text.strip()
        except GeminiError:
            raise
        except Exception as exc:
            last_error = GeminiError(f"Gemini request failed: {exc}")
            if attempt == max_attempts:
                break
            time.sleep(1.0 * 2 ** (attempt - 1))

    raise last_error or GeminiError("Gemini request failed")


def chat_json(
    messages: list[dict[str, Any]],
    *,
    model: str | None = None,
    max_tokens: int = 2000,
    timeout: float | None = None,
) -> dict[str, Any]:
    raw = chat_completion(
        messages, model=model, temperature=0.0, max_tokens=max_tokens, timeout=timeout
    )
    parsed = extract_json_object(raw)
    if parsed is None:
        raise GeminiError(f"No JSON object in model response: {raw[:300]}")
    return parsed

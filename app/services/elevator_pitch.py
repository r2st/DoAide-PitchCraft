from __future__ import annotations

from app.services.gemini_client import GeminiError, chat_completion, extract_json_object


def generate_elevator_pitch(
    company_name: str,
    problem: str,
    solution: str,
    target_audience: str,
    unique_value: str,
) -> dict:
    prompt = f"""Generate elevator pitches for a startup. Return ONLY a JSON object with this exact structure:
{{
  "pitches": {{
    "30s": "A compelling 30-second pitch (2-3 sentences)",
    "60s": "A compelling 60-second pitch (4-5 sentences)",
    "90s": "A compelling 90-second pitch (6-8 sentences)"
  }},
  "tips": ["tip1", "tip2", "tip3"]
}}

Startup details:
- Company: {company_name}
- Problem: {problem}
- Solution: {solution}
- Target Audience: {target_audience}
- Unique Value Proposition: {unique_value}

Make each pitch conversational, compelling, and memorable. The 30s pitch should hook attention, the 60s adds proof points, and the 90s tells a complete story. Include 3-5 delivery tips."""

    messages = [
        {"role": "system", "content": "You are an expert pitch coach. Return only valid JSON."},
        {"role": "user", "content": prompt},
    ]

    raw = chat_completion(messages, max_tokens=2000, temperature=0.4)
    parsed = extract_json_object(raw)
    if not parsed or "pitches" not in parsed:
        raise GeminiError("AI did not return valid elevator pitches")

    return {
        "company_name": company_name,
        "pitches": parsed["pitches"],
        "tips": parsed.get("tips", []),
    }

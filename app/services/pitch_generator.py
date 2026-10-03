from __future__ import annotations

import json

from app.services.openrouter_client import OpenRouterError, chat_completion, extract_json_object


def generate_outline(
    company_name: str,
    industry: str,
    problem: str,
    solution: str,
    target_market: str,
    business_model: str,
    traction: str = "",
    funding_ask: str = "",
) -> dict:
    prompt = f"""Generate a pitch deck outline for a startup. Return ONLY a JSON object with this exact structure:
{{
  "slides": [
    {{
      "slide_number": 1,
      "title": "Title Slide",
      "bullets": ["bullet1", "bullet2"],
      "speaker_notes": "notes"
    }}
  ]
}}

Startup details:
- Company: {company_name}
- Industry: {industry}
- Problem: {problem}
- Solution: {solution}
- Target Market: {target_market}
- Business Model: {business_model}
- Traction: {traction or 'N/A'}
- Funding Ask: {funding_ask or 'N/A'}

Generate 10-12 slides covering: Title, Problem, Solution, Market Size, Business Model, Traction, Go-to-Market, Competition, Team, Financials, The Ask, Thank You.
Each slide should have 3-5 specific bullets and detailed speaker notes."""

    messages = [
        {"role": "system", "content": "You are a startup pitch deck expert. Return only valid JSON."},
        {"role": "user", "content": prompt},
    ]

    raw = chat_completion(messages, max_tokens=4000, temperature=0.3)
    parsed = extract_json_object(raw)
    if not parsed or "slides" not in parsed:
        raise OpenRouterError("AI did not return a valid pitch outline")

    return {
        "company_name": company_name,
        "slides": parsed["slides"],
        "total_slides": len(parsed["slides"]),
    }

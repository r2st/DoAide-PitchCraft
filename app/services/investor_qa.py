from __future__ import annotations

from app.services.gemini_client import GeminiError, chat_completion, extract_json_object


def generate_investor_qa(
    company_name: str,
    industry: str,
    stage: str,
    problem: str,
    solution: str,
    business_model: str,
    traction: str = "",
) -> dict:
    prompt = f"""Generate 10 tough investor questions and suggested answers for a startup fundraising pitch. Return ONLY a JSON object with this exact structure:
{{
  "questions": [
    {{
      "question": "The tough question an investor would ask",
      "answer": "A strong, specific suggested answer",
      "category": "Category like Market, Team, Financials, Product, Competition, Traction, Risk"
    }}
  ]
}}

Startup details:
- Company: {company_name}
- Industry: {industry}
- Stage: {stage}
- Problem: {problem}
- Solution: {solution}
- Business Model: {business_model}
- Traction: {traction or 'Early stage, limited traction'}

Generate questions covering: market size, competition, defensibility, unit economics, team, go-to-market, risks, and scalability. Answers should be specific to this startup, not generic."""

    messages = [
        {"role": "system", "content": "You are a seasoned VC partner. Return only valid JSON."},
        {"role": "user", "content": prompt},
    ]

    raw = chat_completion(messages, max_tokens=4000, temperature=0.3)
    parsed = extract_json_object(raw)
    if not parsed or "questions" not in parsed:
        raise GeminiError("AI did not return valid Q&A")

    return {
        "company_name": company_name,
        "questions": parsed["questions"],
    }

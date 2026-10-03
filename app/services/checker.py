from __future__ import annotations

QUESTIONS = [
    {"id": 1, "text": "Do you have a clear problem statement?", "weight": 10},
    {"id": 2, "text": "Is your solution differentiated from competitors?", "weight": 10},
    {"id": 3, "text": "Do you have a defined target market with TAM/SAM/SOM?", "weight": 10},
    {"id": 4, "text": "Is your business model clearly explained?", "weight": 10},
    {"id": 5, "text": "Do you have traction metrics (users, revenue, growth)?", "weight": 15},
    {"id": 6, "text": "Do you have a go-to-market strategy?", "weight": 10},
    {"id": 7, "text": "Is your team slide compelling (relevant experience)?", "weight": 10},
    {"id": 8, "text": "Do you have financial projections (3-year)?", "weight": 10},
    {"id": 9, "text": "Is your funding ask specific (amount + use of funds)?", "weight": 10},
    {"id": 10, "text": "Do you have a competitive landscape analysis?", "weight": 5},
]

ANSWER_SCORES = {"yes": 1.0, "partial": 0.5, "no": 0.0}

GRADE_THRESHOLDS = [
    (90, "A", "Investor-ready! Your pitch deck covers all essential elements."),
    (75, "B", "Strong foundation. Address the gaps below to be fully investor-ready."),
    (60, "C", "Good start, but several areas need work before pitching."),
    (40, "D", "Significant gaps. Focus on the fundamentals first."),
    (0, "F", "Your pitch deck needs major work. Start with the basics."),
]


def evaluate(answers: list[dict]) -> dict:
    answer_map = {a["question_id"]: a["answer"].lower() for a in answers}

    total_weight = sum(q["weight"] for q in QUESTIONS)
    earned = 0.0
    strengths = []
    recommendations = []

    for q in QUESTIONS:
        score_factor = ANSWER_SCORES.get(answer_map.get(q["id"], "no"), 0.0)
        earned += q["weight"] * score_factor

        if score_factor == 1.0:
            strengths.append(q["text"])
        elif score_factor == 0.5:
            recommendations.append(f"Strengthen: {q['text']}")
        else:
            recommendations.append(f"Missing: {q['text']}")

    pct = round(earned / total_weight * 100)
    grade = "F"
    for threshold, letter, _ in GRADE_THRESHOLDS:
        if pct >= threshold:
            grade = letter
            break

    return {
        "score": pct,
        "max_score": 100,
        "grade": grade,
        "recommendations": recommendations,
        "strengths": strengths,
    }


def get_questions() -> list[dict]:
    return [{"id": q["id"], "text": q["text"]} for q in QUESTIONS]

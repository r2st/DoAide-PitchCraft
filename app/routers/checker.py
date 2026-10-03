from __future__ import annotations

from fastapi import APIRouter

from app.schemas.pitch import CheckerRequest, CheckerResult
from app.services.checker import evaluate, get_questions

router = APIRouter(prefix="/checker", tags=["checker"])


@router.get("/questions")
def questions():
    return get_questions()


@router.post("/evaluate", response_model=CheckerResult)
def evaluate_pitch(payload: CheckerRequest):
    answers = [{"question_id": a.question_id, "answer": a.answer} for a in payload.answers]
    return evaluate(answers)

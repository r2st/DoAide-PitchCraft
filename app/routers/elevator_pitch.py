from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.schemas.pitch import ElevatorPitchRequest, ElevatorPitchResponse
from app.services.gemini_client import GeminiError, is_configured
from app.services.elevator_pitch import generate_elevator_pitch

router = APIRouter(prefix="/elevator-pitch", tags=["elevator-pitch"])


@router.post("/generate", response_model=ElevatorPitchResponse)
def create_elevator_pitch(payload: ElevatorPitchRequest):
    if not is_configured():
        raise HTTPException(status_code=503, detail="AI service not configured")
    try:
        return generate_elevator_pitch(
            company_name=payload.company_name,
            problem=payload.problem,
            solution=payload.solution,
            target_audience=payload.target_audience,
            unique_value=payload.unique_value,
        )
    except GeminiError as exc:
        raise HTTPException(status_code=502, detail=str(exc))

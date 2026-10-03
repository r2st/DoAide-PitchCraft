from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.schemas.pitch import PitchOutlineRequest, PitchOutlineResponse
from app.services.openrouter_client import OpenRouterError, is_configured
from app.services.pitch_generator import generate_outline

router = APIRouter(prefix="/generator", tags=["generator"])


@router.post("/outline", response_model=PitchOutlineResponse)
def create_outline(payload: PitchOutlineRequest):
    if not is_configured():
        raise HTTPException(status_code=503, detail="AI service not configured")
    try:
        result = generate_outline(
            company_name=payload.company_name,
            industry=payload.industry,
            problem=payload.problem,
            solution=payload.solution,
            target_market=payload.target_market,
            business_model=payload.business_model,
            traction=payload.traction,
            funding_ask=payload.funding_ask,
        )
        return result
    except OpenRouterError as exc:
        raise HTTPException(status_code=502, detail=str(exc))

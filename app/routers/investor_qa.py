from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.schemas.pitch import InvestorQARequest, InvestorQAResponse
from app.services.gemini_client import GeminiError, is_configured
from app.services.investor_qa import generate_investor_qa

router = APIRouter(prefix="/investor-qa", tags=["investor-qa"])


@router.post("/generate", response_model=InvestorQAResponse)
def create_investor_qa(payload: InvestorQARequest):
    if not is_configured():
        raise HTTPException(status_code=503, detail="AI service not configured")
    try:
        return generate_investor_qa(
            company_name=payload.company_name,
            industry=payload.industry,
            stage=payload.stage,
            problem=payload.problem,
            solution=payload.solution,
            business_model=payload.business_model,
            traction=payload.traction,
        )
    except GeminiError as exc:
        raise HTTPException(status_code=502, detail=str(exc))

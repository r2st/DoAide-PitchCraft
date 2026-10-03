from __future__ import annotations

from fastapi import APIRouter

from app.schemas.pitch import ValuationRequest, ValuationResponse
from app.services.valuation import INDUSTRY_MULTIPLES, calculate_valuation

router = APIRouter(prefix="/valuation", tags=["valuation"])


@router.post("/calculate", response_model=ValuationResponse)
def calculate(payload: ValuationRequest):
    result = calculate_valuation(payload.annual_revenue, payload.growth_rate, payload.industry)
    return result


@router.get("/industries")
def list_industries():
    return [
        {"key": k, "label": v["label"], "multiple": v["multiple"]}
        for k, v in INDUSTRY_MULTIPLES.items()
    ]

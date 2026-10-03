from __future__ import annotations

from fastapi import APIRouter

from app.schemas.pitch import FinancialModelRequest, FinancialModelResponse
from app.services.financial_model import build_projection

router = APIRouter(prefix="/model", tags=["financial-model"])


@router.post("/project", response_model=FinancialModelResponse)
def project_financials(payload: FinancialModelRequest):
    result = build_projection(
        monthly_revenue=payload.monthly_revenue,
        monthly_growth_rate=payload.monthly_growth_rate,
        cogs_percent=payload.cogs_percent,
        operating_expenses=payload.operating_expenses,
        opex_growth_rate=payload.opex_growth_rate,
        headcount=payload.headcount,
        avg_salary=payload.avg_salary,
    )
    return result

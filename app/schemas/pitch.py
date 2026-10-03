from __future__ import annotations

from pydantic import BaseModel, Field


class ValuationRequest(BaseModel):
    annual_revenue: float = Field(gt=0)
    growth_rate: float = Field(ge=0, le=1000)
    industry: str


class ValuationResponse(BaseModel):
    pre_money_valuation: float
    multiple_used: float
    industry: str
    method: str
    breakdown: dict


class PitchOutlineRequest(BaseModel):
    company_name: str
    industry: str
    problem: str
    solution: str
    target_market: str
    business_model: str
    traction: str = ""
    funding_ask: str = ""


class SlideOutline(BaseModel):
    slide_number: int
    title: str
    bullets: list[str]
    speaker_notes: str


class PitchOutlineResponse(BaseModel):
    company_name: str
    slides: list[SlideOutline]
    total_slides: int


class FinancialModelRequest(BaseModel):
    monthly_revenue: float = Field(ge=0)
    monthly_growth_rate: float = Field(ge=0, le=100)
    cogs_percent: float = Field(ge=0, le=100)
    operating_expenses: float = Field(ge=0)
    opex_growth_rate: float = Field(ge=0, le=100)
    headcount: int = Field(ge=0, default=0)
    avg_salary: float = Field(ge=0, default=0)


class MonthProjection(BaseModel):
    month: int
    revenue: float
    cogs: float
    gross_profit: float
    operating_expenses: float
    payroll: float
    net_income: float
    cumulative_cash: float


class FinancialModelResponse(BaseModel):
    projections: list[MonthProjection]
    summary: dict


class CheckerAnswer(BaseModel):
    question_id: int
    answer: str


class CheckerRequest(BaseModel):
    answers: list[CheckerAnswer]


class CheckerResult(BaseModel):
    score: int
    max_score: int
    grade: str
    recommendations: list[str]
    strengths: list[str]

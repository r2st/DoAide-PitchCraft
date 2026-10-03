from __future__ import annotations


def build_projection(
    monthly_revenue: float,
    monthly_growth_rate: float,
    cogs_percent: float,
    operating_expenses: float,
    opex_growth_rate: float,
    headcount: int = 0,
    avg_salary: float = 0,
) -> dict:
    projections = []
    cumulative_cash = 0.0
    revenue = monthly_revenue
    opex = operating_expenses
    monthly_payroll = headcount * avg_salary

    for month in range(1, 37):
        cogs = round(revenue * cogs_percent / 100, 2)
        gross_profit = round(revenue - cogs, 2)
        net_income = round(gross_profit - opex - monthly_payroll, 2)
        cumulative_cash = round(cumulative_cash + net_income, 2)

        projections.append({
            "month": month,
            "revenue": round(revenue, 2),
            "cogs": cogs,
            "gross_profit": gross_profit,
            "operating_expenses": round(opex, 2),
            "payroll": round(monthly_payroll, 2),
            "net_income": net_income,
            "cumulative_cash": cumulative_cash,
        })

        revenue *= 1 + monthly_growth_rate / 100
        if month % 12 == 0:
            opex *= 1 + opex_growth_rate / 100
            monthly_payroll *= 1.05

    year1 = projections[:12]
    year2 = projections[12:24]
    year3 = projections[24:36]

    summary = {
        "year_1_revenue": round(sum(m["revenue"] for m in year1), 2),
        "year_2_revenue": round(sum(m["revenue"] for m in year2), 2),
        "year_3_revenue": round(sum(m["revenue"] for m in year3), 2),
        "year_1_net_income": round(sum(m["net_income"] for m in year1), 2),
        "year_2_net_income": round(sum(m["net_income"] for m in year2), 2),
        "year_3_net_income": round(sum(m["net_income"] for m in year3), 2),
        "break_even_month": None,
        "total_36m_revenue": round(sum(m["revenue"] for m in projections), 2),
    }

    for p in projections:
        if p["cumulative_cash"] >= 0 and summary["break_even_month"] is None:
            summary["break_even_month"] = p["month"]

    return {"projections": projections, "summary": summary}

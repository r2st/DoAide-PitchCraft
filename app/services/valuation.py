from __future__ import annotations

INDUSTRY_MULTIPLES = {
    "saas": {"multiple": 10.0, "label": "SaaS / Software"},
    "fintech": {"multiple": 8.0, "label": "Fintech"},
    "ecommerce": {"multiple": 3.0, "label": "E-commerce"},
    "marketplace": {"multiple": 6.0, "label": "Marketplace"},
    "healthtech": {"multiple": 7.0, "label": "HealthTech"},
    "edtech": {"multiple": 5.0, "label": "EdTech"},
    "cleantech": {"multiple": 6.0, "label": "CleanTech"},
    "biotech": {"multiple": 8.0, "label": "Biotech"},
    "hardware": {"multiple": 3.0, "label": "Hardware"},
    "media": {"multiple": 4.0, "label": "Media / Entertainment"},
    "other": {"multiple": 4.0, "label": "Other"},
}


def growth_premium(growth_rate: float) -> float:
    if growth_rate >= 100:
        return 2.0
    if growth_rate >= 50:
        return 1.5
    if growth_rate >= 25:
        return 1.2
    return 1.0


def calculate_valuation(
    annual_revenue: float, growth_rate: float, industry: str
) -> dict:
    key = industry.lower().replace(" ", "").replace("-", "").replace("/", "")
    ind = INDUSTRY_MULTIPLES.get(key, INDUSTRY_MULTIPLES["other"])
    base_multiple = ind["multiple"]
    premium = growth_premium(growth_rate)
    effective_multiple = round(base_multiple * premium, 2)
    pre_money = round(annual_revenue * effective_multiple, 2)

    return {
        "pre_money_valuation": pre_money,
        "multiple_used": effective_multiple,
        "industry": ind["label"],
        "method": "Revenue Multiple",
        "breakdown": {
            "annual_revenue": annual_revenue,
            "base_industry_multiple": base_multiple,
            "growth_rate_percent": growth_rate,
            "growth_premium": premium,
            "effective_multiple": effective_multiple,
        },
    }

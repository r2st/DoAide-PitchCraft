def test_calculate_valuation(client):
    response = client.post(
        "/api/v1/valuation/calculate",
        json={"annual_revenue": 500000, "growth_rate": 50, "industry": "saas"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["pre_money_valuation"] > 0
    assert data["multiple_used"] > 0
    assert data["industry"] == "SaaS / Software"
    assert data["method"] == "Revenue Multiple"


def test_valuation_high_growth(client):
    response = client.post(
        "/api/v1/valuation/calculate",
        json={"annual_revenue": 1000000, "growth_rate": 100, "industry": "saas"},
    )
    data = response.json()
    assert data["breakdown"]["growth_premium"] == 2.0


def test_valuation_unknown_industry(client):
    response = client.post(
        "/api/v1/valuation/calculate",
        json={"annual_revenue": 100000, "growth_rate": 20, "industry": "unknown"},
    )
    data = response.json()
    assert data["industry"] == "Other"


def test_list_industries(client):
    response = client.get("/api/v1/valuation/industries")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert any(i["key"] == "saas" for i in data)


def test_valuation_invalid_revenue(client):
    response = client.post(
        "/api/v1/valuation/calculate",
        json={"annual_revenue": -100, "growth_rate": 50, "industry": "saas"},
    )
    assert response.status_code == 422

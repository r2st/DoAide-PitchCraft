def test_project_financials(client):
    response = client.post(
        "/api/v1/model/project",
        json={
            "monthly_revenue": 10000,
            "monthly_growth_rate": 10,
            "cogs_percent": 30,
            "operating_expenses": 5000,
            "opex_growth_rate": 15,
            "headcount": 3,
            "avg_salary": 5000,
        },
    )
    assert response.status_code == 200
    data = response.json()
    assert len(data["projections"]) == 36
    assert data["summary"]["year_1_revenue"] > 0
    assert data["summary"]["year_3_revenue"] > data["summary"]["year_1_revenue"]


def test_project_financials_zero_revenue(client):
    response = client.post(
        "/api/v1/model/project",
        json={
            "monthly_revenue": 0,
            "monthly_growth_rate": 0,
            "cogs_percent": 0,
            "operating_expenses": 1000,
            "opex_growth_rate": 0,
        },
    )
    assert response.status_code == 200
    data = response.json()
    assert all(p["revenue"] == 0 for p in data["projections"])
    assert data["summary"]["year_1_net_income"] < 0


def test_break_even_month(client):
    response = client.post(
        "/api/v1/model/project",
        json={
            "monthly_revenue": 50000,
            "monthly_growth_rate": 5,
            "cogs_percent": 20,
            "operating_expenses": 30000,
            "opex_growth_rate": 10,
        },
    )
    data = response.json()
    assert data["summary"]["break_even_month"] is not None
    assert data["summary"]["break_even_month"] >= 1


def test_36_months_of_projections(client):
    response = client.post(
        "/api/v1/model/project",
        json={
            "monthly_revenue": 1000,
            "monthly_growth_rate": 5,
            "cogs_percent": 10,
            "operating_expenses": 500,
            "opex_growth_rate": 5,
        },
    )
    data = response.json()
    months = [p["month"] for p in data["projections"]]
    assert months == list(range(1, 37))

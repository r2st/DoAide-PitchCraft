from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


@pytest.fixture
def _enable_gemini():
    with patch("app.services.gemini_client.is_configured", return_value=True):
        yield


def _mock_response():
    return '{"questions": [{"question": "What is your moat?", "answer": "We have network effects.", "category": "Competition"}]}'


class TestInvestorQAEndpoint:
    def test_returns_503_when_not_configured(self):
        with patch("app.routers.investor_qa.is_configured", return_value=False):
            res = client.post("/api/v1/investor-qa/generate", json={
                "company_name": "TestCo",
                "industry": "SaaS",
                "stage": "seed",
                "problem": "Problem",
                "solution": "Solution",
                "business_model": "Subscription",
            })
        assert res.status_code == 503

    def test_generates_qa(self):
        with (
            patch("app.routers.investor_qa.is_configured", return_value=True),
            patch("app.services.investor_qa.chat_completion", return_value=_mock_response()),
        ):
            res = client.post("/api/v1/investor-qa/generate", json={
                "company_name": "TestCo",
                "industry": "SaaS",
                "stage": "seed",
                "problem": "Problem",
                "solution": "Solution",
                "business_model": "Subscription",
            })
        assert res.status_code == 200
        data = res.json()
        assert data["company_name"] == "TestCo"
        assert len(data["questions"]) >= 1
        assert "question" in data["questions"][0]
        assert "answer" in data["questions"][0]
        assert "category" in data["questions"][0]

    def test_traction_is_optional(self):
        with (
            patch("app.routers.investor_qa.is_configured", return_value=True),
            patch("app.services.investor_qa.chat_completion", return_value=_mock_response()),
        ):
            res = client.post("/api/v1/investor-qa/generate", json={
                "company_name": "TestCo",
                "industry": "SaaS",
                "stage": "seed",
                "problem": "Problem",
                "solution": "Solution",
                "business_model": "Subscription",
            })
        assert res.status_code == 200

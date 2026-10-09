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
    return '{"pitches": {"30s": "Short pitch.", "60s": "Medium pitch.", "90s": "Long pitch."}, "tips": ["Speak clearly"]}'


class TestElevatorPitchEndpoint:
    def test_returns_503_when_not_configured(self):
        with patch("app.routers.elevator_pitch.is_configured", return_value=False):
            res = client.post("/api/v1/elevator-pitch/generate", json={
                "company_name": "TestCo",
                "problem": "Problem",
                "solution": "Solution",
                "target_audience": "SMBs",
                "unique_value": "Best",
            })
        assert res.status_code == 503

    def test_generates_pitches(self):
        with (
            patch("app.routers.elevator_pitch.is_configured", return_value=True),
            patch("app.services.elevator_pitch.chat_completion", return_value=_mock_response()),
        ):
            res = client.post("/api/v1/elevator-pitch/generate", json={
                "company_name": "TestCo",
                "problem": "Problem",
                "solution": "Solution",
                "target_audience": "SMBs",
                "unique_value": "Best",
            })
        assert res.status_code == 200
        data = res.json()
        assert data["company_name"] == "TestCo"
        assert "30s" in data["pitches"]
        assert "60s" in data["pitches"]
        assert "90s" in data["pitches"]
        assert len(data["tips"]) >= 1

    def test_requires_all_fields(self):
        with patch("app.routers.elevator_pitch.is_configured", return_value=True):
            res = client.post("/api/v1/elevator-pitch/generate", json={
                "company_name": "TestCo",
            })
        assert res.status_code == 422

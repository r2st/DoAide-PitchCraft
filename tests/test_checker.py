def test_get_questions(client):
    response = client.get("/api/v1/checker/questions")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 10
    assert all("id" in q and "text" in q for q in data)


def test_evaluate_all_yes(client):
    answers = [{"question_id": i, "answer": "yes"} for i in range(1, 11)]
    response = client.post("/api/v1/checker/evaluate", json={"answers": answers})
    assert response.status_code == 200
    data = response.json()
    assert data["score"] == 100
    assert data["grade"] == "A"
    assert len(data["strengths"]) == 10
    assert len(data["recommendations"]) == 0


def test_evaluate_all_no(client):
    answers = [{"question_id": i, "answer": "no"} for i in range(1, 11)]
    response = client.post("/api/v1/checker/evaluate", json={"answers": answers})
    data = response.json()
    assert data["score"] == 0
    assert data["grade"] == "F"
    assert len(data["recommendations"]) == 10


def test_evaluate_mixed(client):
    answers = [
        {"question_id": 1, "answer": "yes"},
        {"question_id": 2, "answer": "partial"},
        {"question_id": 3, "answer": "no"},
        {"question_id": 4, "answer": "yes"},
        {"question_id": 5, "answer": "partial"},
        {"question_id": 6, "answer": "no"},
        {"question_id": 7, "answer": "yes"},
        {"question_id": 8, "answer": "no"},
        {"question_id": 9, "answer": "partial"},
        {"question_id": 10, "answer": "yes"},
    ]
    response = client.post("/api/v1/checker/evaluate", json={"answers": answers})
    data = response.json()
    assert 0 < data["score"] < 100
    assert data["grade"] in ("A", "B", "C", "D", "F")

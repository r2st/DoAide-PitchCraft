from tests.conftest import TEST_EMAIL, TEST_PASSWORD


def test_register(client):
    response = client.post(
        "/api/v1/auth/register",
        json={"email": TEST_EMAIL, "password": TEST_PASSWORD, "name": "Test"},
    )
    assert response.status_code == 201
    data = response.json()
    assert "access_token" in data


def test_register_duplicate(client):
    payload = {"email": TEST_EMAIL, "password": TEST_PASSWORD, "name": "Test"}
    client.post("/api/v1/auth/register", json=payload)
    response = client.post("/api/v1/auth/register", json=payload)
    assert response.status_code == 400


def test_login(client):
    client.post(
        "/api/v1/auth/register",
        json={"email": TEST_EMAIL, "password": TEST_PASSWORD, "name": "Test"},
    )
    response = client.post(
        "/api/v1/auth/login",
        json={"email": TEST_EMAIL, "password": TEST_PASSWORD},
    )
    assert response.status_code == 200
    assert "access_token" in response.json()


def test_login_wrong_password(client):
    client.post(
        "/api/v1/auth/register",
        json={"email": TEST_EMAIL, "password": TEST_PASSWORD, "name": "Test"},
    )
    response = client.post(
        "/api/v1/auth/login",
        json={"email": TEST_EMAIL, "password": "wrongpassword"},
    )
    assert response.status_code == 401


def test_me(auth_client):
    response = auth_client.get("/api/v1/auth/me")
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == TEST_EMAIL
    assert data["plan"] == "free"


def test_me_unauthenticated(client):
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401

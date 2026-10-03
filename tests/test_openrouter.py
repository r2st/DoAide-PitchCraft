from app.services.openrouter_client import extract_json_object, is_configured


def test_extract_json_object_clean():
    raw = '{"key": "value"}'
    result = extract_json_object(raw)
    assert result == {"key": "value"}


def test_extract_json_object_with_markdown():
    raw = '```json\n{"slides": [1, 2]}\n```'
    result = extract_json_object(raw)
    assert result == {"slides": [1, 2]}


def test_extract_json_object_with_surrounding_text():
    raw = 'Here is the result: {"name": "test"} hope it helps!'
    result = extract_json_object(raw)
    assert result == {"name": "test"}


def test_extract_json_object_empty():
    assert extract_json_object("") is None
    assert extract_json_object(None) is None


def test_extract_json_object_invalid():
    assert extract_json_object("not json at all") is None


def test_is_configured_false():
    assert not is_configured()

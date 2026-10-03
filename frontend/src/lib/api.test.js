import { describe, it, expect, afterEach } from "vitest";
import { getToken, setToken, errorMessage } from "./api";

afterEach(() => {
  setToken(null);
});

describe("token helpers", () => {
  it("stores and retrieves a token", () => {
    setToken("abc123");
    expect(getToken()).toBe("abc123");
  });

  it("clears a token", () => {
    setToken("abc123");
    setToken(null);
    expect(getToken()).toBeNull();
  });
});

describe("errorMessage", () => {
  it("extracts string detail", () => {
    expect(errorMessage({ detail: "bad request" })).toBe("bad request");
  });

  it("uses fallback", () => {
    expect(errorMessage(null, "oops")).toBe("oops");
  });
});

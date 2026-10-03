import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/helpers";
import ErrorBoundary from "./ErrorBoundary";

function Bomb() {
  throw new Error("Test explosion");
}

describe("ErrorBoundary", () => {
  it("catches errors and renders fallback", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    renderWithProviders(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Test explosion")).toBeInTheDocument();
    spy.mockRestore();
  });
});

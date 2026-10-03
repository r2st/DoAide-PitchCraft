import { screen } from "@testing-library/react";
import CheckerPage from "./CheckerPage";
import { renderWithProviders } from "../test/helpers";

describe("CheckerPage", () => {
  it("renders the page title", () => {
    renderWithProviders(<CheckerPage />);
    expect(screen.getByText("Pitch Deck Readiness Checker")).toBeInTheDocument();
  });
});

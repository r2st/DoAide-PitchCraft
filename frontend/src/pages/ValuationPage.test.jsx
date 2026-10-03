import { screen } from "@testing-library/react";
import ValuationPage from "./ValuationPage";
import { renderWithProviders } from "../test/helpers";

describe("ValuationPage", () => {
  it("renders the form", () => {
    renderWithProviders(<ValuationPage />);
    expect(screen.getByText("Startup Valuation Calculator")).toBeInTheDocument();
    expect(screen.getByText("Calculate Valuation")).toBeInTheDocument();
  });

  it("has industry select", () => {
    renderWithProviders(<ValuationPage />);
    expect(screen.getByText("Industry")).toBeInTheDocument();
  });
});

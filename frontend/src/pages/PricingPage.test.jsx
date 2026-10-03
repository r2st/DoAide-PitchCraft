import { screen } from "@testing-library/react";
import PricingPage from "./PricingPage";
import { renderWithProviders } from "../test/helpers";

describe("PricingPage", () => {
  it("renders all three plans", () => {
    renderWithProviders(<PricingPage />);
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("shows pricing", () => {
    renderWithProviders(<PricingPage />);
    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("$29")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
  });
});

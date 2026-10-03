import { screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { renderWithProviders } from "../test/helpers";

describe("LandingPage", () => {
  it("renders the hero section", () => {
    renderWithProviders(<LandingPage />, { user: null });
    expect(screen.getByRole("heading", { name: /Free Startup Tools/i })).toBeInTheDocument();
  });

  it("renders tool cards", () => {
    renderWithProviders(<LandingPage />, { user: null });
    expect(screen.getByText("Valuation Calculator")).toBeInTheDocument();
    expect(screen.getByText("Pitch Deck Generator")).toBeInTheDocument();
    expect(screen.getByText("Financial Model")).toBeInTheDocument();
    expect(screen.getByText("Readiness Checker")).toBeInTheDocument();
  });

  it("renders pricing section", () => {
    renderWithProviders(<LandingPage />, { user: null });
    expect(screen.getByRole("heading", { name: /Simple Pricing/i })).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    renderWithProviders(<LandingPage />, { user: null });
    expect(screen.getByText("Generate Pitch Deck")).toBeInTheDocument();
    expect(screen.getByText("Calculate Valuation")).toBeInTheDocument();
  });
});

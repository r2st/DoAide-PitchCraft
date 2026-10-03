import { screen } from "@testing-library/react";
import GeneratorPage from "./GeneratorPage";
import { renderWithProviders } from "../test/helpers";

describe("GeneratorPage", () => {
  it("renders the form", () => {
    renderWithProviders(<GeneratorPage />);
    expect(screen.getByText("AI Pitch Deck Generator")).toBeInTheDocument();
    expect(screen.getByText("Generate Pitch Outline")).toBeInTheDocument();
  });

  it("has required fields", () => {
    renderWithProviders(<GeneratorPage />);
    expect(screen.getByText("Company Name")).toBeInTheDocument();
    expect(screen.getByText("Problem")).toBeInTheDocument();
    expect(screen.getByText("Solution")).toBeInTheDocument();
  });
});

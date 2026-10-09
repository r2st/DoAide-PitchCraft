import { screen } from "@testing-library/react";
import ElevatorPitchPage from "./ElevatorPitchPage";
import { renderWithProviders } from "../test/helpers";

describe("ElevatorPitchPage", () => {
  it("renders the page title", () => {
    renderWithProviders(<ElevatorPitchPage />);
    expect(screen.getByText("Elevator Pitch Generator")).toBeInTheDocument();
  });

  it("has all required form fields", () => {
    renderWithProviders(<ElevatorPitchPage />);
    expect(screen.getByText("Company Name")).toBeInTheDocument();
    expect(screen.getByText("Problem You Solve")).toBeInTheDocument();
    expect(screen.getByText("Your Solution")).toBeInTheDocument();
    expect(screen.getByText("Target Audience")).toBeInTheDocument();
    expect(screen.getByText("Unique Value Proposition")).toBeInTheDocument();
  });

  it("has the generate button", () => {
    renderWithProviders(<ElevatorPitchPage />);
    expect(screen.getByText("Generate Elevator Pitches")).toBeInTheDocument();
  });
});

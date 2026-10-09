import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PitchOutlinePage from "./PitchOutlinePage";
import { renderWithProviders } from "../test/helpers";

describe("PitchOutlinePage", () => {
  it("renders the page title", () => {
    renderWithProviders(<PitchOutlinePage />);
    expect(screen.getByText("Pitch Deck Outline Creator")).toBeInTheDocument();
  });

  it("has the create button", () => {
    renderWithProviders(<PitchOutlinePage />);
    expect(screen.getByText("Create Pitch Outline")).toBeInTheDocument();
  });

  it("generates outline on submit", async () => {
    const user = userEvent.setup();
    renderWithProviders(<PitchOutlinePage />);

    const nameInput = screen.getByLabelText("Company Name");
    const industryInput = screen.getByLabelText("Industry");

    await user.type(nameInput, "TestCo");
    await user.type(industryInput, "SaaS");
    await user.click(screen.getByText("Create Pitch Outline"));

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Title Slide")).toBeInTheDocument();
    expect(screen.getByText("The Problem")).toBeInTheDocument();
    expect(screen.getByText("The Ask")).toBeInTheDocument();
  });

  it("works offline without API calls", () => {
    renderWithProviders(<PitchOutlinePage />);
    expect(screen.getByText(/no AI/i)).toBeInTheDocument();
  });
});

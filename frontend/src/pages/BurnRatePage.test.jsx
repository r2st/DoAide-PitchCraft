import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BurnRatePage from "./BurnRatePage";
import { renderWithProviders } from "../test/helpers";

describe("BurnRatePage", () => {
  it("renders the form", () => {
    renderWithProviders(<BurnRatePage />);
    expect(screen.getByText("Burn Rate Calculator")).toBeInTheDocument();
    expect(screen.getByText("Calculate Burn Rate")).toBeInTheDocument();
  });

  it("calculates burn rate on submit", async () => {
    const user = userEvent.setup();
    renderWithProviders(<BurnRatePage />);

    await user.type(screen.getByPlaceholderText("e.g. 500000"), "600000");
    await user.type(screen.getByPlaceholderText("e.g. 10000"), "10000");
    await user.type(screen.getByPlaceholderText("e.g. 40000"), "40000");
    await user.click(screen.getByText("Calculate Burn Rate"));

    expect(screen.getByText("Results")).toBeInTheDocument();
    expect(screen.getByText("20 months")).toBeInTheDocument();
  });

  it("shows infinite runway when revenue exceeds expenses", async () => {
    const user = userEvent.setup();
    renderWithProviders(<BurnRatePage />);

    await user.type(screen.getByPlaceholderText("e.g. 500000"), "100000");
    await user.type(screen.getByPlaceholderText("e.g. 10000"), "50000");
    await user.type(screen.getByPlaceholderText("e.g. 40000"), "30000");
    await user.click(screen.getByText("Calculate Burn Rate"));

    expect(screen.getByText("Infinite")).toBeInTheDocument();
  });
});

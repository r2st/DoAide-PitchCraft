import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "./ThemeToggle";
import { renderWithProviders } from "../test/helpers";

describe("ThemeToggle", () => {
  it("renders", () => {
    renderWithProviders(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBeTruthy();
  });
});

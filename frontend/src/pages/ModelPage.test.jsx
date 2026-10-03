import { screen } from "@testing-library/react";
import ModelPage from "./ModelPage";
import { renderWithProviders } from "../test/helpers";

describe("ModelPage", () => {
  it("renders the form", () => {
    renderWithProviders(<ModelPage />);
    expect(screen.getByText("Financial Model Builder")).toBeInTheDocument();
    expect(screen.getByText("Build Financial Model")).toBeInTheDocument();
  });

  it("has revenue and growth fields", () => {
    renderWithProviders(<ModelPage />);
    expect(screen.getByText("Monthly Revenue ($)")).toBeInTheDocument();
    expect(screen.getByText("Monthly Growth Rate (%)")).toBeInTheDocument();
  });
});

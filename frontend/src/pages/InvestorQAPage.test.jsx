import { screen } from "@testing-library/react";
import InvestorQAPage from "./InvestorQAPage";
import { renderWithProviders } from "../test/helpers";

describe("InvestorQAPage", () => {
  it("renders the page title", () => {
    renderWithProviders(<InvestorQAPage />);
    expect(screen.getByText("Investor Q&A Prep")).toBeInTheDocument();
  });

  it("has all required form fields", () => {
    renderWithProviders(<InvestorQAPage />);
    expect(screen.getByText("Company Name")).toBeInTheDocument();
    expect(screen.getByText("Industry")).toBeInTheDocument();
    expect(screen.getByText("Funding Stage")).toBeInTheDocument();
    expect(screen.getByText("Problem")).toBeInTheDocument();
    expect(screen.getByText("Solution")).toBeInTheDocument();
    expect(screen.getByText("Business Model")).toBeInTheDocument();
  });

  it("has the generate button", () => {
    renderWithProviders(<InvestorQAPage />);
    expect(screen.getByText("Generate Investor Q&A")).toBeInTheDocument();
  });

  it("has stage selector with options", () => {
    renderWithProviders(<InvestorQAPage />);
    expect(screen.getByText("Pre-Seed")).toBeInTheDocument();
    expect(screen.getByText("Seed")).toBeInTheDocument();
    expect(screen.getByText("Series A")).toBeInTheDocument();
  });
});

import { screen } from "@testing-library/react";
import BlogListPage from "./BlogListPage";
import { renderWithProviders } from "../test/helpers";

describe("BlogListPage", () => {
  it("renders all blog posts", () => {
    renderWithProviders(<BlogListPage />);
    expect(screen.getByText("PitchCraft Blog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Winning Pitch Deck/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Valuation Methods/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Financial Model/i })).toBeInTheDocument();
  });
});

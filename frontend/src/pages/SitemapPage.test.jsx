import { screen } from "@testing-library/react";
import SitemapPage from "./SitemapPage";
import { renderWithProviders } from "../test/helpers";

describe("SitemapPage", () => {
  it("renders sitemap sections", () => {
    renderWithProviders(<SitemapPage />);
    expect(screen.getByRole("heading", { name: "Sitemap" })).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});

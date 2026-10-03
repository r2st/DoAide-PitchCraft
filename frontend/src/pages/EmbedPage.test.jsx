import { screen } from "@testing-library/react";
import EmbedPage from "./EmbedPage";
import { renderWithProviders } from "../test/helpers";

describe("EmbedPage", () => {
  it("renders the embed page", () => {
    renderWithProviders(<EmbedPage />);
    expect(screen.getByText("Embed PitchCraft Widget")).toBeInTheDocument();
    expect(screen.getByText("Button Embed Code")).toBeInTheDocument();
    expect(screen.getByText("iFrame Embed Code")).toBeInTheDocument();
  });
});

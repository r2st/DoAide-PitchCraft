import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
import { ThemeProvider } from "../hooks/useTheme";
import { PageTitleProvider } from "../hooks/usePageTitle";

function renderAtRoute(route) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>
        <PageTitleProvider>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </PageTitleProvider>
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe("BlogPostPage", () => {
  it("renders a blog post", () => {
    renderAtRoute("/blog/how-to-create-winning-pitch-deck");
    expect(screen.getByText(/Winning Pitch Deck in 2024/i)).toBeInTheDocument();
  });

  it("shows 404 for unknown slug", () => {
    renderAtRoute("/blog/nonexistent");
    expect(screen.getByText("Post not found")).toBeInTheDocument();
  });
});

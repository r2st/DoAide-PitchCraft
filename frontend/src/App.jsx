import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Shell from "./components/Shell";
import { SkeletonPanel } from "./components/Skeleton";
import { useAuth } from "./hooks/useAuth";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import CheckerPage from "./pages/CheckerPage";
import DashboardPage from "./pages/DashboardPage";
import EmbedPage from "./pages/EmbedPage";
import GeneratorPage from "./pages/GeneratorPage";
import LandingPage from "./pages/LandingPage";
import ModelPage from "./pages/ModelPage";
import PricingPage from "./pages/PricingPage";
import SitemapPage from "./pages/SitemapPage";
import ValuationPage from "./pages/ValuationPage";

function Protected({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <SkeletonPanel lines={5} label="Checking your session" />
      </div>
    );
  }
  if (!user) return <Navigate to="/" replace />;
  return (
    <Shell>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Shell>
  );
}

function Home() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <SkeletonPanel lines={5} label="Checking your session" />
      </div>
    );
  }
  if (!user) return <LandingPage />;
  return (
    <Shell>
      <ErrorBoundary>
        <DashboardPage />
      </ErrorBoundary>
    </Shell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />

      {/* Free tools — no login required */}
      <Route path="/valuation" element={<ValuationPage />} />
      <Route path="/generator" element={<GeneratorPage />} />
      <Route path="/model" element={<ModelPage />} />
      <Route path="/checker" element={<CheckerPage />} />

      {/* SEO & content pages */}
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/embed" element={<EmbedPage />} />
      <Route path="/sitemap" element={<SitemapPage />} />

      {/* Protected app routes */}
      <Route path="/dashboard" element={<Protected><DashboardPage /></Protected>} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

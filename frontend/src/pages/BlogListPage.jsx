import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { usePageTitle } from "../hooks/usePageTitle";

const POSTS = [
  {
    slug: "how-to-create-winning-pitch-deck",
    title: "How to Create a Winning Pitch Deck in 2024",
    excerpt: "Learn the 12 essential slides every investor expects and how to craft a compelling narrative that gets you funded.",
    date: "2024-11-15",
    readTime: "8 min read",
  },
  {
    slug: "startup-valuation-methods-explained",
    title: "Startup Valuation Methods Explained: Which One Is Right for You?",
    excerpt: "From revenue multiples to DCF analysis — understand the valuation methods VCs use and how to pick the right one for your stage.",
    date: "2024-11-10",
    readTime: "6 min read",
  },
  {
    slug: "financial-model-first-time-founders",
    title: "Building Your First Financial Model: A Guide for First-Time Founders",
    excerpt: "Stop guessing your numbers. Build a credible 3-year financial model that investors will actually believe.",
    date: "2024-11-05",
    readTime: "7 min read",
  },
];

export default function BlogListPage() {
  usePageTitle("Blog");

  return (
    <div className="min-h-screen bg-canvas">
      <header className="flex items-center max-w-5xl w-full mx-auto px-5 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
            <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--brand)" />
            <circle cx="14" cy="16" r="3" fill="var(--brand-text)" />
            <circle cx="26" cy="16" r="3" fill="var(--brand-text)" />
            <path d="M12 26 Q20 32 28 26" stroke="var(--brand-text)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <span className="font-display text-xl tracking-tight">Pitch<em className="text-brand">Craft</em></span>
        </Link>
        <div className="ml-auto"><ThemeToggle /></div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-8">
        <h1 className="font-display text-3xl mb-8">PitchCraft Blog</h1>
        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="panel block group hover:border-brand transition-colors">
              <h2 className="font-semibold text-lg text-ink-strong group-hover:text-brand transition-colors mb-2">{post.title}</h2>
              <p className="text-sm text-ink-soft mb-3">{post.excerpt}</p>
              <div className="flex gap-4 text-xs text-ink-muted">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export { POSTS };

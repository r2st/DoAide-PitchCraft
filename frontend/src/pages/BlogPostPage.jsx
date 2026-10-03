import { Link, useParams } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { usePageTitle } from "../hooks/usePageTitle";

const CONTENT = {
  "how-to-create-winning-pitch-deck": {
    title: "How to Create a Winning Pitch Deck in 2024",
    date: "2024-11-15",
    body: [
      { type: "p", text: "A great pitch deck is the difference between getting funded and getting ghosted. After analyzing hundreds of successful startup decks, we've distilled the essential elements every investor expects to see." },
      { type: "h2", text: "The 12 Essential Slides" },
      { type: "p", text: "1. **Title Slide** — Company name, tagline, and your contact info. Keep it clean and memorable." },
      { type: "p", text: "2. **Problem** — What pain point exists? Use data and real stories to make it visceral." },
      { type: "p", text: "3. **Solution** — How does your product solve this problem? Show, don't tell." },
      { type: "p", text: "4. **Market Size** — TAM, SAM, SOM. Investors need to see the opportunity is big enough." },
      { type: "p", text: "5. **Business Model** — How do you make money? Be specific about pricing and unit economics." },
      { type: "p", text: "6. **Traction** — Users, revenue, growth rate, partnerships. This is your proof." },
      { type: "p", text: "7. **Go-to-Market** — How will you acquire customers? What channels work?" },
      { type: "p", text: "8. **Competition** — Show you understand the landscape. Position yourself clearly." },
      { type: "p", text: "9. **Team** — Why is YOUR team the one to build this? Relevant experience matters." },
      { type: "p", text: "10. **Financials** — 3-year projections. Revenue, costs, break-even." },
      { type: "p", text: "11. **The Ask** — How much are you raising? How will you use the funds?" },
      { type: "p", text: "12. **Thank You** — Contact info and a memorable closing." },
      { type: "h2", text: "Pro Tips" },
      { type: "p", text: "Keep it under 15 slides. Use visuals over text. Tell a story, not a report. Practice your delivery until it feels natural." },
      { type: "cta", text: "Generate your pitch deck outline now", to: "/generator" },
    ],
  },
  "startup-valuation-methods-explained": {
    title: "Startup Valuation Methods Explained: Which One Is Right for You?",
    date: "2024-11-10",
    body: [
      { type: "p", text: "Valuation is one of the most debated topics in startup fundraising. Understanding how VCs value your company gives you leverage in negotiations." },
      { type: "h2", text: "Revenue Multiples" },
      { type: "p", text: "The most common method for startups with revenue. Your valuation = Annual Revenue × Industry Multiple. SaaS companies typically get 8-15x, while e-commerce gets 2-5x. Growth rate significantly impacts the multiple." },
      { type: "h2", text: "Comparable Transactions" },
      { type: "p", text: "Look at what similar companies raised at. If a competitor with similar metrics raised at $20M, that's a strong benchmark for your valuation." },
      { type: "h2", text: "DCF Analysis" },
      { type: "p", text: "Discounted Cash Flow works for later-stage startups with predictable revenue. It values your company based on projected future cash flows, discounted to present value." },
      { type: "h2", text: "Which to Use?" },
      { type: "p", text: "Pre-revenue? Focus on comparables and market size. Early revenue? Revenue multiples are your best friend. Growing fast? The multiple adjusts upward based on growth rate." },
      { type: "cta", text: "Calculate your valuation now", to: "/valuation" },
    ],
  },
  "financial-model-first-time-founders": {
    title: "Building Your First Financial Model: A Guide for First-Time Founders",
    date: "2024-11-05",
    body: [
      { type: "p", text: "Every investor asks for a financial model. It doesn't need to be perfect — it needs to be thoughtful, defensible, and show you understand your business." },
      { type: "h2", text: "Start with Revenue" },
      { type: "p", text: "Bottom-up is better than top-down. Instead of 'we'll capture 1% of a $10B market,' start with: how many customers can you acquire per month, at what price, with what growth rate?" },
      { type: "h2", text: "Model Your Costs" },
      { type: "p", text: "Break costs into COGS (cost of goods sold, scales with revenue) and OpEx (operating expenses like rent, tools, marketing). Don't forget payroll — it's usually your biggest expense." },
      { type: "h2", text: "Project 36 Months" },
      { type: "p", text: "Three years is the standard. Month-by-month for Year 1, quarterly for Years 2-3. Show a clear path to profitability or explain why you're investing in growth instead." },
      { type: "h2", text: "Key Metrics to Track" },
      { type: "p", text: "Gross margin, burn rate, runway, CAC (customer acquisition cost), LTV (lifetime value), and break-even month. These tell investors whether your business model works." },
      { type: "cta", text: "Build your financial model now", to: "/model" },
    ],
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = CONTENT[slug];
  usePageTitle(post?.title || "Post Not Found");

  if (!post) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Post not found</h1>
          <Link to="/blog" className="text-brand hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <header className="flex items-center max-w-3xl w-full mx-auto px-5 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
            <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--brand)" />
            <circle cx="14" cy="16" r="3" fill="var(--brand-text)" />
            <circle cx="26" cy="16" r="3" fill="var(--brand-text)" />
            <path d="M12 26 Q20 32 28 26" stroke="var(--brand-text)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <span className="font-display text-xl tracking-tight">Pitch<em className="text-brand">Craft</em></span>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <Link to="/blog" className="text-sm text-ink-soft hover:text-brand">← Blog</Link>
          <ThemeToggle />
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 py-8">
        <h1 className="font-display text-3xl mb-2">{post.title}</h1>
        <p className="text-sm text-ink-muted mb-8">{post.date}</p>
        <div className="space-y-4">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="font-display text-2xl mt-8 mb-2">{block.text}</h2>;
            if (block.type === "cta") return (
              <div key={i} className="panel text-center py-6 mt-8">
                <Link to={block.to} className="btn btn-primary text-base px-8">{block.text}</Link>
              </div>
            );
            return <p key={i} className="text-ink-soft leading-relaxed">{block.text}</p>;
          })}
        </div>
      </article>
    </div>
  );
}

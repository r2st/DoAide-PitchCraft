import { Link, useParams } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { usePageTitle } from "../hooks/usePageTitle";

const CONTENT = {
  "perfect-elevator-pitch-formula": {
    title: "The Perfect Elevator Pitch: A Step-by-Step Formula for Founders",
    date: "2024-12-01",
    body: [
      { type: "p", text: "You have 30 seconds in an elevator with a potential investor. What do you say? The elevator pitch is the most important communication tool in a founder's arsenal, yet most founders stumble through it. Here's a proven formula to craft one that sticks." },
      { type: "h2", text: "The 4-Part Formula" },
      { type: "p", text: "Every great elevator pitch follows this structure: Hook, Problem, Solution, Ask. The hook grabs attention with a surprising fact or bold claim. The problem makes the investor nod in recognition. The solution shows your unique approach. The ask tells them what you want." },
      { type: "h2", text: "The 30-Second Version" },
      { type: "p", text: "Your shortest pitch needs just three elements: what you do, who you do it for, and why it matters. Example: 'We help SaaS companies reduce churn by 40% using predictive AI. We already have 50 paying customers and we're growing 20% month over month.' That's it — clear, specific, and memorable." },
      { type: "h2", text: "The 60-Second Version" },
      { type: "p", text: "With a full minute, you add context. Start with the problem: 'Every SaaS company loses 5-7% of customers monthly, costing them millions.' Then your solution: 'Our AI platform predicts which customers will churn 30 days before they do, giving success teams time to intervene.' Add traction: '50 customers, $500K ARR, and 20% MoM growth.' Close with the ask: 'We're raising $2M to scale our sales team.'" },
      { type: "h2", text: "The 90-Second Version" },
      { type: "p", text: "The extended pitch adds your competitive advantage and team credentials. After covering the core story, add: 'Unlike generic analytics tools, we integrate directly into the CRM workflow so success teams act on predictions without switching tools. Our founding team built the churn prediction engine at Salesforce, and our advisor is the former VP of Customer Success at HubSpot.'" },
      { type: "h2", text: "Common Mistakes to Avoid" },
      { type: "p", text: "Don't start with your company name — nobody cares until they care about your problem. Don't use jargon or buzzwords like 'revolutionary' or 'disruptive.' Don't try to explain your entire business — the pitch is a trailer, not the movie. And never, ever read from a script. Practice until it sounds natural." },
      { type: "h2", text: "Practice Makes Perfect" },
      { type: "p", text: "Record yourself delivering your pitch. Time it. Watch it back. Does it feel natural? Would you want to hear more? Practice with friends, co-founders, and strangers. The best pitches sound effortless because they've been rehearsed dozens of times." },
      { type: "cta", text: "Generate your elevator pitch now", to: "/tools/elevator-pitch-generator" },
    ],
  },
  "top-investor-questions-startup-founders": {
    title: "Top 20 Investor Questions Every Startup Founder Must Prepare For",
    date: "2024-12-05",
    body: [
      { type: "p", text: "Walking into an investor meeting unprepared is like showing up to a job interview without knowing the company. VCs ask pointed questions to test your understanding of your business, market, and strategy. Here are the 20 questions you must be ready for." },
      { type: "h2", text: "Market & Problem Questions" },
      { type: "p", text: "1. **Why now?** — What has changed in the market that makes this the right time? Investors want to know you're riding a wave, not creating one. 2. **How big is the market?** — Use TAM/SAM/SOM, but bottom-up sizing is more credible. 3. **Who are your customers?** — Be specific. 'Everyone' is not a target market. 4. **What happens if you don't solve this problem?** — Show the cost of inaction." },
      { type: "h2", text: "Product & Competition Questions" },
      { type: "p", text: "5. **What's your moat?** — Network effects, proprietary data, switching costs, or regulatory advantages. 'We'll move faster' is not a moat. 6. **Who are your competitors?** — Never say 'we have no competition.' Every startup competes with the status quo. 7. **Why can't Google/Amazon build this?** — Show why incumbents are poorly positioned. 8. **What's your unfair advantage?** — Domain expertise, key relationships, or proprietary technology." },
      { type: "h2", text: "Business Model Questions" },
      { type: "p", text: "9. **What are your unit economics?** — Know your CAC, LTV, payback period, and gross margins cold. 10. **How do you acquire customers?** — Show a repeatable, scalable acquisition strategy. 11. **What's your pricing strategy?** — Explain why your pricing captures value. 12. **What does your sales cycle look like?** — Length, decision makers, and close rate." },
      { type: "h2", text: "Traction & Financials Questions" },
      { type: "p", text: "13. **What's your current traction?** — Users, revenue, growth rate. Be honest about where you are. 14. **What are your key metrics?** — Know which 3-5 metrics drive your business. 15. **What's your burn rate and runway?** — Investors need to know when you'll need more money. 16. **What are your financial projections?** — 3-year projections with defensible assumptions." },
      { type: "h2", text: "Team & Strategy Questions" },
      { type: "p", text: "17. **Why are you the right team?** — Relevant experience, domain expertise, and complementary skills. 18. **What's your biggest risk?** — Self-awareness is strength. Name the risk and your mitigation plan. 19. **How will you use the funds?** — Be specific: hiring, product, sales, marketing. 20. **What milestones will you hit before the next raise?** — Show a clear path to your Series A or profitability." },
      { type: "h2", text: "How to Prepare" },
      { type: "p", text: "Write out answers to all 20 questions. Practice with your co-founder. Do mock pitches with advisor. Record yourself and review. The goal isn't to memorize answers — it's to internalize your story so deeply that no question catches you off guard." },
      { type: "cta", text: "Practice with AI-generated Q&A", to: "/tools/investor-qa-prep" },
    ],
  },
  "pitch-deck-mistakes-to-avoid": {
    title: "7 Pitch Deck Mistakes That Kill Your Fundraising Chances",
    date: "2024-12-10",
    body: [
      { type: "p", text: "After reviewing thousands of pitch decks, investors can spot the red flags in seconds. These seven mistakes are the most common reasons founders get rejected — and they're all fixable." },
      { type: "h2", text: "1. Leading with the Solution Instead of the Problem" },
      { type: "p", text: "Most founders are so excited about what they've built that they jump straight into the product. But investors need to feel the pain first. Spend your first two slides making the problem so vivid that the investor is already thinking about solutions before you present yours. Use data, customer quotes, or a personal story to make it real." },
      { type: "h2", text: "2. Claiming a $100B TAM Without Showing Your Math" },
      { type: "p", text: "Every startup claims a massive market. Top-down numbers ('the global CRM market is $100B') tell investors nothing about your actual opportunity. Instead, calculate bottom-up: how many potential customers exist, what would they pay, and what's your realistic capture rate? A credible $500M SAM beats a hand-wavy $50B TAM." },
      { type: "h2", text: "3. No Clear Business Model Slide" },
      { type: "p", text: "If investors can't figure out how you make money within 30 seconds, your deck has a problem. Show your pricing tiers, average contract value, and unit economics. If you're pre-revenue, show your pricing hypothesis and early validation. 'We'll figure out monetization later' is a dealbreaker." },
      { type: "h2", text: "4. Ignoring the Competition Slide" },
      { type: "p", text: "Saying 'we have no competitors' tells investors you haven't done your homework. Every startup competes — if not with direct competitors, then with the status quo, spreadsheets, or manual processes. Use a competitive matrix to position yourself clearly. Show where you win and be honest about where competitors are stronger." },
      { type: "h2", text: "5. Too Many Slides, Too Much Text" },
      { type: "p", text: "If your deck has 30 slides with paragraphs of text, investors will tune out. The sweet spot is 10-15 slides with minimal text — use visuals, charts, and bullet points. Your deck is a conversation starter, not a white paper. If you need to explain complex details, put them in an appendix." },
      { type: "h2", text: "6. Weak or Missing Traction Slide" },
      { type: "p", text: "Traction is the single most convincing element of any pitch. Even early-stage startups have something: waitlist signups, LOIs, pilot customers, user feedback, or growing engagement metrics. If you're pre-launch, show the velocity of your progress: 'Built MVP in 8 weeks, signed 3 pilot customers in 2 weeks' is traction." },
      { type: "h2", text: "7. The Ask Without a Plan" },
      { type: "p", text: "Asking for '$2M' without explaining how you'll deploy it and what milestones it enables is like asking someone for gas money without saying where you're driving. Break down your use of funds: 40% engineering, 30% sales, 20% marketing, 10% operations. Then show what metrics you'll hit: 'With this round, we'll reach $1M ARR and 100 customers in 18 months.'" },
      { type: "h2", text: "The Fix" },
      { type: "p", text: "Go through your deck slide by slide and ask: 'Does this slide earn its place?' Every slide should either build the narrative, prove traction, or make the ask. If it doesn't do one of these three things, cut it." },
      { type: "cta", text: "Create your pitch deck outline", to: "/tools/pitch-deck-outline" },
    ],
  },
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

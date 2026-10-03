import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../hooks/useAuth";

export default function Shell({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <header className="flex items-center max-w-7xl w-full mx-auto px-5 py-4 border-b border-line">
        <Link to="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
            <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--brand)" />
            <circle cx="14" cy="16" r="3" fill="var(--brand-text)" />
            <circle cx="26" cy="16" r="3" fill="var(--brand-text)" />
            <path d="M12 26 Q20 32 28 26" stroke="var(--brand-text)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <span className="font-display text-xl tracking-tight">
            Pitch<em className="text-brand">Craft</em>
          </span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          {user && <span className="text-sm text-ink-soft hidden sm:inline">{user.name}</span>}
          <ThemeToggle />
          {user && (
            <button onClick={handleLogout} className="btn btn-ghost text-sm">
              Sign out
            </button>
          )}
        </nav>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-5 py-6">
        {children}
      </main>
    </div>
  );
}

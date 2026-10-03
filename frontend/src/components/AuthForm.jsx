import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthForm() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register({ email, password, name });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel max-w-sm mx-auto space-y-4">
      <h2 className="text-xl font-bold text-ink-strong">
        {mode === "login" ? "Sign In" : "Create Account"}
      </h2>
      {error && <p className="text-bad text-sm">{error}</p>}
      {mode === "register" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        required
        minLength={6}
      />
      <button type="submit" disabled={busy} className="btn btn-primary w-full">
        {busy ? <span className="spinner" /> : mode === "login" ? "Sign In" : "Sign Up"}
      </button>
      <p className="text-center text-sm text-ink-soft">
        {mode === "login" ? "No account? " : "Have an account? "}
        <button
          type="button"
          onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}
          className="text-brand hover:underline"
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </p>
    </form>
  );
}

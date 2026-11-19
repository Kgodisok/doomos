import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, LoaderCircle, CircleAlert } from "lucide-react";

const inputCls =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-accent";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);
    // Placeholder — Supabase auth will be integrated here later.
    setTimeout(() => {
      setLoading(false);
      setError(
        "Accounts are coming soon. Authentication will be enabled with our full launch.",
      );
    }, 900);
  };

  return (
    <div className="bg-mist">
      <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-16">
        <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-lg font-extrabold text-accent">
              D
            </span>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
              {mode === "login" ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="mt-2 text-sm text-slate">
              {mode === "login"
                ? "Log in to manage your listings and save favourites."
                : "Join DoomOS to advertise vehicles and track listings."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {error && (
              <p className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-xs font-medium text-red-700">
                <CircleAlert size={14} /> {error}
              </p>
            )}
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                Email
              </span>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  type="email"
                  className={`${inputCls} pl-9`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                Password
              </span>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  type="password"
                  className={`${inputCls} pl-9`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:bg-charcoal disabled:opacity-60"
            >
              {loading && <LoaderCircle size={16} className="animate-spin" />}
              {mode === "login" ? "Log In" : "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate">
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => {
                setMode(mode === "login" ? "register" : "login");
                setError("");
              }}
              className="font-semibold text-accent-dark hover:underline"
            >
              {mode === "login" ? "Register" : "Log In"}
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate">
          <Link to="/" className="font-semibold hover:text-ink">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

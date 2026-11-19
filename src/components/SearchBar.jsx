import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ className = "" }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      query.trim()
        ? `/browse?q=${encodeURIComponent(query.trim())}`
        : "/browse",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-2xl items-center gap-2 rounded-2xl bg-white p-2 shadow-lift ${className}`}
    >
      <Search size={20} className="ml-3 shrink-0 text-slate" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by make or model — e.g. Toyota Hilux, VW Golf…"
        className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-slate/70"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:bg-accent-dark hover:text-white"
      >
        Search
      </button>
    </form>
  );
}

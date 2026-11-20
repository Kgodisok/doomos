import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <Home size={56} className="mx-auto text-accent" />
      <h1 className="mt-4 text-4xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-2 text-slate">
        The page you're looking for doesn't exist — but your next home might.
      </p>
      <Link
        to="/properties"
        className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-dark"
      >
        Browse Properties
      </Link>
    </div>
  );
}

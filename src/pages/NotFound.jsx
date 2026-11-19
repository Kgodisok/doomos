import { Link } from "react-router-dom";
import { CarFront } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-accent">
        <CarFront size={30} />
      </span>
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-ink">
        404
      </h1>
      <p className="mt-3 text-sm text-slate">
        This road leads nowhere. The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:bg-accent-dark hover:text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}

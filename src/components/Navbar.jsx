import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Home } from "lucide-react";
import { AGENT } from "../data/properties";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/list-your-property", label: "List Your Property" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-accent">
            <Home size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-ink">
              Maxwell Maphakela
            </span>
            <span className="block text-[11px] font-medium text-slate">
              Property Practitioner · Pretoria
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-ink ${
                  isActive ? "text-accent" : "text-slate"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={AGENT.phoneLink}
            className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-charcoal"
          >
            <Phone size={15} /> {AGENT.phone}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive ? "bg-accent-soft text-accent" : "text-charcoal"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={AGENT.phoneLink}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Phone size={15} /> Call {AGENT.name.split(" ")[0]}: {AGENT.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

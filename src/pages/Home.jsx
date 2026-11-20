import { Link } from "react-router-dom";
import {
  Phone, Mail, MessageCircle, ShieldCheck, KeyRound, Handshake,
  Building2, Home as HomeIcon, Hotel, ChevronRight,
} from "lucide-react";
import { PROPERTIES, AGENT } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";

const heroImg =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";

const services = [
  {
    icon: KeyRound,
    title: "Rentals",
    text: "Apartments, flats and garden cottages to rent across Pretoria — from student-friendly units in Hatfield to family homes in the suburbs.",
  },
  {
    icon: HomeIcon,
    title: "Sales",
    text: "Thinking of buying? I'll find freehold houses, cluster homes and townhouses that match your budget and lifestyle.",
  },
  {
    icon: Handshake,
    title: "Listings for Owners",
    text: "Landlords and sellers: I market your property, screen tenants and handle viewings so you don't have to.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    text: "Honest advice on pricing, leases and the buying process from a registered property practitioner.",
  },
];

const typeCards = [
  { icon: Building2, label: "Apartments & Flats", to: "/properties?type=Apartment" },
  { icon: HomeIcon, label: "Family Houses", to: "/properties?type=House" },
  { icon: Hotel, label: "Townhouses & Cottages", to: "/properties?type=Townhouse" },
];

export default function Home() {
  const featured = PROPERTIES.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img src={heroImg} alt="Home in Pretoria" className="h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl text-white">
              <p className="mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide">
                Pretoria · Gauteng
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Find your next home in Pretoria with{" "}
                <span className="text-accent">Maxwell Maphakela</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate">
                Professional Property Practitioner helping families, professionals
                and students secure quality apartments and houses to rent or buy.
              </p>
              <div className="mt-8 max-w-3xl">
                <SearchBar />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={AGENT.phoneLink}
                  className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-dark"
                >
                  <Phone size={16} /> Call {AGENT.phone}
                </a>
                <a
                  href={AGENT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
                >
                  <MessageCircle size={16} /> WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {typeCards.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className="group flex items-center justify-between rounded-2xl border border-line bg-mist p-6 transition hover:border-accent hover:bg-accent-soft"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
                  <Icon size={22} />
                </span>
                <span className="text-lg font-bold text-ink">{label}</span>
              </div>
              <ChevronRight className="text-slate transition group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-ink">Featured Properties</h2>
              <p className="mt-1 text-slate">Handpicked homes available right now in Pretoria.</p>
            </div>
            <Link to="/properties" className="hidden text-sm font-bold text-accent hover:underline sm:block">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <Link to="/properties" className="mt-8 block text-center text-sm font-bold text-accent hover:underline sm:hidden">
            View all properties →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-ink">How I Help You</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-slate">
          From the first viewing to the signed lease or offer — I'm with you every step.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-3xl font-extrabold">
              Ready to find your home? <span className="text-accent">Let's talk.</span>
            </h2>
            <p className="mt-2 text-slate">
              Call, WhatsApp or email Maxwell Maphakela today — viewings arranged at your convenience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={AGENT.phoneLink} className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold hover:bg-accent-dark">
              <Phone size={16} /> {AGENT.phone}
            </a>
            <a href={AGENT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-bold hover:bg-green-700">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={AGENT.emailLink} className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-bold ring-1 ring-white/20 hover:bg-white/20">
              <Mail size={16} /> Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

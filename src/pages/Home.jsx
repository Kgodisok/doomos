import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  ArrowRight,
  Users,
  ListPlus,
  SearchCheck,
  Megaphone,
} from "lucide-react";
import { getVehicles, BRANDS } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import SearchBar from "../components/SearchBar";
import BrandStrip from "../components/BrandStrip";
import { Spinner } from "../components/Spinner";
import { CarFront } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2000&q=80";

function SectionHeading({ eyebrow, title, subtitle, link, linkLabel }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-slate">{subtitle}</p>
        )}
      </div>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent-dark"
        >
          {linkLabel} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehicles().then((data) => {
      setVehicles(data);
      setLoading(false);
    });
  }, []);

  const featured = vehicles.filter((v) => v.featured).slice(0, 6);
  const recent = [...vehicles].slice(-6).reverse();

  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <BadgeCheck size={14} className="text-accent" /> South Africa's
            newest car marketplace
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Next Car on <span className="text-accent">DoomOS.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Every day, great cars are advertised in WhatsApp groups and
            community pages — and disappear just as fast. DoomOS brings them all
            together in one trusted, easy-to-search marketplace.
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-xs font-medium text-white/60">
            <span>✓ Verified sellers</span>
            <span>✓ Direct WhatsApp contact</span>
            <span>✓ No hidden listing fees</span>
          </div>
        </div>
      </section>

      {/* ---------------- Featured ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Handpicked"
          title="Featured Vehicles"
          subtitle="Standout listings from sellers across South Africa."
          link="/browse"
          linkLabel="View all"
        />
        {loading ? (
          <Spinner label="Loading featured vehicles…" />
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        )}
      </section>

      {/* ---------------- Brands ---------------- */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Popular makes"
            title="Browse by Brand"
            subtitle="Jump straight into listings from South Africa's most popular manufacturers."
          />
          <div className="mt-10">
            <BrandStrip brands={BRANDS} />
          </div>
        </div>
      </section>

      {/* ---------------- Recently added ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fresh listings"
          title="Recently Added"
          subtitle="The latest vehicles advertised on DoomOS."
          link="/browse?sort=newest"
          linkLabel="See more"
        />
        {loading ? (
          <Spinner label="Loading latest listings…" />
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        )}
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Simple by design
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How DoomOS Works
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: SearchCheck,
                title: "Buyers discover",
                text: "Search and filter thousands of listings by price, province, mileage and more.",
              },
              {
                icon: ListPlus,
                title: "Sellers advertise",
                text: "List your car in minutes with photos, specs and your WhatsApp number.",
              },
              {
                icon: Users,
                title: "Connect directly",
                text: "No middlemen. Buyers chat to sellers directly and deal on their own terms.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-charcoal p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <step.icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-ink px-8 py-16 text-center sm:px-16">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-ink">
            <Megaphone size={26} />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selling your car? Advertise it on DoomOS.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Reach serious buyers across South Africa. Free to list, quick to
            publish, and buyers contact you directly on WhatsApp.
          </p>
          <Link
            to="/sell"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-ink transition hover:bg-white"
          >
            <CarFront size={18} /> Advertise Your Car
          </Link>
        </div>
      </section>
    </div>
  );
}

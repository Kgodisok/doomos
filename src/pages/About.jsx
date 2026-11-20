import { Phone, Mail, MapPin, MessageCircle, Award, Users, Home as HomeIcon } from "lucide-react";
import { AGENT } from "../data/properties";

const portrait =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";

const stats = [
  { icon: HomeIcon, value: "100+", label: "Homes Matched" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Award, value: "Registered", label: "Property Practitioner" },
];

export default function About() {
  return (
    <div>
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold">
            About <span className="text-accent">Maxwell Maphakela</span>
          </h1>
          <p className="mt-3 max-w-2xl text-slate">
            Professional Property Practitioner · Pretoria, Gauteng
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img
            src={portrait}
            alt="Maxwell Maphakela"
            className="h-80 w-full rounded-2xl object-cover shadow-card"
          />
          <h2 className="mt-8 text-2xl font-extrabold text-ink">
            "Everyone deserves a decent place to call home."
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate">
            <p>
              Maxwell Maphakela is a professional property practitioner based in Pretoria,
              Gauteng. He specialises in helping people — families, young professionals,
              students and investors — find quality apartments, houses, townhouses and
              cottages to rent or buy across the city.
            </p>
            <p>
              From Menlyn and Hatfield to Montana, Garsfontein and Soshanguve, Maxwell knows
              the Pretoria property market suburb by suburb. He handles every client
              personally: honest advice, transparent pricing, proper lease paperwork and
              viewings that fit your schedule.
            </p>
            <p>
              Whether you're renting your first flat, upgrading for a growing family, or
              selling a property you've outgrown, Maxwell guides you from the first call to
              the signed agreement — and beyond.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl border border-line p-5 text-center">
                <Icon size={24} className="mx-auto text-accent" />
                <p className="mt-2 text-2xl font-extrabold text-ink">{value}</p>
                <p className="text-xs text-slate">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-mist p-6">
          <h3 className="text-lg font-bold text-ink">Contact Maxwell</h3>
          <div className="mt-4 space-y-4 text-sm">
            <a href={AGENT.phoneLink} className="flex items-center gap-3 text-charcoal hover:text-accent">
              <Phone size={17} className="text-accent" /> {AGENT.phone}
            </a>
            <a href={AGENT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-charcoal hover:text-accent">
              <MessageCircle size={17} className="text-accent" /> WhatsApp chat
            </a>
            <a href={AGENT.emailLink} className="flex items-center gap-3 break-all text-charcoal hover:text-accent">
              <Mail size={17} className="text-accent" /> {AGENT.email}
            </a>
            <p className="flex items-center gap-3 text-charcoal">
              <MapPin size={17} className="text-accent" /> Pretoria, Gauteng
            </p>
          </div>
          <a
            href={AGENT.phoneLink}
            className="mt-6 block rounded-lg bg-accent py-3 text-center text-sm font-bold text-white hover:bg-accent-dark"
          >
            Call Now
          </a>
        </aside>
      </section>
    </div>
  );
}

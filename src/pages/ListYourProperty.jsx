import { useState } from "react";
import { Home, User, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { AGENT } from "../data/properties";

export default function ListYourProperty() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    type: "House",
    listing: "To Rent",
    details: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full rounded-lg border border-line py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold text-ink">
            List Your Property
          </h1>
          <p className="mt-2 leading-relaxed text-slate">
            Are you a landlord or homeowner in Pretoria? Let Maxwell Maphakela
            market your property, find qualified tenants or buyers, and manage
            viewings for you.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Free, no-obligation property valuation and pricing advice",
              "Professional listing with photos on all major platforms",
              "Tenant and buyer screening, including credit checks",
              "Viewings arranged around your schedule",
              "Lease preparation and deposit handling done properly",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-charcoal">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-ink p-6 text-white">
            <p className="font-bold text-accent">Prefer to just call?</p>
            <p className="mt-1 text-sm text-slate">
              Maxwell is available Monday to Saturday for listings and viewings.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={AGENT.phoneLink}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-bold hover:bg-accent-dark"
              >
                {AGENT.phone}
              </a>
              <a
                href={AGENT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 size={56} className="mx-auto text-accent" />
              <h2 className="mt-4 text-2xl font-extrabold text-ink">
                Thank you, {form.name.split(" ")[0]}!
              </h2>
              <p className="mt-2 text-slate">
                Your property enquiry has been captured. Maxwell will contact
                you on <strong>{form.phone}</strong> to arrange a valuation.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-bold text-accent hover:underline"
              >
                List another property
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h2 className="text-xl font-bold text-ink">Property Details</h2>

              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className={inputCls}
                />
              </div>
              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Contact number"
                  className={inputCls}
                />
              </div>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Email (optional)"
                  className={inputCls}
                />
              </div>
              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate"
                />
                <input
                  required
                  value={form.suburb}
                  onChange={update("suburb")}
                  placeholder="Suburb, e.g. Menlyn"
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.listing}
                  onChange={update("listing")}
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-accent"
                >
                  <option>To Rent</option>
                  <option>For Sale</option>
                </select>
                <select
                  value={form.type}
                  onChange={update("type")}
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-accent"
                >
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Cottage</option>
                  <option>Cluster</option>
                </select>
              </div>

              <textarea
                value={form.details}
                onChange={update("details")}
                rows={4}
                placeholder="Tell us about the property — bedrooms, bathrooms, asking price…"
                className="w-full rounded-lg border border-line p-3 text-sm outline-none focus:border-accent"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-white transition hover:bg-accent-dark"
              >
                <Home size={16} /> Submit Property
              </button>
              <p className="text-center text-xs text-slate">
                Your details are only shared with Maxwell Maphakela.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

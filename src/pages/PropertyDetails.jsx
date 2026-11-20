import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Car,
  Maximize,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { PROPERTIES, AGENT, formatter } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!property) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-extrabold text-ink">Property not found</h1>
        <Link
          to="/properties"
          className="mt-4 inline-block font-semibold text-accent hover:underline"
        >
          ← Back to all properties
        </Link>
      </div>
    );
  }

  const related = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);
  const priceLabel =
    formatter.format(property.price) +
    (property.listing === "To Rent" ? " / month" : "");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        to="/properties"
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate hover:text-accent"
      >
        <ArrowLeft size={15} /> Back to properties
      </Link>

      {/* Gallery */}
      <div className="mt-4 overflow-hidden rounded-2xl">
        <img
          src={property.gallery[activeImg]}
          alt={property.title}
          className="h-[380px] w-full object-cover sm:h-[480px]"
        />
        <div className="mt-3 flex gap-3">
          {property.gallery.map((g, i) => (
            <button
              key={g}
              onClick={() => setActiveImg(i)}
              className={`h-20 w-28 overflow-hidden rounded-lg ring-2 transition ${
                i === activeImg
                  ? "ring-accent"
                  : "ring-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={g} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        {/* Main info */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
              {property.listing}
            </span>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-dark">
              {property.type}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-ink">
            {property.title}
          </h1>
          <p className="mt-1 flex items-center gap-1 text-slate">
            <MapPin size={16} /> {property.suburb}, {property.city}, Gauteng
          </p>
          <p className="mt-4 text-3xl font-extrabold text-accent">
            {priceLabel}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-line p-5 sm:grid-cols-4">
            {[
              { icon: BedDouble, label: "Bedrooms", value: property.beds },
              { icon: Bath, label: "Bathrooms", value: property.baths },
              { icon: Car, label: "Parking", value: property.parking },
              {
                icon: Maximize,
                label: "Floor Size",
                value: `${property.size} m²`,
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={22} className="text-accent" />
                <div>
                  <p className="text-sm font-bold text-ink">{value}</p>
                  <p className="text-xs text-slate">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-xl font-bold text-ink">
            About this property
          </h2>
          <p className="mt-2 leading-relaxed text-slate">
            {property.description}
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">Features</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {property.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-charcoal"
              >
                <CheckCircle2 size={16} className="text-accent" /> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Agent sidebar */}
        <aside className="h-fit rounded-2xl border border-line bg-mist p-6 lg:sticky lg:top-24">
          <h3 className="text-lg font-bold text-ink">Enquire Now</h3>
          <p className="mt-1 text-sm text-slate">
            Contact {AGENT.name} — {AGENT.title.replace(" — ", ", ")}.
          </p>

          <div className="mt-5 space-y-3">
            <a
              href={AGENT.phoneLink}
              className="flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-bold text-white hover:bg-charcoal"
            >
              <Phone size={16} /> Call {AGENT.phone}
            </a>
            <a
              href={AGENT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-bold text-white hover:bg-green-700"
            >
              <MessageCircle size={16} /> WhatsApp About This Property
            </a>
            <a
              href={`${AGENT.emailLink}?subject=Enquiry: ${encodeURIComponent(property.title)}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-3 text-sm font-bold text-ink hover:border-accent"
            >
              <Mail size={16} /> Send Email Enquiry
            </a>
          </div>

          <p className="mt-5 rounded-lg bg-accent-soft p-3 text-xs leading-relaxed text-accent-dark">
            <strong>Deposits & leases:</strong> Rental applications require a
            refundable deposit, first month's rent and a credit check.{" "}
            {AGENT.name.split(" ")[0]} will guide you through every step.
          </p>
        </aside>
      </div>

      {/* Related */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-ink">You may also like</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

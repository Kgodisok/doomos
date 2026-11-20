import { Link } from "react-router-dom";
import { BedDouble, Bath, Car, Maximize, MapPin } from "lucide-react";
import { formatPrice } from "../data/properties";

export default function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-white">
          {property.listing}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          {formatPrice(property.price)}
          {property.listing === "To Rent" ? " /pm" : ""}
        </span>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-1 text-base font-bold text-ink">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate">
          <MapPin size={14} /> {property.suburb}, {property.city}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-line pt-4 text-sm text-charcoal">
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} className="text-accent" /> {property.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-accent" /> {property.baths} Bath
          </span>
          <span className="flex items-center gap-1.5">
            <Car size={16} className="text-accent" /> {property.parking} Parking
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={16} className="text-accent" /> {property.size}m²
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate">
            {property.type}
          </span>
          <span className="text-sm font-semibold text-accent group-hover:underline">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}

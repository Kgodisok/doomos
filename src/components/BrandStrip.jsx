import { Link } from "react-router-dom";

export default function BrandStrip({ brands }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
      {brands.map((brand) => (
        <Link
          key={brand.name}
          to={`/browse?q=${encodeURIComponent(brand.name)}`}
          className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-xs font-extrabold tracking-wide text-accent">
            {brand.logo}
          </span>
          <span className="text-sm font-semibold text-ink">{brand.name}</span>
        </Link>
      ))}
    </div>
  );
}

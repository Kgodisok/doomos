import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  PROPERTIES,
  PROPERTY_TYPES,
  LISTING_TYPES,
  AGENT,
} from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import { Phone } from "lucide-react";

export default function BrowseProperties() {
  const [params, setParams] = useSearchParams();

  const query = params.get("q") || "";
  const listing = params.get("listing") || "All";
  const type = params.get("type") || "All";

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === "All" || !value) next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  const results = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchQ =
        !query ||
        `${p.suburb} ${p.city} ${p.title} ${p.type}`
          .toLowerCase()
          .includes(query.toLowerCase());
      const matchListing = listing === "All" || p.listing === listing;
      const matchType = type === "All" || p.type === type;
      return matchQ && matchListing && matchType;
    });
  }, [query, listing, type]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-ink">Browse Properties</h1>
        <p className="mt-1 text-slate">
          {results.length} {results.length === 1 ? "property" : "properties"}{" "}
          available in Pretoria, Gauteng.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-mist p-4">
        <input
          value={query}
          onChange={(e) => setParam("q", e.target.value)}
          placeholder="Search suburb or keyword…"
          className="min-w-52 flex-1 rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <select
          value={listing}
          onChange={(e) => setParam("listing", e.target.value)}
          className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-accent"
        >
          {LISTING_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setParam("type", e.target.value)}
          className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-accent"
        >
          {PROPERTY_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {(query || listing !== "All" || type !== "All") && (
          <button
            onClick={() => setParams({})}
            className="text-sm font-semibold text-accent hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line py-20 text-center">
          <p className="text-lg font-bold text-ink">
            No properties match your search.
          </p>
          <p className="mt-2 text-slate">
            New listings come in weekly — call {AGENT.name.split(" ")[0]} on{" "}
            <a href={AGENT.phoneLink} className="font-semibold text-accent">
              {AGENT.phone}
            </a>{" "}
            and he'll find one for you.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}

      <div className="mt-12 rounded-2xl bg-ink p-8 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          Can't find what you're looking for?
        </h2>
        <p className="mt-2 text-slate">
          Many properties are never advertised online. Ask{" "}
          {AGENT.name.split(" ")[0]} about off-market listings in your area.
        </p>
        <a
          href={AGENT.phoneLink}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold hover:bg-accent-dark"
        >
          <Phone size={16} /> Call {AGENT.phone}
        </a>
      </div>
    </div>
  );
}

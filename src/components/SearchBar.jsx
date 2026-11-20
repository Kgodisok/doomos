import { useState } from "react";
import { Search, MapPin, Tag, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROPERTY_TYPES, LISTING_TYPES } from "../data/properties";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState("All");
  const [type, setType] = useState("All");

  const submit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (listing !== "All") params.set("listing", listing);
    if (type !== "All") params.set("type", type);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className="grid w-full gap-3 rounded-2xl bg-white p-4 shadow-lift sm:grid-cols-2 lg:grid-cols-4"
    >
      <div className="relative">
        <MapPin
          size={17}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Suburb, e.g. Menlyn, Hatfield"
          className="w-full rounded-lg border border-line py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent"
        />
      </div>
      <div className="relative">
        <Tag
          size={17}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate"
        />
        <select
          value={listing}
          onChange={(e) => setListing(e.target.value)}
          className="w-full appearance-none rounded-lg border border-line bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent"
        >
          {LISTING_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="relative">
        <Building2
          size={17}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full appearance-none rounded-lg border border-line bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent"
        >
          {PROPERTY_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-dark"
      >
        <Search size={16} /> Search Properties
      </button>
    </form>
  );
}

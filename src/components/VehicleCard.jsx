import { Link } from "react-router-dom";
import { Gauge, MapPin, Settings2, Fuel, ArrowRight } from "lucide-react";
import { formatPrice, formatMileage } from "../utils/format";

export default function VehicleCard({ vehicle }) {
  const {
    id,
    make,
    model,
    year,
    price,
    mileage,
    transmission,
    fuelType,
    location,
    images,
  } = vehicle;

  return (
    <Link
      to={`/vehicle/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={images[0]}
          alt={`${year} ${make} ${model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate">
              {make}
            </p>
            <h3 className="mt-0.5 line-clamp-1 text-lg font-bold text-ink">
              {model}
            </h3>
          </div>
          <p className="whitespace-nowrap text-lg font-extrabold text-accent-dark">
            {formatPrice(price)}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate">
          <span className="flex items-center gap-1.5">
            <Gauge size={14} className="text-accent-dark" />
            {formatMileage(mileage)}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 size={14} className="text-accent-dark" />
            {transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={14} className="text-accent-dark" />
            {fuelType}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-dark" />
            {location}
          </span>
        </div>

        <span className="mt-5 inline-flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-ink transition-colors group-hover:text-accent-dark">
          View Details
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Gauge, Fuel, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { formatPrice, formatMileage } from '../utils/format'

export default function VehicleCard({ vehicle }) {
  if (!vehicle) return null

  const mainImage = vehicle.images && vehicle.images.length > 0
    ? vehicle.images[0]
    : '/ford1.jpeg'

  const condition = vehicle.condition || 'Pre-Owned'

  // Condition Badge styling
  const conditionBadgeStyle = {
    'Brand New': 'bg-emerald-600 text-white border-emerald-500',
    'Demo': 'bg-blue-600 text-white border-blue-500',
    'Pre-Owned': 'bg-charcoal/80 text-white border-white/20 backdrop-blur-md',
  }[condition] || 'bg-charcoal/80 text-white border-white/20'

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-line hover:border-accent/40 shadow-card hover:shadow-lift transition-all duration-300 flex flex-col relative">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={mainImage}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src = '/ford1.jpeg'
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          {/* Condition Badge (Pre-Owned / Demo / Brand New) */}
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border shadow-sm ${conditionBadgeStyle}`}>
            {condition}
          </span>

          {/* Featured Badge */}
          {vehicle.featured && (
            <span className="bg-accent text-ink text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 border border-accent-dark/30">
              <Sparkles className="w-3 h-3 fill-ink" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Year Badge */}
        <span className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 z-10">
          {vehicle.year}
        </span>

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">{vehicle.location || `${vehicle.city}, ${vehicle.province}`}</span>
          </div>

          {/* Make and Model */}
          <h3 className="text-base font-bold text-ink group-hover:text-accent transition-colors line-clamp-1">
            {vehicle.make} {vehicle.model}
          </h3>

          {/* Price Header */}
          <div className="mt-2.5 flex items-baseline justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate block font-semibold">
                Cash Price
              </span>
              <span className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">
                {formatPrice(vehicle.price)}
              </span>
            </div>

            {/* Estimated Monthly (Estimated @ 12.5% over 72 months typical SA finance) */}
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate block font-semibold">
                Est. Finance
              </span>
              <span className="text-xs font-bold text-slate">
                ~R {Math.round((vehicle.price * 0.0215) / 10) * 10} /pm
              </span>
            </div>
          </div>

          {/* Key Specs Pills */}
          <div className="mt-4 pt-3 border-t border-line grid grid-cols-3 gap-2 text-xs text-slate">
            <div className="flex items-center gap-1.5 truncate bg-mist/60 px-2 py-1.5 rounded-lg">
              <Gauge className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="truncate font-medium">{formatMileage(vehicle.mileage)}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate bg-mist/60 px-2 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="truncate font-medium">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate bg-mist/60 px-2 py-1.5 rounded-lg">
              <Fuel className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="truncate font-medium">{vehicle.fuelType}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3 border-t border-line/60">
          <Link
            to={`/vehicle/${vehicle.id}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-mist hover:bg-charcoal hover:text-white text-charcoal font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 group-hover:bg-charcoal group-hover:text-white cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}


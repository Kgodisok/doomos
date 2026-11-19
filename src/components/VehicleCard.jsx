import { Link } from 'react-router-dom'
import { MapPin, Gauge, Fuel, ArrowRight, Sparkles } from 'lucide-react'
import { formatPrice, formatMileage } from '../utils/format'

const conditionBadgeStyle = {
  'Brand New': 'bg-emerald-600 text-white border-emerald-500',
  Demo: 'bg-blue-600 text-white border-blue-500',
  'Pre-Owned': 'bg-charcoal/80 text-white border-white/20 backdrop-blur-md',
}

export default function VehicleCard({ vehicle }) {
  if (!vehicle) return null

  const mainImage = vehicle.images?.[0]
  const condition = vehicle.condition || 'Pre-Owned'

  return (
    <Link
      to={`/vehicle/${vehicle.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={mainImage}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 z-10 flex flex-wrap items-center gap-1.5">
          <span
            className={`rounded-md border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm ${conditionBadgeStyle[condition]}`}
          >
            {condition}
          </span>
          {vehicle.featured && (
            <span className="flex items-center gap-1 rounded-md border border-accent-dark/30 bg-accent px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-sm">
              <Sparkles className="h-3 w-3 fill-ink" /> Featured
            </span>
          )}
        </div>
        <span className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-charcoal/80 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md">
          {vehicle.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-xs text-slate">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="truncate">{vehicle.location || `${vehicle.city}, ${vehicle.province}`}</span>
          </div>

          <h3 className="line-clamp-1 text-base font-bold text-ink transition-colors group-hover:text-accent-dark">
            {vehicle.make} {vehicle.model}
          </h3>

          <div className="mt-2.5 flex items-baseline justify-between gap-2">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate">
                Cash Price
              </span>
              <span className="text-xl font-black tracking-tight text-charcoal sm:text-2xl">
                {formatPrice(vehicle.price)}
              </span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate">
                Est. Finance
              </span>
              <span className="text-xs font-bold text-slate">
                ~R {Math.round((vehicle.price * 0.0215) / 10) * 10} /pm
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3 text-xs text-slate">
            <div className="flex items-center gap-1.5 truncate rounded-lg bg-mist/60 px-2 py-1.5">
              <Gauge className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="truncate font-medium">{formatMileage(vehicle.mileage)}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate rounded-lg bg-mist/60 px-2 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="truncate font-medium">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate rounded-lg bg-mist/60 px-2 py-1.5">
              <Fuel className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="truncate font-medium">{vehicle.fuelType}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-line/60 pt-3">
          <span className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-mist px-4 py-2.5 text-sm font-semibold text-charcoal transition-all duration-200 group-hover:bg-charcoal group-hover:text-white">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

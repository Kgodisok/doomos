import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, SearchX } from 'lucide-react'
import { getVehicles, PROVINCES, PROVINCE_CITIES } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import { Spinner, EmptyState } from '../components/Spinner'

const initialFilters = {
  q: '',
  minPrice: '',
  maxPrice: '',
  minYear: '',
  maxYear: '',
  minMileage: '',
  maxMileage: '',
  transmission: '',
  fuelType: '',
  province: '',
  city: '',
  sort: 'newest',
}

const inputCls =
  'w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-accent'

function FilterField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate">
        {label}
      </span>
      {children}
    </label>
  )
}

export default function BrowseCars() {
  const [searchParams] = useSearchParams()
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    ...initialFilters,
    q: searchParams.get('q') || '',
    sort: searchParams.get('sort') || 'newest',
  })

  useEffect(() => {
    setLoading(true)
    getVehicles().then((data) => {
      setVehicles(data)
      setLoading(false)
    })
  }, [])

  const set = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }))
  const reset = () => setFilters(initialFilters)

  const cities = filters.province
    ? PROVINCE_CITIES[filters.province] || []
    : Object.values(PROVINCE_CITIES).flat()

  const results = useMemo(() => {
    let list = [...vehicles]

    if (filters.q) {
      const q = filters.q.toLowerCase()
      list = list.filter(
        (v) =>
          `${v.make} ${v.model}`.toLowerCase().includes(q) ||
          v.city.toLowerCase().includes(q)
      )
    }
    if (filters.minPrice) list = list.filter((v) => v.price >= Number(filters.minPrice))
    if (filters.maxPrice) list = list.filter((v) => v.price <= Number(filters.maxPrice))
    if (filters.minYear) list = list.filter((v) => v.year >= Number(filters.minYear))
    if (filters.maxYear) list = list.filter((v) => v.year <= Number(filters.maxYear))
    if (filters.minMileage) list = list.filter((v) => v.mileage >= Number(filters.minMileage))
    if (filters.maxMileage) list = list.filter((v) => v.mileage <= Number(filters.maxMileage))
    if (filters.transmission) list = list.filter((v) => v.transmission === filters.transmission)
    if (filters.fuelType) list = list.filter((v) => v.fuelType === filters.fuelType)
    if (filters.province) list = list.filter((v) => v.province === filters.province)
    if (filters.city) list = list.filter((v) => v.city === filters.city)

    switch (filters.sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      default:
        list.sort((a, b) => b.year - a.year)
    }
    return list
  }, [vehicles, filters])

  return (
    <div className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Browse Cars</h1>
          <p className="mt-2 text-sm text-slate">
            {loading ? 'Searching listings…' : `${results.length} vehicle${results.length === 1 ? '' : 's'} found`}
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Filters sidebar */}
          <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-base font-bold text-ink">
                <SlidersHorizontal size={18} className="text-accent-dark" /> Filters
              </h2>
              <button onClick={reset} className="text-xs font-semibold text-accent-dark hover:underline">
                Reset
              </button>
            </div>

            <div className="space-y-4">
              <FilterField label="Search make / model">
                <input className={inputCls} placeholder="e.g. Toyota Hilux" value={filters.q} onChange={set('q')} />
              </FilterField>

              <FilterField label="Price range (R)">
                <div className="flex gap-2">
                  <input className={inputCls} type="number" placeholder="Min" value={filters.minPrice} onChange={set('minPrice')} />
                  <input className={inputCls} type="number" placeholder="Max" value={filters.maxPrice} onChange={set('maxPrice')} />
                </div>
              </FilterField>

              <FilterField label="Year range">
                <div className="flex gap-2">
                  <input className={inputCls} type="number" placeholder="From" value={filters.minYear} onChange={set('minYear')} />
                  <input className={inputCls} type="number" placeholder="To" value={filters.maxYear} onChange={set('maxYear')} />
                </div>
              </FilterField>

              <FilterField label="Mileage range (km)">
                <div className="flex gap-2">
                  <input className={inputCls} type="number" placeholder="Min" value={filters.minMileage} onChange={set('minMileage')} />
                  <input className={inputCls} type="number" placeholder="Max" value={filters.maxMileage} onChange={set('maxMileage')} />
                </div>
              </FilterField>

              <FilterField label="Transmission">
                <select className={inputCls} value={filters.transmission} onChange={set('transmission')}>
                  <option value="">Any</option>
                  {['Manual', 'Automatic', 'CVT'].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </FilterField>

              <FilterField label="Fuel type">
                <select className={inputCls} value={filters.fuelType} onChange={set('fuelType')}>
                  <option value="">Any</option>
                  {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </FilterField>

              <FilterField label="Province">
                <select className={inputCls} value={filters.province} onChange={set('province')}>
                  <option value="">All provinces</option>
                  {PROVINCES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </FilterField>

              <FilterField label="City">
                <select className={inputCls} value={filters.city} onChange={set('city')}>
                  <option value="">All cities</option>
                  {cities.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </FilterField>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-6 flex items-center justify-between rounded-2xl border border-line bg-white px-5 py-4 shadow-card">
              <span className="text-sm text-slate">Sort by</span>
              <select
                className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-ink outline-none focus:border-accent"
                value={filters.sort}
                onChange={set('sort')}
              >
                <option value="newest">Newest first</option>
                <option value="price-asc">Lowest price</option>
                <option value="price-desc">Highest price</option>
              </select>
            </div>

            {loading ? (
              <Spinner label="Searching listings…" />
            ) : results.length === 0 ? (
              <EmptyState
                icon={SearchX}
                title="No vehicles match your filters"
                message="Try widening your price range, clearing some filters, or searching for a different make or model."
                action={
                  <button
                    onClick={reset}
                    className="mt-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-charcoal"
                  >
                    Clear all filters
                  </button>
                }
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((v) => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

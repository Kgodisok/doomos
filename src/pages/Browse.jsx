import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ArrowUpDown, X, RotateCcw, Search } from 'lucide-react'
import VehicleCard from '../components/VehicleCard'
import { VehicleCardSkeleton, EmptyState } from '../components/LoadingAndEmpty'
import { getVehicles, BRANDS, PROVINCES, PROVINCE_CITIES, CONDITIONS } from '../data/vehicles'

export default function Browse() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Filter States from URL query or defaults
  const keyword = searchParams.get('q') || ''
  const selectedMake = searchParams.get('make') || ''
  const selectedCondition = searchParams.get('condition') || ''
  const selectedProvince = searchParams.get('province') || ''
  const selectedCity = searchParams.get('city') || ''
  const selectedTransmission = searchParams.get('transmission') || ''
  const selectedFuel = searchParams.get('fuelType') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  const minYear = searchParams.get('minYear') || ''
  const maxMileage = searchParams.get('maxMileage') || ''
  const sortBy = searchParams.get('sort') || 'newest'

  useEffect(() => {
    getVehicles(300).then((data) => {
      setVehicles(data)
      setLoading(false)
    })
  }, [])

  // Helper to update individual URL query param
  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    // If province changes, reset city if not in province
    if (key === 'province') {
      next.delete('city')
    }
    setSearchParams(next)
  }

  const resetFilters = () => {
    setSearchParams(new URLSearchParams())
  }

  // Active filter count
  const activeCount = [
    keyword,
    selectedMake,
    selectedCondition,
    selectedProvince,
    selectedCity,
    selectedTransmission,
    selectedFuel,
    minPrice,
    maxPrice,
    minYear,
    maxMileage,
  ].filter(Boolean).length

  // Filter & Sort Logic
  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((car) => {
        // Keyword search (make, model, or description)
        if (keyword) {
          const q = keyword.toLowerCase()
          const combined = `${car.make} ${car.model} ${car.description} ${car.city}`.toLowerCase()
          if (!combined.includes(q)) return false
        }
        // Make
        if (selectedMake && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
          return false
        }
        // Condition (Pre-Owned / Brand New / Demo)
        if (selectedCondition && car.condition !== selectedCondition) {
          return false
        }
        // Province
        if (selectedProvince && car.province.toLowerCase() !== selectedProvince.toLowerCase()) {
          return false
        }
        // City
        if (selectedCity && car.city.toLowerCase() !== selectedCity.toLowerCase()) {
          return false
        }
        // Transmission
        if (selectedTransmission && car.transmission.toLowerCase() !== selectedTransmission.toLowerCase()) {
          return false
        }
        // Fuel Type
        if (selectedFuel && car.fuelType.toLowerCase() !== selectedFuel.toLowerCase()) {
          return false
        }
        // Min Price
        if (minPrice && car.price < Number(minPrice)) {
          return false
        }
        // Max Price
        if (maxPrice && car.price > Number(maxPrice)) {
          return false
        }
        // Min Year
        if (minYear && car.year < Number(minYear)) {
          return false
        }
        // Max Mileage
        if (maxMileage && car.mileage > Number(maxMileage)) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === 'lowest') return a.price - b.price
        if (sortBy === 'highest') return b.price - a.price
        if (sortBy === 'year_new') return b.year - a.year
        if (sortBy === 'mileage_low') return a.mileage - b.mileage
        // Default newest
        return Number(b.id) - Number(a.id)
      })
  }, [
    vehicles,
    keyword,
    selectedMake,
    selectedCondition,
    selectedProvince,
    selectedCity,
    selectedTransmission,
    selectedFuel,
    minPrice,
    maxPrice,
    minYear,
    maxMileage,
    sortBy,
  ])

  // Filter Sidebar Controls
  const renderFilterControls = () => (
    <div className="space-y-6">
      
      {/* Search Input */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Search Text
        </label>
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => updateFilter('q', e.target.value)}
            placeholder="e.g. Ranger, LC 500, Polo..."
            className="w-full pl-9 pr-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
          />
        </div>
      </div>

      {/* Condition: Pre-Owned / Brand New / Demo */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Vehicle Condition
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {CONDITIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => updateFilter('condition', selectedCondition === c ? '' : c)}
              className={`py-2 px-2 text-[11px] font-bold rounded-xl border text-center transition-all ${
                selectedCondition === c
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-mist/60 text-slate border-line hover:border-accent/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Make */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Make / Brand
        </label>
        <select
          value={selectedMake}
          onChange={(e) => updateFilter('make', e.target.value)}
          className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors cursor-pointer"
        >
          <option value="">All Makes</option>
          {BRANDS.map((b) => (
            <option key={b.name} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* Province */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Province
        </label>
        <select
          value={selectedProvince}
          onChange={(e) => updateFilter('province', e.target.value)}
          className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors cursor-pointer"
        >
          <option value="">All South Africa</option>
          {PROVINCES.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>

      {/* City (contextual to province) */}
      {selectedProvince && PROVINCE_CITIES[selectedProvince] && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
            City in {selectedProvince}
          </label>
          <select
            value={selectedCity}
            onChange={(e) => updateFilter('city', e.target.value)}
            className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors cursor-pointer"
          >
            <option value="">All Cities</option>
            {PROVINCE_CITIES[selectedProvince].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Price Range */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Price Range (ZAR)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min (R)"
            value={minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
            className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-xs font-medium outline-none"
          />
          <input
            type="number"
            placeholder="Max (R)"
            value={maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
            className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-xs font-medium outline-none"
          />
        </div>
      </div>

      {/* Min Year */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Minimum Year
        </label>
        <select
          value={minYear}
          onChange={(e) => updateFilter('minYear', e.target.value)}
          className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors cursor-pointer"
        >
          <option value="">Any Year</option>
          <option value="2024">2024 (Brand New / Demo)</option>
          <option value="2023">2023 or newer</option>
          <option value="2021">2021 or newer</option>
          <option value="2019">2019 or newer</option>
        </select>
      </div>

      {/* Max Mileage */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Max Mileage (km)
        </label>
        <select
          value={maxMileage}
          onChange={(e) => updateFilter('maxMileage', e.target.value)}
          className="w-full px-3 py-2 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors cursor-pointer"
        >
          <option value="">Any Mileage</option>
          <option value="10000">Under 10,000 km (Demo)</option>
          <option value="30000">Under 30,000 km</option>
          <option value="60000">Under 60,000 km</option>
          <option value="100000">Under 100,000 km</option>
        </select>
      </div>

      {/* Transmission */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Transmission
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['Automatic', 'Manual'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => updateFilter('transmission', selectedTransmission === t ? '' : t)}
              className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                selectedTransmission === t
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-mist/60 text-slate border-line hover:border-accent/50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate mb-2">
          Fuel Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['Petrol', 'Diesel'].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => updateFilter('fuelType', selectedFuel === f ? '' : f)}
              className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                selectedFuel === f
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-mist/60 text-slate border-line hover:border-accent/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Reset button inside sidebar */}
      {activeCount > 0 && (
        <button
          type="button"
          onClick={resetFilters}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-line text-slate hover:text-ink hover:bg-mist text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ({activeCount}) Filters</span>
        </button>
      )}

    </div>
  )

  return (
    <div className="bg-mist/30 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Market Inventory</span>
            <h1 className="text-3xl font-extrabold text-ink mt-0.5">Browse Vehicles</h1>
            <p className="text-sm text-slate mt-1">
              Showing {filteredVehicles.length} of {vehicles.length} cars currently advertised in South Africa.
            </p>
          </div>

          {/* Sort Control & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-line px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-accent" />
              <span>Filters {activeCount > 0 && `(${activeCount})`}</span>
            </button>

            <div className="flex items-center gap-2 bg-white border border-line px-3 py-2 rounded-xl shadow-sm text-sm">
              <ArrowUpDown className="w-4 h-4 text-slate shrink-0" />
              <label htmlFor="sortSelect" className="text-xs text-slate font-medium hidden sm:inline">
                Sort:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="bg-transparent font-semibold text-charcoal text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="newest">Newest Listed</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="year_new">Year: Modern First</option>
                <option value="mileage_low">Mileage: Lowest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block bg-white rounded-2xl border border-line p-6 shadow-card sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-accent" />
                <h3 className="font-bold text-ink text-sm uppercase tracking-wider">Filters</h3>
              </div>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs text-accent hover:underline font-semibold cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {renderFilterControls()}
          </aside>

          {/* Vehicles Grid / Empty State */}
          <main className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <VehicleCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredVehicles.length === 0 ? (
              <EmptyState onReset={resetFilters} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((car) => (
                  <VehicleCard key={car.id} vehicle={car} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Drawer Filter Dialog */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-accent" />
                  <h3 className="font-bold text-ink text-sm uppercase tracking-wider">Filters</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 rounded-lg hover:bg-mist text-slate"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {renderFilterControls()}
            </div>

            <div className="pt-6 border-t border-line mt-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-charcoal text-white rounded-xl font-bold text-sm"
              >
                Show Results ({filteredVehicles.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


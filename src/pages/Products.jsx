import React, { useState, useMemo } from 'react'
import {
  Search,
  ShoppingBag,
  RotateCcw,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/uitkykData'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const text = `${item.name} ${item.description} ${item.badge || ''}`.toLowerCase()
        if (!text.includes(q)) return false
      }
      return true
    }).sort((a, b) => {
      if (sortBy === 'lowest') return a.price - b.price
      if (sortBy === 'highest') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      // popular default
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
    })
  }, [activeCategory, searchQuery, sortBy])

  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-red-800 bg-red-100/60 border border-red-200 px-3 py-1 rounded-full">
            Wholesale & Retail Butchery Cuts
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            Uitkyk Fresh Meat & Deli Price List
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            All meat is sourced from certified South African livestock producers and cut fresh daily by our blockmen. Add any cut to your digital order slip for instant WhatsApp inquiry.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search boerewors, rump, biltong, chops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-warm-gray/60 border border-gray-200 rounded-xl focus:border-red-900 focus:bg-white outline-none transition-colors"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-bold text-gray-500 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs sm:text-sm font-semibold p-2.5 bg-warm-gray/60 border border-gray-200 rounded-xl focus:border-red-900 outline-none cursor-pointer"
              >
                <option value="popular">Most Popular Cuts</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Categories Pill Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-red-900 text-amber-300 shadow-md scale-105'
                    : 'bg-warm-gray/80 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8 max-w-md mx-auto">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-900">No matching cuts found</h3>
            <p className="text-xs text-gray-500 mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-red-900 text-amber-300 text-xs font-bold rounded-xl"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

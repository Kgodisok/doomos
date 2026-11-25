import React from 'react'
import { Link } from 'react-router-dom'
import {
  Flame,
  Award,
  Clock,
  Phone,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import {
  STORE_INFO,
  PRODUCTS,
  DEPARTMENTS,
  TESTIMONIALS,
} from '../data/uitkykData'

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.popular).slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative bg-red-950 text-white overflow-hidden py-20 lg:py-28">
        {/* Background automotive / butcher imagery */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80"
            alt="Uitkyk Vleismark Fresh Meat & Braai"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-950/90 to-red-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-amber-500)/15,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Pretoria’s Premier Butchery & Supermarket</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-serif leading-tight">
                Quality Meat at <span className="text-amber-400">Wholesale Prices</span> You Can Trust.
              </h1>

              <p className="text-base sm:text-lg text-amber-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Visit <strong className="text-white">Uitkyk Vleismark (Uitkyk Meat & Super Market)</strong> in Silverton, Pretoria. Famous for champion boerewors, award-winning biltong, A-grade Karoo lamb, and full supermarket grocery shopping under one roof.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-gray-200">
                <span className="flex items-center gap-1.5 font-semibold bg-red-900/60 border border-red-800 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Monday to Saturday OPEN – 5am till 7pm (Sunday – Closed)
                </span>
                <span className="flex items-center gap-1.5 font-semibold bg-red-900/60 border border-red-800 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  100% A-Grade Certified Meats
                </span>
                <span className="flex items-center gap-1.5 font-semibold bg-red-900/60 border border-red-800 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Silverton, Pretoria
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Browse Meat Price List</span>
                </Link>

                <Link
                  to="/hampers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-4 rounded-xl border border-white/20 transition-all hover:border-white/40 cursor-pointer"
                >
                  <span>Bulk Family Hampers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card: Store Info & Quick Order */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-red-900/90 to-red-950/95 border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
                <div className="flex items-center justify-between border-b border-red-800 pb-4">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 block">
                      Silverton Flagship Store
                    </span>
                    <h3 className="text-xl font-black text-white font-serif">
                      Uitkyk Meat & Supermarket
                    </h3>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Store is Active" />
                </div>

                <div className="space-y-3.5 text-xs text-gray-200">
                  <div className="flex items-start gap-3 bg-red-950/60 p-3 rounded-xl border border-red-800/60">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Store Address:</strong>
                      <span>165 De Boulevard Street, Silverton, Pretoria, 0184</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-red-950/60 p-3 rounded-xl border border-red-800/60">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">TRADING HOURS:</strong>
                      <span className="text-amber-300 font-bold block">Monday to Saturday OPEN – 5am till 7pm</span>
                      <p className="text-red-400 font-semibold mt-0.5">Sunday – Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-red-950/60 p-3 rounded-xl border border-red-800/60">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Direct Butchery Lines:</strong>
                      <span className="text-amber-300 font-bold text-sm">012 804 3280 / +27 12 804 3280</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Uitkyk%20Vleismark,%20I%20would%20like%20to%20order%20meat%20for%20collection.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Instant WhatsApp Order (012 804 3280)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- WEEKLY SPECIALS CALLOUT BANNER ----------------- */}
      <section className="bg-amber-500 text-red-950 py-4 px-4 border-b-2 border-red-900 font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="bg-red-950 text-amber-400 px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider">
              🔥 SPECIAL
            </span>
            <span>
              <strong>Wing-It Wednesday & Rugby Braai Combos!</strong> Save big on marinated wings, champion boerewors & rump steaks this week.
            </span>
          </div>
          <Link
            to="/specials"
            className="inline-flex items-center gap-1.5 font-black uppercase underline hover:text-red-900 transition-colors"
          >
            <span>View All Specials Pamphlet</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ----------------- TOP FEATURED MEATS & SPECIALS ----------------- */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-800">
                Fresh Cuts Daily
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 font-serif mt-1">
                Pretoria’s Most Popular Cuts
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Freshly prepared each morning by our master blockmen. Add directly to your digital order slip for instant WhatsApp confirmation.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-red-900 hover:text-amber-600 transition-colors"
            >
              <span>View all 28+ items</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-red-900 hover:bg-red-800 text-amber-300 font-bold px-8 py-3.5 rounded-xl shadow transition-all hover:scale-105"
            >
              <span>Explore Full Meat & Deli Range</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- DEPARTMENTS / ONE-STOP SUPERMARKET ----------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-red-800">
              Everything Under One Roof
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 font-serif">
              More Than Just A Butchery
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Uitkyk gives you a complete supermarket experience. Pick up your braai meat, fresh bakery bread, cheeses, spices, fresh produce, and LP gas refills in a single trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-warm-gray/60 border border-amber-900/10 hover:border-amber-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-900 text-amber-400 flex items-center justify-center font-bold mb-4 shadow group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- BULK HAMPERS PROMOTION ----------------- */}
      <section className="py-20 bg-red-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-red-900 to-red-950 border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-3 py-1 rounded-full">
                Pretoria’s Biggest Meat Savings
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white leading-tight">
                Feed Your Family For Less With Uitkyk Bulk Hampers
              </h2>
              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                Save hundreds of Rands every month with our pre-packed, vacuum-sealed monthly and weekend meat hampers. 100% prime A-grade cuts portioned for your freezer convenience.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-amber-200">
                <span>✓ Weekend Braai Hamper (R649)</span>
                <span>✓ Monthly Budget Saver (R1,599)</span>
                <span>✓ Biltong Lovers Combo (R349)</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/hampers"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-sm uppercase px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105"
              >
                <span>View All Meat Hampers</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CUSTOMER REVIEWS & REPUTATION ----------------- */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-red-800">
              Trusted Since 1960
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 font-serif">
              What Pretoria Says About Uitkyk
            </h2>
            <p className="text-sm text-gray-600">
              Generations of families across Silverton, Meyerspark, and Pretoria East rely on Uitkyk for every braai, Sunday roast, and holiday feast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{rev.name}</h4>
                    <span className="text-[10px] text-gray-500">{rev.suburb}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- VISIT STORE CALL TO ACTION ----------------- */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Come Visit Us In Silverton
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif">
                Open Monday to Saturday at 05:00 AM!
              </h2>
              <p className="text-xs sm:text-sm text-amber-100/80 max-w-lg">
                165 De Boulevard Street, Silverton, Pretoria, 0184. Plenty of secure parking and freshly butchered meats waiting for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-red-950 hover:bg-black text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl border border-red-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: 012 804 3280</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

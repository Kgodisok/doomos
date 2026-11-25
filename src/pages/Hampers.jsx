import React from 'react'
import {
  Package,
  CheckCircle2,
  Users,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react'
import { STORE_INFO } from '../data/uitkykData'
import { useCart } from '../context/CartContext'

export default function Hampers() {
  const { addToCart } = useCart()

  const customHampers = [
    {
      id: "hmp-braai-pro",
      name: "Ultimate Rugby Braai Hamper",
      price: 899.00,
      unit: "Feeds 12-14 people",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      description: "2kg Uitkyk Boerewors, 1.5kg Marinated Rump Steaks, 1.5kg Karoo Lamb Chops, 2kg BBQ Marinated Chicken Sosaties, and 500g Biltong.",
      items: [
        "2.0kg Champion Boerewors",
        "1.5kg A-Grade Rump Steaks",
        "1.5kg Karoo Lamb Loin Chops",
        "2.0kg BBQ Chicken Sosaties",
        "500g Traditional Sliced Biltong",
      ],
      badge: "Best For Game Day",
    },
    {
      id: "hmp-budget-saver",
      name: "Uitkyk Monthly Pantry & Freezer Saver",
      price: 1599.00,
      unit: "15kg+ Pure Meat",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80",
      description: "Our #1 best-selling family grocery saver: 3kg Boerewors, 3kg Lean Beef Mince, 3kg Chicken Portions, 2kg Beef Chuck / Stew, 2kg Pork Chops, and 2kg Lamb Stew.",
      items: [
        "3.0kg Traditional Boerewors",
        "3.0kg Extra Lean Beef Mince",
        "3.0kg Fresh Chicken Pieces",
        "2.0kg Beef Chuck Potjiekos",
        "2.0kg Meaty Pork Chops",
        "2.0kg Karoo Lamb Stewing Cuts",
      ],
      badge: "Family Bulk Value",
    },
    {
      id: "hmp-braai-weekend",
      name: "Weekend Family Braai Pack",
      price: 649.00,
      unit: "Feeds 6-8 people",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for a weekend braai with friends. 1.2kg Boerewors, 1.2kg Tenderised Rump Steaks, 1.5kg BBQ Chicken Flatties, and 1kg Lamb Loin Chops.",
      items: [
        "1.2kg Traditional Boerewors",
        "1.2kg Tenderised Rump Steaks",
        "1.5kg Marinated BBQ Chicken Flatties",
        "1.0kg Karoo Lamb Loin Chops",
      ],
      badge: "Weekend Favourite",
    },
    {
      id: "hmp-biltong-lovers",
      name: "Pretoria Biltong & Droëwors Taster Hamper",
      price: 499.00,
      unit: "1.5kg Total Biltong",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
      description: "500g Sliced Yellow Fat Biltong, 500g Champion Droëwors, and 500g Chilli Beef Bites. Vacuum-sealed for long-lasting freshness.",
      items: [
        "500g Sliced Traditional Beef Biltong",
        "500g Snap-Dry Champion Droëwors",
        "500g Spicy Chilli Biltong Bites",
        "Resealable vacuum bags included",
      ],
      badge: "Biltong Connoisseur",
    },
  ]

  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-950 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Package className="w-4 h-4 text-red-800" />
            <span>Wholesale Bulk Meat Value</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            Uitkyk Bulk Family Meat Hampers
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Feed your household for less with our professionally packed, freezer-ready meat hampers. We portion, vacuum-seal, and label every cut so your freezer stays organized and fresh.
          </p>
        </div>

        {/* Benefits bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-900 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Vacuum Sealed</h4>
              <p className="text-[11px] text-gray-500">Stays fresh for months in your freezer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Individually Portioned</h4>
              <p className="text-[11px] text-gray-500">Convenient daily family meal packs</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Save Up To R250</h4>
              <p className="text-[11px] text-gray-500">Major savings compared to loose retail cuts</p>
            </div>
          </div>
        </div>

        {/* Hampers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customHampers.map((hamper) => (
            <div
              key={hamper.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden flex flex-col justify-between hover:border-amber-500 hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-950 text-amber-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/30">
                    {hamper.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-950 font-serif">
                        {hamper.name}
                      </h3>
                      <span className="text-xs text-amber-700 font-bold block mt-0.5">
                        {hamper.unit}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-2xl sm:text-3xl font-black text-red-950 font-serif block">
                        R {hamper.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-gray-500">VAT inclusive</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {hamper.description}
                  </p>

                  {/* Included cuts breakdown */}
                  <div className="bg-warm-gray/60 p-4 rounded-2xl border border-gray-100 space-y-2">
                    <span className="text-[11px] font-black uppercase text-gray-700 tracking-wider block">
                      Pack Contents:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {hamper.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex gap-3">
                <button
                  type="button"
                  onClick={() => addToCart(hamper, 1)}
                  className="w-full py-3.5 rounded-xl bg-red-900 hover:bg-red-800 text-amber-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Hamper to Order Slip</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom bulk orders */}
        <div className="bg-gradient-to-r from-red-950 to-red-900 text-white rounded-3xl p-8 sm:p-12 border border-red-800 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-black font-serif">Need A Custom Corporate or Catering Meat Hamper?</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Planning a company braai, church retreat, school sports day, or year-end function? We create bespoke bulk packages tailored to your head-count and budget.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Uitkyk,%20I%20would%20like%20a%20custom%20meat%20hamper%20quotation%20for%20an%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow transition-all hover:scale-105 cursor-pointer"
            >
              <span>Request Custom Hamper Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import {
  Calendar,
  MessageCircle,
  Percent,
} from 'lucide-react'
import { SPECIALS, STORE_INFO } from '../data/uitkykData'
import { useCart } from '../context/CartContext'

export default function Specials() {
  const { addToCart } = useCart()

  const quickDeals = [
    {
      id: "sp-deal-1",
      name: "2kg Fresh Chicken Wings (Marinated BBQ)",
      category: "braai",
      price: 139.99,
      unit: "2kg Bulk Pack",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      description: "Wing-It Wednesday staple! Marinated in sweet BBQ or peri-peri sauce, ready for the coals or air fryer.",
      badge: "Wing-It Wednesday",
    },
    {
      id: "sp-deal-2",
      name: "Super Weekend Rugby Braai Combo (Wors + Rump + Biltong)",
      category: "braai",
      price: 389.00,
      unit: "Combo Pack (~2.5kg)",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      description: "1kg Traditional Boerewors + 1kg A-Grade Rump Steaks + 500g Sliced Beef Biltong. Save R85 on counter prices.",
      badge: "Weekend Braai Deal",
    },
    {
      id: "sp-deal-3",
      name: "Bulk Lamb Stewing Cuts (Karoo Mixed Cuts)",
      category: "lamb-pork",
      price: 139.99,
      unit: "per kg (min 3kg)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "Rich, tender bone-in Karoo lamb ideal for winter potjiekos, curries, and slow-braised stews.",
      badge: "Potjiekos Special",
    },
  ]

  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-red-950 font-bold text-xs uppercase tracking-wider border border-amber-500/30">
            <Percent className="w-4 h-4 text-amber-600" />
            <span>Weekly Promotions & Savings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            Uitkyk Weekly Butchery Specials
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Take advantage of our rotating weekly butcher promotions, midweek wing deals, and weekend rugby braai packs. Available in-store at 165 De Boulevard Street, Silverton.
          </p>
        </div>

        {/* Feature Promo Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALS.map((sp) => (
            <div
              key={sp.id}
              className="bg-white rounded-2xl p-6 border-2 border-red-900/10 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-900 px-2.5 py-1 rounded-md">
                    {sp.tag}
                  </span>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {sp.day}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-950">{sp.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{sp.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Uitkyk,%20I%20am%20enquiring%20about%20your%20${encodeURIComponent(sp.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-amber-300 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instant Add-to-Slip Specials Items */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase text-red-800 tracking-wider">
                This Week&apos;s Featured Promotions
              </span>
              <h2 className="text-2xl font-black text-gray-900 font-serif">
                Add Specials To Your WhatsApp Slip
              </h2>
            </div>
            <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
              Prices valid while stocks last
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickDeals.map((deal) => (
              <div
                key={deal.id}
                className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between bg-warm-gray/30"
              >
                <div className="relative aspect-[16/10] bg-gray-100">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-amber-500 text-red-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                    {deal.badge}
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{deal.name}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{deal.description}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black text-red-900 font-serif">
                        R {deal.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-gray-500 block">{deal.unit}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => addToCart(deal, 1)}
                      className="px-3 py-1.5 bg-red-900 hover:bg-red-800 text-amber-300 rounded-lg text-xs font-bold cursor-pointer transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Notification Opt-In */}
        <div className="bg-gradient-to-r from-red-950 to-red-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-amber-400/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
              Never Miss A Meat Price Drop
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              Want the Weekly Specials Pamphlet on WhatsApp?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-lg">
              Save our Silverton number (+27 12 804 3280) and send &ldquo;SPECIALS&rdquo; on WhatsApp to receive the weekly butcher catalog directly to your phone.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=SPECIALS`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Join WhatsApp Specials List</span>
          </a>
        </div>
      </div>
    </div>
  )
}

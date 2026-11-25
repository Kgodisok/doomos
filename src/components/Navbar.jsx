import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Phone,
  Clock,
  MapPin,
  ShoppingBag,
  Menu,
  X,
  Flame,
  ChevronRight,
} from 'lucide-react'
import { STORE_INFO } from '../data/uitkykData'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meat & Products', path: '/products' },
    { name: 'Weekly Specials', path: '/specials' },
    { name: 'Meat Hampers', path: '/hampers' },
    { name: 'Venison & Spitbraai', path: '/services' },
    { name: 'About Uitkyk', path: '/about' },
    { name: 'Contact & Location', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top utility bar */}
      <div className="bg-red-950 text-amber-100 text-xs py-2 px-4 border-b border-red-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              165 De Boulevard Street, Silverton, Pretoria
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mon–Sat: 05:00 – 19:00 | Sunday Closed
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              012 804 3280
            </a>
            <span className="text-red-700">|</span>
            <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-400" />
              Open Daily at 05:00 AM
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav className="bg-red-900 text-white border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3.5 group py-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-red-950 font-black flex items-center justify-center text-xl shadow-lg border-2 border-amber-300 group-hover:scale-105 transition-transform duration-200">
                <Flame className="w-7 h-7 fill-red-950 stroke-amber-500" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black tracking-tight uppercase text-white font-serif">
                    UITKYK
                  </span>
                  <span className="text-xs font-black tracking-widest uppercase text-amber-400">
                    VLEISMARK
                  </span>
                </div>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-amber-200/90 -mt-0.5">
                  Meat & Super Market • Silverton
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-150 py-1 border-b-2 hover:text-amber-300 ${
                      isActive
                        ? 'border-amber-400 text-amber-300'
                        : 'border-transparent text-gray-100 hover:border-amber-400/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions: Cart + WhatsApp Quote */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-xl bg-red-950 hover:bg-black text-amber-400 border border-amber-500/30 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
                aria-label="View quotation order cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline text-xs font-bold text-white">
                  Order Slip
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-red-950 text-xs font-black flex items-center justify-center shadow">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Direct call button on desktop */}
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Butchery</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-200 hover:text-white hover:bg-red-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drop */}
        {mobileOpen && (
          <div className="lg:hidden bg-red-950 border-t border-red-800 px-4 pt-3 pb-6 space-y-2">
            <div className="p-3 mb-2 rounded-xl bg-red-900/60 text-xs text-amber-200 border border-amber-500/20 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                165 De Boulevard St, Silverton, Pretoria
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Mon–Sat: 05:00 – 19:00
              </p>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-red-950 font-bold'
                      : 'text-gray-200 hover:bg-red-900 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}

            <div className="pt-3 border-t border-red-800/80 flex flex-col gap-2">
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full text-center py-2.5 rounded-xl bg-amber-500 text-red-950 font-bold text-sm"
              >
                Call: 012 804 3280
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PlusCircle, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Cars', path: '/browse' },
    { name: 'Sell Your Car', path: '/sell' },
    { name: 'About Us', path: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <div className="h-12 w-auto bg-white rounded-xl p-1 shadow-md shadow-accent/20 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="DooMos Cars - We Buy and Sell Second Hand and New Cars"
                className="h-10 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                  DooMos <span className="text-accent">Cars</span>
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-300 -mt-0.5">
                We Buy & Sell New & Pre-Owned
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-150 hover:text-accent relative py-1 ${
                    isActive
                      ? 'text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent'
                      : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/auth"
              className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Sell Your Car</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/sell"
              className="bg-accent text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Sell Car
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-ink px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-accent font-semibold'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/auth"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white bg-white/5"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

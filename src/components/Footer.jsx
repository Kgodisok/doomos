import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-auto bg-white rounded-xl p-1 shadow-md flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="DooMos Cars logo"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block">
                  DooMos <span className="text-accent">Cars</span>
                </span>
                <span className="text-xs text-accent font-semibold italic">Drive Your Dream Today</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              We buy and sell second-hand and brand new cars. Bringing trusted South African automotive trade from social communities into one premium, verified platform.
            </p>
            <div className="flex items-center gap-2 text-xs text-accent font-semibold bg-accent/10 border border-accent/25 px-3 py-1.5 rounded-full w-fit">
              <Shield className="w-3.5 h-3.5" />
              <span>We Buy & Sell • Quality Second-Hand & New Vehicles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Inventory</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse" className="hover:text-accent transition-colors">
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link to="/browse?condition=Pre-Owned" className="hover:text-accent transition-colors">
                  Second Hand / Pre-Owned
                </Link>
              </li>
              <li>
                <Link to="/browse?condition=Brand+New" className="hover:text-accent transition-colors">
                  Brand New Cars
                </Link>
              </li>
              <li>
                <Link to="/browse?condition=Demo" className="hover:text-accent transition-colors">
                  Demo Models
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-accent transition-colors">
                  We Buy Cars / Sell Yours
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Top Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse?province=Gauteng" className="hover:text-accent transition-colors">
                  Johannesburg & Pretoria
                </Link>
              </li>
              <li>
                <Link to="/browse?province=Western+Cape" className="hover:text-accent transition-colors">
                  Cape Town & Winelands
                </Link>
              </li>
              <li>
                <Link to="/browse?province=KwaZulu-Natal" className="hover:text-accent transition-colors">
                  Durban & Umhlanga
                </Link>
              </li>
              <li>
                <Link to="/browse?province=Eastern+Cape" className="hover:text-accent transition-colors">
                  Gqeberha & East London
                </Link>
              </li>
              <li>
                <Link to="/browse?province=Free+State" className="hover:text-accent transition-colors">
                  Bloemfontein
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Polokwane, Limpopo, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>sales@doomos.co.za</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+27 (0) 10 500 2400</span>
              </li>
              <li className="pt-2">
                <span className="text-xs text-gray-400 block font-medium">WhatsApp Support Available 7 Days a Week</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {CURRENT_YEAR} DooMos Cars (Pty) Ltd. Drive Your Dream Today.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#safety" className="hover:text-white transition-colors">Buyer Safety Tips</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

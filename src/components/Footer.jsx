import React from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  Award,
  ChevronRight,
  MessageCircle,
} from 'lucide-react'
import { STORE_INFO } from '../data/uitkykData'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-red-950 text-gray-300 border-t-4 border-amber-500 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-red-900/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-red-950 font-black flex items-center justify-center text-lg shadow border-2 border-amber-300">
                <Flame className="w-6 h-6 fill-red-950 stroke-amber-500" />
              </div>
              <div>
                <span className="text-xl font-black uppercase text-white font-serif block leading-none">
                  UITKYK VLEISMARK
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold">
                  Meat & Super Market
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pretoria’s legendary family-owned butcher and supermarket since 1960. Renowned for award-winning biltong, champion boerewors, Karoo lamb, and wholesale meat hampers.
            </p>
            <div className="p-3 rounded-xl bg-red-900/40 border border-amber-500/20 text-xs text-amber-200 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Voted Best of Pretoria Butchery Nominee & Trusted Local Supplier</span>
            </div>
          </div>

          {/* Quick Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-red-900 pb-2">
              Departments & Specialties
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Champion Boerewors & Steaks
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Award-Winning Biltong & Droëwors
                </Link>
              </li>
              <li>
                <Link to="/hampers" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Bulk Family Meat Hampers
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Venison & Game Processing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Spitbraai Machine Hire & Gas Refills
                </Link>
              </li>
              <li>
                <Link to="/specials" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  Wing-It Wednesday & Braai Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Trading Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-red-900 pb-2">
              Store Trading Hours
            </h4>
            <ul className="space-y-2 text-xs leading-relaxed text-gray-300">
              <li className="p-2.5 rounded-lg bg-red-900/30 border border-red-800">
                <span className="font-bold text-white block">Monday – Saturday:</span>
                <span className="text-amber-300 font-semibold text-sm">05:00 AM – 19:00 PM (5 AM - 7 PM)</span>
                <p className="text-[11px] text-gray-400 mt-1">Open at 5 AM for caterers, hunters & commuters.</p>
              </li>
              <li className="p-2.5 rounded-lg bg-red-900/30 border border-red-800">
                <span className="font-bold text-white block">Sunday:</span>
                <span className="text-red-400 font-semibold">CLOSED (Family & Rest Day)</span>
              </li>
              <li className="p-2.5 rounded-lg bg-red-900/30 border border-red-800">
                <span className="font-bold text-white block">Public Holidays:</span>
                <span className="text-gray-300">Selected holidays open 06:00 – 17:00</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-red-900 pb-2">
              Contact & Silverton Store
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>165 De Boulevard Street, Silverton, Pretoria, 0184</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-amber-400">
                  +27 12 804 3280 / 012 804 3280
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="text-xs hover:text-amber-400">
                  info@uitkykvleismark.co.za
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Uitkyk%20Vleismark,%20I%20would%20like%20to%20enquire%20about%20your%20meat%20specials.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {CURRENT_YEAR} Uitkyk Vleismark (Pty) Ltd • Uitkyk Meat & Super Market. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gray-200">Our Heritage</Link>
            <Link to="/products" className="hover:text-gray-200">Price List</Link>
            <Link to="/contact" className="hover:text-gray-200">Store Directions</Link>
            <a href={STORE_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

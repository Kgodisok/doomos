import React from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react'

export default function About() {
  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-950 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Award className="w-4 h-4 text-red-800" />
            <span>Pretoria Heritage & Tradition</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            About Uitkyk Vleismark (Meat & Supermarket)
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From humble beginnings as a local Silverton butcher counter to one of Pretoria’s largest and most trusted wholesale and retail meat markets.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-black text-gray-950 font-serif">
                A Family Legacy of Honest Butchery
              </h2>
              <p>
                <strong>Uitkyk Vleismark</strong> has been an institution in Silverton, Pretoria for decades. Founded on the principle of providing authentic, high-grade farm meats without commercial fillers or inflated prices, Uitkyk quickly earned the trust of Pretoria households.
              </p>
              <p>
                As demand grew, so did our space. What started as a dedicated butcher expanded into a comprehensive <strong>Meat & Supermarket</strong> concept. Customers could visit our counter for custom cuts from experienced blockmen, and then complete their entire grocery shopping list—from bakery rolls and farm cheeses to braai charcoal and gas refills—all under one roof.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80"
                alt="Uitkyk Butchery Tradition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-bold">
                  Quality meats prepared fresh at 5:00 AM every single morning.
                </span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-warm-gray border border-gray-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-900 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-950">100% Certified Meat</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Only A2 and A3 grain-fed beef, certified Karoo lamb, and quality South African pork and poultry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-gray border border-gray-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-900 text-amber-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-950">Secret Spicing Recipe</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our boerewors and biltong marinades are crafted with genuine roasted coriander, sea salt, and cloves.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-gray border border-gray-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-900 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-950">Open at 05:00 AM</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We open before sunrise so early-rising hunters, commuters, and catering businesses get what they need.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Contact Callout */}
        <div className="bg-red-950 text-white rounded-3xl p-8 sm:p-12 border border-red-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-amber-400">
              Visit Silverton, Pretoria
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              Experience the Legendary Uitkyk Vleismark
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              165 De Boulevard Street, Silverton, Pretoria, 0184. Tel: 012 804 3280.
            </p>
          </div>

          <Link
            to="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-xs uppercase px-8 py-3.5 rounded-xl shadow transition-all hover:scale-105"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

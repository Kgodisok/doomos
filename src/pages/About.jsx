import React from 'react'
import { Link } from 'react-router-dom'
import { Target, CheckCircle2, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header */}
      <section className="bg-ink text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-3 p-2 pr-4 bg-white/10 rounded-2xl border border-white/15">
            <img src="/logo.jpg" alt="DooMos Cars" className="h-9 w-auto rounded-lg bg-white p-0.5" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">About DooMos Cars</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            We Buy and Sell Second Hand and New Cars
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Drive Your Dream Today. Born out of the frustration of chaotic WhatsApp groups and Facebook car trading communities, DooMos Cars gives motorists a unified, secure, and modern car exchange across South Africa.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">The Vision</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1 mb-4">
              From Social Chat Groups to a Unified Platform
            </h2>
            <div className="text-slate text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                Every day, thousands of South Africans try to buy and sell vehicles inside informal WhatsApp and Facebook communities. Critical details get buried, images get compressed, and verifying prices and condition can be difficult.
              </p>
              <p>
                <strong>DooMos Cars</strong> solves this by standardizing specifications, displaying clear Rand prices, and enabling direct one-click WhatsApp communication between verified buyers and sellers.
              </p>
            </div>
          </div>

          <div className="bg-mist rounded-3xl p-8 border border-line shadow-card space-y-4">
            <h3 className="text-lg font-bold text-ink flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              <span>What Sets Us Apart</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Clear distinction between Pre-Owned, Demo models, and Brand New cars.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Instant pre-filled WhatsApp enquiry links for direct seller response.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Dedicated vehicle inspection checklists and safety guidelines for peace of mind.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Target Coverage */}
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">South African Footprint</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Nationwide Automotive Exchange</h2>
            <p className="text-gray-400 text-sm mt-2">
              From Sandton and Pretoria to Cape Town and Durban, DooMos Cars connects motor enthusiasts across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-accent">Gauteng</span>
              <p className="text-xs text-gray-400 mt-2">Johannesburg, Pretoria, Midrand & Centurion.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-accent">Western Cape</span>
              <p className="text-xs text-gray-400 mt-2">Cape Town, Stellenbosch, Paarl & George.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-accent">KwaZulu-Natal</span>
              <p className="text-xs text-gray-400 mt-2">Durban, Umhlanga & Pietermaritzburg.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Browse Current Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

    </div>
  )
}


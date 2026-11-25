import React from 'react'
import {
  Flame,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import { STORE_INFO } from '../data/uitkykData'

export default function Services() {
  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-950 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Flame className="w-4 h-4 text-red-800" />
            <span>Specialized Butchery Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            Venison Processing, Spitbraai Hire & Gas Refills
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Beyond everyday supermarket and retail meat cuts, Uitkyk Vleismark is trusted by hundreds of hunters and event planners across Gauteng for commercial-grade meat processing and equipment rental.
          </p>
        </div>

        {/* SERVICE 1: VENISON / GAME MEAT PROCESSING */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-black uppercase text-amber-700 tracking-wider bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              For Game Hunters & Safari Trips
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-serif">
              Professional Venison (Wildsbok) Processing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Drop off your hunted carcass at our Silverton cold storage facilities. Our master blockmen process your wild game under strict hygiene standards into delicious custom delicacies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="p-3 bg-warm-gray rounded-xl border border-gray-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Game Biltong & Drywors:</strong> Traditional vinegar cure & spice</span>
              </div>
              <div className="p-3 bg-warm-gray rounded-xl border border-gray-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Cheese Russians & Grillers:</strong> Infused with pork lard for juiciness</span>
              </div>
              <div className="p-3 bg-warm-gray rounded-xl border border-gray-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Patties & Mince:</strong> Coarse-ground with brisket fat</span>
              </div>
              <div className="p-3 bg-warm-gray rounded-xl border border-gray-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Steaks & Potjiekos Cuts:</strong> Deboned, portioned & vacuum sealed</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Uitkyk,%20I%20would%20like%20to%20enquire%20about%20hunter%20venison%20processing%20rates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-amber-300 font-bold text-xs uppercase px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About Hunting Drop-Off</span>
              </a>
              <span className="text-xs text-gray-500 self-center">
                Cold storage available Monday to Saturday from 05:00 AM
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Venison Biltong & Game Processing"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-red-950/90 text-amber-200 p-3 rounded-xl text-xs backdrop-blur-sm border border-amber-500/20">
              <span className="font-bold text-white block">Hunter Peace of Mind:</span>
              Your game meat is never mixed with other hunters' carcasses. 100% segregated processing.
            </div>
          </div>
        </div>

        {/* SERVICE 2: SPITBRAAI MACHINE HIRE & CATERING */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
              alt="Spitbraai Machine Hire Pretoria"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-amber-500 text-red-950 text-xs font-black uppercase px-3 py-1 rounded shadow">
              Full Spitbraai Packages
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <span className="text-xs font-black uppercase text-amber-700 tracking-wider bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              Weddings, Birthdays & Year-End Events
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-serif">
              Spitbraai Machine Hire & Whole Lambs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Rent stainless steel commercial gas spitbraai machines capable of roasting a whole A-grade lamb or pork carcass to tender perfection. We provide the equipment, gas, meat, and basting sauce.
            </p>

            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Heavy-duty stainless gas spitbraai with electric motor</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Whole Karoo Lambs or Pork carcasses (A2/A3 Grade) pre-spiced & skewered</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Includes filled 9kg LP gas cylinder & basting marinade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full operating instructions & carving trays supplied</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Uitkyk,%20I%20would%20like%20to%20book%20a%20spitbraai%20machine%20and%20whole%20lamb%20for%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase px-6 py-3 rounded-xl shadow transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Spitbraai for Your Event</span>
              </a>
            </div>
          </div>
        </div>

        {/* SERVICE 3: GAS REFILLS & SUPERMARKET CONVENIENCE */}
        <div className="bg-gradient-to-r from-red-950 to-red-900 text-white rounded-3xl p-8 sm:p-12 border border-red-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
              On-Site Gas Station
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              LP Gas Cylinder Refills While You Shop
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed">
              Don’t get caught with an empty gas bottle right before your braai or during loadshedding. Drop your 9kg, 14kg, or 19kg gas cylinder at our certified refilling depot while you pick up your groceries.
            </p>
          </div>

          <div className="p-6 bg-red-900/60 rounded-2xl border border-amber-500/20 text-center shrink-0 space-y-2">
            <span className="text-xs font-bold text-amber-300 block">Certified Gas Depot</span>
            <span className="text-2xl font-black text-white font-serif block">
              9kg • 14kg • 19kg • 48kg
            </span>
            <span className="text-[11px] text-gray-400 block">Immediate Refills On-Site in Silverton</span>
          </div>
        </div>
      </div>
    </div>
  )
}

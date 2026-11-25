import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { STORE_INFO } from '../data/uitkykData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Butchery Cuts',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open WhatsApp directly with the customer enquiry
    const msg = `*NEW CONTACT ENQUIRY - UITKYK VLEISMARK*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Email:* ${encodeURIComponent(
      formData.email || 'N/A'
    )}%0A*Department:* ${encodeURIComponent(
      formData.department
    )}%0A%0A*Message:* ${encodeURIComponent(formData.message)}`

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="bg-warm-gray/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-950 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Phone className="w-4 h-4 text-red-800" />
            <span>We’re Here To Help</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 font-serif">
            Contact Uitkyk Meat & Super Market
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Have a question about specific meat cuts, venison processing, bulk meat hampers, or spitbraai rental? Reach out to our Silverton store or call our butchery lines directly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-900 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6 text-red-800" />
            </div>
            <h3 className="font-bold text-base text-gray-900">Physical Store</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              165 De Boulevard Street, Silverton, Pretoria, 0184, South Africa
            </p>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-900 hover:text-red-700 pt-1"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-base text-gray-900">Phone & WhatsApp</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p>Telephone: <strong>+27 12 804 3280</strong></p>
              <p>Alternative: <strong>012 804 3280</strong></p>
              <p>WhatsApp: <strong>+27 82 804 3280</strong></p>
            </div>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Uitkyk%20Vleismark`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-900 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6 text-red-800" />
            </div>
            <h3 className="font-bold text-base text-gray-900">TRADING HOURS</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p className="font-bold text-gray-900">Monday to Saturday OPEN – 5am till 7pm</p>
              <p className="text-red-600 font-bold">Sunday – Closed</p>
              <p className="text-gray-500">Open early at 5am for commuters, caterers & hunters</p>
            </div>
          </div>
        </div>

        {/* Form and Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-950 font-serif">
                Send A Quick Butcher Inquiry
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Your enquiry will be sent directly to our Silverton management and butchery counter.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-950">Inquiry Sent via WhatsApp!</h3>
                <p className="text-xs text-emerald-800">
                  Thank you. If your WhatsApp did not open automatically, please click below or call 012 804 3280.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-emerald-900 underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan Venter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-warm-gray/50 focus:bg-white focus:border-red-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-warm-gray/50 focus:bg-white focus:border-red-900 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-warm-gray/50 focus:bg-white focus:border-red-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Department of Interest
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-warm-gray/50 focus:bg-white focus:border-red-900 outline-none cursor-pointer"
                    >
                      <option value="Butchery Cuts">Butchery Cuts & Steaks</option>
                      <option value="Bulk Meat Hampers">Bulk Meat Hampers</option>
                      <option value="Hunter Venison Processing">Hunter Venison Processing</option>
                      <option value="Spitbraai Machine Hire">Spitbraai Machine Hire</option>
                      <option value="Gas Refills">Gas Refills & General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Message / Specific Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what cuts, quantities, or dates you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-warm-gray/50 focus:bg-white focus:border-red-900 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-900 hover:bg-red-800 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp / Online</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-red-950 text-white p-6 sm:p-8 rounded-3xl border border-red-900 shadow-md space-y-4">
              <h3 className="text-xl font-black font-serif text-white">How To Find Us</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Located conveniently in Silverton on 165 De Boulevard Street, just off Pretoria Road with easy highway access from the N4 and N1.
              </p>
              <div className="p-4 bg-red-900/60 rounded-xl border border-red-800/80 text-xs space-y-1 text-amber-200">
                <p>✓ Ample secure customer parking available</p>
                <p>✓ Dedicated butchery blockmen and fast checkout</p>
                <p>✓ Card facilities, cash, and instant EFT accepted</p>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-red-950 font-black text-xs uppercase py-3 px-4 rounded-xl shadow transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

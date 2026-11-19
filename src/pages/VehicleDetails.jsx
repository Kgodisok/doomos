import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Calendar,
  Gauge,
  Cpu,
  MapPin,
  Share2,
  Check,
  ShieldCheck,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  AlertCircle,
  Award
} from 'lucide-react'
import { getVehicleById } from '../data/vehicles'
import { formatPrice, formatMileage } from '../utils/format'

export default function VehicleDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const vehicle = getVehicleById(id)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [copied, setCopied] = useState(false)
  const [currentId, setCurrentId] = useState(id)

  if (currentId !== id) {
    setCurrentId(id)
    setActiveImageIdx(0)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!vehicle) {
    return (
      <div className="min-h-[70vh] bg-mist/30 py-20 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-line text-center shadow-card">
          <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-ink">Listing Not Found</h2>
          <p className="text-sm text-slate mt-2">
            The vehicle listing you are looking for has been removed, expired, or the ID is invalid.
          </p>
          <Link
            to="/browse"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-ink text-white text-sm font-semibold hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Browse Cars</span>
          </Link>
        </div>
      </div>
    )
  }

  const images = vehicle.images && vehicle.images.length > 0
    ? vehicle.images
    : ['/ford1.jpeg']

  const condition = vehicle.condition || 'Pre-Owned'

  // Pre-filled WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hello ${vehicle.seller.name}, I saw your listing for the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${condition}, ${formatPrice(vehicle.price)}) on DooMos Cars. Is it still available?`
  )
  const whatsappUrl = `https://wa.me/${vehicle.seller.whatsapp}?text=${whatsappText}`

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${vehicle.year} ${vehicle.make} ${vehicle.model} - DooMos Cars`,
          text: `Check out this ${vehicle.make} ${vehicle.model} on DooMos Cars for ${formatPrice(vehicle.price)}`,
          url,
        })
      } catch {
        // Ignored or cancelled by user
      }
    } else {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="bg-mist/30 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-ink transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-line hover:border-accent text-charcoal text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-slate" />
                <span>Share Listing</span>
              </>
            )}
          </button>
        </div>

        {/* Top Header Card */}
        <div className="bg-white rounded-2xl border border-line p-6 mb-8 shadow-card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
              <span className={`px-2.5 py-0.5 rounded-md text-white font-extrabold ${
                condition === 'Brand New' ? 'bg-emerald-600' : condition === 'Demo' ? 'bg-blue-600' : 'bg-charcoal'
              }`}>
                {condition}
              </span>
              <span className="text-slate">•</span>
              <span className="text-slate">{vehicle.year} Model</span>
              <span className="text-slate">•</span>
              <span className="text-slate">{vehicle.fuelType}</span>
              <span className="text-slate">•</span>
              <span className="text-slate">{vehicle.transmission}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">
              {vehicle.make} {vehicle.model}
            </h1>
            <div className="flex items-center gap-2 text-sm text-slate mt-1.5">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>{vehicle.location || `${vehicle.city}, ${vehicle.province}`}</span>
            </div>
          </div>

          <div className="text-left md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-line">
            <span className="text-xs uppercase tracking-wider text-slate font-bold block">Cash Price</span>
            <span className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
              {formatPrice(vehicle.price)}
            </span>
            <span className="text-xs font-semibold text-slate block mt-0.5">
              Est. Finance: ~R {Math.round((vehicle.price * 0.0215) / 10) * 10} /month
            </span>
          </div>
        </div>

        {/* Gallery & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Gallery + Details Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery Box */}
            <div className="bg-white rounded-2xl border border-line overflow-hidden shadow-card p-2 sm:p-3">
              {/* Main Photo */}
              <div className="relative aspect-[16/10] bg-ink rounded-xl overflow-hidden group">
                <img
                  src={images[activeImageIdx]}
                  alt={`${vehicle.make} ${vehicle.model} photograph ${activeImageIdx + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/ford1.jpeg'
                  }}
                />

                {/* Left/Right Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/75 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/75 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Photo Counter */}
                <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                  {activeImageIdx + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-24 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIdx === idx ? 'border-accent scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Specifications Matrix */}
            <div className="bg-white rounded-2xl border border-line p-6 shadow-card">
              <h3 className="text-base font-bold uppercase tracking-wider text-ink mb-6 pb-3 border-b border-line">
                Vehicle Specifications
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-mist/50 p-4 rounded-xl border border-line/60">
                  <div className="flex items-center gap-2 text-slate mb-1">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase">Condition</span>
                  </div>
                  <span className="text-base font-bold text-ink">{condition}</span>
                </div>

                <div className="bg-mist/50 p-4 rounded-xl border border-line/60">
                  <div className="flex items-center gap-2 text-slate mb-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase">Year</span>
                  </div>
                  <span className="text-base font-bold text-ink">{vehicle.year}</span>
                </div>

                <div className="bg-mist/50 p-4 rounded-xl border border-line/60">
                  <div className="flex items-center gap-2 text-slate mb-1">
                    <Gauge className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase">Mileage</span>
                  </div>
                  <span className="text-base font-bold text-ink">{formatMileage(vehicle.mileage)}</span>
                </div>

                <div className="bg-mist/50 p-4 rounded-xl border border-line/60">
                  <div className="flex items-center gap-2 text-slate mb-1">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase">Transmission</span>
                  </div>
                  <span className="text-base font-bold text-ink">{vehicle.transmission}</span>
                </div>
              </div>

              {/* Extra Specs row */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 border-b border-line">
                  <span className="text-xs text-slate block">Fuel Type</span>
                  <span className="text-sm font-bold text-ink">{vehicle.fuelType}</span>
                </div>
                <div className="p-3 border-b border-line">
                  <span className="text-xs text-slate block">Engine</span>
                  <span className="text-sm font-bold text-ink">{vehicle.engine || 'N/A'}</span>
                </div>
                <div className="p-3 border-b border-line">
                  <span className="text-xs text-slate block">Province</span>
                  <span className="text-sm font-bold text-ink">{vehicle.province}</span>
                </div>
                <div className="p-3 border-b border-line">
                  <span className="text-xs text-slate block">City</span>
                  <span className="text-sm font-bold text-ink">{vehicle.city}</span>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl border border-line p-6 shadow-card">
              <h3 className="text-base font-bold uppercase tracking-wider text-ink mb-4 pb-3 border-b border-line">
                Vehicle Details & History
              </h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {vehicle.description}
              </p>
            </div>

          </div>

          {/* Sidebar Column: Contact & Safety */}
          <div className="space-y-6 lg:sticky lg:top-28">
            
            {/* Seller Contact Box */}
            <div className="bg-white rounded-2xl border border-line p-6 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                Verified Seller
              </span>
              <h3 className="text-xl font-extrabold text-ink">{vehicle.seller.name}</h3>
              <p className="text-xs text-slate mt-0.5">Member on DooMos Cars since {vehicle.seller.memberSince || '2024'}</p>

              <div className="mt-6 space-y-3">
                {/* Direct WhatsApp Call-to-action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Direct Call / Contact button */}
                <a
                  href={`tel:${vehicle.seller.whatsapp}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-mist hover:bg-line text-charcoal font-semibold text-sm py-3 px-4 rounded-xl border border-line transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate" />
                  <span>Call Seller (+{vehicle.seller.whatsapp})</span>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-line text-xs text-slate space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Seller identity verified on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Viewing available in {vehicle.city}</span>
                </div>
              </div>
            </div>

            {/* Buyer Safety Tips */}
            <div className="bg-ink text-white rounded-2xl p-6 border border-white/10 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-bold text-sm tracking-wide uppercase">DooMos Safety Standards</h4>
              </div>
              <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed list-disc list-inside">
                <li>Never send a deposit or holding fee prior to inspecting the vehicle in person.</li>
                <li>Verify vehicle registration papers (RC1 document) and matching VIN stamped on vehicle.</li>
                <li>Schedule viewings at public, secure locations or authorized dealerships.</li>
                <li>Transfer funds safely via instant verified EFT once paperwork is inspected.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

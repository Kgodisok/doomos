import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, X, CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react'
import { BRANDS, PROVINCES, PROVINCE_CITIES, CONDITIONS } from '../data/vehicles'

const CURRENT_YEAR = new Date().getFullYear()

export default function SellCar() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  // Form Fields
  const [formData, setFormData] = useState({
    make: '',
    customMake: '',
    model: '',
    year: CURRENT_YEAR,
    condition: 'Pre-Owned',
    price: '',
    mileage: '',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engine: '',
    province: 'Gauteng',
    city: 'Johannesburg',
    description: '',
    sellerName: '',
    whatsapp: '',
  })

  // Images state (simulated previews)
  const [imageFiles, setImageFiles] = useState([])
  const [imageError, setImageError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'province') {
        const availableCities = PROVINCE_CITIES[value] || []
        next.city = availableCities[0] || ''
      }
      return next
    })
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + imageFiles.length > 8) {
      setImageError('You can upload a maximum of 8 photographs.')
      return
    }
    setImageError('')
    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))
    setImageFiles((prev) => [...prev, ...newPreviews])
  }

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1200)
  }

  if (success) {
    return (
      <div className="min-h-[75vh] bg-mist/30 py-16 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-3xl border border-line p-8 sm:p-10 shadow-lift text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">Listing Submitted!</h2>
          <p className="text-slate text-sm sm:text-base mt-3 leading-relaxed">
            Your vehicle advertisement for the{' '}
            <strong className="text-ink">
              {formData.make === 'Other' ? formData.customMake : formData.make} {formData.model}
            </strong>{' '}
            has been queued for publishing on DooMos Cars.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-mist/60 text-xs text-slate border border-line text-left space-y-1">
            <p><strong>Note for client demo:</strong></p>
            <p>This frontend form captures condition (Pre-Owned / Brand New / Demo), technical specs, images, and WhatsApp credentials. In the next milestone, these fields will sync directly into the Supabase database.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                setSuccess(false)
                setImageFiles([])
              }}
              className="w-full py-3 px-4 bg-mist hover:bg-line text-charcoal font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Post Another Vehicle
            </button>
            <button
              type="button"
              onClick={() => navigate('/browse')}
              className="w-full py-3 px-4 bg-ink hover:bg-black text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Browse Listings
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-mist/30 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advertise with DooMos Cars</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Sell Your Car in South Africa
          </h1>
          <p className="text-sm sm:text-base text-slate mt-2 leading-relaxed">
            We buy and sell second-hand and brand-new cars. Reach serious buyers across Gauteng, Western Cape, KwaZulu-Natal, and beyond.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-line shadow-card p-6 sm:p-10 space-y-10">
          
          {/* SECTION 1: VEHICLE DETAILS */}
          <div className="space-y-6">
            <div className="border-b border-line pb-3">
              <h2 className="text-lg font-bold text-ink">1. Vehicle Information</h2>
              <p className="text-xs text-slate">Specify the condition, make, model, year, and primary specs.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Condition */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Condition *
                </label>
                <select
                  name="condition"
                  required
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                >
                  {CONDITIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Vehicle Make *
                </label>
                <select
                  name="make"
                  required
                  value={formData.make}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                >
                  <option value="">Select Manufacturer</option>
                  {BRANDS.map((b) => (
                    <option key={b.name} value={b.name}>{b.name}</option>
                  ))}
                  <option value="Other">Other Make...</option>
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Model & Derivative *
                </label>
                <input
                  type="text"
                  name="model"
                  required
                  placeholder="e.g. Ranger Wildtrak, Polo R-Line, Sportage GT"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Model Year *
                </label>
                <input
                  type="number"
                  name="year"
                  required
                  min="1980"
                  max={CURRENT_YEAR + 1}
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>

              {/* Engine Capacity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Engine Capacity *
                </label>
                <input
                  type="text"
                  name="engine"
                  required
                  placeholder="e.g. 2.0L Bi-Turbo, 1.6L Turbo, 5.0L V8"
                  value={formData.engine}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>

              {/* Transmission */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Transmission *
                </label>
                <select
                  name="transmission"
                  required
                  value={formData.transmission}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="Dual-Clutch / DSG">Dual-Clutch / DSG</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Fuel Type *
                </label>
                <select
                  name="fuelType"
                  required
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2: PRICING & MILEAGE */}
          <div className="space-y-6">
            <div className="border-b border-line pb-3">
              <h2 className="text-lg font-bold text-ink">2. Price & Mileage</h2>
              <p className="text-xs text-slate">Set your asking price in South African Rand (ZAR).</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Asking Price */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Asking Price (ZAR) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate">
                    R
                  </span>
                  <input
                    type="number"
                    name="price"
                    required
                    min="10000"
                    step="1000"
                    placeholder="e.g. 450000"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Mileage */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Current Mileage (km) *
                </label>
                <input
                  type="number"
                  name="mileage"
                  required
                  min="0"
                  step="500"
                  placeholder="e.g. 45000 (enter 0 for Brand New)"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: LOCATION & SELLER CONTACT */}
          <div className="space-y-6">
            <div className="border-b border-line pb-3">
              <h2 className="text-lg font-bold text-ink">3. Location & WhatsApp Seller Contact</h2>
              <p className="text-xs text-slate">Buyers will use this WhatsApp number to contact you directly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Province */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Province *
                </label>
                <select
                  name="province"
                  required
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                >
                  {PROVINCES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  City / Suburb *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Sandton, Cape Town, Umhlanga"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>

              {/* Seller Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Seller Full Name or Dealership *
                </label>
                <input
                  type="text"
                  name="sellerName"
                  required
                  placeholder="e.g. Sipho Khumalo"
                  value={formData.sellerName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  South African WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="e.g. 27821234567 or 082 123 4567"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: VEHICLE PHOTOGRAPHS */}
          <div className="space-y-4">
            <div className="border-b border-line pb-3">
              <h2 className="text-lg font-bold text-ink">4. Vehicle Photographs</h2>
              <p className="text-xs text-slate">Upload exterior, interior, and dashboard photos. (Max 8 photos)</p>
            </div>

            {/* Upload Box */}
            <div className="border-2 border-dashed border-line hover:border-accent/60 rounded-2xl p-6 text-center bg-mist/30 hover:bg-mist/60 transition-colors">
              <input
                type="file"
                id="photo-upload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-sm font-bold text-charcoal">Click to upload photos</span>
                <span className="text-xs text-slate mt-1">PNG, JPG, or WEBP up to 10MB each</span>
              </label>
            </div>

            {imageError && (
              <p className="text-xs text-red-600 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>{imageError}</span>
              </p>
            )}

            {/* Previews */}
            {imageFiles.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {imageFiles.map((item, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line group">
                    <img src={item.url} alt={`Upload ${idx + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1.5 right-1.5 p-1 rounded-full bg-charcoal/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {idx === 0 && (
                      <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-accent text-white font-bold px-2 py-0.5 rounded">
                        Cover Photo
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 5: VEHICLE DESCRIPTION */}
          <div className="space-y-4">
            <div className="border-b border-line pb-3">
              <h2 className="text-lg font-bold text-ink">5. Vehicle Description</h2>
              <p className="text-xs text-slate">Detail service history, condition, extras, and reason for selling.</p>
            </div>

            <textarea
              name="description"
              required
              rows={5}
              placeholder="Provide a complete summary of the vehicle condition (e.g. Pre-owned or brand new, full service history, spare keys, tyre condition, any recent services or extras fitted)..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-4 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm font-medium outline-none transition-colors"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate">
              <Info className="w-4 h-4 text-accent shrink-0" />
              <span>By publishing, you confirm ownership or authority to sell this vehicle.</span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-md transition-all hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
            >
              {submitting ? 'Submitting Listing...' : 'Publish Vehicle Ad'}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}


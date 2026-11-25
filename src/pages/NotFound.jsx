import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-warm-gray/40 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-gray-200 text-center shadow-lg space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-900 flex items-center justify-center mx-auto">
          <Flame className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-black font-serif text-gray-900">404 - Page Not Found</h2>
        <p className="text-xs text-gray-600 leading-relaxed">
          The butchery page you are looking for may have moved or no longer exists.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-900 text-amber-300 font-bold text-xs uppercase rounded-xl hover:bg-red-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

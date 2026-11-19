import React from 'react'

export function VehicleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-line shadow-card animate-pulse flex flex-col">
      <div className="aspect-[16/10] bg-gray-200" />
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="h-3 w-1/3 bg-gray-200 rounded" />
          <div className="h-5 w-4/5 bg-gray-200 rounded" />
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
          <div className="pt-3 border-t border-line grid grid-cols-3 gap-2">
            <div className="h-3 bg-gray-200 rounded" />
            <div className="h-3 bg-gray-200 rounded" />
            <div className="h-3 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="h-10 bg-gray-200 rounded-xl" />
      </div>
    </div>
  )
}

export function EmptyState({ title = 'No vehicles found', message = 'Try broadening your search criteria or resetting filters.', onReset }) {
  return (
    <div className="bg-white rounded-2xl border border-line p-12 text-center max-w-md mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-mist flex items-center justify-center mx-auto mb-4 text-slate">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-slate leading-relaxed">{message}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-white text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
        >
          Reset All Filters
        </button>
      )}
    </div>
  )
}


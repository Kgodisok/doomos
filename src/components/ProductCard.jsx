import React from 'react'
import { Plus, Check, Flame } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCart()

  const isInCart = cart.some((item) => item.id === product.id)
  const cartItem = cart.find((item) => item.id === product.id)

  return (
    <div className="bg-white rounded-2xl border border-amber-950/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-red-900/95 text-amber-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-amber-400/40 backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Popular Tag */}
        {product.popular && (
          <span className="absolute top-3 right-3 bg-amber-500 text-red-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow flex items-center gap-1">
            <Flame className="w-3 h-3 fill-red-950" />
            Top Pick
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-base group-hover:text-red-900 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Highlights */}
          {product.highlights && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.highlights.slice(0, 2).map((hl, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full"
                >
                  ✓ {hl}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Add to Order Slip */}
        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
              Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-red-900 font-serif">
                R {Number(product.price).toFixed(2)}
              </span>
              <span className="text-[11px] font-medium text-gray-500">
                {product.unit}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              isInCart
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-red-900 hover:bg-red-800 text-amber-300 shadow hover:scale-105'
            }`}
            title="Add to order inquiry list"
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added ({cartItem?.quantity})</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Slip</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

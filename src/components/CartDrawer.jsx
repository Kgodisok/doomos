import React, { useState } from 'react'
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { STORE_INFO } from '../data/uitkykData'

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [notes, setNotes] = useState('')

  if (!isCartOpen) return null

  // Generate formatted WhatsApp quotation message
  const handleWhatsAppOrder = () => {
    let itemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (${item.quantity}x) - R ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('%0A')

    const message = `*NEW ORDER INQUIRY - UITKYK VLEISMARK*%0A%0A*Customer Name:* ${encodeURIComponent(
      customerName || 'Customer'
    )}%0A*Phone:* ${encodeURIComponent(
      customerPhone || 'Not provided'
    )}%0A*Collection Date/Time:* ${encodeURIComponent(
      preferredDate || 'Earliest available'
    )}%0A%0A*ORDER ITEMS:*%0A${itemsText}%0A%0A*ESTIMATED TOTAL:* R ${totalPrice.toFixed(
      2
    )}%0A%0A*Notes/Special Cuts:* ${encodeURIComponent(
      notes || 'Standard packaging'
    )}%0A%0APlease confirm product availability and when this order will be ready for collection at Silverton.`

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-red-900 text-white flex items-center justify-between border-b border-red-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-red-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black uppercase font-serif tracking-tight">
                  Your Butchery Order Slip
                </h2>
                <p className="text-xs text-amber-200">
                  {totalItems} item{totalItems !== 1 ? 's' : ''} ready for WhatsApp quotation
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-red-200 hover:text-white hover:bg-red-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-900 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-bold text-gray-800 text-base">Your order slip is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Browse our award-winning biltong, champion boerewors, Karoo lamb, and bulk meat hampers to add to your order.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-900 text-amber-300 font-bold text-xs uppercase hover:bg-red-800 transition-colors cursor-pointer"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Selected Items
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-red-700 hover:text-red-900 font-semibold"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl border border-gray-100 bg-warm-gray/40 flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg shrink-0 border border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-xs font-extrabold text-red-900">
                            R {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <span className="text-[10px] text-gray-500">
                            (R {Number(item.price).toFixed(2)} {item.unit})
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 text-gray-600 rounded-l"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 text-gray-600 rounded-r"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors ml-auto"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Customer Details for the WhatsApp Message */}
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                  <h4 className="text-xs font-black uppercase text-gray-700 tracking-wider">
                    Collection Details (Optional)
                  </h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white focus:border-red-900 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number (e.g. 082 123 4567)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white focus:border-red-900 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Preferred Collection Day & Time"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white focus:border-red-900 outline-none"
                    />
                    <textarea
                      placeholder="Special cutting instructions (e.g. 3cm thick steaks, yellow fat on biltong, vacuum sealed)..."
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white focus:border-red-900 outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout via WhatsApp */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-warm-gray space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Estimated Total
                </span>
                <div className="text-right">
                  <span className="text-2xl font-black text-red-950 font-serif">
                    R {totalPrice.toFixed(2)}
                  </span>
                  <p className="text-[10px] text-gray-500">
                    *Final weight weighed at butchery counter
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Order to WhatsApp (012 804 3280)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct link to Uitkyk butchery team in Silverton</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

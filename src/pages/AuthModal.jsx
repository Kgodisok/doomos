import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail, User, CheckCircle } from 'lucide-react'

export default function AuthModal() {
  const [isRegister, setIsRegister] = useState(false)
  const [notice, setNotice] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setNotice(true)
    setTimeout(() => {
      navigate('/browse')
    }, 1500)
  }

  return (
    <div className="min-h-[80vh] bg-mist/30 py-16 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl border border-line p-8 shadow-lift">
        
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="h-16 w-auto flex items-center justify-center mx-auto mb-3">
            <img src="/logo.jpg" alt="DooMos Cars" className="h-14 w-auto object-contain rounded-xl p-1 shadow-sm border border-line" />
          </div>
          <h2 className="text-2xl font-black text-ink">
            {isRegister ? 'Join DooMos Cars' : 'Welcome to DooMos Cars'}
          </h2>
          <p className="text-xs text-slate mt-1 font-medium">
            We Buy and Sell Second Hand and New Cars
          </p>
        </div>

        {notice ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-sm font-bold text-emerald-900">Demo Sign-In Successful</h4>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Supabase Auth integration is planned for the upcoming milestone. Redirecting to listings...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-slate absolute left-3" />
                  <input
                    type="text"
                    required
                    placeholder="Sipho Khumalo"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate absolute left-3" />
                <input
                  type="email"
                  required
                  placeholder="seller@doomos.co.za"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate absolute left-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-mist/60 border border-line focus:border-accent focus:bg-white rounded-xl text-sm outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-xl transition-all shadow-md mt-2 cursor-pointer"
            >
              {isRegister ? 'Create Account' : 'Sign In to DooMos Cars'}
            </button>

            <div className="text-center pt-4 border-t border-line">
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-xs text-charcoal font-semibold hover:text-accent transition-colors cursor-pointer"
              >
                {isRegister
                  ? 'Already have an account? Sign In'
                  : 'New to DooMos Cars? Register an account'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  )
}


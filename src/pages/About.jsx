import { Link } from 'react-router-dom'
import { Target, HeartHandshake, MessageCircle } from 'lucide-react'

const HERO_BG =
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            About <span className="text-accent">DoomOS</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            One organised home for South Africa's car listings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink">Our Story</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
          <p>
            Every day, thousands of cars are bought and sold in South Africa through
            WhatsApp groups, Facebook groups and community pages. The listings are real,
            the prices are fair — but they're scattered, hard to search, and disappear
            within hours.
          </p>
          <p>
            DoomOS was born from that frustration. We bring these advertisements together
            into one organised, trustworthy platform where buyers can search, filter and
            compare vehicles — and contact sellers directly on WhatsApp.
          </p>
          <p>
            We're starting in South Africa with a simple promise: no middlemen, no hidden
            fees, and listings from real people in your community.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
            <Target size={26} className="text-accent-dark" />
            <h3 className="mt-4 text-lg font-bold text-ink">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Make every car listing in South Africa discoverable in one place, with the
              tools buyers need to decide with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
            <HeartHandshake size={26} className="text-accent-dark" />
            <h3 className="mt-4 text-lg font-bold text-ink">Our Values</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Trust, transparency and community. Sellers keep full control of their sale;
              buyers deal directly with real owners.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-ink px-8 py-12 text-center">
          <MessageCircle size={28} className="mx-auto text-accent" />
          <h3 className="mt-4 text-2xl font-extrabold text-white">Ready to find or sell your next car?</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/browse" className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:bg-white">
              Browse Cars
            </Link>
            <Link to="/sell" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-accent hover:text-accent">
              Advertise Your Car
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

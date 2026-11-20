import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Home, MessageCircle } from "lucide-react";
import { AGENT } from "../data/properties";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-ink">
              <Home size={18} />
            </span>
            <span className="text-lg font-extrabold">Maxwell Maphakela</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate">
            Professional Property Practitioner helping people find apartments,
            houses and townhouses to rent or buy across Pretoria, Gauteng.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-accent">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-slate hover:text-white" to="/properties">
                Browse Properties
              </Link>
            </li>
            <li>
              <Link
                className="text-slate hover:text-white"
                to="/list-your-property"
              >
                List Your Property
              </Link>
            </li>
            <li>
              <Link className="text-slate hover:text-white" to="/about">
                About Maxwell
              </Link>
            </li>
            <li>
              <Link className="text-slate hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-accent">
            Get In Touch
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-accent" />
              <a href={AGENT.phoneLink} className="hover:text-white">
                {AGENT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-accent" />
              <a
                href={AGENT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp me
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-accent" />
              <a href={AGENT.emailLink} className="break-all hover:text-white">
                {AGENT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-accent" /> {AGENT.area}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate">
        © 2026 Maxwell Maphakela · Property Practitioner · Pretoria, Gauteng.
        All rights reserved.
      </div>
    </footer>
  );
}

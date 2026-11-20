import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { AGENT } from "../data/properties";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const inputCls =
    "w-full rounded-lg border border-line py-2.5 px-3 text-sm outline-none focus:border-accent";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold text-ink">Get In Touch</h1>
          <p className="mt-2 leading-relaxed text-slate">
            Looking for a home in Pretoria? Call, WhatsApp or email Maxwell
            Maphakela and he'll start searching for you today.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={AGENT.phoneLink}
              className="flex items-center gap-4 rounded-2xl border border-line p-5 shadow-card transition hover:border-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Phone size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate">
                  Cellphone
                </p>
                <p className="font-bold text-ink">{AGENT.phone}</p>
              </div>
            </a>
            <a
              href={AGENT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line p-5 shadow-card transition hover:border-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate">
                  WhatsApp
                </p>
                <p className="font-bold text-ink">Chat instantly</p>
              </div>
            </a>
            <a
              href={AGENT.emailLink}
              className="flex items-center gap-4 rounded-2xl border border-line p-5 shadow-card transition hover:border-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Mail size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate">
                  Email
                </p>
                <p className="break-all font-bold text-ink">{AGENT.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line p-5 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MapPin size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate">
                  Area of Operation
                </p>
                <p className="font-bold text-ink">
                  Pretoria & surrounding areas, Gauteng
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 size={56} className="mx-auto text-accent" />
              <h2 className="mt-4 text-2xl font-extrabold text-ink">
                Message sent!
              </h2>
              <p className="mt-2 text-slate">
                Thanks {form.name.split(" ")[0] || "there"} — Maxwell will get
                back to you shortly. For urgent enquiries, call {AGENT.phone}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-ink">Send a Message</h2>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputCls}
              />
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Your cellphone number"
                className={inputCls}
              />
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you looking for? e.g. 2-bedroom apartment to rent in Menlyn under R10 000"
                className={inputCls}
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-white transition hover:bg-accent-dark"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

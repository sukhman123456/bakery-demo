import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { SocialActionButtons } from "../components/ui/social-action-buttons";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content: `Contact Karshni Baker's at ${BRAND.phone} or get directions to Shree Ram Market, Dinanagar, Punjab. Open daily 9:00 AM – 9:30 PM.`,
      },
      { property: "og:title", content: "Contact & Visit Karshni Baker's" },
      {
        property: "og:description",
        content: "Address, Google Maps directions, phone numbers, and WhatsApp ordering for Karshni Baker's.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Karshni Baker's! My name is ${name} (${phone}). Inquiry: ${message}`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setFormSent(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Contact Hero Header */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <img
          src={REAL_PHOTOS.bakeryDisplay}
          alt="Karshni Baker's Bakery Display"
          className="hero-bg-media opacity-25"
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold-light)] hover:underline mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Visit & Connect</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Find Us in <span className="italic text-[var(--color-gold-light)]">Dinanagar</span>
          </h1>
          <p className="text-base text-[var(--color-sand)] max-w-xl mx-auto font-light opacity-90 leading-relaxed">
            Conveniently situated at Shree Ram Market on JT Road. Visit our bakery or connect via phone or WhatsApp anytime.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info & Quick Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-sand)] shadow-sm">
                <h2 className="font-serif text-2xl text-[var(--color-chocolate)] mb-6 font-medium">
                  Bakery Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] text-[var(--color-gold)] border border-[var(--color-sand)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[var(--color-chocolate)] mb-1">
                        Our Address
                      </strong>
                      <p className="text-sm text-[#55443B] leading-relaxed mb-2">
                        {BRAND.address}
                      </p>
                      <a
                        href={BRAND.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-gold)] hover:underline"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] text-[var(--color-gold)] border border-[var(--color-sand)] flex items-center justify-center flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[var(--color-chocolate)] mb-1">
                        Direct Phone Contact
                      </strong>
                      <a
                        href={`tel:${BRAND.phoneRaw}`}
                        className="text-base font-semibold text-[var(--color-espresso)] hover:underline block"
                      >
                        {BRAND.phone}
                      </a>
                      <span className="text-xs text-[#705D53]">
                        Call for custom cake inquiries & pre-orders
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] text-[var(--color-gold)] border border-[var(--color-sand)] flex items-center justify-center flex-shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[var(--color-chocolate)] mb-1">
                        Hours of Operation
                      </strong>
                      <p className="text-sm text-[#55443B] font-medium">
                        {BRAND.hours}
                      </p>
                      <span className="text-xs text-[var(--color-gold)] font-medium">
                        {BRAND.days}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[var(--color-sand-light)] flex flex-wrap items-center gap-4">
                  <SocialActionButtons
                    size="md"
                    whatsappMessage="Hello Karshni Baker's! I'd like to ask a question."
                  />
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="btn btn-primary text-xs px-5 py-2.5"
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-sand)] shadow-sm">
                <h3 className="font-serif text-xl text-[var(--color-chocolate)] mb-2 font-medium">
                  Send a Quick Inquiry
                </h3>
                <p className="text-xs text-[#705D53] mb-6">
                  Have a question about a celebration cake or special design? Fill in below to transfer directly to WhatsApp.
                </p>

                {formSent ? (
                  <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-gold)] text-[var(--color-chocolate)] text-sm">
                    Thank you! Your message was prepared for WhatsApp chat.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#604F46] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] text-sm focus:outline-none focus:border-[var(--color-gold)] bg-[var(--color-cream)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#604F46] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 98885 XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] text-sm focus:outline-none focus:border-[var(--color-gold)] bg-[var(--color-cream)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#604F46] mb-1.5">
                        Your Celebration / Cake Requirements
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the occasion, preferred date, flavors or design..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] text-sm focus:outline-none focus:border-[var(--color-gold)] bg-[var(--color-cream)]"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full py-3 text-sm">
                      <Send size={15} />
                      <span>Send to WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Embedded Google Maps */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="bg-white rounded-3xl overflow-hidden border border-[var(--color-sand)] shadow-sm flex-grow min-h-[460px] flex flex-col">
                <div className="p-6 border-b border-[var(--color-sand-light)] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[var(--color-chocolate)] font-medium">
                      Google Maps Location
                    </h3>
                    <p className="text-xs text-[#705D53]">
                      Near Punjab & Sind Bank, Shree Ram Market
                    </p>
                  </div>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold text-xs px-3.5 py-1.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div className="flex-grow relative min-h-[400px]">
                  <iframe
                    title="Karshni Baker's Map"
                    src="https://maps.google.com/maps?q=4FMF%2BM3%2C%20Dinanagar%2C%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Landmark Highlight */}
              <div className="bg-white p-6 rounded-2xl border border-[var(--color-sand)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-[var(--color-chocolate)] block">
                    Landmark Navigation Tip
                  </strong>
                  <p className="text-xs text-[#55443B]">
                    Located on JT Road right next to Punjab & Sind Bank in Shree Ram Market. Ample street parking available for cake pickups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
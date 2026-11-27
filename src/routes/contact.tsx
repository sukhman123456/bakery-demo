import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Phone,
  MessageCircle,
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Send,
} from "lucide-react";
import { useState } from "react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & Visit — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Contact ${BRAND.name} at ${BRAND.phone} or get directions to ${BRAND.address}.`,
      },
      { property: "og:title", content: `Contact & Visit — ${BRAND.name}` },
      {
        property: "og:description",
        content: `Address, Google Maps directions, and ordering for ${BRAND.name} in Dinanagar.`,
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
  const [service, setService] = useState("Dine-in");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${BRAND.name}! My name is ${name} (Phone: ${phone}). Interested in: [${service}]. Message: ${message}`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Contact Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Contact"
          className="hero-bg-media opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180C06] via-transparent to-[#180C06]/80" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFC085] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="section-eyebrow !text-[#DFC085]">We Are Here For You</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Connect With <span className="italic text-[#DFC085]">Karshni Baker's</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Visit us at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab, or call to place orders for takeaway or doorstep delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I am reaching out from your website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Chat on WhatsApp</span>
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white !py-2.5 !px-5 !text-xs">
              <Phone size={14} className="text-[#DFC085]" />
              <span>Call: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Contact Info & Services */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="section-eyebrow">Location & Direct Contact</span>
                <h2 className="section-title">
                  Visit Us in <br />
                  <span className="section-title-italic">Dinanagar, Punjab</span>
                </h2>
                <div className="w-14 h-0.5 bg-[#C69A52] mb-6" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-[#180C06] text-[#DFC085] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-[#2A1A12] text-base">Address</h3>
                    <p className="text-sm text-[#55443B] font-light mt-0.5">{BRAND.address}</p>
                    <p className="text-xs text-[#B97942] font-medium mt-1">
                      Landmark: {BRAND.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-[#180C06] text-[#DFC085] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-[#2A1A12] text-base">Phone & Orders</h3>
                    <a
                      href={`tel:${BRAND.phoneRaw}`}
                      className="text-lg font-serif font-medium text-[#2A1A12] hover:text-[#B97942] transition-colors block mt-0.5"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-[#180C06] text-[#DFC085] flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-[#2A1A12] text-base">Available Services</h3>
                    <div className="flex items-center gap-2 mt-2 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#2A1A12] font-medium border border-[#E8D9C5]">
                        Dine-in
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#2A1A12] font-medium border border-[#E8D9C5]">
                        Takeaway
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#2A1A12] font-medium border border-[#E8D9C5]">
                        Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 justify-center !text-xs"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
                <Link
                  to="/reviews"
                  className="btn btn-cream flex-1 justify-center !text-xs"
                >
                  <span>⭐ Guest Reviews</span>
                </Link>
              </div>
            </div>

            {/* Right: Interactive Order Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8D9C5] shadow-xl">
                <span className="section-eyebrow">Direct Message</span>
                <h3 className="font-serif text-2xl font-medium text-[#2A1A12] mb-2">
                  Send an Inquiry / Cake Request
                </h3>
                <p className="text-xs text-[#6A4B3A] font-light mb-6">
                  Fill in your details below and we will connect via WhatsApp to confirm flavour, design & delivery.
                </p>

                {formSent ? (
                  <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#C69A52] text-center space-y-3">
                    <h4 className="font-serif text-lg font-medium text-[#2A1A12]">
                      Inquiry Launched!
                    </h4>
                    <p className="text-xs text-[#55443B]">
                      Your request has been forwarded to WhatsApp. If the chat window did not open, you can also call us directly at <strong>{BRAND.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSent(false)}
                      className="btn btn-primary !py-2 !px-4 !text-xs"
                    >
                      <span>Send Another Request</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A1A12] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FAF7F2]/60 focus:outline-none focus:border-[#C69A52] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A1A12] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 098765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FAF7F2]/60 focus:outline-none focus:border-[#C69A52] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A1A12] mb-1">
                        Service Type
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FAF7F2]/60 focus:outline-none focus:border-[#C69A52] text-sm"
                      >
                        <option value="Dine-in">Dine-in (Bakery Visit)</option>
                        <option value="Takeaway">Takeaway (Counter Pickup)</option>
                        <option value="Delivery">Delivery (Doorstep in Dinanagar)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A1A12] mb-1">
                        Your Order / Inquiry Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your cake flavor, design preference, event date, or café food order..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FAF7F2]/60 focus:outline-none focus:border-[#C69A52] text-sm resize-none"
                      />
                    </div>

                    <button type="submit" className="btn btn-gold w-full justify-center !text-xs !py-3">
                      <Send size={15} />
                      <span>Send via WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

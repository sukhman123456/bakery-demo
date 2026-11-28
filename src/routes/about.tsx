import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone, UtensilsCrossed, ShoppingBag, Truck } from "lucide-react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Discover ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab. Handcrafted celebration cakes, designer bakes, and artisanal delicacies.`,
      },
      { property: "og:title", content: `About ${BRAND.name}` },
      {
        property: "og:description",
        content: BRAND.aboutDescription,
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* About Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Showcase"
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

          <span className="section-eyebrow !text-[#DFC085]">Our Story & Standards</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            More Than a Bakery. <br />
            <span className="italic text-[#DFC085]">A Little World of Happiness.</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            {BRAND.aboutDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/cakes" className="btn btn-gold !py-2.5 !px-5 !text-xs">
              <span>Explore Cakes Studio</span>
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I would like to learn more about your bakery offerings.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white !py-2.5 !px-5 !text-xs"
            >
              <span>Chat with Baker</span>
            </a>
          </div>
        </div>
      </section>

      {/* Story Narrative & Real Photo */}
      <section className="section-wrapper py-16 sm:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-eyebrow">The Karshni Philosophy</span>
              <h2 className="section-title">
                Artisanal Patisserie & <br />
                <span className="section-title-italic">Celebration Art</span>
              </h2>

              <div className="w-14 h-0.5 bg-[#C69A52] mb-6" />

              <p className="text-[#3A281E] leading-relaxed">
                Located at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, <strong>Karshni Baker's</strong> was conceived to bring a refined, high-end bakery experience where celebration cakes are treated as true edible art.
              </p>

              <p className="text-[#5C453A] leading-relaxed font-light">
                From delicate hand-piped fondant ribbon bow cakes and romantic anniversary calendar date plaques to kids’ 3D theme creations, every dessert is individually shaped using pure dairy cream, fine chocolate, and genuine passion.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <UtensilsCrossed size={18} className="text-[#C69A52] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#2A1A12]">
                    <strong>Bespoke Customization:</strong> Tailored fondant, floral, and multi-tier cakes designed specifically for your event.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <ShoppingBag size={18} className="text-[#C69A52] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#2A1A12]">
                    <strong>Fresh Counter Pickup:</strong> Daily fresh bakes, pastries, muffins, and cookies at Shree Ram Market, Dinanagar.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm">
                  <Truck size={18} className="text-[#C69A52] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#2A1A12]">
                    <strong>Doorstep Delivery:</strong> Safe and careful celebration cake delivery across Dinanagar and nearby areas.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-primary text-xs">
                  <Phone size={14} />
                  <span>Call {BRAND.phone}</span>
                </a>
                <Link to="/cakes" className="btn btn-cream text-xs">
                  <span>Explore Cakes Studio</span>
                </Link>
                <Link to="/contact" className="btn btn-cream text-xs">
                  <span>Visit Us in Dinanagar</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C5A16A] bg-[#180C06] p-4 text-center">
                <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4">
                  <img
                    src={BRAND.founderPhoto}
                    alt={`${BRAND.founder} — ${BRAND.founderTitle}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#C5A16A] via-[#F7F0E5] to-[#C5A16A] text-[#392820]">
                  <p className="font-serif text-base font-bold uppercase tracking-wider">{BRAND.founder}</p>
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#493126]">{BRAND.founderTitle}</p>
                </div>
                <p className="text-xs text-[#EFE3D2]/80 mt-3 leading-relaxed px-2 font-light">
                  {BRAND.founderBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

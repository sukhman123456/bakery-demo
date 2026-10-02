import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content:
          "Discover the story behind Karshni Baker's in Dinanagar. Handcrafted cakes, custom celebration creations, and premium patisserie.",
      },
      { property: "og:title", content: "About Karshni Baker's" },
      {
        property: "og:description",
        content: "Authentic baking, celebration cakes, and confectionery in Dinanagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* About Hero Header */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <img
          src={REAL_PHOTOS.bakeryWide}
          alt="Karshni Baker's Showcase"
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

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Our Story & Standards</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Made With Passion. <br />
            <span className="italic text-[var(--color-gold-light)]">Crafted With Detail.</span>
          </h1>
          <p className="text-base text-[var(--color-sand)] max-w-xl mx-auto font-light opacity-90 leading-relaxed">
            Karshni Baker's creates handcrafted cakes and desserts for birthdays, anniversaries, celebrations and special occasions in Dinanagar.
          </p>
        </div>
      </section>

      {/* Story Narrative & Real Photo */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="section-eyebrow">The Karshni Philosophy</span>
              <h2 className="section-title">
                Artisanal Patisserie & <br />
                <span className="section-title-italic">Pure Taste</span>
              </h2>

              <div className="w-14 h-0.5 bg-[var(--color-gold)] mb-6" />

              <p className="text-[#55443B] leading-relaxed mb-5">
                Karshni Baker's was conceived with a clear vision: to bring a luxurious, refined bakery experience to Dinanagar, where celebratory centerpieces are treated as authentic works of edible art.
              </p>

              <p className="text-[#55443B] leading-relaxed mb-6">
                From delicate hand-piped miniature tulips and pristine fondant ribbon bows to complex 3D sports cars and custom milestone calendar date plaques, every dessert is individually shaped to celebrate your life's sweetest milestones.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[var(--color-chocolate)]">
                    <strong>Fresh Daily Baking:</strong> Every sponge and frosting is prepared from scratch with pure dairy creams and gourmet chocolate.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[var(--color-chocolate)]">
                    <strong>Bespoke Customization:</strong> Tailored fondant, floral, photo, and tier cakes designed specifically for your event.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[var(--color-chocolate)]">
                    <strong>Gender-Neutral Luxury:</strong> Sophisticated, elegant aesthetics suitable for milestone anniversaries, grand birthdays, and corporate celebrations.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-primary text-xs">
                  <Phone size={14} />
                  <span>Call Bakery: {BRAND.phone}</span>
                </a>
                <Link to="/cakes" className="btn btn-cream text-xs">
                  <span>Explore Cake Portfolio</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-sand)] bg-white">
                <img
                  src={REAL_PHOTOS.cakeTulipBow}
                  alt="Karshni Baker's Handcrafted Designer Cake"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
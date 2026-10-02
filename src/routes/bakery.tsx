import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, ShoppingBag, Sparkles } from "lucide-react";
import { BRAND, MENU_ITEMS, REAL_PHOTOS } from "../lib/bakery-data";
import { WhatsAppIcon } from "../components/ui/whatsapp-icon";

export const Route = createFileRoute("/bakery")({
  head: () => ({
    meta: [
      { title: "Fresh Bakery & Savoury Specials — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content:
          "Discover golden flaky patties, gourmet pastries, artisanal biscuits and baked goods at Karshni Baker's in Dinanagar.",
      },
      { property: "og:title", content: "Fresh Bakery Favourites — Karshni Baker's" },
      {
        property: "og:description",
        content: "Warm pastries, stuffed paneer patties, biscuits and bakery favourites in Dinanagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BakeryPage,
});

function BakeryPage() {
  const bakeryItems = MENU_ITEMS;

  const orderWhatsApp = (itemName: string) => {
    const text = `Hello Karshni Baker's! I would like to order / inquire about the bakery item: *${itemName}*.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Bakery Hero Header */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <img
          src={REAL_PHOTOS.bakeryWide}
          alt="Karshni Baker's Counter Display"
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

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Oven-Fresh Daily</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Fresh Bakery & <span className="italic text-[var(--color-gold-light)]">Artisanal Treats</span>
          </h1>
          <p className="text-base text-[var(--color-sand)] max-w-xl mx-auto mb-8 font-light opacity-90 leading-relaxed">
            Baked fresh daily in Dinanagar. From golden flaky paneer patties to European chocolate pastries and crunchy tea biscuits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => orderWhatsApp("Fresh Daily Bakes Box")}
              className="btn btn-whatsapp text-xs"
            >
              <WhatsAppIcon size={15} />
              <span>Order Fresh Bakes via WhatsApp</span>
            </button>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white text-xs">
              <Phone size={14} />
              <span>Call Bakery: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bakery Section */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bakeryItems.map((item) => (
              <div key={item.id} className="luxury-card group">
                <div className="luxury-card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="luxury-card-img"
                    style={{ objectPosition: item.imagePosition }}
                    loading="lazy"
                  />
                  {item.tag && <span className="luxury-card-tag">{item.tag}</span>}
                  {item.weight && (
                    <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md border border-white/10">
                      {item.weight}
                    </span>
                  )}
                </div>

                <div className="luxury-card-body">
                  <span className="text-[0.72rem] uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="luxury-card-title group-hover:text-[var(--color-gold)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="luxury-card-desc">{item.description}</p>

                  <div className="luxury-card-actions">
                    <button
                      onClick={() => orderWhatsApp(item.name)}
                      className="btn btn-whatsapp text-xs px-4 py-2 w-full justify-center"
                    >
                      <ShoppingBag size={14} />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
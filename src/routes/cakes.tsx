import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Phone,
  Sparkles,
  X,
  Palette,
  Send,
} from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsAppIcon } from "../components/ui/whatsapp-icon";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";
import {
  CAKE_PORTFOLIO,
  CAKE_CATEGORIES_LIST,
  type CakeCategory,
  type CakePortfolioItem,
} from "../lib/cake-portfolio";

export const Route = createFileRoute("/cakes")({
  head: () => ({
    meta: [
      { title: "Celebration Cakes Portfolio — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content:
          "Browse real handcrafted celebration cakes from Karshni Baker's in Dinanagar. Designer ribbon bow cakes, anniversary heart date plaques, and custom kids 3D theme cakes.",
      },
      { property: "og:title", content: "Celebration Cakes Portfolio — Karshni Baker’s" },
      {
        property: "og:description",
        content: "Explore Karshni Baker’s authentic cake portfolio for birthdays, anniversaries, and milestones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CakesPage,
});

const ALL_FILTER_CATEGORIES: CakeCategory[] = [
  "All",
  "Birthday Cakes",
  "Anniversary Cakes",
  "Custom Cakes",
  "Kids Cakes",
  "Designer Cakes",
  "Premium Cakes",
  "Theme Cakes",
  "Dessert Cakes",
];

function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>("All");
  const [lightboxCake, setLightboxCake] = useState<CakePortfolioItem | null>(null);

  const filteredCakes = useMemo(() => {
    if (selectedCategory === "All") return CAKE_PORTFOLIO;
    return CAKE_PORTFOLIO.filter(
      (item) => item.category === selectedCategory || item.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  const orderWhatsApp = (cake: CakePortfolioItem) => {
    const text = `Hello Karshni Baker's! I am interested in ordering the *"${cake.name}"* from your cake collection. Could you please share available flavors and weight options?`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <img
          src={REAL_PHOTOS.cakeTulipBow}
          alt="Karshni Baker's Designer Cake Portfolio"
          className="hero-bg-media opacity-20"
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold-light)] hover:underline mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Bespoke Collection</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Celebration Cakes <span className="italic text-[var(--color-gold-light)]">Portfolio</span>
          </h1>
          <p className="text-base text-[var(--color-sand)] max-w-xl mx-auto mb-8 font-light leading-relaxed opacity-90">
            Real handcrafted celebration cakes baked fresh in our Dinanagar bakery kitchen. Each design is customized to your exact celebratory moment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const text =
                  "Hello Karshni Baker's! I would like to inquire about a custom designer cake with my reference photo.";
                window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
              }}
              className="btn btn-gold text-xs"
            >
              <Palette size={15} />
              <span>Request Custom Cake Design</span>
            </button>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white text-xs">
              <Phone size={14} />
              <span>Call Bakery: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="max-w-[1320px] mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-[var(--color-sand)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[var(--color-gold-border)] bg-[var(--color-cream)]">
              <img
                src={REAL_PHOTOS.cakeRomanticHeart}
                alt="Karshni Cake Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-[var(--color-gold)] tracking-wider">
                  Handcrafted In Dinanagar
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
              </div>
              <h2 className="font-serif text-lg text-[var(--color-chocolate)] font-medium">
                Authentic Karshni Baker's Portfolio
              </h2>
              <p className="text-xs text-[#604F46]">
                All photographs represent genuine cakes handcrafted by our pastry team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#705D53]">Showing {filteredCakes.length} handcrafted creations</span>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {ALL_FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn text-xs px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--color-espresso)] text-white shadow-md border-[var(--color-espresso)]"
                    : "bg-white text-[var(--color-chocolate)] border-[var(--color-sand)] hover:border-[var(--color-gold)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCakes.map((cake) => (
              <article key={cake.id} className="luxury-card group">
                <div
                  className="luxury-card-img-wrap cursor-zoom-in"
                  onClick={() => setLightboxCake(cake)}
                >
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="luxury-card-img"
                    loading="lazy"
                  />
                  <span className="luxury-card-tag">{cake.tag}</span>
                  {cake.weight && (
                    <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md border border-white/10">
                      {cake.weight}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-semibold">
                    <Eye size={16} />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                <div className="luxury-card-body">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[0.72rem] uppercase tracking-widest text-[var(--color-gold)] font-semibold">
                      {cake.category}
                    </span>
                  </div>

                  <h3 className="luxury-card-title group-hover:text-[var(--color-gold)] transition-colors">
                    {cake.name}
                  </h3>

                  <p className="luxury-card-desc">{cake.description}</p>

                  <div className="p-3 bg-[var(--color-cream)] rounded-xl text-xs text-[#55443B] mb-5 border border-[var(--color-sand)]">
                    <strong className="text-[var(--color-espresso)] block mb-0.5">Inscription & Customization:</strong>
                    {cake.inscriptions}
                  </div>

                  <div className="luxury-card-actions">
                    <button
                      onClick={() => setLightboxCake(cake)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-chocolate)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      <Eye size={14} />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => orderWhatsApp(cake)}
                      className="btn btn-whatsapp text-xs px-4 py-2"
                      title="Order this cake design on WhatsApp"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Cake Banner */}
          <div className="mt-16 bg-white p-8 sm:p-12 rounded-3xl border border-[var(--color-sand)] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="section-eyebrow">Bespoke Creations</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-chocolate)] mb-2 font-medium">
                Have Something Special In Mind?
              </h3>
              <p className="text-sm text-[#55443B] leading-relaxed">
                Tell us your idea and we’ll turn it into a cake made especially for your celebration. Share your theme, colors, or reference photos directly on WhatsApp.
              </p>
            </div>
            <button
              onClick={() => {
                const text =
                  "Hello Karshni Baker's! I have a special custom cake idea in mind for an upcoming celebration.";
                window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
              }}
              className="btn btn-gold text-xs flex-shrink-0"
            >
              <WhatsAppIcon size={16} />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxCake && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxCake(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxCake(null)}
              className="lightbox-close-btn"
              aria-label="Close cake modal"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxCake.image}
              alt={lightboxCake.name}
              className="lightbox-img max-h-[70vh]"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-semibold">
                {lightboxCake.category} · {lightboxCake.tag}
              </span>
              <h4 className="font-serif text-2xl mt-1 mb-2">
                {lightboxCake.name}
              </h4>
              <p className="text-sm text-[var(--color-sand)] mb-4 opacity-90">
                {lightboxCake.description}
              </p>
              <button
                onClick={() => {
                  orderWhatsApp(lightboxCake);
                  setLightboxCake(null);
                }}
                className="btn btn-whatsapp text-xs px-6 py-2.5 mx-auto"
              >
                <WhatsAppIcon size={15} />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
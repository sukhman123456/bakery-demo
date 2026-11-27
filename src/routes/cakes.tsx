import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Eye,
  Phone,
  Sparkles,
  X,
  MessageCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";
import {
  CAKE_PORTFOLIO,
  type CakeCategory,
  type CakePortfolioItem,
} from "../lib/cake-portfolio";

export const Route = createFileRoute("/cakes")({
  head: () => ({
    meta: [
      { title: `Celebration Cakes Portfolio — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Browse handcrafted celebration cakes from ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab. Artisan chocolate drip cakes, designer ribbon bow cakes, anniversary heart plaques, and custom theme cakes.`,
      },
      { property: "og:title", content: `Celebration Cakes Portfolio — ${BRAND.name}` },
      {
        property: "og:description",
        content: `Explore ${BRAND.name} authentic cake portfolio for birthdays, anniversaries, and milestones.`,
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CakesPage,
});

const ALL_FILTER_CATEGORIES: CakeCategory[] = [
  "All",
  "Celebration Cakes",
  "Chocolate Cakes",
  "Designer Cakes",
  "Anniversary Cakes",
  "Kids Cakes",
  "Premium Cakes",
];

function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>("All");
  const [lightboxCake, setLightboxCake] = useState<CakePortfolioItem | null>(null);

  const filteredCakes = useMemo(() => {
    if (selectedCategory === "All") return CAKE_PORTFOLIO;
    return CAKE_PORTFOLIO.filter(
      (cake) => cake.category === selectedCategory || cake.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  const handleOrderWhatsApp = (cake: CakePortfolioItem) => {
    const text = `Hello ${BRAND.name}! I would like to inquire about ordering: *${cake.name}* (ID: ${cake.id}). Please share availability and customization options.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Celebration Cakes"
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

          <span className="section-eyebrow !text-[#DFC085]">Artisan Cake Studio</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Celebration Cakes <br />
            <span className="italic text-[#DFC085]">Crafted With Detail</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Every celebration cake is handcrafted to turn your milestone into a work of art. Order for counter pickup or safe delivery across Dinanagar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I would like to design a bespoke cake for an upcoming celebration.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Discuss Custom Cake Design</span>
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white !py-2.5 !px-5 !text-xs">
              <Phone size={14} className="text-[#DFC085]" />
              <span>Call: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 bg-[#180C06] border-y border-[#C69A52]/30 sticky top-[60px] sm:top-[68px] z-20 backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {ALL_FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#F0D69E] via-[#DFC085] to-[#B97942] text-[#1A0E07] shadow-lg font-bold"
                  : "bg-[#25140B] text-[#E6D2B8] border border-[#C69A52]/30 hover:border-[#DFC085] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cakes Showcase Grid */}
      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCakes.map((cake) => (
              <div key={cake.id} className="signature-card group">
                <div className="signature-card-img-wrap">
                  <img src={cake.image} alt={cake.name} className="signature-card-img" />
                  <span className="signature-badge">{cake.tag}</span>
                </div>

                <div className="signature-card-body">
                  <div className="flex items-center justify-between text-xs text-[#B97942] font-semibold uppercase mb-1">
                    <span>{cake.category}</span>
                    {cake.weight && <span>{cake.weight}</span>}
                  </div>

                  <h3 className="signature-card-title group-hover:text-[#B97942] transition-colors">
                    {cake.name}
                  </h3>

                  <p className="signature-card-desc">{cake.description}</p>

                  <div className="text-[11px] text-[#6A4B3A] italic bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E8D9C5] mb-4">
                    {cake.inscriptions}
                  </div>

                  <div className="pt-3 border-t border-[#E8D9C5] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setLightboxCake(cake)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#2A1A12] hover:text-[#B97942] font-medium cursor-pointer"
                    >
                      <Eye size={14} /> View Details
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOrderWhatsApp(cake)}
                      className="btn btn-gold !py-2 !px-4 !text-xs"
                    >
                      <MessageCircle size={14} />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxCake && (
        <div className="lightbox-backdrop" onClick={() => setLightboxCake(null)}>
          <div className="lightbox-content bg-[#1F110A] p-6 sm:p-8 rounded-3xl border border-[#C69A52]/40 max-w-xl text-left shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLightboxCake(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 border border-[#C69A52]/30 w-full">
              <img src={lightboxCake.image} alt={lightboxCake.name} className="w-full h-full object-cover" />
            </div>

            <span className="text-xs uppercase tracking-wider text-[#DFC085] font-semibold">
              {lightboxCake.tag} • {lightboxCake.category}
            </span>
            <h3 className="font-serif text-2xl font-medium text-white mt-1 mb-2">
              {lightboxCake.name}
            </h3>
            <p className="text-xs text-[#F5EDE2]/90 leading-relaxed font-light mb-3">
              {lightboxCake.description}
            </p>
            <p className="text-xs text-[#DFC085] font-medium mb-5 bg-white/5 p-2.5 rounded-xl border border-white/10">
              {lightboxCake.inscriptions}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  handleOrderWhatsApp(lightboxCake);
                  setLightboxCake(null);
                }}
                className="btn btn-gold !py-2.5 !px-5 !text-xs"
              >
                <MessageCircle size={15} />
                <span>Customize & Order via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setLightboxCake(null)}
                className="btn btn-outline-white !py-2.5 !px-4 !text-xs"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

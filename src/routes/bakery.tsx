import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { BRAND, BAKERY_PRODUCTS, REAL_PHOTOS, type BakeryProductItem } from "../lib/bakery-data";

export const Route = createFileRoute("/bakery")({
  head: () => ({
    meta: [
      { title: `Fresh Bakery & Pastries — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Discover golden butter croissants, fudge brownies, gourmet pastries, cupcakes, and artisan breads at ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab.`,
      },
      { property: "og:title", content: `Fresh Bakery & Pastries — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Oven-fresh bakery treats, croissants, pastries, and bread loaves in Dinanagar.",
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BakeryPage,
});

const BAKERY_CATEGORIES = [
  "All",
  "Gift Hampers",
  "Pastries",
  "Brownies",
  "Donuts",
  "Cupcakes",
  "Cookies",
  "Breads",
  "Desserts",
] as const;

function BakeryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const bakeryItems = useMemo(() => {
    const nonCakeProducts = BAKERY_PRODUCTS.filter((item) => item.category !== "Cakes");
    if (selectedCategory === "All") return nonCakeProducts;
    return nonCakeProducts.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const orderWhatsApp = (itemName: string, category: string) => {
    const text = `Hello ${BRAND.name}! I would like to inquire about ordering bakery treats: *${itemName}* (${category}). Please share fresh availability and order details.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Bakery Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Bakery Display"
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

          <span className="section-eyebrow !text-[#DFC085]">Oven-Fresh Daily</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Fresh Bakery & <span className="italic text-[#DFC085]">Artisanal Treats</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Baked fresh every morning at Shree Ram Market, Dinanagar. From golden butter croissants to dark Belgian fudge brownies, hand-rolled cookies, and artisanal breads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! What fresh bakery specials and pastries are available today?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Inquire Today's Fresh Bakes</span>
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
          {BAKERY_CATEGORIES.map((cat) => (
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

      {/* Product Grid */}
      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bakeryItems.map((item) => (
              <div key={item.id} className="signature-card group">
                <div className="signature-card-img-wrap">
                  <img src={item.image} alt={item.name} className="signature-card-img" />
                  <span className="signature-badge">{item.tag}</span>
                </div>

                <div className="signature-card-body">
                  <div className="flex items-center justify-between text-xs text-[#B97942] font-semibold uppercase mb-1">
                    <span>{item.category}</span>
                    <span>{item.dietary || "Vegetarian"}</span>
                  </div>

                  <h3 className="signature-card-title group-hover:text-[#B97942] transition-colors">
                    {item.name}
                  </h3>

                  <p className="signature-card-desc">{item.description}</p>

                  <div className="pt-3 border-t border-[#E8D9C5] flex items-center justify-between">
                    <span className="text-xs text-[#2A1A12] font-semibold">
                      {item.priceNote || "Fresh Daily"}
                    </span>

                    <button
                      type="button"
                      onClick={() => orderWhatsApp(item.name, item.category)}
                      className="btn btn-gold !py-1.5 !px-3.5 !text-xs"
                    >
                      <MessageCircle size={13} />
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

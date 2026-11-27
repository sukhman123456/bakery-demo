import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle, UtensilsCrossed, Coffee } from "lucide-react";
import { BRAND, FOOD_MENU_ITEMS, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/cafe")({
  head: () => ({
    meta: [
      { title: `Café Menu & Delights — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Enjoy barista coffee, gourmet shakes, steamed & fried momos, Hakka noodles, pasta, and pizza at ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab.`,
      },
      { property: "og:title", content: `Café Menu & Delights — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Comfortable dine-in, takeaway, and delivery café favourites in Dinanagar.",
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CafePage,
});

function CafePage() {
  const cafeCategories = [
    "Pastries",
    "Cupcakes",
    "Cookies",
    "Breads",
    "Desserts",
  ] as const;

  const orderWhatsApp = (itemName: string, category: string) => {
    const text = `Hello ${BRAND.name}! I would like to inquire about ordering café item: *${itemName}* (${category}). Please share details for Dine-in / Takeaway / Delivery.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.storeInterior}
          alt="Karshni Baker's Café Seating"
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

          <span className="section-eyebrow !text-[#DFC085]">Dine-in • Takeaway • Delivery</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Karshni Baker's <span className="italic text-[#DFC085]">Café Delights</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Relax in our warm bakery & café at Shree Ram Market, Dinanagar. Enjoy aromatic barista coffee, thick shakes, flaky pastries, and fresh savouries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I would like to inquire about the café menu for dine-in / takeaway.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Café Inquiry on WhatsApp</span>
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white !py-2.5 !px-5 !text-xs">
              <Phone size={14} className="text-[#DFC085]" />
              <span>Call: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Café Menu Sections */}
      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container space-y-14">
          {cafeCategories.map((cat) => {
            const items = FOOD_MENU_ITEMS.filter((item) => item.category === cat);
            return (
              <div key={cat} className="space-y-6">
                <div className="border-b border-[#E8D9C5] pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Coffee size={20} className="text-[#C69A52]" />
                    <h2 className="font-serif text-2xl font-medium text-[#2A1A12]">
                      {cat}
                    </h2>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#B97942] font-semibold">
                    Freshly Prepared
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="menu-item-card">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif text-lg font-medium text-[#2A1A12]">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8D9C5] text-[#2A1A12]">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#5C453A] leading-relaxed mb-4 font-light">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E8D9C5] flex items-center justify-between">
                        <span className="text-xs text-[#B97942] font-medium">
                          {item.dietary || "Chef Special"}
                        </span>

                        <button
                          type="button"
                          onClick={() => orderWhatsApp(item.name, cat)}
                          className="btn btn-gold !py-1.5 !px-3.5 !text-xs"
                        >
                          <MessageCircle size={13} />
                          <span>Order on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

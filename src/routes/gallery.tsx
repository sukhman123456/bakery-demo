import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { BRAND, GALLERY_ITEMS, REAL_PHOTOS, type GalleryPhoto } from "../lib/bakery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Visual Gallery — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Browse real photographs of ${BRAND.name} celebration cakes, chocolate creations, fresh croissants, pastries, and café ambience in Dinanagar.`,
      },
      { property: "og:title", content: `Visual Gallery — ${BRAND.name}` },
      {
        property: "og:description",
        content: `Authentic cake and bakery photography of ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab.`,
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = ["All", "Cakes", "Pastries & Bakes", "Ambience"];

  const filteredPhotos =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => {
          if (filter === "Cakes") return item.category === "Cakes";
          if (filter === "Pastries & Bakes") return item.category === "Pastries & Bakes";
          if (filter === "Ambience") return item.category === "Ambience";
          return true;
        });

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Gallery Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Gallery"
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

          <span className="section-eyebrow !text-[#DFC085]">Visual Feast</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Karshni Baker's <span className="italic text-[#DFC085]">Gallery</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Curated showcase of bespoke celebration cakes, flaky butter croissants, fudge brownies, and cozy patisserie ambience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/cakes" className="btn btn-gold !py-2.5 !px-5 !text-xs">
              <span>View Cake Portfolio</span>
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I saw your gallery and would like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-6 px-4 sm:px-6 bg-[#180C06] border-y border-[#C69A52]/30 sticky top-[60px] sm:top-[68px] z-20 backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                filter === opt
                  ? "bg-gradient-to-r from-[#F0D69E] via-[#DFC085] to-[#B97942] text-[#1A0E07] shadow-lg font-bold"
                  : "bg-[#25140B] text-[#E6D2B8] border border-[#C69A52]/30 hover:border-[#DFC085] hover:text-white"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container">
          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className={`gallery-item ${
                  photo.aspect === "portrait"
                    ? "aspect-portrait"
                    : photo.aspect === "wide"
                    ? "aspect-wide"
                    : ""
                }`}
              >
                <img src={photo.src} alt={photo.title} />
                <div className="gallery-item-overlay">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFC085] font-semibold mb-1">
                    {photo.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    {photo.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#DFC085] font-medium">
                    <Eye size={12} /> Click to expand
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="lightbox-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content bg-[#1F110A] p-6 sm:p-8 rounded-3xl border border-[#C69A52]/40 max-w-xl text-left shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 border border-[#C69A52]/30 w-full">
              <img src={activePhoto.src} alt={activePhoto.title} className="w-full h-full object-cover" />
            </div>

            <span className="text-xs uppercase tracking-wider text-[#DFC085] font-semibold">
              {activePhoto.category}
            </span>
            <h3 className="font-serif text-2xl font-medium text-white mt-1 mb-2">
              {activePhoto.title}
            </h3>
            <p className="text-xs text-[#F5EDE2]/90 leading-relaxed font-light mb-5">
              {activePhoto.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                      `Hello Karshni Baker's! I am interested in: ${activePhoto.title}`
                    )}`,
                    "_blank"
                  );
                  setActivePhoto(null);
                }}
                className="btn btn-gold !py-2.5 !px-5 !text-xs"
              >
                <MessageCircle size={15} />
                <span>Inquire on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
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

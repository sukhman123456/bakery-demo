import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, X } from "lucide-react";
import { useState } from "react";
import { BRAND, GALLERY_ITEMS, type GalleryPhoto } from "../lib/bakery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Artisanal Cake & Bakery Portfolio Gallery — Karshni Baker’s" },
      {
        name: "description",
        content:
          "Browse real photographs of Karshni Baker's handcrafted celebration cakes, artisanal patisserie displays, and bakery counter in Dinanagar.",
      },
      { property: "og:title", content: "Portfolio Gallery — Karshni Baker's" },
      {
        property: "og:description",
        content: "Authentic cake and bakery photography of Karshni Baker's in Dinanagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = ["All", "Celebration Cakes", "Kids & Themes", "Bakery Portfolio", "Artisanal Display"];

  const filteredPhotos =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Gallery Hero Header */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold-light)] hover:underline mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Artisanal Portfolio</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            The Karshni Baker’s <span className="italic text-[var(--color-gold-light)]">Gallery</span>
          </h1>
          <p className="text-base text-[var(--color-sand)] max-w-xl mx-auto font-light opacity-90 leading-relaxed">
            Real, authentic photographs of our handcrafted celebration cakes, customized themes, and bakery showcases in Dinanagar.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="section-wrapper">
        <div className="section-container">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`btn text-xs px-4 py-2 rounded-full transition-all ${
                  filter === opt
                    ? "bg-[var(--color-espresso)] text-white shadow-md border-[var(--color-espresso)]"
                    : "bg-white text-[var(--color-chocolate)] border-[var(--color-sand)] hover:border-[var(--color-gold)]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Masonry / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="luxury-card group cursor-zoom-in"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-sand-light)]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <span className="luxury-card-tag">{photo.category}</span>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs">
                    <Eye size={16} />
                    <span>View Larger</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs uppercase font-semibold text-[var(--color-gold)] tracking-wider mb-1 block">
                    {photo.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[var(--color-chocolate)] group-hover:text-[var(--color-gold)] transition-colors mb-2 font-medium">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55443B] leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="lightbox-close-btn"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="lightbox-img"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-semibold">
                {activePhoto.subtitle}
              </span>
              <h4 className="font-serif text-2xl mt-1 mb-2">
                {activePhoto.title}
              </h4>
              <p className="text-sm text-[var(--color-sand)] opacity-90">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
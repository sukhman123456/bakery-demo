import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { BRAND, TESTIMONIALS_LIST, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews & Ratings — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content: `Karshni Baker's is rated ${BRAND.rating} out of 5 stars by happy patrons in Dinanagar for fresh celebration cakes, custom designs, and fine confectionery.`,
      },
      { property: "og:title", content: `Customer Reviews — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Read public guest experiences and reviews for Karshni Baker's in Dinanagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Reviews Hero */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[var(--color-chocolate)] text-white text-center">
        <img
          src={REAL_PHOTOS.storeInterior}
          alt="Karshni Baker's"
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

          <span className="section-eyebrow !text-[var(--color-gold-light)]">Client Reflections</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            What Our <span className="italic text-[var(--color-gold-light)]">Guests Say</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex text-[var(--color-gold-light)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <strong className="text-2xl text-white font-serif">{BRAND.rating}</strong>
            <span className="text-[var(--color-sand)] text-sm opacity-90">from {BRAND.reviewCount} local reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_LIST.map((rev) => (
              <div
                key={rev.id}
                className="testimonial-card"
              >
                <div>
                  <span className="testimonial-occasion-tag block mb-4">
                    {rev.occasion}
                  </span>
                  <p className="testimonial-quote">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-sand-light)] flex items-center justify-between">
                  <div>
                    <strong className="testimonial-author-name block">{rev.author}</strong>
                    <span className="text-xs text-[#806E64]">{rev.city}</span>
                  </div>
                  <span className="text-[var(--color-gold)] text-xs font-semibold uppercase tracking-wider">
                    Verified Order
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Invitation */}
          <div className="mt-16 text-center bg-white p-8 sm:p-10 rounded-3xl border border-[var(--color-sand)] shadow-sm max-w-xl mx-auto">
            <h3 className="font-serif text-2xl text-[var(--color-chocolate)] mb-2 font-medium">Visited Us Recently?</h3>
            <p className="text-xs sm:text-sm text-[#55443B] mb-6 leading-relaxed">
              Your feedback inspires our pastry team to keep crafting unforgettable sweet moments. Share your celebration review on Google Maps!
            </p>
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-xs px-6 py-3"
            >
              <span>Write a Review on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
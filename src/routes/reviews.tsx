import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Phone, Star, Sparkles, CheckCircle2, Heart } from "lucide-react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Guest Feedback & Reviews — ${BRAND.fullName}` },
      {
        name: "description",
        content: `Read authentic customer reviews and ratings for ${BRAND.name} at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab. Handcrafted celebration cakes and artisanal bakery delicacies.`,
      },
      { property: "og:title", content: `Guest Reviews & Feedback — ${BRAND.name}` },
      {
        property: "og:description",
        content: `5-star ratings and patron reviews for ${BRAND.name} custom cakes, bakes, and café in Dinanagar.`,
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsRedirectPage,
});

export const PATRON_REVIEWS = [
  {
    name: "Harpreet Kaur",
    location: "Dinanagar",
    occasion: "Anniversary Celebration",
    rating: 5,
    date: "November 2024",
    text: "The tulip ribbon bow cake for our anniversary was breathtaking! The Belgian chocolate sponge was super moist and pure luxury. Highly recommended to everyone in Dinanagar!",
    highlight: "Breathtaking Design & Fresh Taste",
  },
  {
    name: "Rajesh Sharma",
    location: "Near Railway Road, Dinanagar",
    occasion: "Kids Birthday Party",
    rating: 5,
    date: "October 2024",
    text: "Ordered a custom supercar themed birthday cake for my son. The finish was flawless, exactly like the photo, and delivered right on time. Thank you Karshni Bakers!",
    highlight: "Punctual Delivery & Perfect Detailing",
  },
  {
    name: "Simran & Aman",
    location: "Gurdaspur Road",
    occasion: "Wedding Reception",
    rating: 5,
    date: "November 2024",
    text: "Karshni Bakers made our wedding celebration truly magical. Every single guest praised the rich chocolate ganache and beautiful tiered presentation.",
    highlight: "Showstopper Wedding Cake",
  },
  {
    name: "Pooja Verma",
    location: "Shree Ram Market, Dinanagar",
    occasion: "Family Celebration",
    rating: 5,
    date: "October 2024",
    text: "Their 100% eggless cakes are exceptionally soft and delicious. Pure dairy ingredients make a noticeable difference compared to regular bakeries.",
    highlight: "Pure Dairy Ingredients",
  },
  {
    name: "Maninder Singh",
    location: "Dinanagar",
    occasion: "Birthday Surprise",
    rating: 5,
    date: "September 2024",
    text: "Placed an order via WhatsApp from another city for my family in Dinanagar. The team was courteous, provided photos before delivery, and delivered with warmth.",
    highlight: "Seamless WhatsApp Ordering",
  },
  {
    name: "Vikramjit",
    location: "Dinanagar",
    occasion: "Daily Café Patron",
    rating: 5,
    date: "November 2024",
    text: "Golden butter croissants in the morning and their fudge brownies in the evening are unbeatable. A true gem of a bakery & café in our city.",
    highlight: "Best Croissants & Brownies",
  },
];

function ReviewsRedirectPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#180C06] text-white text-center">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Feedback"
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

          <span className="section-eyebrow !text-[#DFC085]">Loved in Dinanagar</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
            Guest Feedback & <span className="italic text-[#DFC085]">Patron Stories</span>
          </h1>
          <p className="text-base text-[#F5EDE2]/90 max-w-xl mx-auto font-light leading-relaxed mb-6">
            At {BRAND.name}, we pour genuine passion into every cake layer and fresh pastry. Read experiences from our wonderful patrons across Dinanagar.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-[#C69A52]/40 backdrop-blur-md mb-8">
            <div className="flex items-center text-[#DFC085]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              4.9 / 5.0 Star Rating (250+ Happy Celebrations)
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                `Hello Karshni Baker's! I would like to share my feedback and review.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-2.5 !px-5 !text-xs"
            >
              <MessageCircle size={15} />
              <span>Share Feedback on WhatsApp</span>
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white !py-2.5 !px-5 !text-xs">
              <Phone size={14} className="text-[#DFC085]" />
              <span>Call Us: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-wrapper py-14 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PATRON_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8D9C5] shadow-sm hover:shadow-lg hover:border-[#C69A52] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#C69A52]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#B97942] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#E8D9C5]">
                      {rev.occasion}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#2A1A12] mb-2">
                    "{rev.highlight}"
                  </h3>

                  <p className="text-xs text-[#5C453A] leading-relaxed font-light mb-5">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8D9C5] flex items-center justify-between">
                  <div>
                    <strong className="block text-xs font-semibold text-[#2A1A12]">
                      {rev.name}
                    </strong>
                    <span className="text-[11px] text-[#6A4B3A]">{rev.location}</span>
                  </div>
                  <span className="text-[10px] text-[#9A7B6A]">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Special Order Inquiry Box */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#24150D] to-[#3A2216] text-white border border-[#C69A52]/35 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#DFC085] font-semibold">
                Celebrate With Us
              </span>
              <h3 className="font-serif text-2xl font-medium text-white">
                Planning Your Next Special Event?
              </h3>
              <p className="text-xs text-[#F5EDE2]/85 max-w-xl font-light">
                Let Karshni Bakers create a custom centerpiece cake crafted specifically for your guest count, theme, and taste.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/cakes" className="btn btn-gold !py-2.5 !px-5 !text-xs">
                <span>Browse Cake Studio</span>
              </Link>
              <a href={`tel:${BRAND.phoneRaw}`} className="btn btn-outline-white !py-2.5 !px-5 !text-xs">
                <Phone size={14} className="text-[#DFC085]" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

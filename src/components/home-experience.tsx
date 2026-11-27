import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  BRAND,
  REAL_PHOTOS,
} from "../lib/bakery-data";
import { SignatureCakesSlider } from "./signature-cakes-slider";
import { CinematicBakeryExperience } from "./cinematic-bakery-experience";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureModalData {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  actionText: string;
  actionTag: string;
}

export function HomeExperience() {
  const [featureModal, setFeatureModal] = useState<FeatureModalData | null>(null);

  // GSAP ScrollTrigger Refs
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll-Triggered Cinematic Animations for Hero Section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // SECTION 1 — HERO EXIT ZOOM & FADE
        if (heroRef.current && heroBgRef.current) {
          gsap.to(heroBgRef.current, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });

          if (heroTextRef.current) {
            gsap.to(heroTextRef.current, {
              y: -50,
              opacity: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "65% top",
                scrub: 0.4,
              },
            });
          }
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleOrderWhatsApp = (itemName?: string, context?: string) => {
    const text = itemName
      ? `Hello Karshni Bakers! I would like to order / inquire about: *${itemName}* (${context || "Bakery Selection"}). Please share availability and customization options.`
      : `Hello Karshni Bakers! I would like to inquire about ordering handcrafted celebration cakes or bakery specials.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const HERO_FEATURES = [
    {
      id: "quality",
      title: "Premium Quality",
      tagline: "Only the best ingredients",
      icon: "medal",
      modal: {
        title: "Pure Ingredients & Artisan Quality",
        subtitle: "Baked Fresh Every Morning",
        description:
          "At Karshni Bakers, we never compromise on quality. We bake exclusively with 100% pure dairy butter, rich Belgian cocoa, farm-fresh dairy cream, and natural vanilla.",
        points: [
          "100% Pure Dairy Butter & Natural Cream",
          "Rich Belgian Dark Cocoa & Real Chocolate",
          "No Artificial Preservatives or Trans Fats",
          "Meticulous Cleanliness & Food Safety Standards",
        ],
        actionText: "Order Premium Treats on WhatsApp",
        actionTag: "Premium Quality Inquiry",
      },
    },
    {
      id: "custom",
      title: "Custom Cakes",
      tagline: "For every occasion",
      icon: "cake",
      modal: {
        title: "Bespoke Celebration & Designer Cakes",
        subtitle: "Tailored to Your Milestone",
        description:
          "From opulent wedding centerpieces to charming birthday theme cakes, our artisan bakers turn your sweetest dreams into edible art.",
        points: [
          "Custom Birthday, Anniversary & Wedding Cakes",
          "Trending Ribbon Bow, Drip & Cartoon Designs",
          "Sizes from 0.5 Kg to 10+ Kg multi-tier",
          "Custom Message Plaques & Ribbon Inscriptions",
        ],
        actionText: "Discuss Custom Cake Design",
        actionTag: "Custom Cake Booking",
      },
    },
    {
      id: "fresh",
      title: "Fast & Fresh",
      tagline: "On time, every time",
      icon: "truck",
      modal: {
        title: "Oven-Fresh Bakes & Punctual Delivery",
        subtitle: "Safe Handling & Prompt Timing",
        description:
          "Timing is everything for special celebrations. Your cake and treats are freshly finished right before your event, packed in reinforced luxury boxes.",
        points: [
          "Punctual Delivery across Dinanagar & nearby areas",
          "Swift Counter Pickup at Shree Ram Market",
          "Temperature-controlled safe transport",
          "Direct Kitchen Coordination via WhatsApp",
        ],
        actionText: "Inquire Delivery & Pickup Timing",
        actionTag: "Fast & Fresh Inquiries",
      },
    },
    {
      id: "love",
      title: "Made with Love",
      tagline: "Because you deserve the best",
      icon: "heart",
      modal: {
        title: "Made With Love • Crafted for Sweet Moments",
        subtitle: "Dinanagar's Trusted Bakery Family",
        description:
          "Every cake, pastry, and croissant from Karshni Bakers carries the warmth of genuine care. We pour passion into every layer so every bite becomes a beautiful memory.",
        points: [
          "Handcrafted with passion and personal care",
          "Family-friendly recipes perfected over years",
          "Special seasonal treats & festive hampers",
          "Dedicated customer service for every guest",
        ],
        actionText: "Explore Our Full Menu",
        actionTag: "Menu Inquiry",
      },
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#FAF7F2] text-[#2A1A12]">
      {/* ====================================================================
          SECTION 1 — MASTER HERO SECTION (OFFICIAL BAKERY ARTWORK)
          - 16:9 Cinematic presentation matching user's exact uploaded design
          - Interactive hotspots precisely over all options & buttons
          - Live animated dropdowns, glowing hover indicators, smooth actions
          ==================================================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative w-full h-[100dvh] min-h-[560px] bg-[#140803] overflow-hidden flex flex-col justify-between select-none"
      >
        {/* Full-Bleed Background Image & Atmospheric Lighting Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            ref={heroBgRef}
            src={REAL_PHOTOS.hero}
            alt="Karshni Bakers — Freshly Baked, Always Loved"
            className="w-full h-full object-cover object-[70%_center] sm:object-[66%_center] lg:object-center select-none will-change-transform"
          />

          {/* Top dark gradient overlay for crystal-clear navbar & logo contrast */}
          <div className="absolute inset-x-0 top-0 h-32 sm:h-44 bg-gradient-to-b from-[#120703]/90 via-[#120703]/50 to-transparent" />

          {/* Left subtle edge vignette to ensure zero background text leakage on mobile */}
          <div className="lg:hidden absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#140803]/90 to-transparent" />

          {/* Overall atmospheric warmth & contrast overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#140803]/95 via-[#140803]/30 to-transparent" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#140803]/45 via-transparent to-transparent" />

          {/* Mobile radial spotlight to make centered typography pop */}
          <div className="lg:hidden absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,9,4,0.2)_0%,_rgba(16,7,3,0.5)_100%)]" />
        </div>

        {/* Top Spacer: Reserves breathing room under the fixed transparent navbar */}
        <div className="relative z-10 pt-20 sm:pt-24 pointer-events-none" />

        {/* ================================================================
            DESKTOP VIEWPORT INTERACTIVE HOTSPOTS & FLOATING COUNTER BADGES
            (lg:block - maintains exact desktop 16:9 alignment & hotspots)
            ================================================================ */}
        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-auto">
          {/* Middle CTA: "Explore Our Menu →" */}
          <a
            href="#products"
            aria-label="Explore Our Menu"
            title="Explore Our Menu"
            className="absolute cursor-pointer rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:bg-white/10 hover:shadow-[0_0_28px_rgba(223,192,133,0.75)] animate-pulse hover:animate-none"
            style={{ left: "10.5%", top: "65.5%", width: "16%", height: "8.5%" }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("products");
            }}
          />

          {/* Middle CTA: "View Gallery 🖼️" */}
          <a
            href="#gallery"
            aria-label="View Photo Gallery"
            title="View Photo Gallery"
            className="absolute cursor-pointer rounded-full transition-all duration-300 hover:ring-2 hover:ring-[#DFC085] hover:bg-white/10 hover:shadow-[0_0_25px_rgba(223,192,133,0.6)]"
            style={{ left: "27.5%", top: "65.5%", width: "12.5%", height: "8.5%" }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
          />
        </div>

        {/* ================================================================
            MOBILE & TABLET CLEAN LUXURY BRANDING (1-Line Minimal & Kaint)
            - Replaced heavy multi-line stacked text with a single elegant line
            - Leaves the central artisan cake 100% visible, unobstructed & stunning
            - Rich luxury micro-animations: floating glow, golden text shimmer, light sheen sweep, live indicator
            ================================================================ */}
        <div
          ref={heroTextRef}
          className="lg:hidden relative z-20 flex-1 flex flex-col items-center justify-between py-10 px-4 text-center pointer-events-auto will-change-transform"
        >
          {/* Top: 1-Line Clean Luxury Brand Pill with Floating Glow & Continuous Gold Shimmer */}
          <div className="pt-2 animate-luxury-float-glow">
            <div className="relative overflow-hidden inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#180C05]/90 backdrop-blur-md border border-[#D9BFA2]/75 text-[#D9BFA2] text-xs font-serif tracking-[0.24em] uppercase shadow-[0_6px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(217,191,162,0.3)] select-none">
              {/* Animated Specular Light Beam sweeping across pill */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFF8E7]/25 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />

              <Sparkles size={12} className="text-[#DFC085] animate-sparkle-twinkle flex-shrink-0" />
              <span className="animate-gold-shimmer-text font-medium text-[11px] sm:text-xs tracking-[0.22em]">
                A Little Sweetness In Every Moment
              </span>
              <Sparkles size={12} className="text-[#DFC085] animate-sparkle-twinkle-delay flex-shrink-0" />
            </div>
          </div>

          {/* Ambient Center Spotlight Glow behind the cake */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-radial from-[#DFC085]/15 via-[#6B4435]/8 to-transparent blur-2xl animate-halo-pulse" />
          </div>

          {/* Bottom: Clean Luxury Actions with Micro-Interactions & Sheen */}
          <div className="pb-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("signature-cakes")}
              className="group relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D9BFA2] via-[#F8F3EA] to-[#D9BFA2] text-[#30251F] text-xs font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(217,191,162,0.45)] hover:shadow-[0_6px_28px_rgba(223,192,133,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Explore Cakes</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={() => handleOrderWhatsApp()}
              className="group relative px-5 py-2.5 rounded-full bg-[#30251F]/90 hover:bg-[#180C05] text-white border border-[#D9BFA2]/60 text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-[0_4px_20px_rgba(107,68,53,0.6)] flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <MessageCircle size={14} className="text-[#DFC085] transition-transform duration-300 group-hover:scale-110" />
              <span>Order Now</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Dock (Desktop Only — on mobile, hero photo expands edge-to-edge) */}
        <div className="hidden lg:block relative z-30 pointer-events-auto pb-0">
          <div className="w-[94%] max-w-[1400px] mx-auto rounded-t-3xl bg-[#1C1008]/92 backdrop-blur-xl border-t-2 border-x border-[#C69A52]/45 shadow-[0_-12px_40px_rgba(0,0,0,0.7)] py-3 px-6">
            <div className="grid grid-cols-4 items-center divide-x divide-[#C69A52]/25">
              {HERO_FEATURES.map((feat) => (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setFeatureModal(feat.modal)}
                  className="group px-4 py-1.5 flex items-center gap-3.5 text-left transition-all duration-300 hover:bg-white/5 rounded-2xl cursor-pointer"
                >
                  {/* Golden SVG Icon Tile */}
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#2D1B11] to-[#170B05] border border-[#DFC085]/40 text-[#DFC085] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#DFC085] group-hover:shadow-[0_0_15px_rgba(223,192,133,0.5)]">
                    {feat.icon === "medal" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    )}
                    {feat.icon === "cake" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4 2 2.5-2 4 2 2.5-2 4 2 2-1 2-1" />
                        <path d="M2 21h20" />
                        <path d="M7 8v3" />
                        <path d="M12 5v6" />
                        <path d="M17 8v3" />
                      </svg>
                    )}
                    {feat.icon === "truck" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="18.5" cy="17.5" r="2.5" />
                        <circle cx="5.5" cy="17.5" r="2.5" />
                        <path d="M15 6H3a1 1 0 0 0-1 1v9h3" />
                        <path d="M8 17h8" />
                        <path d="M15 17h1a2 2 0 0 0 2-2v-4h3l3 4v2a2 2 0 0 0-2 2h-1" />
                      </svg>
                    )}
                    {feat.icon === "heart" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col">
                    <span className="font-serif text-[14.5px] xl:text-[15.5px] font-semibold tracking-wide text-white transition-colors duration-200 group-hover:text-[#DFC085]">
                      {feat.title}
                    </span>
                    <span className="text-[11.5px] xl:text-[12px] text-[#E6D2B8]/80 font-light tracking-wide leading-tight mt-0.5">
                      {feat.tagline}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2 — SIGNATURE CAKES (Master Cinematic 5-Layer Showcase)
          - Blendy-smoothie inspired full-screen product presentation
          - Layer 1: Ambient flavour gradient & dynamic radial spotlight
          - Layer 2: Oversized editorial display typography (CHOCOLATE, RED VELVET, etc.)
          - Layer 3: Central isolated artisan cake with realistic contact shadows
          - Layer 4: Floating culinary ingredients with multi-depth parallax
          - Layer 5: Interactive navigation, 01/04 counter, direct WhatsApp ordering
          ==================================================================== */}
      <SignatureCakesSlider />

      {/* ====================================================================
          LUXURY MARQUEE RIBBON
          ==================================================================== */}
      <div className="w-full bg-[#6B4435] text-[#F3EBDD] py-3 px-4 border-y border-[#D9BFA2]/40 overflow-hidden select-none">
        <div className="flex items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase font-light text-center flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="text-[#D9BFA2]">✦</span> Freshly Baked Daily in Dinanagar
          </span>
          <span className="text-[#D9BFA2] opacity-60">•</span>
          <span className="flex items-center gap-1.5">
            100% Pure Dairy Butter
          </span>
          <span className="hidden sm:inline-block text-[#D9BFA2] opacity-60">•</span>
          <span className="hidden sm:flex items-center gap-1.5">
            Bespoke Theme & Wedding Cakes
          </span>
          <span className="text-[#D9BFA2] opacity-60">•</span>
          <span className="flex items-center gap-1.5">
            Shree Ram Market • Near Punjab & Sind Bank
          </span>
        </div>
      </div>

      {/* ====================================================================
          CINEMATIC SCROLL-CHOREOGRAPHED BAKERY EXPERIENCE
          - STAGE 01 — THE BAKERY MANIFESTO (280svh pinned, #241A12)
          - STAGE 02 — THE ART OF BAKING (260svh pinned, #E7E2D8, bottom-to-top wipe)
          - STAGE 03 — THE BAKERY COLLECTION (340svh pinned horizontal track, 6 cards)
          - STAGE 04 — THE SIGNATURE CAKE EXPERIENCE (420svh pinned, 4 phases, paper card)
          - STAGE 05 — MOMENTS MADE SWEETER (300svh pinned, 22 contour waves, 3 chapters)
          - BAND 01 — BAKERY FAVOURITES (editorial ruled list)
          - BAND 02 — FREQUENTLY ASKED QUESTIONS (native details & summary)
          - BAND 03 — FINAL ORDER SECTION AND FOOTER
          ==================================================================== */}
      <CinematicBakeryExperience />

      {/* ====================================================================
          FEATURE DETAILS MODAL (For the 4 Hero Features)
          ==================================================================== */}
      {featureModal && (
        <div
          className="lightbox-backdrop"
          onClick={() => setFeatureModal(null)}
        >
          <div
            className="lightbox-content bg-[#1F110A] p-6 sm:p-8 rounded-3xl border border-[#C69A52]/50 max-w-lg text-left shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFeatureModal(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              aria-label="Close Modal"
            >
              <X size={22} />
            </button>

            <span className="text-[11px] uppercase tracking-wider text-[#DFC085] font-semibold">
              {featureModal.subtitle}
            </span>
            <h3 className="font-serif text-2xl font-medium text-white mt-1 mb-3">
              {featureModal.title}
            </h3>
            <p className="text-xs text-[#F5EDE2]/90 leading-relaxed font-light mb-5">
              {featureModal.description}
            </p>

            <div className="space-y-2.5 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
              {featureModal.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5EDE2]">
                  <CheckCircle2 size={15} className="text-[#DFC085] flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  handleOrderWhatsApp(featureModal.title, featureModal.actionTag);
                  setFeatureModal(null);
                }}
                className="btn btn-gold !py-2.5 !px-5 !text-xs"
              >
                <MessageCircle size={15} />
                <span>{featureModal.actionText}</span>
              </button>
              <button
                type="button"
                onClick={() => setFeatureModal(null)}
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

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// FLOATING INGREDIENTS VECTOR ARTWORK
// Realistic, appetizing isolated culinary objects with depth & lighting
// ============================================================================

function ChocolateChunk({ size = 40, rotation = 15 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
    >
      <path
        d="M10 25L28 8L50 18L52 38L32 52L12 42L10 25Z"
        fill="url(#chocoFacet1)"
        stroke="#59321A"
        strokeWidth="1"
      />
      <path d="M28 8L32 30L10 25Z" fill="url(#chocoFacet2)" opacity="0.9" />
      <path d="M28 8L50 18L32 30Z" fill="url(#chocoFacet3)" opacity="0.85" />
      <path d="M50 18L52 38L32 30Z" fill="url(#chocoFacet4)" opacity="0.95" />
      <path d="M12 42L32 30L32 52Z" fill="url(#chocoFacet1)" opacity="0.9" />
      <circle cx="29" cy="18" r="1.5" fill="#DFC085" opacity="0.8" />
      <circle cx="38" cy="26" r="1" fill="#DFC085" opacity="0.6" />
      <defs>
        <linearGradient id="chocoFacet1" x1="10" y1="8" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A2614" />
          <stop offset="1" stopColor="#1C0A03" />
        </linearGradient>
        <linearGradient id="chocoFacet2" x1="10" y1="8" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#663920" />
          <stop offset="1" stopColor="#2E1408" />
        </linearGradient>
        <linearGradient id="chocoFacet3" x1="28" y1="8" x2="50" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#784224" />
          <stop offset="1" stopColor="#3B190A" />
        </linearGradient>
        <linearGradient id="chocoFacet4" x1="32" y1="18" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A1708" />
          <stop offset="1" stopColor="#140602" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ChocolateCurl({ size = 48, rotation = -20 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)]"
    >
      <path
        d="M8 35C12 20 28 10 42 16C52 20 54 32 46 42C38 52 22 52 14 42C10 38 12 28 20 22C26 18 34 20 38 26C42 32 38 38 32 38C26 38 24 32 26 28"
        stroke="url(#curlGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M10 34C14 22 28 12 40 17"
        stroke="#A86E45"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <defs>
        <linearGradient id="curlGrad" x1="8" y1="10" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B3A1E" />
          <stop offset="0.5" stopColor="#3D1E0E" />
          <stop offset="1" stopColor="#1E0B04" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FreshStrawberry({ size = 46, rotation = 25 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_10px_22px_rgba(180,20,50,0.45)]"
    >
      {/* Berry Body */}
      <path
        d="M30 52C22 45 10 34 10 22C10 14 18 10 26 12C28 12.5 30 14 30 14C30 14 32 12.5 34 12C42 10 50 14 50 22C50 34 38 45 30 52Z"
        fill="url(#berryGrad)"
      />
      {/* Gloss Specular Highlight */}
      <path
        d="M16 20C16 16 22 14 26 15"
        stroke="#FFAEC0"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Seeds */}
      <circle cx="20" cy="24" r="1" fill="#FFDE7A" />
      <circle cx="28" cy="22" r="1" fill="#FFDE7A" />
      <circle cx="36" cy="24" r="1" fill="#FFDE7A" />
      <circle cx="24" cy="32" r="1" fill="#FFDE7A" />
      <circle cx="32" cy="30" r="1" fill="#FFDE7A" />
      <circle cx="40" cy="32" r="1" fill="#FFDE7A" />
      <circle cx="26" cy="40" r="1" fill="#FFDE7A" />
      <circle cx="34" cy="38" r="1" fill="#FFDE7A" />
      <circle cx="30" cy="46" r="0.8" fill="#FFDE7A" />
      {/* Green Calyx Leaves */}
      <path
        d="M30 12C28 6 22 8 20 10C24 11 26 13 28 14C24 14 18 16 19 19C22 18 26 16 29 15C29 17 28 21 30 22C32 21 31 17 31 15C34 16 38 18 41 19C42 16 36 14 32 14C34 13 36 11 40 10C38 8 32 6 30 12Z"
        fill="#2E7D32"
      />
      <path d="M30 10V4" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <radialGradient id="berryGrad" cx="30%" cy="30%" r="70%">
          <stop stopColor="#FF2A4D" />
          <stop offset="0.6" stopColor="#C21232" />
          <stop offset="1" stopColor="#6B0516" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function FreshCherry({ size = 48, rotation = -15 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_12px_24px_rgba(120,8,25,0.6)]"
    >
      {/* Cherry Ball */}
      <circle cx="30" cy="36" r="18" fill="url(#cherryGrad)" />
      {/* Glossy Specular Crescent */}
      <path
        d="M20 28C22 24 28 22 34 23"
        stroke="#FFA0B5"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Stem Indentation & Stem */}
      <ellipse cx="30" cy="22" rx="4" ry="2" fill="#3D060F" />
      <path
        d="M30 22C32 14 38 8 46 4"
        stroke="#4A6B22"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="cherryGrad" cx="35%" cy="32%" r="68%">
          <stop stopColor="#D90429" />
          <stop offset="0.5" stopColor="#8A001A" />
          <stop offset="1" stopColor="#300008" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CaramelCube({ size = 44, rotation = 30 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_8px_18px_rgba(200,120,30,0.55)]"
    >
      <path
        d="M12 24L30 10L48 20L46 42L28 52L10 40L12 24Z"
        fill="url(#caramelTop)"
        stroke="#E69535"
        strokeWidth="1.2"
      />
      <path d="M30 10L48 20L30 32L12 24Z" fill="url(#caramelHighlight)" opacity="0.95" />
      <path d="M12 24L30 32L28 52L10 40Z" fill="url(#caramelSideL)" />
      <path d="M48 20L46 42L28 52L30 32Z" fill="url(#caramelSideR)" />
      {/* Golden Honey Drip Edge */}
      <path d="M30 32L30 44" stroke="#FFE4A0" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <defs>
        <linearGradient id="caramelTop" x1="10" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5A623" />
          <stop offset="1" stopColor="#9E5308" />
        </linearGradient>
        <linearGradient id="caramelHighlight" x1="12" y1="10" x2="48" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD369" />
          <stop offset="1" stopColor="#E0891A" />
        </linearGradient>
        <linearGradient id="caramelSideL" x1="10" y1="24" x2="30" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97706" />
          <stop offset="1" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="caramelSideR" x1="30" y1="20" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B45309" />
          <stop offset="1" stopColor="#451A03" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CocoaParticle({ size = 18, color = "#DFC085" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7" fill={color} opacity="0.85" />
      <circle cx="10" cy="10" r="10" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

// ============================================================================
// SIGNATURE SLIDES DATA STRUCTURE
// ============================================================================

interface IngredientItem {
  id: string;
  type: "choco-chunk" | "choco-curl" | "strawberry" | "cherry" | "caramel" | "cocoa-particle";
  size: number;
  rotation: number;
  left: string;
  top: string;
  depth: "fg" | "mg" | "bg"; // foreground (faster), midground, background (slower)
  floatClass: string;
  blurClass?: string;
}

interface SignatureSlideData {
  id: string;
  index: number;
  bgWord: string; // The giant oversized editorial background text
  cakeTitle: string;
  flavourBadge: string;
  description: string;
  image: string;
  price: string;
  themeColor: string;
  bgGradient: string;
  cakeShadowColor: string;
  ingredients: IngredientItem[];
}

const SIGNATURE_SLIDES: SignatureSlideData[] = [
  // SLIDE 01 — CHOCOLATE TRUFFLE
  {
    id: "chocolate-truffle",
    index: 0,
    bgWord: "CHOCOLATE",
    cakeTitle: "Belgian Noir Truffle",
    flavourBadge: "70% Valrhona Dark Cacao",
    description:
      "A rich tapestry of velvety dark ganache, moist Dutch cocoa sponge, and molten chocolate drip topped with fresh garden berries.",
    image: "/images/cakes/belgian-chocolate-truffle.webp",
    price: "From ₹999 / kg",
    themeColor: "#DFC085",
    bgGradient: "radial-gradient(ellipse at 50% 50%, #2E150A 0%, #170A04 65%, #0D0402 100%)",
    cakeShadowColor: "rgba(223, 192, 133, 0.28)",
    ingredients: [
      { id: "c1", type: "choco-chunk", size: 54, rotation: 18, left: "12%", top: "24%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "c2", type: "choco-curl", size: 50, rotation: -25, left: "78%", top: "18%", depth: "mg", floatClass: "animate-luxury-float-glow" },
      { id: "c3", type: "choco-chunk", size: 42, rotation: 40, left: "84%", top: "68%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "c4", type: "choco-curl", size: 38, rotation: 12, left: "16%", top: "72%", depth: "bg", floatClass: "animate-float-soft", blurClass: "blur-[1.5px]" },
      { id: "c5", type: "cocoa-particle", size: 16, rotation: 0, left: "28%", top: "16%", depth: "bg", floatClass: "animate-sparkle-twinkle" },
      { id: "c6", type: "cocoa-particle", size: 22, rotation: 0, left: "72%", top: "80%", depth: "mg", floatClass: "animate-sparkle-twinkle-delay" },
    ],
  },

  // SLIDE 02 — RED VELVET
  {
    id: "red-velvet",
    index: 1,
    bgWord: "RED VELVET",
    cakeTitle: "The Romantic Heart",
    flavourBadge: "Madagascar Vanilla & Cream Cheese",
    description:
      "Classic crimson velvet sponge layered with silky cream cheese frosting, handcrafted rose petals, and delicate celebration piping.",
    image: "/images/cakes/romantic-heart-cake.webp",
    price: "From ₹1,199 / kg",
    themeColor: "#FF5E7E",
    bgGradient: "radial-gradient(ellipse at 50% 50%, #351019 0%, #1F070E 65%, #100307 100%)",
    cakeShadowColor: "rgba(255, 94, 126, 0.25)",
    ingredients: [
      { id: "rv1", type: "strawberry", size: 56, rotation: 22, left: "14%", top: "20%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "rv2", type: "strawberry", size: 44, rotation: -30, left: "82%", top: "26%", depth: "mg", floatClass: "animate-luxury-float-glow" },
      { id: "rv3", type: "choco-curl", size: 46, rotation: 15, left: "80%", top: "70%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "rv4", type: "cocoa-particle", size: 24, rotation: 0, left: "18%", top: "68%", depth: "bg", floatClass: "animate-sparkle-twinkle", blurClass: "blur-[1px]" },
      { id: "rv5", type: "strawberry", size: 36, rotation: -12, left: "30%", top: "78%", depth: "mg", floatClass: "animate-float-soft" },
      { id: "rv6", type: "cocoa-particle", size: 18, rotation: 0, left: "68%", top: "14%", depth: "bg", floatClass: "animate-sparkle-twinkle-delay" },
    ],
  },

  // SLIDE 03 — BLACK FOREST
  {
    id: "black-forest",
    index: 2,
    bgWord: "BLACK FOREST",
    cakeTitle: "Grand Black Forest Gateau",
    flavourBadge: "Dark Cherry & Valrhona Chocolate",
    description:
      "An artisan showstopper featuring moist cocoa sponge, layered Kirsch cherries, dark chocolate shavings, and fresh Chantilly rosettes.",
    image: "/images/cakes/grand-black-forest.webp",
    price: "From ₹1,499 / kg",
    themeColor: "#DFC085",
    bgGradient: "radial-gradient(ellipse at 50% 50%, #2A0F15 0%, #16060A 65%, #0B0205 100%)",
    cakeShadowColor: "rgba(223, 192, 133, 0.24)",
    ingredients: [
      { id: "bf1", type: "cherry", size: 54, rotation: -15, left: "15%", top: "22%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "bf2", type: "choco-curl", size: 52, rotation: 35, left: "80%", top: "22%", depth: "mg", floatClass: "animate-luxury-float-glow" },
      { id: "bf3", type: "cherry", size: 46, rotation: 20, left: "82%", top: "72%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "bf4", type: "choco-chunk", size: 40, rotation: -20, left: "12%", top: "70%", depth: "bg", floatClass: "animate-float-soft", blurClass: "blur-[1.5px]" },
      { id: "bf5", type: "cocoa-particle", size: 20, rotation: 0, left: "26%", top: "15%", depth: "bg", floatClass: "animate-sparkle-twinkle" },
      { id: "bf6", type: "cocoa-particle", size: 22, rotation: 0, left: "70%", top: "82%", depth: "mg", floatClass: "animate-sparkle-twinkle-delay" },
    ],
  },

  // SLIDE 04 — BUTTERSCOTCH
  {
    id: "butterscotch",
    index: 3,
    bgWord: "BUTTERSCOTCH",
    cakeTitle: "Golden Butterscotch Crunch",
    flavourBadge: "Artisan Caramel & Praline Crunch",
    description:
      "Golden buttery caramel sponge layered with rich toffee glaze, crunchy hazelnut praline, and hand-spun chocolate ribbons.",
    image: "/images/cakes/golden-butterscotch-crunch.webp",
    price: "From ₹1,299 / kg",
    themeColor: "#F5A623",
    bgGradient: "radial-gradient(ellipse at 50% 50%, #361F09 0%, #1C0F04 65%, #0F0702 100%)",
    cakeShadowColor: "rgba(245, 166, 35, 0.28)",
    ingredients: [
      { id: "bs1", type: "caramel", size: 52, rotation: 28, left: "13%", top: "20%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "bs2", type: "caramel", size: 44, rotation: -22, left: "81%", top: "24%", depth: "mg", floatClass: "animate-luxury-float-glow" },
      { id: "bs3", type: "choco-curl", size: 48, rotation: 15, left: "84%", top: "70%", depth: "fg", floatClass: "animate-float-soft" },
      { id: "bs4", type: "caramel", size: 38, rotation: 45, left: "15%", top: "72%", depth: "bg", floatClass: "animate-float-soft", blurClass: "blur-[1.5px]" },
      { id: "bs5", type: "cocoa-particle", size: 22, rotation: 0, left: "28%", top: "14%", depth: "bg", floatClass: "animate-sparkle-twinkle" },
      { id: "bs6", type: "cocoa-particle", size: 20, rotation: 0, left: "72%", top: "80%", depth: "mg", floatClass: "animate-sparkle-twinkle-delay" },
    ],
  },
];

export function SignatureCakesSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef(false);
  const currentSlideIndexRef = useRef(0);
  currentSlideIndexRef.current = currentSlideIndex;

  // Direct WhatsApp Order Handler
  const handleOrder = (slide: SignatureSlideData) => {
    const text = `Hello Karshni Bakers! I would like to order / inquire about your signature *${slide.cakeTitle}* (${slide.flavourBadge}). Please share available weights and delivery timing for Dinanagar.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Preload all 4 optimized WebP cake images for instant lag-free switching
  useEffect(() => {
    SIGNATURE_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Navigate to target slide programmatically
  const goToSlide = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= SIGNATURE_SLIDES.length) return;
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentSlideIndex(targetIndex);

    // Sync ScrollTrigger position silently without competing smooth-scroll
    if (typeof window !== "undefined") {
      const st = ScrollTrigger.getById("signature-slider-pin");
      if (st && st.scroll && st.start && st.end) {
        const targetScroll = st.start + (targetIndex / (SIGNATURE_SLIDES.length - 1)) * (st.end - st.start);
        st.scroll(targetScroll);
      }
    }

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 420);
  };

  // GSAP ScrollTrigger Pinned Presentation with Snapping
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (!triggerRef.current || !containerRef.current) return;

        ScrollTrigger.create({
          id: "signature-slider-pin",
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${Math.max(1400, window.innerHeight * 1.5)}`,
          pin: true,
          scrub: 0.3,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (SIGNATURE_SLIDES.length - 1),
            duration: { min: 0.2, max: 0.4 },
            delay: 0.05,
            ease: "power2.out",
          },
          onUpdate: (self) => {
            if (isAnimatingRef.current) return;
            const progress = self.progress;
            const totalSlides = SIGNATURE_SLIDES.length;
            const rawIndex = progress * (totalSlides - 1);
            const roundedIndex = Math.min(totalSlides - 1, Math.max(0, Math.round(rawIndex)));
            if (roundedIndex !== currentSlideIndexRef.current) {
              setCurrentSlideIndex(roundedIndex);
            }
          },
        });
      });

      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Direct Mouse Wheel & Trackpad gesture navigation when viewing the section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isLocked = false;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      if (!inView) return;

      // When locked during transition, block rapid triggers to prevent stutter
      if (isLocked || isAnimatingRef.current) {
        if (
          (e.deltaY > 0 && currentSlideIndexRef.current < SIGNATURE_SLIDES.length - 1) ||
          (e.deltaY < 0 && currentSlideIndexRef.current > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 18) {
        // Scrolling DOWN
        if (currentSlideIndexRef.current < SIGNATURE_SLIDES.length - 1) {
          e.preventDefault();
          isLocked = true;
          goToSlide(currentSlideIndexRef.current + 1);
          setTimeout(() => {
            isLocked = false;
          }, 420);
        }
      } else if (e.deltaY < -18) {
        // Scrolling UP
        if (currentSlideIndexRef.current > 0) {
          e.preventDefault();
          isLocked = true;
          goToSlide(currentSlideIndexRef.current - 1);
          setTimeout(() => {
            isLocked = false;
          }, 420);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Keyboard Navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToSlide(currentSlideIndex + 1);
      } else if (e.key === "ArrowLeft") {
        goToSlide(currentSlideIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex]);

  // Touch Swipe Gesture for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const diffX = touchStartX.current - touch.clientX;
    const diffY = touchStartY.current - touch.clientY;

    // Detect horizontal swipe if larger than vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        goToSlide(currentSlideIndex + 1);
      } else {
        goToSlide(currentSlideIndex - 1);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeSlide = SIGNATURE_SLIDES[currentSlideIndex] ?? SIGNATURE_SLIDES[0]!;

  return (
    <div
      id="signature-cakes"
      ref={triggerRef}
      className="relative w-full select-none isolate"
    >
      {/* ====================================================================
          FULL-VIEWPORT IMMERSIVE PRODUCT SLIDER CONTAINER (~100vh)
          ==================================================================== */}
      <section
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[100dvh] min-h-[640px] max-h-[1100px] overflow-hidden flex flex-col justify-between transition-colors duration-1000 ease-out"
        style={{
          background: activeSlide.bgGradient,
        }}
        aria-label="Signature Cakes Showcase"
      >
        {/* ==================================================================
            LAYER 1 — ATMOSPHERIC LIGHTING & RADIAL HALO
            ================================================================== */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${activeSlide.cakeShadowColor} 0%, transparent 65%)`,
          }}
        />

        {/* ==================================================================
            TOP BAR: Subline Brand Tag & Slide Indicator Numbers (01 / 04)
            ================================================================== */}
        <header className="relative z-30 pt-16 sm:pt-20 px-6 sm:px-12 max-w-[1440px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-[#DFC085] font-semibold">
            <span className="text-[#DFC085]">✦</span>
            <span>Signature Collection</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-white/70">Artisan Haute Pâtisserie</span>
          </div>

          {/* Slide Counter (e.g. 01 / 04) */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#DFC085]">
              {`0${currentSlideIndex + 1}`}
            </span>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/60 text-xs font-mono">04</span>
          </div>
        </header>

        {/* ==================================================================
            LAYER 2 & 3 & 4 — THE IMMERSIVE SLIDE COMPOSITION
            ================================================================== */}
        <div className="relative flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-center overflow-hidden">
          {SIGNATURE_SLIDES.map((slide, sIdx) => {
            const isActive = sIdx === currentSlideIndex;
            const isLeft = sIdx < currentSlideIndex;
            const isRight = sIdx > currentSlideIndex;

            // Directional transform classes based on active state (GPU-only opacity & transform)
            let transformClass = "opacity-0 pointer-events-none";
            if (isActive) {
              transformClass = "opacity-100 pointer-events-auto z-20 scale-100 translate-x-0";
            } else if (isLeft) {
              transformClass = "opacity-0 pointer-events-none z-10 scale-95 -translate-x-8";
            } else if (isRight) {
              transformClass = "opacity-0 pointer-events-none z-10 scale-95 translate-x-8";
            }

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  slidesRef.current[sIdx] = el;
                }}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity transition-transform duration-400 ease-out will-change-[opacity,transform] ${transformClass}`}
              >
                {/* --------------------------------------------------------
                    LAYER 2 — OVERSIZED EDITORIAL BACKGROUND TYPOGRAPHY
                    Positioned BEHIND the cake with parallax depth
                    -------------------------------------------------------- */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
                  aria-hidden="true"
                >
                  <span
                    className="font-serif font-black tracking-tighter uppercase text-center leading-none whitespace-nowrap"
                    style={{
                      fontSize: "clamp(4.5rem, 16vw, 15rem)",
                      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(223, 192, 133, 0.04) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "-0.04em",
                      filter: "drop-shadow(0 4px 30px rgba(0,0,0,0.5))",
                    }}
                  >
                    {slide.bgWord}
                  </span>
                </div>

                {/* --------------------------------------------------------
                    LAYER 4 — FLOATING ISOLATED INGREDIENTS
                    Different depths, subtle floating movement & rotations
                    -------------------------------------------------------- */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  {slide.ingredients.map((ing) => (
                    <div
                      key={ing.id}
                      className={`absolute ${ing.floatClass} ${ing.blurClass || ""} transition-transform duration-1000`}
                      style={{
                        left: ing.left,
                        top: ing.top,
                        zIndex: ing.depth === "fg" ? 30 : ing.depth === "mg" ? 15 : 5,
                      }}
                    >
                      {ing.type === "choco-chunk" && (
                        <ChocolateChunk size={ing.size} rotation={ing.rotation} />
                      )}
                      {ing.type === "choco-curl" && (
                        <ChocolateCurl size={ing.size} rotation={ing.rotation} />
                      )}
                      {ing.type === "strawberry" && (
                        <FreshStrawberry size={ing.size} rotation={ing.rotation} />
                      )}
                      {ing.type === "cherry" && (
                        <FreshCherry size={ing.size} rotation={ing.rotation} />
                      )}
                      {ing.type === "caramel" && (
                        <CaramelCube size={ing.size} rotation={ing.rotation} />
                      )}
                      {ing.type === "cocoa-particle" && (
                        <CocoaParticle size={ing.size} color={slide.themeColor} />
                      )}
                    </div>
                  ))}
                </div>

                {/* --------------------------------------------------------
                    LAYER 3 — THE MAIN CAKE (CENTER OF THE SCREEN)
                    Realistic proportions, contact shadow, pedestal reflection
                    -------------------------------------------------------- */}
                <div className="relative z-20 flex flex-col items-center justify-center my-auto w-full max-w-lg px-4">
                  {/* The Cake Image Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                    {/* Ambient Glow behind Cake */}
                    <div
                      className="absolute inset-4 rounded-full transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${slide.cakeShadowColor} 0%, transparent 70%)`,
                        filter: "blur(20px)",
                      }}
                    />

                    {/* Multi-Tier Pedestal & Grounding Shadows */}
                    <div
                      className="absolute -bottom-6 sm:-bottom-8 w-[88%] h-12 rounded-[100%] pointer-events-none transition-transform duration-500 group-hover:scale-105 will-change-transform"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 45%, transparent 75%)",
                        filter: "blur(14px)",
                      }}
                    />
                    <div
                      className="absolute -bottom-3 sm:-bottom-4 w-[65%] h-6 rounded-[100%] pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.75) 40%, transparent 70%)",
                        filter: "blur(6px)",
                      }}
                    />

                    {/* Floating Artisan Cake Presentation (Seamless blend & contrast with background — zero circular border) */}
                    <div className="relative w-full h-full flex items-center justify-center group pointer-events-auto">
                      <img
                        src={slide.image}
                        alt={`${slide.cakeTitle} — Karshni Bakers`}
                        loading="eager"
                        decoding="async"
                        className="relative z-10 w-full h-full object-contain select-none transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  </div>

                  {/* --------------------------------------------------------
                      CAKE DETAILS: Title, Tagline & Direct Price
                      -------------------------------------------------------- */}
                  <div className="relative z-25 text-center mt-3 sm:mt-5 space-y-2 max-w-md">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#180A04]/90 backdrop-blur-md border text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "#DFC085", borderColor: "rgba(223, 192, 133, 0.45)" }}
                    >
                      <Sparkles size={11} className="text-[#DFC085]" />
                      <span>{slide.flavourBadge}</span>
                    </span>

                    <h3
                      className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] tracking-tight"
                      style={{ color: "#FFFFFF" }}
                    >
                      {slide.cakeTitle}
                    </h3>

                    <p
                      className="font-sans text-xs sm:text-sm leading-relaxed max-w-sm mx-auto line-clamp-2 px-2"
                      style={{ color: "rgba(245, 237, 226, 0.85)" }}
                    >
                      {slide.description}
                    </p>

                    <div className="pt-1 flex items-center justify-center gap-4">
                      <span
                        className="font-serif text-sm sm:text-base font-semibold"
                        style={{ color: "#DFC085" }}
                      >
                        {slide.price}
                      </span>
                      <span className="text-white/30">•</span>
                      <button
                        type="button"
                        onClick={() => handleOrder(slide)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F5DFB0] via-[#DFC085] to-[#B97942] text-[#140A04] text-xs font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(223,192,133,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <MessageCircle size={14} />
                        <span>Order This Cake</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================================
            LAYER 5 — INTERACTIVE NAVIGATION CONTROLS & INDICATORS
            ================================================================== */}
        <footer className="relative z-30 pb-6 sm:pb-8 px-6 sm:px-12 max-w-[1440px] w-full mx-auto flex items-center justify-between">
          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToSlide(currentSlideIndex - 1)}
              disabled={currentSlideIndex === 0}
              aria-label="Previous Cake"
              className={`p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer ${currentSlideIndex === 0
                ? "border-white/10 text-white/20 cursor-not-allowed"
                : "border-[#DFC085]/40 text-[#DFC085] bg-[#160A04]/80 backdrop-blur-md hover:border-[#DFC085] hover:text-white hover:scale-110 active:scale-95 shadow-md"
                }`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => goToSlide(currentSlideIndex + 1)}
              disabled={currentSlideIndex === SIGNATURE_SLIDES.length - 1}
              aria-label="Next Cake"
              className={`p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer ${currentSlideIndex === SIGNATURE_SLIDES.length - 1
                ? "border-white/10 text-white/20 cursor-not-allowed"
                : "border-[#DFC085]/40 text-[#DFC085] bg-[#160A04]/80 backdrop-blur-md hover:border-[#DFC085] hover:text-white hover:scale-110 active:scale-95 shadow-md"
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* 4 Clickable Slide Indicator Pills */}
          <nav className="flex items-center gap-2 sm:gap-2.5" aria-label="Slide Indicator Tabs">
            {SIGNATURE_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to ${slide.cakeTitle}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 cursor-pointer ${isActive
                    ? "w-8 sm:w-10 bg-gradient-to-r from-[#F5DFB0] via-[#DFC085] to-[#B97942] shadow-[0_0_12px_rgba(223,192,133,0.85)]"
                    : "w-2 sm:w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                />
              );
            })}
          </nav>

          {/* Swipe Hint on Mobile / Scroll Hint on Desktop */}
          <div className="text-[11px] text-[#DFC085]/75 font-light tracking-wider uppercase">
            <span className="hidden sm:inline">Scroll to slide • Click to explore</span>
            <span className="sm:hidden">Swipe or Tap ‹ ›</span>
          </div>
        </footer>
      </section>
    </div>
  );
}


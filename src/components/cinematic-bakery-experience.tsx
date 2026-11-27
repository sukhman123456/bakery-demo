import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, MessageCircle, MapPin, Instagram, Clock, Check, ChevronDown, Sparkles, Filter, Cake, Coffee, Cookie, Utensils, ShieldCheck, Heart, Quote, Star, ExternalLink } from "lucide-react";
import { BRAND, REAL_PHOTOS, BAKERY_PRODUCTS, type BakeryProductItem } from "../lib/bakery-data";
import { CakeCustomizerModal } from "./cake-customizer-modal";

// Helper: Official 4-Color Google G Icon SVG
function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Helper: Ornamental Frame Corner Bracket SVG
function FrameCorner({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={style} className={`text-[#DFC085] ${className}`}>
      <path d="M2 10V4C2 2.89543 2.89543 2 4 2H10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Helper: Word-Atom Splitting for per-atom staggered text reveals
function WordAtomText({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="word-wrap">
          <span
            className="word-atom"
            style={{ "--d": `${delayOffset + wIdx * 38}ms` } as React.CSSProperties}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

// ============================================================================
// 3D FLOATING INGREDIENT SVGs FOR LUXURY CAKE ATELIER
// ============================================================================
function ChocolateCurl({ size = 44, rotation = -20 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_8px_18px_rgba(44,26,17,0.35)]"
    >
      <path
        d="M8 35C12 20 28 10 42 16C52 20 54 32 46 42C38 52 22 52 14 42C10 38 12 28 20 22C26 18 34 20 38 26C42 32 38 38 32 38C26 38 24 32 26 28"
        stroke="url(#curlGradAtelier)"
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
        <linearGradient id="curlGradAtelier" x1="8" y1="10" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B3A1E" />
          <stop offset="0.5" stopColor="#3D1E0E" />
          <stop offset="1" stopColor="#1E0B04" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FreshStrawberry({ size = 42, rotation = 22 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_8px_20px_rgba(180,20,50,0.35)]"
    >
      <path
        d="M30 52C22 45 10 34 10 22C10 14 18 10 26 12C28 12.5 30 14 30 14C30 14 32 12.5 34 12C42 10 50 14 50 22C50 34 38 45 30 52Z"
        fill="url(#berryGradAtelier)"
      />
      <path
        d="M16 20C16 16 22 14 26 15"
        stroke="#FFAEC0"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="20" cy="24" r="1" fill="#FFDE7A" />
      <circle cx="28" cy="22" r="1" fill="#FFDE7A" />
      <circle cx="36" cy="24" r="1" fill="#FFDE7A" />
      <circle cx="24" cy="32" r="1" fill="#FFDE7A" />
      <circle cx="32" cy="30" r="1" fill="#FFDE7A" />
      <circle cx="40" cy="32" r="1" fill="#FFDE7A" />
      <path
        d="M30 12C28 6 22 8 20 10C24 11 26 13 28 14C24 14 18 16 19 19C22 18 26 16 29 15C29 17 28 21 30 22C32 21 31 17 31 15C34 16 38 18 41 19C42 16 36 14 32 14C34 13 36 11 40 10C38 8 32 6 30 12Z"
        fill="#2E7D32"
      />
      <path d="M30 10V4" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <radialGradient id="berryGradAtelier" cx="30%" cy="30%" r="70%">
          <stop stopColor="#FF2A4D" />
          <stop offset="0.6" stopColor="#C21232" />
          <stop offset="1" stopColor="#6B0516" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function FreshCherry({ size = 42, rotation = -15 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_10px_20px_rgba(120,8,25,0.4)]"
    >
      <circle cx="30" cy="36" r="18" fill="url(#cherryGradAtelier)" />
      <path
        d="M20 28C22 24 28 22 34 23"
        stroke="#FFA0B5"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <ellipse cx="30" cy="22" rx="4" ry="2" fill="#3D060F" />
      <path
        d="M30 22C32 14 38 8 46 4"
        stroke="#4A6B22"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="cherryGradAtelier" cx="35%" cy="32%" r="68%">
          <stop stopColor="#D90429" />
          <stop offset="0.5" stopColor="#8A001A" />
          <stop offset="1" stopColor="#300008" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CaramelCube({ size = 38, rotation = 30 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_6px_14px_rgba(200,120,30,0.35)]"
    >
      <path
        d="M12 24L30 10L48 20L46 42L28 52L10 40L12 24Z"
        fill="url(#caramelTopAtelier)"
        stroke="#E69535"
        strokeWidth="1.2"
      />
      <path d="M30 10L48 20L30 32L12 24Z" fill="url(#caramelHighlightAtelier)" opacity="0.95" />
      <path d="M12 24L30 32L28 52L10 40Z" fill="url(#caramelSideLAtelier)" />
      <path d="M48 20L46 42L28 52L30 32Z" fill="url(#caramelSideRAtelier)" />
      <defs>
        <linearGradient id="caramelTopAtelier" x1="10" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5A623" />
          <stop offset="1" stopColor="#9E5308" />
        </linearGradient>
        <linearGradient id="caramelHighlightAtelier" x1="12" y1="10" x2="48" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD369" />
          <stop offset="1" stopColor="#E0891A" />
        </linearGradient>
        <linearGradient id="caramelSideLAtelier" x1="10" y1="24" x2="30" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97706" />
          <stop offset="1" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="caramelSideRAtelier" x1="30" y1="20" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B45309" />
          <stop offset="1" stopColor="#451A03" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Stage 03 Verified Google Reviews Data
const GOOGLE_REVIEWS_DATA = [
  {
    id: "g-rev-1",
    author: "Harpreet Kaur",
    initials: "HK",
    avatarBg: "bg-[#4285F4]",
    location: "Dinanagar",
    badge: "Local Guide • 24 reviews",
    rating: 5,
    relativeTime: "2 weeks ago",
    occasion: "Anniversary Celebration",
    cakeName: "Luxury Tulip Ribbon Bow Cake",
    image: REAL_PHOTOS.cakeTulipBow,
    review:
      "The luxury tulip ribbon bow cake we ordered for our anniversary was breathtaking! The Belgian chocolate sponge was so soft, moist, and 100% pure butter. Everyone in the family kept asking where we ordered it from. Dinanagar’s best bakery without a doubt!",
    highlight: "Breathtaking Design & Fresh Taste",
  },
  {
    id: "g-rev-2",
    author: "Rajesh Sharma",
    initials: "RS",
    avatarBg: "bg-[#EA4335]",
    location: "Near Railway Road, Dinanagar",
    badge: "Verified Buyer",
    rating: 5,
    relativeTime: "3 weeks ago",
    occasion: "Son's 7th Birthday Party",
    cakeName: "McLaren Supercar Track Cake",
    image: REAL_PHOTOS.cakeSupercar,
    review:
      "We gave Manoj ji a photo reference for a supercar racing cake for my son's 7th birthday. When the cake arrived, it looked even better than the photo! Exceptional sugar-craft finish, delivered punctually at our home. Highly recommended!",
    highlight: "Punctual Delivery & Perfect Detailing",
  },
  {
    id: "g-rev-3",
    author: "Simran & Aman",
    initials: "SA",
    avatarBg: "bg-[#34A853]",
    location: "Gurdaspur Road, Dinanagar",
    badge: "Local Guide • 18 reviews",
    rating: 5,
    relativeTime: "1 month ago",
    occasion: "Grand Wedding Reception",
    cakeName: "Romantic Heart Calendar Cake",
    image: REAL_PHOTOS.cakeRomanticHeart,
    review:
      "Karshni Bakers made our wedding celebration truly magical. Every single guest praised the rich chocolate ganache and beautiful tiered presentation. Pure dairy butter makes a huge difference!",
    highlight: "Showstopper Wedding Cake",
  },
  {
    id: "g-rev-4",
    author: "Pooja Verma",
    initials: "PV",
    avatarBg: "bg-[#FBBC05]",
    location: "Shree Ram Market, Dinanagar",
    badge: "Verified Buyer",
    rating: 5,
    relativeTime: "1 month ago",
    occasion: "Pure Veg Milestone Birthday",
    cakeName: "Belgian Chocolate Drip Cake",
    image: "/images/cakes/cake-belgian-drip-clean.jpg",
    review:
      "Being pure vegetarian, we are very particular about eggless cakes. Karshni Bakers' eggless cakes are in a league of their own! Incredible fluffiness, pure dairy butter cream, and zero artificial sweetness. Our family's go-to bakery!",
    highlight: "100% Pure Eggless Perfection",
  },
  {
    id: "g-rev-5",
    author: "Maninder Singh",
    initials: "MS",
    avatarBg: "bg-[#8E24AA]",
    location: "Dinanagar (Ordered from Canada)",
    badge: "Local Guide • 42 reviews",
    rating: 5,
    relativeTime: "2 months ago",
    occasion: "Birthday Surprise from Overseas",
    cakeName: "Masha & Bear Character Cake",
    image: REAL_PHOTOS.cakeMashaBear,
    review:
      "I ordered a custom Masha & Bear cake on WhatsApp while sitting in Canada for my niece's birthday in Dinanagar. The team was courteous, provided photos before delivery, and delivered with warmth right on time!",
    highlight: "Seamless Overseas WhatsApp Delivery",
  },
  {
    id: "g-rev-6",
    author: "Vikramjit Chahal",
    initials: "VC",
    avatarBg: "bg-[#E65100]",
    location: "GT Road, Dinanagar",
    badge: "Verified Customer",
    rating: 5,
    relativeTime: "2 months ago",
    occasion: "Weekend Breakfast & Treats",
    cakeName: "Artisan Fruit Tarts & Croissants",
    image: REAL_PHOTOS.tarts,
    review:
      "Golden butter croissants in the morning and their fruit tarts in the evening are unbeatable. A true gem of an artisanal bakery in Dinanagar. Clean display counters and polite staff.",
    highlight: "Unbeatable Butter Pastries",
  },
];

// Stage 05 Chapters data
const CELEBRATION_CHAPTERS = [
  {
    num: "01",
    title: "BIRTHDAYS",
    description: "Celebrate milestone birthdays with bespoke handcrafted cakes and oven-fresh sweet treats.",
    image: REAL_PHOTOS.cakeRomanticHeart,
    badge: "BESPOKE THEMES",
  },
  {
    num: "02",
    title: "SPECIAL MOMENTS",
    description: "Make anniversaries, engagements and family celebrations unforgettable with edible luxury.",
    image: REAL_PHOTOS.cakeTulipBow,
    badge: "HAND-CRAFTED",
  },
  {
    num: "03",
    title: "EVERYDAY INDULGENCE",
    description: "Discover fresh morning croissants, savoury buns and teatime cookies baked every dawn.",
    image: REAL_PHOTOS.celebrationHamper,
    badge: "BAKED AT DAWN",
  },
];

// Band 01: Bakery Favourites list
const BAKERY_FAVOURITES_LIST = [
  {
    name: "Classic Butter Croissant & Cream Rolls",
    category: "Morning Pastry",
    desc: "Laminated with 100% pure butter for distinct honeycomb layers and crisp golden crust.",
    price: "₹45 – ₹60",
  },
  {
    name: "Handmade Pista Butter Cookies",
    category: "Artisan Biscuits",
    desc: "Slow-baked traditional Punjabi bakery biscuits packed with roasted pistachios and cardamom.",
    price: "₹180 / 400g",
  },
  {
    name: "Double Chocolate Walnut Brownies",
    category: "Specialty Bakes",
    desc: "Dense, molten center squares made with 70% dark cocoa and crunchy Kashmiri walnuts.",
    price: "₹90 / pc",
  },
  {
    name: "Artisan Garlic Herb Pull-Apart Loaf",
    category: "Fresh Bread",
    desc: "Infused with roasted garlic butter, fresh parsley and golden baked crust.",
    price: "₹65",
  },
  {
    name: "Seasonal Glazed Fresh Fruit Tarts",
    category: "French Patisserie",
    desc: "Crisp almond sable crust filled with velvety Madagascar vanilla bean pastry cream.",
    price: "₹75 / pc",
  },
  {
    name: "Gourmet Dark Chocolate Cake Pops",
    category: "Celebration Treats",
    desc: "Bite-sized chocolate cake truffles coated in crisp dark chocolate shell and gold dusting.",
    price: "₹40 / pc",
  },
];

// Band 02: FAQs data
const FAQ_ITEMS = [
  {
    q: "How can customers order cakes from Karshni Bakers?",
    a: "You can walk in directly to our bakery counter at Shree Ram Market, Dinanagar, or order instantly via WhatsApp (+91 98885 26072). Share your required date, weight, and any photo references, and our master bakers will confirm immediately.",
  },
  {
    q: "Can customers enquire about special custom celebration cakes?",
    a: "Yes! We specialize in custom designer cakes, milestone 3D themes, character cakes, and multi-tier wedding cakes. We recommend placing custom theme orders 24–48 hours in advance for handcrafted sugar-craft detailing.",
  },
  {
    q: "Where is Karshni Bakers & Cafe located?",
    a: "We are located at Shree Ram Market, Near Punjab & Sind Bank, Dinanagar GT Road, Dinanagar, Punjab 143531. Open 7 days a week from 9:00 AM to 9:30 PM.",
  },
  {
    q: "How can customers contact the bakery for party orders?",
    a: "You can call us directly on 098885 26072 or message us on WhatsApp. For bulk party snack boxes, custom gift hampers, or celebration orders, we provide dedicated tasting and packaging options.",
  },
];

export function CinematicBakeryExperience() {
  // Stage Refs for scroll engine
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage1CanvasRef = useRef<HTMLCanvasElement>(null);

  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage2CanvasRef = useRef<HTMLCanvasElement>(null);

  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage3TrackRef = useRef<HTMLDivElement>(null);

  const stage4Ref = useRef<HTMLDivElement>(null);
  const [stage4Phase, setStage4Phase] = useState(0);

  const stage5Ref = useRef<HTMLDivElement>(null);
  const stage5CanvasRef = useRef<HTMLCanvasElement>(null);
  const [stage5Chapter, setStage5Chapter] = useState(0);

  // Interactive Menu Section Category Filter State
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>("All");

  // Custom Cake Order Modal State
  const [customizerModalOpen, setCustomizerModalOpen] = useState(false);
  const [selectedCustomizerProduct, setSelectedCustomizerProduct] = useState<BakeryProductItem | null>(null);

  const openCustomizer = (product?: BakeryProductItem | null) => {
    setSelectedCustomizerProduct(product || null);
    setCustomizerModalOpen(true);
  };

  const filteredMenuItems = activeMenuCategory === "All"
    ? BAKERY_PRODUCTS
    : BAKERY_PRODUCTS.filter((item) => item.category === activeMenuCategory);

  // Direct WhatsApp contact handler
  const handleWhatsApp = (cakeName?: string) => {
    const text = cakeName
      ? `Hello Karshni Bakers! I would like to order / inquire about *${cakeName}*. Please share available sizes and delivery details for Dinanagar.`
      : `Hello Karshni Bakers! I am visiting your website and would like to place an order or inquire about fresh bakes.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // ==========================================================================
  // PER-ATOM INTERSECTION OBSERVER FOR DATA-REV ELEMENTS
  // ==========================================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll("[data-rev]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ==========================================================================
  // CENTRALIZED REQUEST ANIMATION FRAME SCROLL ENGINE
  // ==========================================================================
  useEffect(() => {
    let animationFrameId: number;
    let lastPhase = 0;
    let lastChapter = 0;

    // Helper to calculate progress for a stage [0, 1]
    const getStageProgress = (el: HTMLElement | null): number => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const stageHeight = rect.height;
      const windowHeight = window.innerHeight;
      const totalScrollable = stageHeight - windowHeight;
      if (totalScrollable <= 0) return 0;
      const progress = -rect.top / totalScrollable;
      return Math.min(1, Math.max(0, progress));
    };

    const updateScrollEngine = () => {
      // ----------------------------------------------------------------------
      // STAGE 01: DINANAGAR'S SIGNATURE CAKE BRAND (Warm Creamy Atmosphere)
      // ----------------------------------------------------------------------
      if (stage1Ref.current) {
        const p1 = getStageProgress(stage1Ref.current);
        const titleY = -p1 * 14; // 0% to -14%
        const titleScale = 1.0 - p1 * 0.05; // 1.0 to 0.95
        const titleAlpha = 1.0 - p1 * 0.65; // 1.0 to 0.35
        const cakeScale = 1.0 + p1 * 0.12; // 1.0 to 1.12
        const cakeRot = (p1 * 8) - 1.5; // -1.5deg to 6.5deg
        const cakeY = -p1 * 22; // 0px to -22px
        const ing1Y = -p1 * 45; // strawberry parallax
        const ing2Y = p1 * 38; // chocolate curl parallax
        const ing3Y = -p1 * 30; // cherry parallax
        const ing4Y = p1 * 32; // caramel parallax
        const watermarkX = (p1 - 0.5) * 50; // -25px to +25px
        const watermarkScale = 1.0 + p1 * 0.06;

        stage1Ref.current.style.setProperty("--bakery-title-y", `${titleY}%`);
        stage1Ref.current.style.setProperty("--bakery-title-scale", `${titleScale}`);
        stage1Ref.current.style.setProperty("--bakery-title-alpha", `${titleAlpha}`);
        stage1Ref.current.style.setProperty("--cake-scale", `${cakeScale}`);
        stage1Ref.current.style.setProperty("--cake-rot", `${cakeRot}deg`);
        stage1Ref.current.style.setProperty("--cake-y", `${cakeY}px`);
        stage1Ref.current.style.setProperty("--ing1-y", `${ing1Y}px`);
        stage1Ref.current.style.setProperty("--ing2-y", `${ing2Y}px`);
        stage1Ref.current.style.setProperty("--ing3-y", `${ing3Y}px`);
        stage1Ref.current.style.setProperty("--ing4-y", `${ing4Y}px`);
        stage1Ref.current.style.setProperty("--watermark-x", `${watermarkX}px`);
        stage1Ref.current.style.setProperty("--watermark-scale", `${watermarkScale}`);

        // Living Canvas: Delicate golden caramel specks, vanilla dust & wheat curves on cream
        const canvas = stage1CanvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const time = performance.now() * 0.001;

            // 1. Warm Golden Sparkles & Artisan Dust on Cream Background
            for (let i = 0; i < 38; i++) {
              const baseX = (i * 137.5) % w;
              const speed = (i % 3) * 0.35 + 0.35;
              const wave = Math.sin(time * speed + i) * 16;
              const curX = (baseX + wave + w) % w;
              const baseY = (i * 89.3) % h;
              const curY = (baseY - (time * 18 * speed) - (p1 * speed * 180) + h * 10) % h;
              const r = ((i % 4) + 1) * 0.85;

              const isGold = i % 2 === 0;
              ctx.fillStyle = isGold
                ? `rgba(198, 154, 82, ${0.28 + (i % 5) * 0.08})`
                : `rgba(185, 121, 66, ${0.18 + (i % 4) * 0.06})`;

              ctx.beginPath();
              ctx.arc(curX, curY, r, 0, Math.PI * 2);
              ctx.fill();
            }

            // 2. Flowing Golden Contour Curves on Cream
            for (let j = 0; j < 2; j++) {
              ctx.strokeStyle = j === 0 ? "rgba(239, 73, 60, 0.18)" : "rgba(198, 154, 82, 0.22)";
              ctx.lineWidth = 1.4;
              ctx.beginPath();
              const startX = w * (0.25 + j * 0.5);
              const drift = Math.sin(time * 0.6 + j * 2.0) * 20;
              ctx.moveTo(startX + drift, h * 0.95);
              ctx.bezierCurveTo(
                startX - 35 + drift, h * 0.65 - p1 * 40,
                startX + 35 - drift, h * 0.35 - p1 * 70,
                startX + drift, h * 0.05
              );
              ctx.stroke();
            }
          }
        }
      }

      // ----------------------------------------------------------------------
      // STAGE 02: THE ART OF BAKING (Clip-Path Wipe)
      // ----------------------------------------------------------------------
      if (stage2Ref.current) {
        const p2 = getStageProgress(stage2Ref.current);
        const wipePercent = Math.min(100, Math.max(0, p2 * 105)); // 0% to 100%
        const artScale = 1.0 - p2 * 0.04;

        stage2Ref.current.style.setProperty("--bakery-wipe", `${wipePercent}%`);
        stage2Ref.current.style.setProperty("--art-scale", `${artScale}`);

        // Canvas animation: rolling pin outlines & pastry dots
        const canvas = stage2CanvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            // Subtle bakery grid and minimal lines
            ctx.strokeStyle = "rgba(23, 23, 23, 0.07)";
            ctx.lineWidth = 1;
            for (let x = 60; x < w; x += 140) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, h);
              ctx.stroke();
            }

            // Floating pastry geometric icons
            ctx.strokeStyle = "rgba(239, 73, 60, 0.3)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(w * 0.2, h * 0.3 + p2 * 50, 24, 0, Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(w * 0.8, h * 0.6 - p2 * 40, 32, Math.PI, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      // ----------------------------------------------------------------------
      // STAGE 03: THE BAKERY COLLECTION (Horizontal Rail Translation)
      // ----------------------------------------------------------------------
      if (stage3Ref.current && stage3TrackRef.current) {
        const p3 = getStageProgress(stage3Ref.current);
        const track = stage3TrackRef.current;
        const availableWidth = window.innerWidth;
        const overflowWidth = Math.max(0, track.scrollWidth - availableWidth + 80);
        const translateX = -p3 * overflowWidth;

        // Apply horizontal translate strictly on desktop screens
        if (window.innerWidth >= 768) {
          track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        } else {
          track.style.transform = "none";
        }

        stage3Ref.current.style.setProperty("--rail-progress", `${p3 * 100}%`);
      }

      // ----------------------------------------------------------------------
      // STAGE 04: THE SIGNATURE CAKE EXPERIENCE (Packaging Reveal)
      // ----------------------------------------------------------------------
      if (stage4Ref.current) {
        const p4 = getStageProgress(stage4Ref.current);
        const currentPhase = Math.min(3, Math.floor(p4 * 4));

        if (currentPhase !== lastPhase) {
          lastPhase = currentPhase;
          setStage4Phase(currentPhase);
        }

        const cardAlpha = Math.min(1, p4 * 2.2);
        const cardEnter = (1 - Math.min(1, p4 * 1.8)) * 40; // 40px down to 0
        const cardScale = 0.94 + p4 * 0.08;
        const cardCut = Math.min(100, p4 * 100);
        const cardMeter = p4 * 100;
        const copyX = (1 - p4) * -20;

        stage4Ref.current.style.setProperty("--cake-card-alpha", `${cardAlpha}`);
        stage4Ref.current.style.setProperty("--cake-card-enter", `${cardEnter}px`);
        stage4Ref.current.style.setProperty("--cake-card-scale", `${cardScale}`);
        stage4Ref.current.style.setProperty("--cake-card-cut", `${cardCut}%`);
        stage4Ref.current.style.setProperty("--cake-card-meter", `${cardMeter}%`);
        stage4Ref.current.style.setProperty("--cake-copy-x", `${copyX}px`);
      }

      // ----------------------------------------------------------------------
      // STAGE 05: MOMENTS MADE SWEETER (22 Layered Contour Waves)
      // ----------------------------------------------------------------------
      if (stage5Ref.current) {
        const p5 = getStageProgress(stage5Ref.current);
        const currentChapter = Math.min(2, Math.floor(p5 * 3));

        if (currentChapter !== lastChapter) {
          lastChapter = currentChapter;
          setStage5Chapter(currentChapter);
        }

        const seasonY = -4 + p5 * 8; // -4% to 4%
        const seasonScale = 1.1 - p5 * 0.045; // 1.10 to 1.055

        stage5Ref.current.style.setProperty("--season-y", `${seasonY}%`);
        stage5Ref.current.style.setProperty("--season-scale", `${seasonScale}`);

        // 22 Layered Contour Lines Canvas
        const canvas = stage5CanvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const time = performance.now() * 0.001;

            // Render exactly 22 layered contours
            for (let i = 0; i < 22; i++) {
              ctx.beginPath();
              ctx.lineWidth = 1.2;
              const alpha = 0.04 + (i / 22) * 0.12;
              ctx.strokeStyle = i % 5 === 0 ? `rgba(239, 73, 60, ${alpha * 1.5})` : `rgba(23, 23, 23, ${alpha})`;

              const yOffset = (h / 23) * (i + 1);
              const freq = 0.0025 + i * 0.0003;
              const amp = 14 + i * 2.2;
              const phase = time * 0.5 + i * 0.35 + p5 * 3.0;

              for (let x = 0; x <= w; x += 15) {
                const y = yOffset + Math.sin(x * freq + phase) * amp;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(updateScrollEngine);
    };

    // Resize canvas elements on mount and window resize
    const resizeCanvases = () => {
      [stage1CanvasRef, stage2CanvasRef, stage5CanvasRef].forEach((ref) => {
        if (ref.current) {
          ref.current.width = ref.current.parentElement?.clientWidth || window.innerWidth;
          ref.current.height = ref.current.parentElement?.clientHeight || window.innerHeight;
        }
      });
    };

    window.addEventListener("resize", resizeCanvases);
    resizeCanvases();

    animationFrameId = requestAnimationFrame(updateScrollEngine);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvases);
    };
  }, []);

  return (
    <div className="w-full bg-[#E7E2D8] text-[#171717] font-body selection:bg-[#EF493C] selection:text-white">
      {/* ====================================================================
          FULL ARTISANAL BAKERY & CONFECTIONERY MENU SECTION
          Warm Luxury Ivory Surface (#FAF7F2) — Interactive Product Showcase
          - Dynamic Category Filtering: Cakes, Pastries, Cupcakes, Cookies, Breads, Desserts
          - Verified Bakery Product Cards with Real High-Res Photos
          - One-Click Instant WhatsApp Ordering with Pre-Filled Product Inquiries
          - Custom Milestone Cake Consultation Banner
          ==================================================================== */}
      <section
        id="menu"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF7F2] text-[#22130A] border-t border-[#DECDB8]/60 scroll-mt-20"
        aria-label="Karshni Bakery & Cafe Artisanal Menu"
      >
        {/* Anchor for products link */}
        <div id="products" className="-top-24 absolute pointer-events-none" />
        {/* Layer 1: Ambient Golden Halo Glow & Subtle Watermark */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(223,180,105,0.18)_0%,_rgba(185,121,66,0.05)_50%,_transparent_72%)] blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
            <span className="font-serif font-black text-[22vw] leading-none tracking-[0.16em] text-[#B97942] uppercase select-none">
              MENU
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3ECE0] border border-[#DECDB8] shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EF493C] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#7D5333]">
                ✦ OVEN-FRESH MENU & SPECIALTIES ✦
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#22130A] font-bold leading-tight tracking-tight">
              Explore Our Artisanal Menu
              <span className="block font-serif italic font-normal text-[#B87333] mt-1 text-2xl sm:text-4xl lg:text-5xl">
                Freshly Baked Every Morning in Dinanagar
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#6C503D] font-light max-w-xl mx-auto mt-3 leading-relaxed">
              From bespoke 3D designer celebration cakes to golden flaky pastries, crunchy cookies, and oven-hot artisan breads — prepared with 100% pure dairy butter and zero artificial preservatives.
            </p>

            {/* Custom Cake Order & Photo Upload Action Banner */}
            <div className="mt-8 mb-3 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#24130A] via-[#351C0F] to-[#24130A] text-white border border-[#C69A52]/50 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C69A52]/20 border border-[#DFC085]/40 flex items-center justify-center text-[#DFC085] flex-shrink-0">
                  <Sparkles size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                    Need a Custom Theme or Photo Cake?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#DFC085]/90 font-light">
                    Pick flavour, pounds, event date & upload your gallery reference photo!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openCustomizer(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#DFC085] via-[#C69A52] to-[#B97942] text-[#180C06] font-serif font-bold text-xs tracking-wide shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex-shrink-0"
              >
                <span>Upload Design & Order</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 max-w-4xl mx-auto">
              {[
                { id: "All", label: "🌟 All Delights", count: BAKERY_PRODUCTS.length },
                { id: "Cakes", label: "🎂 Celebration Cakes", count: BAKERY_PRODUCTS.filter(p => p.category === "Cakes").length },
                { id: "Pastries", label: "🥐 Pastries & Tarts", count: BAKERY_PRODUCTS.filter(p => p.category === "Pastries").length },
                { id: "Cupcakes", label: "🧁 Cupcakes", count: BAKERY_PRODUCTS.filter(p => p.category === "Cupcakes").length },
                { id: "Cookies", label: "🍪 Cookies & Biscuits", count: BAKERY_PRODUCTS.filter(p => p.category === "Cookies").length },
                { id: "Breads", label: "🍞 Artisan Breads", count: BAKERY_PRODUCTS.filter(p => p.category === "Breads").length },
                { id: "Desserts", label: "🍫 Brownies & Treats", count: BAKERY_PRODUCTS.filter(p => p.category === "Desserts").length },
              ].map((cat) => {
                const isActive = activeMenuCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveMenuCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-serif transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#D9A356] via-[#C98B35] to-[#B37021] text-[#1E110A] font-bold shadow-md transform -translate-y-0.5"
                        : "bg-white/85 border border-[#DECDB8] text-[#5A3F2D] hover:bg-white hover:border-[#C98B35] hover:text-[#22130A]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-[#1E110A]/20 text-[#1E110A]" : "bg-[#F3ECE0] text-[#7D5333]"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMenuItems.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-white border border-[#E8D9C5] shadow-[0_4px_20px_rgba(34,19,10,0.04)] hover:shadow-[0_12px_32px_rgba(185,121,66,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Product Image Area */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5EDE2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Top Contrast */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag (Top Left) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#1C0E07]/85 backdrop-blur-md text-[9.5px] font-mono tracking-widest uppercase text-[#DFC085] font-semibold shadow-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Dietary / Feature Tag Badge (Top Right) */}
                  {product.dietary && (
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-[9.5px] font-serif tracking-wider font-semibold shadow-xs ${
                          product.dietary === "Bestseller"
                            ? "bg-[#EF493C] text-white"
                            : product.dietary === "Chef Special"
                            ? "bg-[#C98B35] text-white"
                            : product.dietary === "Eggless Available"
                            ? "bg-[#2E7D32] text-white"
                            : "bg-[#180C06]/80 text-[#DFC085]"
                        }`}
                      >
                        ✦ {product.dietary}
                      </span>
                    </div>
                  )}

                  {/* Bottom Image Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                {/* Product Details Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#22130A] group-hover:text-[#B87333] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6C503D] font-light leading-relaxed mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Bottom Row: Price Note & Customization / WhatsApp Button */}
                  <div className="mt-5 pt-4 border-t border-[#F0E4D4] flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A6750]">
                        {product.category === "Cakes" ? "Cake Sizing" : "Availability"}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#B87333]">
                        {product.category === "Cakes" ? "✦ 1 to 5+ Pounds" : `✦ ${product.priceNote}`}
                      </span>
                    </div>

                    {product.category === "Cakes" ? (
                      <button
                        type="button"
                        onClick={() => openCustomizer(product)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A356] via-[#C98B35] to-[#B37021] text-[#1E110A] text-xs font-serif font-bold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <Sparkles size={14} className="flex-shrink-0" />
                        <span>Customize & Order Cake</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleWhatsApp(product.name)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A356] via-[#C98B35] to-[#B37021] text-[#1E110A] text-xs font-serif font-bold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <MessageCircle size={14} className="flex-shrink-0" />
                        <span>Order on WhatsApp</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bespoke Custom Milestone Cake Inquiry Banner */}
          <div className="mt-14 sm:mt-18 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#24130A] via-[#331A0D] to-[#1E0F07] text-white border border-[#C69A52]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#DFC085] font-semibold">
                <Sparkles size={14} />
                <span>BESPOKE DESIGNER & MILESTONE CAKES</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Have a Unique Cake Idea or Photo Reference?
              </h3>
              <p className="text-xs sm:text-sm text-[#E6D2B8]/85 font-light leading-relaxed">
                Send us your reference photo directly from your gallery! Our master pastry chefs craft custom 3D sculpted fondant cakes, character themes, and multi-tier wedding centerpieces in Dinanagar with 100% pure butter and fresh cream.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => openCustomizer(null)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFC085] via-[#C69A52] to-[#B97942] text-[#180C06] font-serif font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles size={17} />
                <span>Upload Design Photo & Customize</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STAGE 02 — MEET THE FOUNDER & MASTER CRAFTSMAN: MANOJ KUMAR
          Ultra-Luxury Velvet Cacao & Burnished Gold Atelier Showcase
          Animated with Floating Sparkles, Gold Shimmer Calligraphy & Floating Frame
          ==================================================================== */}
      <section
        id="founder"
        ref={stage2Ref}
        className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#180C06] via-[#24130A] to-[#140803] text-[#FFFDF8] border-t border-[#C69A52]/30 overflow-hidden scroll-mt-20"
        aria-label="Meet The Founder — Manoj Kumar"
      >
        {/* Ambient Canvas (Kept for Scroll Engine Integration) */}
        <canvas
          ref={stage2CanvasRef}
          className="absolute inset-0 pointer-events-none opacity-20 z-0"
        />

        {/* Ambient Golden Halo Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(223,192,133,0.16)_0%,_rgba(185,121,66,0.04)_50%,_transparent_72%)] blur-3xl animate-halo-pulse" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(217,163,86,0.14)_0%,_transparent_65%)] blur-3xl animate-halo-pulse" style={{ animationDelay: "2.5s" }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.025]">
            <span className="font-serif font-black text-[20vw] leading-none tracking-[0.2em] text-[#DFC085] uppercase select-none">
              KARSHNI
            </span>
          </div>
        </div>

        {/* Floating Luxury Golden Sparkle Particles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-[12%] left-[6%] animate-sparkle-twinkle">
            <Sparkles size={20} className="text-[#DFC085]/45" />
          </div>
          <div className="absolute top-[22%] right-[8%] animate-sparkle-twinkle-delay">
            <Sparkles size={24} className="text-[#DFC085]/55" />
          </div>
          <div className="absolute bottom-[30%] left-[10%] animate-sparkle-twinkle">
            <Sparkles size={18} className="text-[#DFC085]/40" />
          </div>
          <div className="absolute bottom-[14%] right-[12%] animate-sparkle-twinkle-delay">
            <Sparkles size={22} className="text-[#DFC085]/50" />
          </div>
          <div className="absolute top-[52%] left-[48%] animate-sparkle-twinkle">
            <Sparkles size={15} className="text-[#DFC085]/35" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-18">
            <div
              data-rev
              style={{ "--d": "0ms" } as React.CSSProperties}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DFC085]/15 via-[#C69A52]/25 to-[#DFC085]/15 border border-[#DFC085]/40 shadow-xs mb-4 animate-float-soft"
            >
              <Sparkles size={13} className="text-[#DFC085] animate-sparkle-twinkle" />
              <span className="font-serif text-[10.5px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#F4D086]">
                THE HEART & MASTER CRAFTSMAN OF KARSHNI
              </span>
              <Sparkles size={13} className="text-[#DFC085] animate-sparkle-twinkle-delay" />
            </div>

            <h2
              data-rev
              style={{ "--d": "80ms" } as React.CSSProperties}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight"
            >
              Baking with Passion & Purity.
              <span className="block font-['Great_Vibes',cursive] text-4xl sm:text-6xl lg:text-7xl font-normal mt-2 drop-shadow-[0_4px_24px_rgba(223,192,133,0.45)] animate-gold-shimmer-text">
                Meet Founder Manoj Kumar
              </span>
            </h2>

            <p
              data-rev
              style={{ "--d": "160ms" } as React.CSSProperties}
              className="text-xs sm:text-sm text-[#E8D4BF]/85 font-light max-w-xl mx-auto mt-4 leading-relaxed"
            >
              The visionary behind Karshni Bakers upholding century-old patisserie traditions, 100% pure dairy butter, and artisanal celebration cakes in Dinanagar.
            </p>

            <div
              data-rev
              style={{ "--d": "220ms" } as React.CSSProperties}
              className="w-28 h-0.5 bg-gradient-to-r from-transparent via-[#DFC085] to-transparent mx-auto mt-5 animate-pulse"
            />
          </div>

          {/* Two-Column Master Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* COLUMN 1: THE ROYAL GILDED FRAME (lg:col-span-5) */}
            <div
              data-rev
              style={{ "--d": "180ms" } as React.CSSProperties}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-[390px] sm:max-w-[430px] animate-luxury-float-glow">
                {/* Backlight Halo behind frame */}
                <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-tr from-[#D9A356]/35 via-[#C98B35]/25 to-transparent blur-2xl pointer-events-none -z-10 animate-halo-pulse" />

                {/* Outer Royal Antique Gilded Walnut Frame */}
                <div className="relative p-3.5 sm:p-4 rounded-[32px] bg-gradient-to-br from-[#2D1B11] via-[#1B0E07] to-[#2D1B11] border-[4px] border-[#DFC085] ring-2 ring-[#FFF0BA]/40 animate-frame-glow">
                  {/* Four Golden Ornamental Corner Brackets */}
                  <FrameCorner className="absolute top-2 left-2 animate-pulse" />
                  <FrameCorner className="absolute top-2 right-2 rotate-90 animate-pulse" style={{ animationDelay: "1s" }} />
                  <FrameCorner className="absolute bottom-2 right-2 rotate-180 animate-pulse" style={{ animationDelay: "2s" }} />
                  <FrameCorner className="absolute bottom-2 left-2 -rotate-90 animate-pulse" style={{ animationDelay: "3s" }} />

                  {/* Inner Gallery Mat Board (Passe-Partout) */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-[#FAF6EE] border-2 border-[#D4B37F] shadow-inner">
                    {/* The Portrait Image */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-[#241A12] border border-[#C69A52]/50 shadow-md group">
                      <img
                        src="/images/owner-manoj-kumar.jpg"
                        alt="Manoj Kumar — Founder & Master Craftsman of Karshni Bakers Dinanagar"
                        className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle Bottom Portrait Vignette */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                      {/* Certified Master Baker Wax Seal Badge (Top-Left) */}
                      <div className="absolute top-3 left-3 z-10 animate-float-soft">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C0E07]/90 backdrop-blur-md border border-[#DFC085]/60 text-[9px] font-mono tracking-widest uppercase text-[#DFC085] font-bold shadow-md">
                          <Sparkles size={10} className="text-[#DFC085] animate-sparkle-twinkle" />
                          <span>FOUNDER & MASTER BAKER</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Heavy Cast Brass Nameplate Plaque with Specular Shimmer */}
                  <div className="relative -mt-6 mx-auto w-[92%] p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#D9A356] via-[#FFE3A8] to-[#C98B35] text-[#1E110A] text-center shadow-[0_12px_32px_rgba(0,0,0,0.7)] border-2 border-[#FFF0BA] z-20 overflow-hidden">
                    {/* Specular Shimmer Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />

                    {/* Brass Rivet Screws on Left & Right */}
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#5C320A] border border-[#FFF0BA] shadow-inner" />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#5C320A] border border-[#FFF0BA] shadow-inner" />

                    <h3 className="font-serif font-black text-base sm:text-lg tracking-widest uppercase text-[#180C05] drop-shadow-xs relative z-10">
                      MANOJ KUMAR
                    </h3>
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#4A280D] font-extrabold mt-0.5 relative z-10">
                      FOUNDER & MASTER CRAFTSMAN
                    </p>
                    <p className="text-[9px] font-mono text-[#633916] font-semibold mt-0.5 relative z-10">
                      KARSHNI BAKERS & CAFE • DINANAGAR, PUNJAB
                    </p>
                  </div>
                </div>

                {/* Floating Highlights Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#DFC085]/40 text-[#DFC085] text-xs font-serif font-semibold shadow-xs animate-float-soft">
                    <ShieldCheck size={14} className="text-[#DFC085]" />
                    <span>100% Pure Dairy Butter Pledge</span>
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#DFC085]/40 text-[#DFC085] text-xs font-serif font-semibold shadow-xs animate-float-soft"
                    style={{ animationDelay: "1.8s" }}
                  >
                    <Heart size={14} className="text-[#EF493C]" />
                    <span>10,000+ Celebrations in Dinanagar</span>
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: THE FOUNDER'S STORY & PHILOSOPHY (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Founder's Heartfelt Quote Card */}
              <div
                data-rev
                style={{ "--d": "220ms" } as React.CSSProperties}
                className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#2D180D] via-[#3A1F10] to-[#24130A] text-white border border-[#DFC085]/45 shadow-xl relative overflow-hidden group hover:border-[#DFC085] hover:shadow-[0_12px_40px_rgba(223,192,133,0.22)] transition-all duration-500"
              >
                <Quote size={42} className="absolute -bottom-2 -right-2 text-[#DFC085]/10 pointer-events-none group-hover:scale-110 group-hover:text-[#DFC085]/15 transition-all duration-500" />
                <p className="font-serif italic text-sm sm:text-base lg:text-lg text-[#FFF4DE] leading-relaxed relative z-10">
                  “When I founded Karshni Bakers, I had one clear commitment: never compromise on purity. A celebration cake is the sweetest centerpiece of a family’s happiest table. We bake every creation with 100% pure dairy butter, rich Belgian chocolate, and genuine love — exactly as we would for our own children.”
                </p>
                <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="font-['Great_Vibes',cursive] text-3xl sm:text-4xl block -mb-1 animate-gold-shimmer-text">
                      Manoj Kumar
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC085]/80">
                      Founder & Master Baker
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-[#DFC085]/15 border border-[#DFC085]/30 text-[#DFC085] font-semibold">
                    EST. DINANAGAR
                  </span>
                </div>
              </div>

              {/* Founder Narrative */}
              <div
                data-rev
                style={{ "--d": "280ms" } as React.CSSProperties}
                className="space-y-3.5 text-xs sm:text-sm text-[#E8D4BF]/90 font-light leading-relaxed"
              >
                <p>
                  Guided by <strong>Manoj Kumar</strong>'s visionary leadership, <em>Karshni Bakers</em> has grown from a passion project into Dinanagar’s most celebrated cake and bakery atelier at Shree Ram Market.
                </p>
                <p>
                  Every morning before dawn, Manoj personally inspects our oven bakes, supervises slow dough ferments, and oversees handcrafted sugar-art detailing. Under his strict standards, our bakery never uses commercial premixes, artificial vanaspati, or cutting-edge shortcuts — delivering true European patisserie grade indulgence to every celebration.
                </p>
              </div>

              {/* 3 Core Pillars Cards with Staggered Animations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div
                  data-rev
                  style={{ "--d": "340ms" } as React.CSSProperties}
                  className="p-4 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-[#DFC085]/25 hover:border-[#DFC085] hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_14px_35px_rgba(223,192,133,0.22)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#DFC085]/15 border border-[#DFC085]/30 flex items-center justify-center text-[#DFC085] mb-2.5 group-hover:scale-120 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
                    <ShieldCheck size={18} />
                  </div>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#DFC085] transition-colors">
                    100% Pure Butter
                  </h4>
                  <p className="text-[11px] text-[#E8D4BF]/75 font-light leading-snug mt-1">
                    Zero vanaspati, zero margarine, zero premixes. Only pure slow-churned dairy butter.
                  </p>
                </div>

                <div
                  data-rev
                  style={{ "--d": "420ms" } as React.CSSProperties}
                  className="p-4 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-[#DFC085]/25 hover:border-[#DFC085] hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_14px_35px_rgba(223,192,133,0.22)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#DFC085]/15 border border-[#DFC085]/30 flex items-center justify-center text-[#DFC085] mb-2.5 group-hover:scale-120 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
                    <Sparkles size={18} />
                  </div>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#DFC085] transition-colors">
                    Bespoke 3D Artistry
                  </h4>
                  <p className="text-[11px] text-[#E8D4BF]/75 font-light leading-snug mt-1">
                    Hand-sculpted sugar flowers, customized kids' themes, and regal wedding tiers.
                  </p>
                </div>

                <div
                  data-rev
                  style={{ "--d": "500ms" } as React.CSSProperties}
                  className="p-4 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-[#DFC085]/25 hover:border-[#DFC085] hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_14px_35px_rgba(223,192,133,0.22)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#DFC085]/15 border border-[#DFC085]/30 flex items-center justify-center text-[#DFC085] mb-2.5 group-hover:scale-120 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
                    <Heart size={18} />
                  </div>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#DFC085] transition-colors">
                    Dinanagar's Pride
                  </h4>
                  <p className="text-[11px] text-[#E8D4BF]/75 font-light leading-snug mt-1">
                    Cherished by thousands of families across Dinanagar, Gurdaspur & GT Road.
                  </p>
                </div>
              </div>

              {/* Direct Founder WhatsApp & Call Action Row */}
              <div
                data-rev
                style={{ "--d": "580ms" } as React.CSSProperties}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  type="button"
                  onClick={() => {
                    const text = "Hello Manoj ji! I am visiting the Karshni Bakers website and would love to connect with you regarding a custom celebration cake order.";
                    window.open(`https://wa.me/919888526072?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="relative overflow-hidden group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D9A356] via-[#F4D086] to-[#C98B35] text-[#1E110A] font-serif font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(223,192,133,0.45)] hover:shadow-[0_0_40px_rgba(223,192,133,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-[#DFC085]/60 hover:ring-4 hover:ring-[#DFC085] cursor-pointer"
                >
                  {/* Shimmer light sweep on button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />

                  <MessageCircle size={17} className="group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Connect with Manoj Kumar on WhatsApp</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200 relative z-10" />
                </button>

                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#DFC085]/40 text-white font-serif text-xs font-semibold shadow-xs hover:border-[#DFC085] hover:scale-105 transition-all duration-200"
                >
                  <Phone size={14} className="text-[#DFC085]" />
                  <span>Call Atelier: {BRAND.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STAGE 03 — GOOGLE REVIEWS & PATRON STORIES (Horizontal Rail Track)
          Warm Luxury Ivory (#FAF7F2) with Official 5-Star Google Reviews
          ==================================================================== */}
      <section
        id="reviews"
        ref={stage3Ref}
        className="relative w-full h-[340svh] bg-[#FAF7F2] text-[#22130A] border-t border-[#DECDB8]/60 overflow-hidden"
        aria-label="Google Customer Reviews — Karshni Bakers"
      >
        <div id="products" className="pointer-events-none -top-24 absolute" />

        <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 lg:px-12 z-10">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#22130A]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <GoogleGIcon size={20} />
              <span className="font-serif font-bold text-xs sm:text-sm tracking-wide text-[#22130A]">
                Google Verified Reviews
              </span>
              <div className="hidden xs:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F0FE] border border-[#D2E3FC] text-[11px] font-mono text-[#1967D2] font-bold">
                <span>4.9</span>
                <span className="text-[#FBBC05]">★★★★★</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-serif text-[#6C503D]">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <span>Dinanagar's Highest-Rated Artisan Bakery on Google Maps</span>
            </div>

            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DECDB8] hover:border-[#4285F4] text-xs font-serif font-semibold text-[#22130A] shadow-xs hover:shadow-md transition-all duration-200"
            >
              <GoogleGIcon size={14} />
              <span>Google Maps</span>
              <ExternalLink size={12} className="text-[#6C503D]" />
            </a>
          </div>

          {/* Subhead Banner */}
          <div className="my-2 sm:my-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#B87333] font-semibold mb-1">
                <Sparkles size={12} />
                <span>REAL EXPERIENCES FROM VERIFIED PATRONS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22130A] leading-tight">
                Loved Across Dinanagar.{" "}
                <span className="font-serif italic font-normal text-[#B87333]">
                  Rated 5 Stars on Google.
                </span>
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#8A6750] flex-shrink-0">
              <span>Scroll down to glide through reviews</span>
              <ArrowRight size={14} className="animate-pulse text-[#B87333]" />
            </div>
          </div>

          {/* The Horizontal Rail Container */}
          <div className="relative my-auto w-full overflow-hidden">
            <div
              ref={stage3TrackRef}
              className="flex flex-nowrap gap-5 sm:gap-6 md:gap-7 will-change-transform items-stretch px-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none py-2"
            >
              {GOOGLE_REVIEWS_DATA.map((rev, idx) => (
                <div
                  key={rev.id}
                  data-rev
                  style={{ "--d": `${idx * 60}ms` } as React.CSSProperties}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] bg-white rounded-2xl border border-[#DECDB8] shadow-[0_6px_24px_rgba(34,19,10,0.06)] hover:shadow-[0_14px_36px_rgba(184,115,51,0.18)] hover:border-[#C69A52] p-5 flex flex-col justify-between snap-center transition-all duration-300"
                >
                  <div>
                    {/* Top User Meta Row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-serif font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs`}
                        >
                          {rev.initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-serif font-bold text-sm sm:text-base text-[#22130A] truncate">
                            {rev.author}
                          </h4>
                          <span className="text-[10.5px] font-mono text-[#5A3F2D] block truncate">
                            {rev.badge} • {rev.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end flex-shrink-0">
                        <GoogleGIcon size={18} />
                        <span className="text-[9.5px] font-mono text-[#8A6750] mt-0.5">
                          {rev.relativeTime}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating & Occasion Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3 pt-1 border-t border-[#F0E4D4]">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF2E6] text-[#B87333] font-semibold truncate max-w-[180px]">
                        ✦ {rev.occasion}
                      </span>
                    </div>

                    {/* Cake Image Delivered */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#241A12] border border-[#DECDB8] mb-3">
                      <img
                        src={rev.image}
                        alt={rev.cakeName}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/75 via-black/40 to-transparent">
                        <span className="text-[10px] font-serif text-[#FFFDF8] block truncate font-medium">
                          🎂 {rev.cakeName}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs text-[#5A3F2D] font-light leading-relaxed line-clamp-3 italic">
                      "{rev.review}"
                    </p>
                  </div>

                  {/* Card Bottom: Order / Inquire Button */}
                  <div className="mt-4 pt-3 border-t border-[#F0E4D4] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#2E7D32] font-semibold flex items-center gap-1">
                      <Check size={12} /> Verified Google Patron
                    </span>

                    <button
                      type="button"
                      onClick={() => handleWhatsApp(`Inquiring about ${rev.cakeName} seen in Google Reviews`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D9A356] via-[#C98B35] to-[#B37021] text-[#1E110A] text-[11px] font-serif font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle size={12} />
                      <span>Order This Cake</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Meter & Google Maps Action */}
          <div className="w-full border-t border-[#22130A]/10 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#7D5333] font-mono text-[11px]">
              <span className="font-bold text-[#22130A]">⭐ 4.9 GOOGLE MAPS RATING</span>
              <span>•</span>
              <span>280+ VERIFIED PATRONS IN DINANAGAR</span>
            </div>

            {/* Horizontal Displacement Indicator on Desktop */}
            <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs mx-4">
              <span className="text-[9.5px] font-mono text-[#8A6750]">TRACK</span>
              <div className="flex-1 h-[2px] bg-[#22130A]/15 relative overflow-hidden rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D9A356] to-[#C98B35] transition-all duration-75"
                  style={{ width: "var(--rail-progress, 0%)" }}
                />
              </div>
            </div>

            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#B87333] hover:text-[#22130A] transition-colors"
            >
              <span>Write a Review on Google Maps</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STAGE 04 — THE SIGNATURE CAKE EXPERIENCE (420svh Pinned Packaging Stage)
          Deep Chocolate (#241A12) Background with 4 Reveal Phases
          ==================================================================== */}
      <section
        id="signature-experience"
        ref={stage4Ref}
        className="relative w-full h-[420svh] bg-[#241A12] text-[#FFFDF8]"
        aria-label="The Signature Cake Packaging Experience"
      >
        <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 z-10">
          {/* Top Label */}
          <div className="flex items-center justify-between border-b border-[#FFFDF8]/20 pb-3">
            <span className="font-mono-detail text-[#EF493C]">
              [04/05] • BESPOKE PACKAGING CAMPAIGN
            </span>
            <span className="font-mono-detail text-[#FFFDF8]/70">
              PHASE 0{stage4Phase + 1} OF 04
            </span>
          </div>

          {/* Main 2-Column Split: Editorial Left + Paper Card Right */}
          <div className="relative my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto w-full">
            {/* Left Column: Progressive Text Reveal */}
            <div
              className="lg:col-span-6 space-y-4 text-left transition-transform duration-100"
              style={{
                transform: "translate3d(var(--cake-copy-x, 0px), 0, 0)",
              }}
            >
              <span className="font-mono-detail text-[#EF493C] block">
                {stage4Phase === 0 && "PHASE 01 — THE CREATION"}
                {stage4Phase === 1 && "PHASE 02 — THE DETAILS"}
                {stage4Phase === 2 && "PHASE 03 — THE CELEBRATION"}
                {stage4Phase === 3 && "PHASE 04 — THE FINAL PRESENTATION"}
              </span>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFFDF8] leading-[0.92]">
                {stage4Phase === 0 && "CONCEIVED AS EDIBLE ART."}
                {stage4Phase === 1 && "LAYERED WITH VALRHONA CACAO."}
                {stage4Phase === 2 && "SCULPTED FOR UNFORGETTABLE MOMENTS."}
                {stage4Phase === 3 && "PACKAGED WITH BESPOKE CARE."}
              </h2>

              <p className="font-body text-sm text-[#FFFDF8]/80 leading-relaxed max-w-md">
                {stage4Phase === 0 &&
                  "Every celebratory cake is built from scratch in our Dinanagar workshop. Combining French butter sponge with delicate Swiss meringue."}
                {stage4Phase === 1 &&
                  "Available flavours include 70% Dark Truffle, Madagascar Cream Cheese Velvet, and Wild Black Forest Kirsch with real cherries."}
                {stage4Phase === 2 &&
                  "Customized milestone dates, fondant bows, character toppers, and calligraphy greeting placards handcrafted by master confectioners."}
                {stage4Phase === 3 &&
                  "Finished in our signature insulated luxury packaging, guaranteed fresh and secure for direct pickup or prompt local delivery."}
              </p>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-2 pt-2">
                {[0, 1, 2, 3].map((pIdx) => (
                  <div
                    key={pIdx}
                    className={`h-1.5 transition-all duration-300 ${
                      pIdx === stage4Phase
                        ? "w-8 bg-[#EF493C]"
                        : "w-2 bg-[#FFFDF8]/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: 3:4 Paper Packaging Presentation Card */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div
                className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] bg-[#FFFDF8] text-[#171717] border-editorial border-[#171717] rounded-none p-6 flex flex-col justify-between shadow-2xl transition-transform duration-100 will-change-transform select-none"
                style={{
                  opacity: "var(--cake-card-alpha, 1)",
                  transform:
                    "translate3d(0, var(--cake-card-enter, 0px), 0) scale(var(--cake-card-scale, 1))",
                }}
              >
                {/* Paper Header Box */}
                <div className="border-b border-editorial border-[#171717] pb-3 flex items-center justify-between">
                  <div>
                    <span className="font-mono-detail text-[#EF493C] block">KARSHNI BAKERS</span>
                    <span className="font-mono-detail text-[#171717]/60 block text-[9px]">DINANAGAR, PB</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-detail text-[#171717]/60 block text-[9px]">SERIES 2026</span>
                    <span className="font-mono-detail text-[#EF493C] block">01 / 01</span>
                  </div>
                </div>

                {/* Cake Artwork Visual */}
                <div className="relative my-auto w-full aspect-square flex items-center justify-center p-2">
                  <img
                    src="/images/cakes/belgian-chocolate-truffle.webp"
                    alt="Karshni Signature Packaging Cake"
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Dashed Perforation Line that opens on Phase 3 */}
                <div className="relative py-2 my-1">
                  <svg className="w-full h-4 overflow-visible">
                    <line
                      x1="0"
                      y1="8"
                      x2="100%"
                      y2="8"
                      stroke="#EF493C"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      className="packaging-perforation"
                      style={{
                        strokeDashoffset: stage4Phase === 3 ? "120" : "0",
                      }}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-[#FFFDF8] font-mono-detail text-[#EF493C] text-[9px]">
                    TEAR TO REVEAL
                  </span>
                </div>

                {/* Bottom Paper Card Footer with CTA */}
                <div className="pt-2 border-t border-editorial border-[#171717] flex items-center justify-between">
                  <div className="text-left">
                    <span className="font-display text-lg text-[#171717] block leading-none">
                      BELGIAN NOIR TRUFFLE
                    </span>
                    <span className="font-mono-detail text-[#EF493C] block text-[9.5px] mt-0.5">
                      100% PURE VEG • FROM ₹999
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleWhatsApp("Belgian Noir Truffle")}
                    className="px-4 py-2 bg-[#EF493C] text-white font-mono-detail text-[9.5px] hover:bg-[#171717] transition-colors border-editorial border-[#171717] cursor-pointer"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Phase Counter */}
          <div className="flex items-center justify-between border-t border-[#FFFDF8]/20 pt-3">
            <span className="font-mono-detail text-[#FFFDF8]/50">
              PROGRESSION METER
            </span>
            <div className="w-48 h-1 bg-[#FFFDF8]/20 relative">
              <div
                className="h-full bg-[#EF493C] transition-all duration-75"
                style={{ width: "var(--cake-card-meter, 0%)" }}
              />
            </div>
            <span className="font-mono-detail text-[#EF493C]">
              PHASE 0{stage4Phase + 1}
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STAGE 05 — MOMENTS MADE SWEETER (300svh Pinned Cream Stage)
          22 Layered Contour Wave Canvas & 3 Distinct Chapter Swaps
          ==================================================================== */}
      <section
        id="gallery"
        ref={stage5Ref}
        className="relative w-full h-[300svh] bg-[#E7E2D8] text-[#171717]"
        aria-label="Moments Made Sweeter"
      >
        <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 z-10">
          {/* 22 Layered Contour Waves Canvas */}
          <canvas
            ref={stage5CanvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              transform:
                "translate3d(0, var(--season-y, 0%), 0) scale(var(--season-scale, 1.08))",
            }}
          />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#171717]/15 pb-3">
            <span className="font-mono-detail text-[#EF493C]">
              [05/05] • CELEBRATION CHRONICLES
            </span>
            <span className="font-mono-detail text-[#171717]/70">
              ACTIVE CHAPTER: {CELEBRATION_CHAPTERS[stage5Chapter]?.num} / 03
            </span>
          </div>

          {/* Center Stage: Title + 3 Horizontal Chapters Swapping */}
          <div className="relative z-10 my-auto text-center max-w-5xl mx-auto w-full">
            <h2
              className="font-display tracking-tight text-[#171717] uppercase leading-[0.9] mb-8 select-none"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
            >
              MAKE EVERY CELEBRATION A LITTLE SWEETER.
            </h2>

            {/* The 3 Chapters in Grid Layout with Opacity Swapping */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {CELEBRATION_CHAPTERS.map((chap, idx) => {
                const isActive = idx === stage5Chapter;
                return (
                  <div
                    key={chap.num}
                    className={`bg-[#FFFDF8] border-editorial border-[#171717] rounded-none p-5 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 scale-100 shadow-xl"
                        : "opacity-30 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-[#171717]/15 pb-2 mb-3">
                      <span className="font-mono-detail text-[#EF493C]">{chap.num}</span>
                      <span className="font-mono-detail text-[#171717]/60">{chap.badge}</span>
                    </div>

                    <div className="w-full h-36 bg-[#241A12] border-editorial border-[#171717] overflow-hidden mb-3">
                      <img
                        src={chap.image}
                        alt={chap.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="font-display text-xl text-[#171717] mb-1">
                      {chap.title}
                    </h3>
                    <p className="font-body text-xs text-[#171717]/80 leading-relaxed">
                      {chap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Indicators */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#171717]/15 pt-3">
            <span className="font-mono-detail text-[#171717]/60">
              SCROLL THROUGH 3 CHAPTERS
            </span>
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === stage5Chapter
                      ? "w-8 bg-[#EF493C]"
                      : "w-2 bg-[#171717]/20"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono-detail text-[#EF493C]">
              END OF PINNED STAGES
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          NORMAL CONTENT BAND 01 — BAKERY FAVOURITES
          Magazine-style Editorial Product List with Thin Ruled Borders
          ==================================================================== */}
      <section
        id="favourites"
        className="w-full bg-[#E7E2D8] text-[#171717] py-20 px-6 sm:px-12 lg:px-20 border-t border-editorial border-[#171717]"
        aria-label="Bakery Favourites"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-editorial border-[#171717] pb-6 mb-12">
            <div>
              <span className="font-mono-detail text-[#EF493C] block mb-2">
                DAILY PATISSERIE INDEX
              </span>
              <h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#171717] leading-none"
              >
                BAKERY FAVOURITES.
              </h2>
            </div>
            <p className="font-mono-detail text-[#171717]/70 text-right mt-4 sm:mt-0 max-w-xs">
              FRESH CROISSANTS • BUTTER COOKIES • SAVOURY LOAVES • TARTS
            </p>
          </div>

          {/* The Ruled Editorial Product List */}
          <div className="divide-y divide-[#171717]/20">
            {BAKERY_FAVOURITES_LIST.map((item, idx) => (
              <div
                key={item.name}
                data-rev
                style={{ "--d": `${idx * 50}ms` } as React.CSSProperties}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#FFFDF8]/40 transition-colors px-2"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono-detail text-[#EF493C] mt-1">
                    {`0${idx + 1}`}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-[#171717] group-hover:text-[#EF493C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-[#171717]/75 mt-0.5 max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 pl-8 md:pl-0">
                  <span className="font-mono-detail text-[#171717]/60">
                    {item.category}
                  </span>
                  <span className="font-mono-detail font-bold text-[#EF493C]">
                    {item.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleWhatsApp(item.name)}
                    className="p-2 border-editorial border-[#171717] bg-[#FFFDF8] hover:bg-[#EF493C] hover:text-white transition-colors cursor-pointer"
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          NORMAL CONTENT BAND 02 — FREQUENTLY ASKED QUESTIONS
          Native Accessible <details> & <summary> Elements
          ==================================================================== */}
      <section
        id="faq"
        className="w-full bg-[#FFFDF8] text-[#171717] py-20 px-6 sm:px-12 lg:px-20 border-t border-editorial border-[#171717]"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-mono-detail text-[#EF493C] block mb-2">
              CUSTOMER ENQUIRIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#171717] leading-none">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
            <p className="font-body text-xs text-[#171717]/70 mt-2">
              EVERYTHING YOU NEED TO KNOW ABOUT PLACING ORDERS AT KARSHNI BAKERS
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                data-rev
                style={{ "--d": `${idx * 60}ms` } as React.CSSProperties}
                className="group border-editorial border-[#171717] bg-[#E7E2D8] p-5 cursor-pointer rounded-none"
              >
                <summary className="font-display text-xl sm:text-2xl text-[#171717] flex items-center justify-between list-none select-none">
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="text-[#EF493C] transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4"
                  />
                </summary>
                <div className="pt-3 mt-3 border-t border-[#171717]/15 text-xs sm:text-sm font-body text-[#171717]/85 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          NORMAL CONTENT BAND 03 — FINAL ORDER SECTION AND FOOTER
          Deep Chocolate (#241A12) Background with Editorial Typography
          ==================================================================== */}
      <section
        id="contact"
        className="w-full bg-[#241A12] text-[#FFFDF8] py-24 px-6 sm:px-12 lg:px-20 border-t border-editorial border-[#171717]"
        aria-label="Final Order Section & Footer"
      >
        <div className="max-w-6xl mx-auto">
          {/* Big Editorial Callout */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono-detail text-[#EF493C] block">
              BEGIN YOUR CELEBRATION
            </span>
            <h2
              className="font-display tracking-tight text-[#FFFDF8] uppercase leading-[0.92]"
              style={{ fontSize: "clamp(2.5rem, 6.8vw, 7rem)" }}
            >
              YOUR NEXT SWEET MOMENT STARTS HERE.
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#FFFDF8]/75 max-w-xl mx-auto leading-relaxed">
              Visit our bakery counter at Shree Ram Market, Dinanagar, or chat with our team on WhatsApp for custom celebration cake orders.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleWhatsApp()}
                className="px-8 py-3.5 bg-[#EF493C] text-white hover:bg-white hover:text-[#171717] transition-all font-mono-detail text-xs border-editorial border-white flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle size={15} />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="px-8 py-3.5 bg-transparent text-[#FFFDF8] hover:bg-white/10 transition-all font-mono-detail text-xs border-editorial border-[#FFFDF8] flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>CALL BAKERY ({BRAND.phoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* Business Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#FFFDF8]/20 pt-12 text-left">
            <div>
              <span className="font-mono-detail text-[#EF493C] block mb-2">
                VISIT THE BAKERY
              </span>
              <p className="font-body text-xs text-[#FFFDF8]/80 leading-relaxed">
                {BRAND.address}
              </p>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono-detail text-[#EF493C] hover:underline inline-block mt-2"
              >
                GET GOOGLE DIRECTIONS ↗
              </a>
            </div>

            <div>
              <span className="font-mono-detail text-[#EF493C] block mb-2">
                BAKERY HOURS
              </span>
              <p className="font-body text-xs text-[#FFFDF8]/80 leading-relaxed">
                {BRAND.hours}
              </p>
              <p className="font-mono-detail text-[#FFFDF8]/60 mt-1">
                {BRAND.days}
              </p>
            </div>

            <div>
              <span className="font-mono-detail text-[#EF493C] block mb-2">
                INSTAGRAM GALLERY
              </span>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-body text-xs text-[#FFFDF8]/80 hover:text-[#EF493C] transition-colors block"
              >
                {BRAND.instagram}
              </a>
              <p className="font-mono-detail text-[#FFFDF8]/60 mt-1">
                TAG US IN YOUR CELEBRATIONS
              </p>
            </div>

            <div>
              <span className="font-mono-detail text-[#EF493C] block mb-2">
                DIRECT INQUIRIES
              </span>
              <p className="font-body text-xs text-[#FFFDF8]/80">
                Phone: {BRAND.phone}
              </p>
              <p className="font-body text-xs text-[#FFFDF8]/80 mt-1">
                WhatsApp: +91 98885 26072
              </p>
            </div>
          </div>

          {/* Bottom Copyright & Brand Statement */}
          <div className="border-t border-[#FFFDF8]/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[#FFFDF8]/50 gap-4">
            <span className="font-mono-detail text-[9.5px]">
              © {new Date().getFullYear()} KARSHNI BAKERS & CAFE • DINANAGAR, PUNJAB • ALL RIGHTS RESERVED
            </span>
            <span className="font-mono-detail text-[9.5px] text-[#EF493C]">
              CRAFTED WITH SWEET MOMENTS
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Cake Customizer & Order Modal */}
      <CakeCustomizerModal
        isOpen={customizerModalOpen}
        onClose={() => setCustomizerModalOpen(false)}
        product={selectedCustomizerProduct}
      />
    </div>
  );
}

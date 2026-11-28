import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Clock,
  Check,
  Sparkles,
  Filter,
  Cake,
  Coffee,
  Cookie,
  Utensils,
  ShieldCheck,
  Heart,
  Quote,
  Star,
  ExternalLink,
  Upload,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Truck,
  Flame,
  CheckCircle2,
  Gift,
} from "lucide-react";
import {
  BRAND,
  REAL_PHOTOS,
  BAKERY_PRODUCTS,
  PRODUCT_CATEGORIES,
  GALLERY_PHOTOS,
  type BakeryProductItem,
  type GalleryPhoto,
} from "../lib/bakery-data";
import { CakeCustomizerModal } from "./cake-customizer-modal";

// ============================================================================
// HELPER SVG ICONS
// ============================================================================

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

function FrameCorner({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={style} className={`text-[#C5A16A] ${className}`}>
      <path d="M2 10V4C2 2.89543 2.89543 2 4 2H10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// ============================================================================
// VERIFIED GOOGLE REVIEWS DATA
// ============================================================================
const GOOGLE_REVIEWS_DATA = [
  {
    id: "g-rev-1",
    author: "Raman Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 weeks ago",
    badge: "Local Guide • 42 reviews",
    occasion: "1st Birthday Party",
    cakeName: "Masha & Bear 3D Theme Cake",
    cakeImage: REAL_PHOTOS.cakeMashaBear,
    text: "Ordered a custom Masha and the Bear cake for my daughter's first birthday in Dinanagar. The fondant detailing was magical and the cake was so soft and fresh! 100% pure butter quality was evident in every single bite. Best bakery in Gurdaspur district!",
  },
  {
    id: "g-rev-2",
    author: "Gurpreet Singh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 month ago",
    badge: "Verified Customer",
    occasion: "25th Silver Anniversary",
    cakeName: "Romantic Heart Calendar Cake",
    cakeImage: REAL_PHOTOS.cakeRomanticHeart,
    text: "The heart-shaped calendar cake with golden roses was the showstopper of our parents' 25th anniversary celebration. Fresh Belgian chocolate truffle inside, completely eggless, delivered right on time. Thank you Manoj ji and the entire Karshni team!",
  },
  {
    id: "g-rev-3",
    author: "Pooja Mahajan",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "3 weeks ago",
    badge: "Local Guide",
    occasion: "Grand Wedding Reception",
    cakeName: "Luxury Tulip Ribbon Bow Cake",
    cakeImage: REAL_PHOTOS.cakeTulipBow,
    text: "A truly royal masterpiece. The sugar tulip flowers and delicate draped ribbon looked like something from an international French patisserie. All our wedding guests were asking where we ordered it from. Highly recommended!",
  },
  {
    id: "g-rev-4",
    author: "Amit Mehra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "A month ago",
    badge: "Verified Patron",
    occasion: "7th Birthday Celebration",
    cakeName: "McLaren Racetrack Supercar Cake",
    cakeImage: REAL_PHOTOS.cakeSupercar,
    text: "My son is obsessed with supercars, and Karshni Bakers built an entire racetrack cake with a custom car on top. Kids were ecstatic! Flavor was rich Belgian chocolate, not overly sweet, just perfect.",
  },
  {
    id: "g-rev-5",
    author: "Simranjit Kaur",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 months ago",
    badge: "Verified Customer",
    occasion: "Daily Patisserie Visit",
    cakeName: "Fresh Fruit Tarts & Belgian Brownies",
    cakeImage: REAL_PHOTOS.tarts,
    text: "Whenever I visit Shree Ram Market, stopping at Karshni is a must. Their fruit tarts, warm croissants, and fudge brownies are unmatched. You can taste the purity of real dairy butter.",
  },
];

// ============================================================================
// SIGNATURE CAKES CURATED SHOWCASE (SECTION 4)
// ============================================================================
const SIGNATURE_CAKE_CATEGORIES = [
  {
    id: "sig-cat-birthday",
    title: "Birthday Milestone Cakes",
    category: "Birthday Cakes",
    description: "Joyful handcrafted number cakes, woodland themes, and custom cartoon marvels for kids & adults.",
    image: REAL_PHOTOS.cakeMashaBear,
    price: "From ₹999",
    tag: "Bestseller",
    flavour: "Belgian Chocolate Truffle / Vanilla Fruit",
  },
  {
    id: "sig-cat-chocolate",
    title: "Belgian Chocolate Noir",
    category: "Chocolate Cakes",
    description: "Layers of moist Dutch cocoa sponge bathed in rich Belgian ganache, topped with fresh berries & macarons.",
    image: "/images/cakes/cake-belgian-chocolate-noir.jpg",
    price: "From ₹1,199",
    tag: "Chef Special",
    flavour: "70% Valrhona Dark Cacao",
  },
  {
    id: "sig-cat-anniversary",
    title: "Romantic Heart Calendar",
    category: "Anniversary Cakes",
    description: "Sculpted velvet heart with crimson sugar roses, custom milestone date plaque, and 24K edible gold leaf.",
    image: REAL_PHOTOS.cakeRomanticHeart,
    price: "From ₹1,299",
    tag: "Romantic",
    flavour: "Red Velvet Cream Cheese",
  },
  {
    id: "sig-cat-designer",
    title: "Luxury Tulip Ribbon Bow",
    category: "Designer Cakes",
    description: "Satin-finish white fondant draped in handcrafted sugarcraft ribbon bow with miniature tulip buds.",
    image: REAL_PHOTOS.cakeTulipBow,
    price: "From ₹1,499",
    tag: "Haute Couture",
    flavour: "Madagascar Vanilla Bean & White Truffle",
  },
  {
    id: "sig-cat-custom",
    title: "Supercar Track & Theme",
    category: "Custom Cakes",
    description: "Bespoke 3D sculptural themes tailored to your passion — racing tracks, toyboxes, characters & milestones.",
    image: REAL_PHOTOS.cakeSupercar,
    price: "From ₹1,299",
    tag: "Custom 3D",
    flavour: "Choice of 8 Artisan Flavours",
  },
];

// ============================================================================
// SPECIAL OCCASIONS DATA (SECTION 8)
// ============================================================================
const SPECIAL_OCCASIONS = [
  {
    id: "occ-birthday",
    title: "Birthdays",
    subtitle: "Every Age Deserves Sweetness",
    description: "From a baby's 1st birthday theme to grand 50th golden milestones, we design cakes that make eyes sparkle.",
    image: REAL_PHOTOS.cakeMashaBear,
    servings: "6 to 50+ Guests",
    popularFlavour: "Belgian Chocolate Truffle",
    leadTime: "Same Day or 24h for 3D",
  },
  {
    id: "occ-anniversary",
    title: "Anniversaries & Engagements",
    subtitle: "Celebrating Timeless Love",
    description: "Heart-shaped cakes with romantic hand-piped roses, custom wedding date plaques, and edible gold leaf shimmer.",
    image: REAL_PHOTOS.cakeRomanticHeart,
    servings: "4 to 30 Guests",
    popularFlavour: "Red Velvet & Cream Cheese",
    leadTime: "Order 24h in Advance",
  },
  {
    id: "occ-wedding",
    title: "Weddings & Grand Receptions",
    subtitle: "Stately Centerpiece Creations",
    description: "Multi-tiered architectural masterpieces with cascading sugarcraft florals, velvet textures, and custom monograms.",
    image: REAL_PHOTOS.cakeTulipBow,
    servings: "50 to 300+ Guests",
    popularFlavour: "Belgian Truffle & Vanilla Bean",
    leadTime: "Book 3–7 Days Ahead",
  },
  {
    id: "occ-corporate",
    title: "Corporate & Milestones",
    subtitle: "Celebrate Team Victories",
    description: "Custom corporate logo cakes, retirement celebrations, opening parties, and festive gift boxes.",
    image: REAL_PHOTOS.hero,
    servings: "10 to 100+ Guests",
    popularFlavour: "Assorted Pastry & Cake Platters",
    leadTime: "24–48h Notice",
  },
];

// ============================================================================
// INSTAGRAM SHOWCASE DATA (SECTION 11)
// ============================================================================
const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    image: REAL_PHOTOS.cakeTulipBow,
    likes: "428",
    comments: "34",
    caption: "The Royal Tulip Ribbon Cake — pure patisserie elegance in Dinanagar ✨ #KarshniBakers #DesignerCakes",
  },
  {
    id: "ig-2",
    image: "/images/cakes/cake-belgian-drip-clean.jpg",
    likes: "612",
    comments: "58",
    caption: "Molten Belgian chocolate drip, fresh macarons and pure dairy butter sponge 🍫 #ChocolateLover #Bakery",
  },
  {
    id: "ig-3",
    image: REAL_PHOTOS.cakeRomanticHeart,
    likes: "542",
    comments: "49",
    caption: "Marking milestones in pure sweetness! Handcrafted anniversary calendar cake ❤️ #KarshniLove",
  },
  {
    id: "ig-4",
    image: REAL_PHOTOS.bakeryDisplay,
    likes: "389",
    comments: "22",
    caption: "Freshly baked every morning right here at Shree Ram Market counter! Come taste the purity 🥐 #Dinanagar",
  },
  {
    id: "ig-5",
    image: REAL_PHOTOS.cakeSupercar,
    likes: "495",
    comments: "41",
    caption: "Fast, furious and delicious! Custom 3D supercar track birthday cake 🏎️ #KidsParty #CustomCakes",
  },
  {
    id: "ig-6",
    image: REAL_PHOTOS.brownies,
    likes: "520",
    comments: "37",
    caption: "Fudge brownies baked with 70% dark Valrhona cocoa. That crackly crust though! 🤤 #BrownieLovers",
  },
];

export function CinematicBakeryExperience() {
  // Modal & Interactive states
  const [customizerProduct, setCustomizerProduct] = useState<BakeryProductItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>("All");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>("All");
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<GalleryPhoto | null>(null);

  // Embedded Custom Cake Experience Form State (Section 6)
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formFlavour, setFormFlavour] = useState("Belgian Chocolate Truffle");
  const [formWeight, setFormWeight] = useState("2-lb");
  const [formOccasion, setFormOccasion] = useState("Birthday Party");
  const [formDate, setFormDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0] ?? "";
  });
  const [formNotes, setFormNotes] = useState("");
  const [formImagePreview, setFormImagePreview] = useState<string | null>(null);
  const [formImageName, setFormImageName] = useState<string>("");

  // Review Track Ref for smooth horizontal scroll
  const reviewTrackRef = useRef<HTMLDivElement>(null);

  // Section 7: Karshni Standards Carousel State & Ref
  const pillarsScrollRef = useRef<HTMLDivElement>(null);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isPillarsPaused, setIsPillarsPaused] = useState(false);

  useEffect(() => {
    if (isPillarsPaused) return;
    const timer = setInterval(() => {
      setActivePillarIndex((prev) => {
        const next = (prev + 1) % 5;
        if (pillarsScrollRef.current) {
          const container = pillarsScrollRef.current;
          const card = container.children[next] as HTMLElement | undefined;
          if (card) {
            container.scrollTo({
              left: card.offsetLeft - 16,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [isPillarsPaused]);

  const handlePillarSelect = (index: number) => {
    setActivePillarIndex(index);
    setIsPillarsPaused(true);
    if (pillarsScrollRef.current) {
      const card = pillarsScrollRef.current.children[index] as HTMLElement | undefined;
      if (card) {
        pillarsScrollRef.current.scrollTo({
          left: card.offsetLeft - 16,
          behavior: "smooth",
        });
      }
    }
  };

  const handleReviewScroll = (direction: "left" | "right") => {
    if (!reviewTrackRef.current) return;
    const scrollAmount = 360;
    reviewTrackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Image Upload Handler for Section 6
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setFormImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit Embedded Custom Cake Order to WhatsApp
  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightMap: Record<string, string> = {
      "1-lb": "1 Pound (0.5 Kg)",
      "2-lb": "2 Pound (1.0 Kg)",
      "3-lb": "3 Pound (1.5 Kg)",
      "4-lb": "4 Pound (2.0 Kg)",
      "5-lb-plus": "5+ Pound (Multi-Tier)",
    };

    let msg = `*NEW CUSTOM CAKE ENQUIRY — KARSHNI BAKERS*\n`;
    msg += `------------------------------------\n`;
    msg += `👤 *Customer Name:* ${formName.trim() || "Guest"}\n`;
    msg += `📞 *Phone / WhatsApp:* ${formPhone.trim() || "Provided on chat"}\n`;
    msg += `🎂 *Occasion:* ${formOccasion}\n`;
    msg += `🍫 *Flavour:* ${formFlavour}\n`;
    msg += `⚖️ *Weight / Size:* ${weightMap[formWeight] || formWeight}\n`;
    msg += `📅 *Required Date:* ${formDate}\n`;
    if (formNotes.trim()) {
      msg += `✍️ *Plaque Message / Notes:* ${formNotes.trim()}\n`;
    }
    if (formImageName) {
      msg += `📷 *Design Reference:* Photo attached (${formImageName})\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please confirm availability and share final quote for Dinanagar delivery / pickup.`;

    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // Direct WhatsApp Inquiry for any item
  const handleWhatsAppOrder = (itemTitle: string, price?: string, category?: string) => {
    const text = `Hello Karshni Bakers! I would like to order / inquire about: *${itemTitle}* ${price ? `(${price})` : ""} from your ${category || "Bakery"} menu in Dinanagar. Please confirm availability.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Open full Modal customizer
  const openCustomizer = (product: BakeryProductItem) => {
    setCustomizerProduct(product);
    setIsCustomizerOpen(true);
  };

  // Filtered menu products
  const filteredProducts = activeMenuCategory === "All"
    ? BAKERY_PRODUCTS
    : BAKERY_PRODUCTS.filter((p) => p.category === activeMenuCategory);

  // Filtered gallery photos
  const filteredGallery = activeGalleryCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category.includes(activeGalleryCategory));

  return (
    <div className="w-full bg-[#F7F0E5] text-[#392820] selection:bg-[#C5A16A] selection:text-[#392820]">

      {/* ====================================================================
          SECTION 3 – ABOUT KARSHNI BAKERS & FOUNDER MANOJ KUMAR SHOWCASE
          Warm Cream (#F7F0E5) & Chocolate Brown (#493126) Editorial
          ==================================================================== */}
      <section id="about" className="relative w-full py-20 lg:py-28 bg-[#F7F0E5] border-b border-[#C5A16A]/40 overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute -left-20 top-20 text-[18vw] font-serif font-black text-[#493126]/[0.03] select-none pointer-events-none leading-none">
          CRAFT
        </div>
        <div className="absolute -right-20 bottom-10 text-[18vw] font-serif font-black text-[#493126]/[0.03] select-none pointer-events-none leading-none">
          PURITY
        </div>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-10 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles size={13} className="text-[#493126]" />
              <span>Section 03 • The Bakery Story</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              Baking with Passion & Purity.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-3 leading-relaxed">
              Founded in Dinanagar, Karshni Bakers is dedicated to the purest art of European patisserie, slow-churned dairy butter, and celebration cakes that turn sweet moments into lifelong memories.
            </p>
          </div>

          {/* Master Founder Showcase Card: Manoj Kumar */}
          <div className="w-full rounded-3xl bg-[#180C06] text-[#EFE3D2] border-2 border-[#C5A16A]/50 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden mb-16">
            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(217,191,162,0.25)_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(107,68,53,0.35)_0%,_transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Royal Gilded Frame with Manoj Kumar's Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#2D160C] via-[#1F0E07] to-[#120703] border-4 border-[#C5A16A] shadow-[0_20px_50px_rgba(0,0,0,0.85)] max-w-sm w-full">
                  {/* Antique Frame Corner Ornaments */}
                  <FrameCorner className="absolute top-2 left-2" />
                  <FrameCorner className="absolute top-2 right-2 rotate-90" />
                  <FrameCorner className="absolute bottom-2 left-2 -rotate-90" />
                  <FrameCorner className="absolute bottom-2 right-2 rotate-180" />

                  {/* Inner Cream Passe-Partout Matting */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#EFE3D2] border border-[#C5A16A]/70 shadow-inner">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#24130A]">
                      <img
                        src="/images/owner-manoj-kumar.jpg"
                        alt="Manoj Kumar — Founder & Master Craftsman of Karshni Bakers"
                        className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Engraved Heavy Brass Plaque */}
                  <div className="mt-4 py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#C5A16A] via-[#F7F0E5] to-[#C5A16A] text-[#392820] text-center shadow-md border border-[#8C5E35]/40">
                    <p className="font-serif text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">
                      Manoj Kumar
                    </p>
                    <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#493126]">
                      Founder & Master Craftsman
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder's Story, Craftsmanship Pillars & Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A16A]/20 border border-[#C5A16A]/40 text-[#C5A16A] text-xs font-semibold tracking-wider uppercase mb-2">
                    <Award size={13} />
                    <span>The Heart of Karshni Bakers</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight">
                    "Every celebration cake is a work of edible art, baked with pure dairy butter and unconditional love."
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#EFE3D2]/85 mt-3 leading-relaxed">
                    Under the culinary vision of Manoj Kumar, Karshni Bakers has become Dinanagar's celebrated landmark for artisanal celebration cakes. Rejecting commercial premixes and hydrogenated fats, our bakery upholds the time-tested discipline of baking with 100% pure butter, fine cocoa, and hand-sculpted sugar flowers.
                  </p>
                </div>

                {/* Craftsmanship Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A16A]/50 transition-colors">
                    <span className="text-[#C5A16A] font-serif text-lg font-bold block mb-1">100%</span>
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Pure Dairy Butter</h4>
                    <p className="text-[11px] text-[#EFE3D2]/70 mt-1">Zero margarine, zero artificial cake premixes.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A16A]/50 transition-colors">
                    <span className="text-[#C5A16A] font-serif text-lg font-bold block mb-1">70%</span>
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Belgian Dark Cocoa</h4>
                    <p className="text-[11px] text-[#EFE3D2]/70 mt-1">Rich Valrhona and imported chocolate ganache.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A16A]/50 transition-colors">
                    <span className="text-[#C5A16A] font-serif text-lg font-bold block mb-1">Bespoke</span>
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase">3D Sculptural Art</h4>
                    <p className="text-[11px] text-[#EFE3D2]/70 mt-1">Custom fondant ribbons, characters & dates.</p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-3">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Manoj Kumar ji! I would like to consult with you about designing a custom milestone cake for an upcoming celebration.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A16A] via-[#F7F0E5] to-[#C5A16A] text-[#392820] text-xs font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(217,191,162,0.4)] hover:scale-105 active:scale-95 transition-all"
                  >
                    <MessageCircle size={15} />
                    <span>Connect with Manoj Kumar on WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Phone size={14} className="text-[#C5A16A]" />
                    <span>Call Store: {BRAND.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Bakery Craft & Atmosphere (3 High-End Editorial Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury-3d rounded-2xl overflow-hidden p-3 bg-[#E8D8C4]">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#C5A16A]/30 mb-3">
                <img
                  src="/images/luxury-fresh-pastries.jpg"
                  alt="Artisan Pastries & Golden Croissants — Karshni Bakers"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-2 pb-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#493126]">Oven-Fresh Daily</span>
                <h4 className="font-serif text-lg font-medium text-[#392820] mt-0.5">Artisan Pastries & Croissants</h4>
                <p className="text-xs text-[#392820]/75 mt-1 leading-relaxed">
                  Slow-baked European butter croissants, glossy berry custard tarts, and delicate breakfast bakes crafted fresh every morning.
                </p>
              </div>
            </div>

            <div className="card-luxury-3d rounded-2xl overflow-hidden p-3 bg-[#E8D8C4]">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#C5A16A]/30 mb-3">
                <img
                  src="/images/luxury-bakery-cafe.jpg"
                  alt="Barista Coffee & Warm Patisserie — Karshni Cafe Dinanagar"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-2 pb-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#493126]">Boutique Cafe</span>
                <h4 className="font-serif text-lg font-medium text-[#392820] mt-0.5">Barista Coffee & Brownies</h4>
                <p className="text-xs text-[#392820]/75 mt-1 leading-relaxed">
                  Specialty rosetta latte art, velvety hot chocolate, and warm Belgian fudge brownies in a welcoming, cozy ambience.
                </p>
              </div>
            </div>

            <div className="card-luxury-3d rounded-2xl overflow-hidden p-3 bg-[#E8D8C4]">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#C5A16A]/30 mb-3">
                <img
                  src="/images/luxury-cake-craft.jpg"
                  alt="Master Pastry Chef Decorating Celebration Cake"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-2 pb-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#493126]">Master Atelier</span>
                <h4 className="font-serif text-lg font-medium text-[#392820] mt-0.5">Handmade Milestone Cakes</h4>
                <p className="text-xs text-[#392820]/75 mt-1 leading-relaxed">
                  Every tiered celebration cake is hand-sculpted to order with 100% pure butter, 24K edible gold leaf, and bespoke sugarcraft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 – SIGNATURE CAKES CURATED SHOWCASE
          Soft Ivory (#EFE3D2) with 5 Main Cake Categories
          ==================================================================== */}
      <section id="signature-gallery" className="relative w-full py-20 lg:py-28 bg-[#EFE3D2] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                <Sparkles size={13} className="text-[#493126]" />
                <span>Section 04 • Signature Creations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
                Celebrated Celebration Cakes
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2 max-w-xl">
                Explore our signature birthday, anniversary, chocolate, designer, and bespoke custom theme creations.
              </p>
            </div>
            <a
              href="#custom-cake"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#493126] text-[#FFF8EE] text-xs font-bold tracking-wider uppercase hover:bg-[#35231D] transition-all self-start md:self-auto cursor-pointer"
            >
              <span>Build Custom Cake</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* 5-Card Grid of Signature Cake Styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SIGNATURE_CAKE_CATEGORIES.map((cakeItem) => (
              <div
                key={cakeItem.id}
                className="card-luxury-3d rounded-3xl overflow-hidden bg-[#E8D8C4] border border-[#C5A16A] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F7F0E5]">
                    <img
                      src={cakeItem.image}
                      alt={cakeItem.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#493126]/90 text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm shadow-md">
                      {cakeItem.tag}
                    </div>
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#E8D8C4]/95 text-[#493126] border border-[#C5A16A] text-[11px] font-bold tracking-wider shadow-sm">
                      {cakeItem.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#493126] block mb-1">
                      {cakeItem.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#392820] group-hover:text-[#493126] transition-colors">
                      {cakeItem.title}
                    </h3>
                    <p className="text-xs text-[#392820]/80 mt-2 leading-relaxed">
                      {cakeItem.description}
                    </p>
                    <div className="mt-3.5 pt-3 border-t border-[#C5A16A]/50 flex items-center gap-1.5 text-xs text-[#493126] font-medium">
                      <Sparkles size={13} className="text-[#C5A16A]" />
                      <span>{cakeItem.flavour}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppOrder(cakeItem.title, cakeItem.price, cakeItem.category)}
                    className="w-full py-3 px-4 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}

            {/* 6th Card: Custom 3D Bespoke Cake Atelier (Upgraded with Rich Imagery, Micro-Animations & Dual Actions) */}
            <div className="card-luxury-3d rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D180F] via-[#20100A] to-[#140804] border-2 border-[#C5A16A]/80 flex flex-col justify-between group shadow-2xl relative">
              {/* Antique Corner Filigree Ornaments */}
              <FrameCorner className="absolute top-2 left-2 z-20 pointer-events-none opacity-80" />
              <FrameCorner className="absolute top-2 right-2 z-20 rotate-90 pointer-events-none opacity-80" />

              <div>
                {/* 1:1 Aspect Ratio Master Visual Stage with Hover Zoom & Floating Badges */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#170B06]">
                  <img
                    src="/images/cakes/bespoke-cake-atelier.jpg"
                    alt="Master Artisan Decorating Bespoke Cake from Reference Photo"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                  />

                  {/* Gradient Vignette Overlays for Maximum Contrast & Atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20100A] via-transparent to-black/30 pointer-events-none" />

                  {/* Top-Left: Sparkling Gold Atelier Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#180C06]/90 border border-[#C5A16A]/70 text-[#C5A16A] text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Sparkles size={11} className="text-[#DFC085] animate-sparkle-twinkle" />
                    <span>Bespoke Atelier</span>
                  </div>

                  {/* Top-Right: Chef Consultation Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#C5A16A] text-[#24130A] text-[11px] font-bold tracking-wider uppercase shadow-md">
                    Custom 3D Art
                  </div>

                  {/* Bottom Image Overlay Pill with Shimmer Sweep */}
                  <div className="absolute bottom-3 inset-x-3.5">
                    <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#140804]/90 backdrop-blur-md border border-[#C5A16A]/60 text-[#FFF8EE] text-[11px] font-medium shadow-lg w-full justify-center">
                      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />
                      <span className="text-[#DFC085]">✦</span>
                      <span>Pinterest & Instagram Reference Friendly</span>
                      <span className="text-[#DFC085]">✦</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A16A]">
                      Bespoke Milestone Studio
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Kitchen
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#DFC085] transition-colors leading-tight">
                    Have a Unique Design in Mind?
                  </h3>

                  <p className="text-xs text-[#EFE3D2]/85 mt-2 leading-relaxed">
                    Share any photo from Instagram or Pinterest, or describe your vision. Master craftsman Manoj Kumar sculpts it with 100% pure butter and culinary perfection.
                  </p>

                  {/* 3 Craft Pillars */}
                  <div className="mt-4 pt-3.5 border-t border-[#C5A16A]/30 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-semibold text-[#DFC085] block">Any Theme</span>
                      <span className="text-[9px] text-[#EFE3D2]/70 block mt-0.5">3D / Cartoon / Floral</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-semibold text-[#DFC085] block">Pure Butter</span>
                      <span className="text-[9px] text-[#EFE3D2]/70 block mt-0.5">100% Pure Dairy</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-semibold text-[#DFC085] block">Direct WhatsApp</span>
                      <span className="text-[9px] text-[#EFE3D2]/70 block mt-0.5">Instant Quote</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <a
                  href="#custom-cake"
                  className="group/btn relative overflow-hidden w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#C5A16A] via-[#E8D8C4] to-[#C5A16A] hover:from-[#DFC085] hover:to-[#B97942] text-[#24130A] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_4px_25px_rgba(197,161,106,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Upload size={14} className="transition-transform group-hover/btn:-translate-y-0.5" />
                  <span>Upload Design Reference</span>
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />
                </a>

                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    "Hello Manoj Kumar ji! I have a unique cake design reference photo from Pinterest/Instagram that I would like to create with Karshni Bakers. Please review!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-[#25D366] text-white hover:text-white border border-[#C5A16A]/50 hover:border-[#25D366] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                  </span>
                  <MessageCircle size={14} className="text-[#DFC085] group-hover:text-white" />
                  <span>Consult Manoj Kumar on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 – COMPLETE BAKERY MENU
          Warm Cream (#F7F0E5) with Category Filters & Product Grid
          ==================================================================== */}
      <section id="menu" className="relative w-full py-20 lg:py-28 bg-[#F7F0E5] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Utensils size={13} className="text-[#493126]" />
              <span>Section 05 • Complete Bakery Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              Oven-Fresh Daily Delights
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
              From signature cakes and European pastries to fudgy brownies, cookies, breads, and barista coffee.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            <button
              type="button"
              onClick={() => setActiveMenuCategory("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeMenuCategory === "All"
                  ? "bg-[#493126] text-[#FFF8EE] shadow-md scale-105"
                  : "bg-[#E8D8C4] text-[#392820] hover:bg-[#C5A16A]/40 border border-[#C5A16A]/60"
              }`}
            >
              All Items ({BAKERY_PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => {
              const count = BAKERY_PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveMenuCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    activeMenuCategory === cat
                      ? "bg-[#493126] text-[#FFF8EE] shadow-md scale-105"
                      : "bg-[#E8D8C4] text-[#392820] hover:bg-[#C5A16A]/40 border border-[#C5A16A]/60"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Category Special Banner for Gift Hampers */}
          {activeMenuCategory === "Gift Hampers" && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#35231D] via-[#2A1710] to-[#35231D] border-2 border-[#C5A16A] text-[#FFF8EE] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#DFC085] block mb-1">
                  ✦ Bespoke Celebration Gifting & Bulk Favours ✦
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  Planning Wedding Favours or Festive Gift Packets?
                </h4>
                <p className="text-xs text-[#EFE3D2]/85 mt-1 max-w-xl">
                  We customize keepsake boxes, satin ribbons, and artisan treats (macarons, cookies, brownies & chocolates) tailored to your theme and guest count in Dinanagar.
                </p>
              </div>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                  "Hello Manoj Kumar ji! I would like to enquire about bulk custom Gift Packets / Hampers for a wedding or family celebration in Dinanagar."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-full bg-[#C5A16A] hover:bg-[#DFC085] text-[#24130A] text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Enquire Bulk Gifting</span>
              </a>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card-luxury-3d rounded-2xl overflow-hidden bg-[#E8D8C4] border border-[#C5A16A] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE3D2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.dietary && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#180C06]/85 backdrop-blur-sm text-[#C5A16A] text-[10px] font-semibold uppercase tracking-wider">
                        {product.dietary}
                      </span>
                    )}
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#E8D8C4] text-[#493126] border border-[#C5A16A] text-[10px] font-bold">
                      {product.priceNote}
                    </span>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#493126]">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#392820] mt-0.5 line-clamp-1 group-hover:text-[#493126] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#392820]/75 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppOrder(product.name, product.priceNote, product.category)}
                    className="w-full py-2.5 px-3 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <MessageCircle size={13} />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6 – CUSTOM CAKE EXPERIENCE (Interactive Builder)
          Soft Ivory (#EFE3D2) with Embedded Design, Reference Upload & WhatsApp
          ==================================================================== */}
      <section id="custom-cake" className="relative w-full py-20 lg:py-28 bg-[#EFE3D2] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles size={13} className="text-[#493126]" />
              <span>Section 06 • Custom Cake Atelier</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              Design Your Dream Cake
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
              Select your flavour, weight, date, and upload a design photo from your phone or gallery. Our master bakers in Dinanagar will craft it to perfection.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-4xl mx-auto bg-[#E8D8C4] border-2 border-[#C5A16A] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
            <form onSubmit={handleCustomOrderSubmit} className="space-y-8">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Sukhman Singh"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 98150 94145"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  />
                </div>
              </div>

              {/* Row 2: Flavour & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    Cake Flavour *
                  </label>
                  <select
                    value={formFlavour}
                    onChange={(e) => setFormFlavour(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  >
                    <option value="Belgian Chocolate Truffle">Belgian Chocolate Truffle (70% Valrhona)</option>
                    <option value="Red Velvet Cream Cheese">Red Velvet & Cream Cheese</option>
                    <option value="Grand Black Forest & Cherries">Grand Black Forest & Kirsch Cherries</option>
                    <option value="Golden Butterscotch Crunch">Golden Butterscotch & Praline</option>
                    <option value="Fresh Pineapple & Seasonal Fruit">Fresh Pineapple & Tropical Fruit</option>
                    <option value="Madagascar Vanilla Bean">Madagascar Vanilla Bean</option>
                    <option value="Rich Coffee Mocha">Rich Coffee Mocha</option>
                    <option value="Custom Flavour Request">Other / Custom Flavour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    Occasion / Theme *
                  </label>
                  <select
                    value={formOccasion}
                    onChange={(e) => setFormOccasion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  >
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary & Romance">Anniversary & Romance</option>
                    <option value="Wedding & Engagement">Wedding & Engagement</option>
                    <option value="Luxury Gift Hampers & Return Favours">Luxury Gift Hampers & Return Favours</option>
                    <option value="Kids Theme / Cartoon">Kids Theme / Cartoon</option>
                    <option value="Baby Shower / Welcome">Baby Shower / Welcome</option>
                    <option value="Milestone / Corporate">Milestone / Corporate Celebration</option>
                    <option value="Other Special Moment">Other Special Moment</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Cake Weight / Size Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                  Select Weight / Size *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { id: "1-lb", label: "1 Pound", serves: "3–5 Guests" },
                    { id: "2-lb", label: "2 Pound", serves: "6–10 Guests", popular: true },
                    { id: "3-lb", label: "3 Pound", serves: "12–15 Guests" },
                    { id: "4-lb", label: "4 Pound", serves: "18–20 Guests" },
                    { id: "5-lb-plus", label: "5+ Lb Multi-Tier", serves: "Grand Event" },
                  ].map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setFormWeight(w.id)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formWeight === w.id
                          ? "bg-[#493126] text-[#FFF8EE] border-[#493126] shadow-md scale-102"
                          : "bg-white text-[#392820] border-[#C5A16A] hover:bg-[#F7F0E5]"
                      }`}
                    >
                      <span className="font-bold text-sm block">{w.label}</span>
                      <span className="text-[10px] opacity-75 block mt-0.5">{w.serves}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Required Date & Special Plaque Text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    Required Delivery / Pickup Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                    Message to Pipe on Cake Plaque
                  </label>
                  <input
                    type="text"
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="e.g. Happy 25th Anniversary Mom & Dad"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A16A] text-[#392820] text-sm focus:outline-none focus:ring-2 focus:ring-[#493126]"
                  />
                </div>
              </div>

              {/* Row 5: Reference Image Upload from Gallery */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#493126] mb-2">
                  Upload Reference Photo (From your Phone or Computer Gallery)
                </label>
                <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#C5A16A] text-center hover:border-[#493126] transition-colors relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  {formImagePreview ? (
                    <div className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-[#493126] mb-3 shadow-md">
                        <img src={formImagePreview} alt="Reference Preview" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-[#493126]">{formImageName}</span>
                      <span className="text-[11px] text-[#392820]/60 mt-0.5">Click or drag another image to replace</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#F7F0E5] text-[#493126] flex items-center justify-center mb-2">
                        <Upload size={20} />
                      </div>
                      <span className="text-sm font-semibold text-[#392820]">Click to upload design image from gallery</span>
                      <span className="text-xs text-[#392820]/60 mt-1">PNG, JPG, WebP supported</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] font-bold text-xs uppercase tracking-[0.18em] shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Send Custom Cake Order on WhatsApp</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-[#392820]/70 mt-3">
                  Direct kitchen review with master baker Manoj Kumar • Immediate response via WhatsApp
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7 – WHY CHOOSE US (Compact, Animated & Living Suite)
          Warm Cream (#F7F0E5) with Ambient Gold Dust & Active Card Glow
          ==================================================================== */}
      <section id="why-choose-us" className="relative w-full py-10 sm:py-14 bg-[#F7F0E5] border-b border-[#C5A16A]/40 overflow-hidden">
        {/* Ambient Floating Golden Orbs in Background */}
        <div className="absolute top-2 left-10 w-24 h-24 rounded-full bg-[#C5A16A]/10 blur-xl animate-ambient-drift pointer-events-none" />
        <div className="absolute bottom-4 right-12 w-32 h-32 rounded-full bg-[#DFC085]/15 blur-2xl animate-ambient-drift pointer-events-none" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-transparent via-[#C5A16A]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
          {/* Header — Compact & Punchy with Live Pulse */}
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 shadow-sm animate-gold-border-flow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A16A] animate-ping" />
              <ShieldCheck size={13} className="text-[#493126]" />
              <span>The Karshni Standard</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#493126] tracking-tight">
              Why Dinanagar Chooses Karshni
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#392820]/75 mt-1 leading-relaxed">
              5 sacred kitchen promises crafted into every celebration cake & artisan bake.
            </p>
          </div>

          {/* Cards Track with Live Staggered Shimmers & Mobile Auto-Scroll */}
          <div className="relative">
            <div
              ref={pillarsScrollRef}
              onMouseEnter={() => setIsPillarsPaused(true)}
              onMouseLeave={() => setIsPillarsPaused(false)}
              onTouchStart={() => setIsPillarsPaused(true)}
              className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-3 pt-1 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {[
                {
                  num: "01",
                  tag: "100% PURE",
                  icon: Award,
                  title: "Pure Dairy Butter",
                  desc: "Slow-churned pure dairy butter & fresh farm cream. Zero dalda, zero margarine, zero compromise.",
                  highlight: "Zero Hydrogenated Fats",
                  image: "/images/standards/pure-dairy-butter.jpg",
                },
                {
                  num: "02",
                  tag: "BELGIAN",
                  icon: Flame,
                  title: "Belgian Chocolate",
                  desc: "Real imported cocoa solids and 70% Valrhona dark chocolate for an authentic melt-in-mouth finish.",
                  highlight: "70% Valrhona Cacao",
                  image: "/images/standards/belgian-chocolate.jpg",
                },
                {
                  num: "03",
                  tag: "SAME DAY",
                  icon: Clock,
                  title: "Baked Fresh Daily",
                  desc: "Every milestone cake is baked freshly on your event day. Oven-warm craft, never pre-frozen.",
                  highlight: "Bespoke Oven Fresh",
                  image: "/images/standards/baked-fresh-daily.jpg",
                },
                {
                  num: "04",
                  tag: "3D ART",
                  icon: Sparkles,
                  title: "Handmade Sugar Art",
                  desc: "Sculpted ribbon bows, character figures, and delicate date plaques crafted by master artists.",
                  highlight: "Fondant & Sugarcraft",
                  image: "/images/standards/handmade-sugar-art.jpg",
                },
                {
                  num: "05",
                  tag: "WHITE GLOVE",
                  icon: Truck,
                  title: "Punctual Delivery",
                  desc: "Carefully transported in reinforced luxury boxes across Dinanagar & neighboring towns.",
                  highlight: "Reinforced Cake Box",
                  image: "/images/standards/luxury-safe-delivery.jpg",
                },
              ].map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handlePillarSelect(idx)}
                    className={`w-[240px] sm:w-[260px] lg:w-auto shrink-0 snap-center rounded-2xl p-3 sm:p-3.5 text-left flex flex-col justify-between group transition-all duration-500 relative overflow-hidden cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-b from-[#FFF8EE] via-[#EFE3D2] to-[#E8D8C4] border-2 border-[#C5A16A] shadow-[0_10px_35px_rgba(197,161,106,0.35)] scale-[1.02]"
                        : "bg-gradient-to-b from-[#EFE3D2] to-[#E8D8C4] border border-[#C5A16A]/70 hover:border-[#C5A16A] shadow-md hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    {/* Live Diagonal Shimmer Light Sweep (Always Running with Staggered Wave) */}
                    <div
                      className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-pillar-shimmer z-20"
                      style={{ animationDelay: `${idx * 0.9}s` }}
                    />

                    <div>
                      {/* 1. Culinary Image Showcase Window with Floating Badge & Vignette */}
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#24130A] mb-3 shadow-inner">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform ${
                            isActive ? "scale-110 animate-image-breathe" : "group-hover:scale-110"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                        {/* Top-Left: Mini Pill Tag */}
                        <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#180C06]/85 backdrop-blur-sm border border-[#C5A16A]/60 text-[#DFC085] text-[9px] font-bold tracking-wider uppercase">
                          <pillar.icon size={11} className="text-[#DFC085]" />
                          <span>{pillar.tag}</span>
                        </div>

                        {/* Top-Right: Number Pill */}
                        <span className="absolute top-2 right-2 z-10 px-1.5 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-[#DFC085] font-serif text-[11px] font-bold">
                          {pillar.num}
                        </span>
                      </div>

                      {/* 2. Text Details */}
                      <h3
                        className={`font-serif text-base sm:text-lg font-medium leading-snug transition-colors mb-1 ${
                          isActive ? "text-[#493126] font-semibold" : "text-[#392820]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#392820]/80 leading-relaxed line-clamp-2">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* 3. Bottom Micro Highlight Pill with Twinkling Sparkle */}
                    <div className="mt-3 pt-2.5 border-t border-[#C5A16A]/30 flex items-center gap-1.5 text-[10px] font-semibold text-[#493126]">
                      <Sparkles
                        size={10}
                        className={`text-[#C5A16A] ${isActive ? "animate-spin" : "animate-sparkle-twinkle"}`}
                        style={{ animationDuration: "3s" }}
                      />
                      <span>{pillar.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Interactive Controls: Prev/Next & Glowing Dot Indicators */}
            <div className="flex lg:hidden items-center justify-between gap-3 mt-3 px-2">
              <button
                type="button"
                onClick={() => handlePillarSelect((activePillarIndex - 1 + 5) % 5)}
                className="w-7 h-7 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] flex items-center justify-center shadow-sm active:scale-95 transition-transform cursor-pointer"
                aria-label="Previous standard"
              >
                <ChevronLeft size={14} />
              </button>

              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePillarSelect(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activePillarIndex === i
                        ? "w-6 h-2 bg-[#493126] shadow-sm"
                        : "w-2 h-2 bg-[#C5A16A]/50 hover:bg-[#C5A16A]"
                    }`}
                    aria-label={`Go to standard ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => handlePillarSelect((activePillarIndex + 1) % 5)}
                className="w-7 h-7 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] flex items-center justify-center shadow-sm active:scale-95 transition-transform cursor-pointer"
                aria-label="Next standard"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8 – SPECIAL OCCASIONS
          Soft Ivory (#EFE3D2) with Occasion Cards
          ==================================================================== */}
      <section id="occasions" className="relative w-full py-20 lg:py-28 bg-[#EFE3D2] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Gift size={13} className="text-[#493126]" />
              <span>Section 08 • Special Occasions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              Cakes for Every Milestone
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
              Every milestone deserves a bespoke centerpiece crafted to honor the joy of the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_OCCASIONS.map((occ) => (
              <div
                key={occ.id}
                className="card-luxury-3d rounded-2xl overflow-hidden bg-[#E8D8C4] border border-[#C5A16A] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F0E5]">
                    <img
                      src={occ.image}
                      alt={occ.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#392820]/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white font-serif text-xl font-medium">
                      {occ.title}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-[#493126] uppercase tracking-wider block mb-1">
                      {occ.subtitle}
                    </span>
                    <p className="text-xs text-[#392820]/80 leading-relaxed mt-1">
                      {occ.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#C5A16A]/50 space-y-1 text-[11px] text-[#392820]/70">
                      <div><strong className="text-[#493126]">Servings:</strong> {occ.servings}</div>
                      <div><strong className="text-[#493126]">Best Flavour:</strong> {occ.popularFlavour}</div>
                      <div><strong className="text-[#493126]">Notice:</strong> {occ.leadTime}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppOrder(occ.title, undefined, "Special Occasions")}
                    className="w-full py-2.5 px-3 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <MessageCircle size={13} />
                    <span>Inquire for {occ.title}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 9 – PHOTO GALLERY WITH LIGHTBOX MODAL
          Warm Cream (#F7F0E5) with Real Bakery Photographs
          ==================================================================== */}
      <section id="gallery" className="relative w-full py-20 lg:py-28 bg-[#F7F0E5] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles size={13} className="text-[#493126]" />
              <span>Section 09 • Visual Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              A Glimpse into Our Atelier
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
              Authentic photographs of our store in Shree Ram Market, display counters, and celebration cakes.
            </p>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {["All", "Cakes", "Pastries", "Ambience"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveGalleryCategory(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeGalleryCategory === tab
                    ? "bg-[#493126] text-[#FFF8EE] shadow-md scale-105"
                    : "bg-[#E8D8C4] text-[#392820] hover:bg-[#C5A16A]/40 border border-[#C5A16A]/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedLightboxPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden bg-[#E8D8C4] border border-[#C5A16A] cursor-pointer shadow-md hover:shadow-xl transition-all aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#392820]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A16A] font-semibold">{photo.category}</span>
                  <h4 className="font-serif text-lg font-medium leading-tight mt-1">{photo.title}</h4>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 10 – CUSTOMER REVIEWS (Google 5-Star Reviews)
          Soft Ivory (#EFE3D2) with Google Rating & Horizontal Card Track
          ==================================================================== */}
      <section id="reviews" className="relative w-full py-20 lg:py-28 bg-[#EFE3D2] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          {/* Header & Google Rating Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                <GoogleGIcon size={14} />
                <span>Section 10 • Google 5-Star Reviews</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
                Loved by Dinanagar Patrons
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
                Real customer feedback from celebrations across Dinanagar, Gurdaspur, and beyond.
              </p>
            </div>

            {/* Google Maps Verified Score Card */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#E8D8C4] border border-[#C5A16A] shadow-sm">
              <GoogleGIcon size={32} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl font-bold text-[#392820]">4.9</span>
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-[#392820]/70 font-medium">Over 280+ Verified Google Reviews</span>
              </div>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-xs font-semibold text-[#493126] hover:underline flex items-center gap-1"
              >
                <span>Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Horizontal Sliding Track with Controls */}
          <div className="relative">
            {/* Arrows */}
            <button
              type="button"
              onClick={() => handleReviewScroll("left")}
              aria-label="Previous Reviews"
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#C5A16A] text-[#493126] shadow-lg items-center justify-center hover:bg-[#493126] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleReviewScroll("right")}
              aria-label="Next Reviews"
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#C5A16A] text-[#493126] shadow-lg items-center justify-center hover:bg-[#493126] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            {/* Track */}
            <div
              ref={reviewTrackRef}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 select-none"
              style={{ scrollbarWidth: "none" }}
            >
              {GOOGLE_REVIEWS_DATA.map((rev) => (
                <div
                  key={rev.id}
                  className="card-luxury-3d w-[320px] sm:w-[380px] flex-shrink-0 snap-center rounded-2xl bg-[#E8D8C4] border border-[#C5A16A] p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Author & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-11 h-11 rounded-full object-cover border border-[#C5A16A]"
                        />
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#392820]">{rev.author}</h4>
                          <span className="text-[11px] text-[#392820]/60">{rev.badge}</span>
                        </div>
                      </div>
                      <GoogleGIcon size={20} />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#FBBC05] mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" stroke="none" />
                      ))}
                      <span className="text-xs text-[#392820]/60 ml-2">{rev.date}</span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs text-[#392820]/85 leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Delivered Cake Reference */}
                  <div className="mt-5 pt-3.5 border-t border-[#C5A16A]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.cakeImage}
                        alt={rev.cakeName}
                        className="w-9 h-9 rounded-lg object-cover border border-[#C5A16A]"
                      />
                      <div>
                        <span className="text-[10px] text-[#493126] font-semibold uppercase block">{rev.occasion}</span>
                        <span className="text-xs font-medium text-[#392820] line-clamp-1">{rev.cakeName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 11 – INSTAGRAM SHOWCASE
          Warm Cream (#F7F0E5) with @karshni_bakers Profile Link
          ==================================================================== */}
      <section id="instagram" className="relative w-full py-20 lg:py-28 bg-[#F7F0E5] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                <Instagram size={13} className="text-[#493126]" />
                <span>Section 11 • Instagram Stories</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
                Follow @karshni_bakers
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
                Daily fresh bakes, behind-the-scenes cake artistry, and patron celebration stories on Instagram.
              </p>
            </div>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] text-xs font-bold tracking-wider uppercase transition-all shadow-md self-start md:self-auto"
            >
              <Instagram size={15} />
              <span>Follow on Instagram</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Instagram Post Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-square bg-[#E8D8C4] border border-[#C5A16A] block shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-[#392820]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                  <Instagram size={22} className="text-[#C5A16A] mb-1.5" />
                  <span className="text-[11px] font-bold">♥ {post.likes}</span>
                  <span className="text-[10px] text-white/80 line-clamp-2 mt-1">{post.caption}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 12 – VISIT OUR BAKERY
          Soft Ivory (#EFE3D2) with Verified Address, Hours & Google Maps Embed
          ==================================================================== */}
      <section id="contact" className="relative w-full py-20 lg:py-28 bg-[#EFE3D2] border-b border-[#C5A16A]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D8C4] border border-[#C5A16A] text-[#493126] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <MapPin size={13} className="text-[#493126]" />
              <span>Section 12 • Visit Karshni</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#493126] tracking-tight">
              Visit Us in Dinanagar
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#392820]/80 mt-2">
              Step into our boutique bakery in Shree Ram Market for warm oven bakes or custom cake consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Information Card */}
            <div className="lg:col-span-5 card-luxury-3d rounded-3xl p-8 bg-[#E8D8C4] border border-[#C5A16A] flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#493126]">{BRAND.name}</h3>
                  <p className="text-xs text-[#392820]/70 font-medium uppercase tracking-wider mt-0.5">
                    Artisanal Bakery & Custom Cake Atelier
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#392820]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#493126] text-[#C5A16A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#493126]">Bakery Address</strong>
                      <span className="text-xs leading-relaxed mt-0.5 block">{BRAND.address}</span>
                      <span className="text-[11px] text-[#392820]/60 block mt-0.5">Near Punjab & Sind Bank, Dinanagar JT Road</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#493126] text-[#C5A16A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Clock size={16} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#493126]">Operating Hours</strong>
                      <span className="text-xs block mt-0.5">{BRAND.hours}</span>
                      <span className="text-[11px] text-[#493126] font-semibold block mt-0.5">{BRAND.days}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#493126] text-[#C5A16A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Phone size={16} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#493126]">Phone & Orders</strong>
                      <a href={`tel:${BRAND.phoneRaw}`} className="text-xs font-semibold text-[#493126] hover:underline block mt-0.5">
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#C5A16A]/60 flex flex-col sm:flex-row gap-3">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#493126] hover:bg-[#35231D] text-[#FFF8EE] text-xs font-bold tracking-wider uppercase text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MapPin size={14} />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Karshni Bakers! I would like to visit your bakery in Shree Ram Market, Dinanagar. Please share directions.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-white hover:bg-[#F7F0E5] text-[#493126] border border-[#493126] text-xs font-bold tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#E8D8C4] border-2 border-[#C5A16A] shadow-xl min-h-[380px] relative">
              <iframe
                title="Karshni Bakers Dinanagar Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.455648895085!2d75.4608333!3d32.1466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c0b396e95c1d1%3A0xb3a268a735c05273!2sDinanagar%2C%20Punjab%20143531!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          LIGHTBOX MODAL FOR GALLERY
          ==================================================================== */}
      {selectedLightboxPhoto && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#180C06] border-2 border-[#C5A16A] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedLightboxPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-[#100602]">
              <img
                src={selectedLightboxPhoto.src}
                alt={selectedLightboxPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#221008] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A16A] font-semibold">
                  {selectedLightboxPhoto.category}
                </span>
                <h3 className="font-serif text-xl text-white font-medium mt-0.5">
                  {selectedLightboxPhoto.title}
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-xl">
                  {selectedLightboxPhoto.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppOrder(selectedLightboxPhoto.title, undefined, selectedLightboxPhoto.category)}
                className="py-2.5 px-5 rounded-full bg-[#C5A16A] hover:bg-white text-[#392820] text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all flex-shrink-0 cursor-pointer"
              >
                <MessageCircle size={14} />
                <span>Order This Design</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Cake Customizer Modal */}
      {isCustomizerOpen && (
        <CakeCustomizerModal
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
          product={customizerProduct}
        />
      )}
    </div>
  );
}

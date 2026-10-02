import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  ChevronRight,
  X,
  Eye,
  Palette,
  ShieldCheck,
  HeartHandshake,
  Send,
  ShoppingBag,
  Award,
  Package,
  Calendar,
  Users,
  Building2,
  Gift,
  CheckCircle2,
  Wheat,
} from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import { SocialActionButtons } from "./ui/social-action-buttons";
import {
  BRAND,
  GALLERY_ITEMS,
  OCCASIONS_LIST,
  REAL_PHOTOS,
  WHY_KARSHNI,
  TESTIMONIALS_LIST,
  FRESH_BAKERY_PRODUCTS,
  CAKE_TYPES_SHOWCASE,
  SPECIAL_BULK_ORDERS,
  PARTY_CELEBRATION_ITEMS,
  type GalleryPhoto,
  type BakeryProduct,
} from "../lib/bakery-data";
import { CAKE_PORTFOLIO, type CakePortfolioItem } from "../lib/cake-portfolio";

export function HomeExperience() {
  const [activeLightbox, setActiveLightbox] = useState<GalleryPhoto | null>(null);
  const [selectedCakeDetail, setSelectedCakeDetail] = useState<CakePortfolioItem | null>(null);
  const [selectedBakeryProduct, setSelectedBakeryProduct] = useState<BakeryProduct | null>(null);
  const [activeBakeryTab, setActiveBakeryTab] = useState<string>("All");

  const bakeryFilterCategories = [
    "All",
    "Pastries & Tarts",
    "Biscuits & Cookies",
    "Breads & Rolls",
    "Muffins, Donuts & Brownies",
  ];

  const filteredBakeryProducts = useMemo(() => {
    if (activeBakeryTab === "All") return FRESH_BAKERY_PRODUCTS;
    if (activeBakeryTab === "Pastries & Tarts") {
      return FRESH_BAKERY_PRODUCTS.filter(
        (p) => p.name === "Fresh Pastries" || p.name === "Tarts" || p.name === "Cream Rolls"
      );
    }
    if (activeBakeryTab === "Biscuits & Cookies") {
      return FRESH_BAKERY_PRODUCTS.filter(
        (p) => p.name === "Fresh Homemade Biscuits" || p.name === "Cookies"
      );
    }
    if (activeBakeryTab === "Breads & Rolls") {
      return FRESH_BAKERY_PRODUCTS.filter(
        (p) =>
          p.name === "Buns" ||
          p.name === "Garlic Bread" ||
          p.name === "Fresh Bread" ||
          p.name === "Cheese Rolls"
      );
    }
    if (activeBakeryTab === "Muffins, Donuts & Brownies") {
      return FRESH_BAKERY_PRODUCTS.filter(
        (p) =>
          p.name === "Muffins" ||
          p.name === "Donuts" ||
          p.name === "Brownies" ||
          p.name === "Cake Pops"
      );
    }
    return FRESH_BAKERY_PRODUCTS;
  }, [activeBakeryTab]);

  const handleOrderWhatsApp = (itemName?: string, context?: string) => {
    const text = itemName
      ? `Hello Karshni Baker's! I am interested in ordering: *${itemName}*${context ? ` (${context})` : ""}. Could you please share availability and customization options?`
      : `Hello Karshni Baker's! I would like to inquire about ordering a celebration cake or bakery specials.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSpecialOrderWhatsApp = (serviceTitle: string, customMessage?: string) => {
    const text = customMessage || `Hello Karshni Baker's! I would like to inquire about *${serviceTitle}* for an upcoming event.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      {/* ====================================================================
          1. CINEMATIC HERO SECTION
          ==================================================================== */}
      <section className="hero-wrap" id="hero">
        <img
          src={REAL_PHOTOS.hero}
          alt="Karshni Baker's Artisanal Bakery & Showcase"
          className="hero-bg-media"
        />
        <div className="hero-overlay" />

        {/* Floating subtle gold particle dust */}
        <div className="floating-particle" style={{ left: "10%", width: "4px", height: "4px", animationDelay: "0s", animationDuration: "9s" }} />
        <div className="floating-particle" style={{ left: "26%", width: "6px", height: "6px", animationDelay: "2.5s", animationDuration: "11s" }} />
        <div className="floating-particle" style={{ left: "62%", width: "5px", height: "5px", animationDelay: "1.2s", animationDuration: "10s" }} />
        <div className="floating-particle" style={{ left: "82%", width: "4px", height: "4px", animationDelay: "3.8s", animationDuration: "8.5s" }} />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="gold-line-pill" />
            <span>{BRAND.heroEyebrow}</span>
          </div>

          <h1 className="hero-title">
            Karshni Baker’s
          </h1>

          <p className="hero-subtitle">
            {BRAND.heroTitle}
          </p>

          <p className="hero-description">
            {BRAND.heroSupportingText}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#bakery-products" className="btn btn-gold">
              <span>Fresh From Our Bakery</span>
              <ArrowRight size={16} />
            </a>

            <a href="#cakes" className="btn btn-outline-white">
              <span>Cakes & Custom Orders</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-white/70">
            <MapPin size={13} className="text-[var(--color-gold-light)]" />
            <span>Shree Ram Market, Dinanagar, Punjab · Open Daily 9:00 AM – 9:30 PM</span>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <div className="bg-[var(--color-chocolate)] text-[var(--color-sand)] border-y border-[var(--color-gold-border)] py-4 px-6">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[var(--color-gold-light)]" />
            <span>Bespoke 3D & Custom Cakes</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Wheat size={14} className="text-[var(--color-gold-light)]" />
            <span>House-Made Almond Tea Biscuits</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Award size={14} className="text-[var(--color-gold-light)]" />
            <span>100% Pure & Fresh Daily Ingredients</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift size={14} className="text-[var(--color-gold-light)]" />
            <span>Party, Bulk & Corporate Orders</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. SECTION 1: FRESH FROM OUR BAKERY
          Strictly only requested products with Fresh Homemade Biscuits highlighted
          ==================================================================== */}
      <section className="section-wrapper bg-white" id="bakery-products">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Oven-Fresh Daily</span>
            <h2 className="section-title">
              Fresh From <span className="section-title-italic">Our Bakery</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Every morning our Dinanagar kitchen prepares fresh pastries, house-made biscuits, golden brioche buns, and savory bakery specialties using time-honored artisanal recipes.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {bakeryFilterCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveBakeryTab(tab)}
                className={`interactive-tab-btn ${activeBakeryTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredBakeryProducts.map((prod) => (
              <article key={prod.id} className="product-grid-card group">
                <div
                  className="product-card-img-wrap cursor-pointer"
                  onClick={() => setSelectedBakeryProduct(prod)}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="product-card-img"
                    loading="lazy"
                  />
                  {prod.isHouseMade ? (
                    <span className="absolute top-3 left-3 house-made-badge">
                      <Sparkles size={12} />
                      <span>{prod.badge}</span>
                    </span>
                  ) : (
                    prod.badge && (
                      <span className="luxury-card-tag !top-3 !left-3 text-[0.68rem]">
                        {prod.badge}
                      </span>
                    )
                  )}

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-semibold">
                    <Eye size={15} />
                    <span>Quick View</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[0.68rem] uppercase font-bold tracking-widest text-[var(--color-gold)]">
                        {prod.category}
                      </span>
                      {prod.isHouseMade && (
                        <span className="text-[0.68rem] text-[var(--color-espresso)] font-semibold bg-[var(--color-sand-light)] px-2 py-0.5 rounded-full">
                          House Specialty
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[var(--color-chocolate)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-[#55443B] leading-relaxed mb-4">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-sand-light)] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedBakeryProduct(prod)}
                      className="text-xs font-semibold uppercase tracking-wider text-[var(--color-chocolate)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => handleOrderWhatsApp(prod.name, "Fresh Bakery Item")}
                      className="btn btn-whatsapp text-xs px-3.5 py-1.5 !rounded-lg"
                      title={`Order ${prod.name} on WhatsApp`}
                    >
                      <ShoppingBag size={13} />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* House-Made Biscuit Callout */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-sand)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-gold-border)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0 shadow-sm">
                <Wheat size={28} />
              </div>
              <div>
                <span className="text-[0.68rem] uppercase tracking-widest text-[var(--color-gold)] font-bold block mb-1">
                  Authentic House Specialty
                </span>
                <h3 className="font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-1">
                  Our Fresh Homemade Biscuits
                </h3>
                <p className="text-xs sm:text-sm text-[#55443B] max-w-xl">
                  Unlike generic packaged products, Karshni Baker's makes its own biscuits in-house from scratch. Packed with sliced almonds, pure butter, and traditional cardamom, our boxes make the ultimate tea accompaniment.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOrderWhatsApp("Fresh Homemade Biscuits Gift Box", "House-Made Specialty")}
              className="btn btn-primary text-xs flex-shrink-0"
            >
              <WhatsAppIcon size={15} />
              <span>Order Biscuit Boxes</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bakery Product Modal */}
      {selectedBakeryProduct && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedBakeryProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-xl w-full mx-4 shadow-2xl border border-[var(--color-sand)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sand-light)]">
              <img
                src={selectedBakeryProduct.image}
                alt={selectedBakeryProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedBakeryProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              {selectedBakeryProduct.badge && (
                <span className="absolute bottom-4 left-4 bg-[var(--color-espresso)] text-[var(--color-gold-light)] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  {selectedBakeryProduct.badge}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold block mb-1">
                {selectedBakeryProduct.category}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-3">
                {selectedBakeryProduct.name}
              </h3>
              <p className="text-sm text-[#55443B] leading-relaxed mb-6">
                {selectedBakeryProduct.description}
              </p>

              <div className="p-3.5 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] text-xs text-[#55443B] mb-6 flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                <span>Baked daily in small artisanal batches for pure freshness and flavor.</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--color-sand-light)]">
                <button
                  onClick={() => setSelectedBakeryProduct(null)}
                  className="btn btn-cream text-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleOrderWhatsApp(selectedBakeryProduct.name, "Fresh Bakery Item");
                    setSelectedBakeryProduct(null);
                  }}
                  className="btn btn-whatsapp text-xs px-5 py-2.5"
                >
                  <WhatsAppIcon size={15} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          3. SECTION 2: CAKES & CUSTOM CAKES SHOWCASE
          Highlighting Custom Cake Orders as main service with strong CTAs
          ==================================================================== */}
      <section className="section-wrapper bg-[var(--color-cream)]" id="cakes">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Haute Patisserie</span>
            <h2 className="section-title">
              Cakes & <span className="section-title-italic">Custom Creations</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              From bespoke fondant sculptures and romantic anniversary plaques to Bento mini cakes and eggless delights, every cake is crafted to be the crowning centerpiece of your celebration.
            </p>
          </div>

          {/* Highlight Banner: Custom Cake Orders as Main Service */}
          <div className="relative rounded-3xl overflow-hidden bg-[var(--color-chocolate)] text-white p-8 sm:p-12 mb-14 shadow-2xl border border-[var(--color-gold-border)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--color-gold-light)] uppercase tracking-wider mb-4 border border-white/15">
                  <Award size={14} />
                  <span>Our Flagship Service</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-3">
                  Create Your Custom Cake
                </h3>
                <p className="text-sm text-[var(--color-sand)] leading-relaxed mb-6 max-w-xl opacity-90">
                  Have a dream design, theme idea, or Pinterest picture? Our master decorator will bring it to life with hand-crafted sugar details, customized name banners, and your preferred gourmet sponge and ganache.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleSpecialOrderWhatsApp("Custom Dream Cake", "Hello Karshni Baker's! I would like to Order My Dream Cake with custom design references.")}
                    className="btn btn-gold text-xs px-6 py-3"
                  >
                    <Palette size={16} />
                    <span>Order Your Dream Cake</span>
                  </button>

                  <button
                    onClick={() => handleSpecialOrderWhatsApp("Custom Cake Consultation", "Hello Karshni Baker's! I'd like to consult on a custom cake design for an upcoming celebration.")}
                    className="btn btn-outline-white text-xs px-5 py-3"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-white/20 aspect-square shadow-lg">
                  <img
                    src={REAL_PHOTOS.cakeTulipBow}
                    alt="Custom Tulip Bow Cake"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/20 aspect-square shadow-lg">
                  <img
                    src={REAL_PHOTOS.cakeKanishToybox}
                    alt="Custom 3D Figurine Cake"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 10 Cake Types Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
            {CAKE_TYPES_SHOWCASE.map((cakeType) => (
              <div
                key={cakeType.id}
                className={`rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between ${
                  cakeType.highlight
                    ? "border-[var(--color-gold)] shadow-md ring-2 ring-[var(--color-gold)]/20"
                    : "border-[var(--color-sand)] hover:border-[var(--color-gold)] shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--color-sand-light)]">
                  <img
                    src={cakeType.image}
                    alt={cakeType.name}
                    className="w-full h-full object-cover transition-transform duration-600 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-[var(--color-gold-light)] text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-white/10">
                    {cakeType.tag}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[var(--color-chocolate)] mb-1">
                      {cakeType.name}
                    </h4>
                    <p className="text-[0.72rem] text-[#705D53] font-semibold uppercase tracking-wider mb-2">
                      {cakeType.subtitle}
                    </p>
                    <p className="text-xs text-[#55443B] leading-relaxed mb-3 line-clamp-3">
                      {cakeType.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOrderWhatsApp(cakeType.name, "Cake Type Inquiry")}
                    className="w-full btn btn-cream text-[0.75rem] py-2 px-3 justify-center !rounded-lg"
                  >
                    <span>Inquire / Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Real Uploaded Cakes Portfolio Grid */}
          <div className="border-t border-[var(--color-sand)] pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="section-eyebrow">Genuine Dinanagar Portfolio</span>
                <h3 className="font-serif text-2xl font-medium text-[var(--color-chocolate)]">
                  Authentic Client Creations
                </h3>
              </div>
              <Link to="/cakes" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-chocolate)] hover:text-[var(--color-gold)] transition-colors">
                <span>View Full Cake Gallery</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {CAKE_PORTFOLIO.map((cake) => (
                <article key={cake.id} className="luxury-card group">
                  <div className="luxury-card-img-wrap">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="luxury-card-img"
                      loading="lazy"
                    />
                    <span className="luxury-card-tag">{cake.tag}</span>
                    {cake.weight && (
                      <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md border border-white/10">
                        {cake.weight}
                      </span>
                    )}
                  </div>

                  <div className="luxury-card-body">
                    <h3 className="luxury-card-title group-hover:text-[var(--color-gold)] transition-colors">
                      {cake.name}
                    </h3>
                    <p className="luxury-card-desc">{cake.description}</p>

                    <div className="luxury-card-actions">
                      <button
                        onClick={() => setSelectedCakeDetail(cake)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-chocolate)] hover:text-[var(--color-gold)] transition-colors"
                      >
                        <Eye size={14} />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => handleOrderWhatsApp(cake.name)}
                        className="btn btn-whatsapp text-xs px-4 py-2"
                        title={`Order ${cake.name} on WhatsApp`}
                      >
                        <WhatsAppIcon size={14} />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cake Details Lightbox / Modal */}
      {selectedCakeDetail && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedCakeDetail(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full mx-4 shadow-2xl border border-[var(--color-sand)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sand-light)]">
              <img
                src={selectedCakeDetail.image}
                alt={selectedCakeDetail.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCakeDetail(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close cake modal"
              >
                <X size={18} />
              </button>
              <span className="absolute bottom-4 left-4 bg-[var(--color-espresso)] text-[var(--color-gold-light)] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {selectedCakeDetail.tag}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-2">
                {selectedCakeDetail.name}
              </h3>
              <p className="text-sm text-[#55443B] leading-relaxed mb-4">
                {selectedCakeDetail.description}
              </p>

              <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] mb-6 text-xs text-[var(--color-chocolate)]">
                <strong className="block font-semibold mb-1 text-[var(--color-espresso)]">Custom Inscription & Personalization:</strong>
                {selectedCakeDetail.inscriptions}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--color-sand-light)]">
                <div className="text-xs text-[#705D53]">
                  <span>Available in 1kg, 1.5kg, 2kg+ tiers</span>
                </div>
                <button
                  onClick={() => {
                    handleOrderWhatsApp(selectedCakeDetail.name);
                    setSelectedCakeDetail(null);
                  }}
                  className="btn btn-whatsapp text-xs px-5 py-2.5"
                >
                  <WhatsAppIcon size={15} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          4. SECTION 3: SPECIAL & BULK ORDERS
          Professional dedicated section for Custom, Bulk, Party, Wedding, Corporate, Celebration Orders
          ==================================================================== */}
      <section className="section-wrapper bg-white" id="special-orders">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Professional Catering & Events</span>
            <h2 className="section-title">
              Special & <span className="section-title-italic">Bulk Orders</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Whether you are organizing an intimate family celebration, a lavish wedding reception, or an executive corporate gathering, Karshni Baker’s provides dedicated large-scale baking and seamless event packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIAL_BULK_ORDERS.map((service) => {
              const Icon =
                service.id === "custom-orders"
                  ? Palette
                  : service.id === "bulk-orders"
                  ? Package
                  : service.id === "party-orders"
                  ? Users
                  : service.id === "wedding-event-orders"
                  ? Award
                  : service.id === "corporate-orders"
                  ? Building2
                  : HeartHandshake;

              return (
                <div key={service.id} className="special-order-card group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-gold)] group-hover:bg-[var(--color-espresso)] group-hover:text-[var(--color-gold-light)] group-hover:border-[var(--color-espresso)] transition-all">
                        <Icon size={22} />
                      </div>
                      <span className="text-[0.68rem] uppercase font-bold tracking-widest text-[var(--color-gold)] bg-[var(--color-sand-light)] px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs font-semibold text-[var(--color-espresso)] mb-3">
                      {service.lead}
                    </p>

                    <p className="text-xs text-[#55443B] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#55443B]">
                          <CheckCircle2 size={13} className="text-[var(--color-gold)] flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSpecialOrderWhatsApp(service.title, service.whatsappMessage)}
                    className="w-full btn btn-cream text-xs py-2.5 justify-center group-hover:border-[var(--color-gold)]"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{service.ctaLabel}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. SECTION 4: PARTY & CELEBRATION
          Complete celebration needs: Birthday Cakes, Celebration Cakes, Cake Toppers,
          Candles, Party Packs, Celebration Boxes, Gift Hampers, Custom Celebration Orders
          ==================================================================== */}
      <section className="section-wrapper bg-[var(--color-cream)]" id="celebrations">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Your Complete Celebration Destination</span>
            <h2 className="section-title">
              Party & <span className="section-title-italic">Celebrations</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              From majestic centerpiece cakes and sparkling golden candles to curated gift hampers and pre-portioned party snack packs, we make milestone celebrations seamless and joyous.
            </p>
          </div>

          {/* Visual Showcase Feature Card */}
          <div className="mb-14 rounded-3xl overflow-hidden bg-white border border-[var(--color-sand)] shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] lg:aspect-auto h-full">
              <img
                src={REAL_PHOTOS.celebrationHamper}
                alt="Karshni Celebration Gift Hamper with Toppers & Baked Treats"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 house-made-badge">
                <Gift size={12} />
                <span>Celebration Bundles</span>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12">
              <span className="section-eyebrow">Bespoke Celebration Packaging</span>
              <h3 className="font-serif text-3xl font-medium text-[var(--color-chocolate)] mb-3">
                Everything for Your Special Day
              </h3>
              <p className="text-sm text-[#55443B] leading-relaxed mb-6">
                Planning a milestone? Avoid running to multiple shops. Karshni Baker’s bundles your celebration cake with designer candle fountains, custom cursive cake toppers, savory snack packs, and luxury gift hampers wrapped in satin gold ribbons.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#55443B]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Golden Acrylic Toppers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Metallic Numeral Candles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Handcrafted Biscuit Hampers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Coordinated Party Snack Packs</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleSpecialOrderWhatsApp("Celebration Hamper & Party Pack", "Hello Karshni Baker's! I would like to inquire about Party Packs, Toppers and Celebration Boxes.")}
                  className="btn btn-gold text-xs"
                >
                  <Gift size={15} />
                  <span>Order Celebration Box</span>
                </button>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="btn btn-cream text-xs"
                >
                  <Phone size={14} />
                  <span>Call: {BRAND.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8 Party & Celebration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTY_CELEBRATION_ITEMS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-white border border-[var(--color-sand)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-sand-light)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-106"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-[var(--color-gold-light)] text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[var(--color-chocolate)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#55443B] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSpecialOrderWhatsApp(item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-chocolate)] hover:text-[var(--color-gold)] transition-colors pt-2 border-t border-[var(--color-sand-light)]"
                  >
                    <span>Inquire Item</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. ABOUT SECTION (Editorial Style - Preserved)
          ==================================================================== */}
      <section className="section-wrapper bg-white" id="about">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-sand)] bg-white">
                <img
                  src={REAL_PHOTOS.cakeTulipBow}
                  alt="Karshni Baker's Handcrafted Designer Cake"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-chocolate)]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[0.72rem] uppercase tracking-widest text-[var(--color-gold-light)] font-semibold block mb-1">
                    Artisanal Patisserie
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-medium">
                    Handcrafted Designer Bow & Floral Signature
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-56 rounded-xl overflow-hidden shadow-xl border-2 border-white hidden sm:block">
                <img
                  src={REAL_PHOTOS.bakeryDisplay}
                  alt="Karshni Baker's Chilled Counter"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="section-eyebrow">About Karshni Baker’s</span>
              <h2 className="section-title">
                Made With Passion. <br />
                <span className="section-title-italic">Crafted With Detail.</span>
              </h2>

              <div className="w-14 h-0.5 bg-[var(--color-gold)] mb-6" />

              <p className="text-base text-[var(--color-chocolate)] leading-relaxed mb-6 font-normal">
                Karshni Baker’s creates handcrafted cakes and desserts for birthdays, anniversaries, celebrations and special occasions. Conceived as a celebration of culinary artistry and pure flavor, our creations blend timeless artisanal methods with modern sophistication.
              </p>

              <p className="text-sm text-[#55443B] leading-relaxed mb-8">
                From delicate hand-piped florals and customized milestone date plaques to bespoke 3D sculpted kids' figurines, every dessert is baked fresh with the finest dairy creams, rich chocolates, and exquisite attention to aesthetic detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-2">
                <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] text-center">
                  <span className="block font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-1">100%</span>
                  <span className="text-xs uppercase tracking-wider text-[#604F46] font-semibold">Freshly Crafted</span>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] text-center">
                  <span className="block font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-1">Bespoke</span>
                  <span className="text-xs uppercase tracking-wider text-[#604F46] font-semibold">Custom Designs</span>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-sand)] text-center">
                  <span className="block font-serif text-2xl font-medium text-[var(--color-chocolate)] mb-1">Pure</span>
                  <span className="text-xs uppercase tracking-wider text-[#604F46] font-semibold">Fine Ingredients</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/cakes" className="btn btn-primary">
                  <span>Explore Cake Portfolio</span>
                  <ArrowRight size={15} />
                </Link>
                <button
                  onClick={() => handleSpecialOrderWhatsApp("Custom Consultation", "Hello Karshni Baker's! I'd like to consult on a custom celebration cake.")}
                  className="btn btn-cream"
                >
                  <WhatsAppIcon size={15} />
                  <span>Discuss Your Idea</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. GALLERY (Premium Masonry Gallery - Preserved)
          ==================================================================== */}
      <section className="section-wrapper bg-[var(--color-cream)]" id="gallery">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Artisanal Portfolio</span>
            <h2 className="section-title">
              Our Cake & Bakery <span className="section-title-italic">Gallery</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Every detail of Karshni Baker's reflects meticulous craft and dedication. Browse our genuine portfolio of bespoke cakes and bakery displays. Click any photo for a detailed view.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-[var(--color-sand)] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-sand-light)]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-chocolate)]/85 via-[var(--color-chocolate)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[0.72rem] uppercase tracking-widest text-[var(--color-gold-light)] font-semibold mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-xs text-[var(--color-sand)] line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-gold-light)] font-medium">
                      <Eye size={14} />
                      <span>View Full Image</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-[var(--color-sand-light)] flex items-center justify-between">
                  <span className="font-serif text-sm font-medium text-[var(--color-chocolate)]">
                    {item.title}
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-wider text-[var(--color-gold)] font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      {activeLightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="lightbox-close-btn"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <img
              src={activeLightbox.src}
              alt={activeLightbox.title}
              className="lightbox-img"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-semibold">
                {activeLightbox.subtitle}
              </span>
              <h4 className="font-serif text-2xl mt-1 mb-2">
                {activeLightbox.title}
              </h4>
              <p className="text-sm text-[var(--color-sand)] opacity-90">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          8. OCCASIONS SECTION (4 Premium Cards - Preserved)
          ==================================================================== */}
      <section className="section-wrapper bg-white" id="occasions">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Milestone Moments</span>
            <h2 className="section-title">
              Crafted for Your <span className="section-title-italic">Cherished Occasions</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Every celebration is distinct. We design bespoke centerpieces tailored to the mood and grandeur of your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OCCASIONS_LIST.map((occ) => (
              <Link
                key={occ.id}
                to={occ.link}
                className="occasion-card group"
              >
                <img
                  src={occ.image}
                  alt={occ.title}
                  loading="lazy"
                />
                <div className="occasion-overlay" />
                <div className="occasion-content">
                  <span className="text-[0.72rem] uppercase tracking-widest text-[var(--color-gold-light)] font-semibold block mb-1">
                    {occ.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white mb-2">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[var(--color-sand)] opacity-85 leading-relaxed mb-4 line-clamp-2">
                    {occ.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">
                    <span>Explore</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. WHY KARSHNI BAKER’S (4 Points with Line Icons - Preserved)
          ==================================================================== */}
      <section className="section-wrapper bg-[var(--color-cream)]" id="why-karshni">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Our Philosophy</span>
            <h2 className="section-title">
              Why Karshni <span className="section-title-italic">Baker’s</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Refined aesthetics, uncompromising freshness, and a relentless commitment to making every celebration extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_KARSHNI.map((point) => {
              const Icon =
                point.icon === "Sparkles"
                  ? Sparkles
                  : point.icon === "Palette"
                  ? Palette
                  : point.icon === "ShieldCheck"
                  ? ShieldCheck
                  : HeartHandshake;

              return (
                <div key={point.id} className="feature-box">
                  <div className="feature-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[var(--color-chocolate)] mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55443B] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. TESTIMONIALS SECTION (Sophisticated, Minimal, Premium - Preserved)
          ==================================================================== */}
      <section className="section-wrapper bg-white" id="testimonials">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Client Reflections</span>
            <h2 className="section-title">
              Words of <span className="section-title-italic">Appreciation</span>
            </h2>
            <div className="thin-gold-divider" />
            <p className="section-subtitle">
              Trusted by families and patrons across Dinanagar for milestone celebrations and unforgettable sweet gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_LIST.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div>
                  <span className="testimonial-occasion-tag block mb-4">
                    {t.occasion}
                  </span>
                  <p className="testimonial-quote">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-sand-light)] flex items-center justify-between">
                  <div>
                    <span className="testimonial-author-name block">{t.author}</span>
                    <span className="text-xs text-[#806E64]">{t.city}</span>
                  </div>
                  <span className="text-[var(--color-gold)] text-xs font-semibold uppercase tracking-wider">
                    Verified Order
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. CONTACT / ORDER SECTION (Premium Dark Espresso Brown - Preserved)
          ==================================================================== */}
      <section className="espresso-section" id="contact">
        <div className="section-container">
          <div className="espresso-card-box">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block text-xs uppercase tracking-[0.22em] text-[var(--color-gold-light)] font-semibold mb-3">
                  Consultation & Orders
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">
                  Let’s Create <span className="italic text-[var(--color-gold-light)]">Something Delicious.</span>
                </h2>
                <div className="w-16 h-0.5 bg-[var(--color-gold)] mb-6" />

                <p className="text-base text-[var(--color-sand)] leading-relaxed mb-8 max-w-xl opacity-90">
                  Ready to celebrate? Contact Karshni Baker’s directly to reserve your date, discuss custom designs, or inquire about today's fresh bakery specialties.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[var(--color-gold-light)] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-white font-medium mb-0.5">Location</strong>
                      <span className="text-[var(--color-sand)] opacity-85 leading-relaxed text-xs">
                        {BRAND.landmark}, {BRAND.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[var(--color-gold-light)] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-white font-medium mb-0.5">Bakery Hours</strong>
                      <span className="text-[var(--color-sand)] opacity-85 text-xs">
                        {BRAND.hours} · Open 7 Days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <SocialActionButtons
                    size="md"
                    whatsappMessage="Hello Karshni Baker's! I would like to place an order / discuss a celebration cake."
                  />

                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="btn btn-outline-white text-xs px-4 py-2.5"
                  >
                    <Phone size={14} />
                    <span>Call Now ({BRAND.phone})</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-black/40 rounded-2xl p-6 sm:p-8 border border-[var(--color-gold-border)]">
                <h3 className="font-serif text-xl text-white font-medium mb-3">
                  Direct WhatsApp Ordering
                </h3>
                <p className="text-xs text-[var(--color-sand)] opacity-85 leading-relaxed mb-6">
                  For the fastest response, send us your event date, expected guest count, and any reference photos directly on WhatsApp.
                </p>

                <div className="space-y-3 mb-6 text-xs text-[var(--color-sand)]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-light)]" />
                    <span>Same-day cakes available for immediate pickup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-light)]" />
                    <span>24-48 hours advance notice for custom 3D fondant themes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-light)]" />
                    <span>Personalized name inscription ribbon included</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    "Hello Karshni Baker's! I would like to inquire about placing a cake order."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn btn-gold text-xs py-3 justify-center"
                >
                  <Send size={15} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
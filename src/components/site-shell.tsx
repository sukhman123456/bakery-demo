import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  X,
  MapPin,
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BRAND } from "../lib/bakery-data";
import { BrandLogo } from "./brand-logo";
import { FloatingSocialDock } from "./ui/social-action-buttons";

interface NavItem {
  id: string;
  label: string;
  href: string;
  routePath?: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", href: "/#hero", routePath: "/" },
  { id: "signature-cakes", label: "Signatures", href: "/#signature-cakes", routePath: "/#signature-cakes" },
  { id: "about", label: "About Us", href: "/about", routePath: "/about" },
  { id: "services", label: "Services", href: "/#services", routePath: "/#services" },
  { id: "products", label: "Our Products", href: "/cakes", routePath: "/cakes", hasDropdown: true },
  { id: "gallery", label: "Gallery", href: "/gallery", routePath: "/gallery" },
  { id: "contact", label: "Contact Us", href: "/contact", routePath: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const navContainerRef = useRef<HTMLElement | null>(null);
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isHomePage = pathname === "/" || pathname === "";
  const showSolidNavbar = !isHomePage || scrolled;

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active nav key based on path or section
  useEffect(() => {
    if (pathname === "/about") {
      setActiveSection("about");
      return undefined;
    }
    if (pathname === "/cakes" || pathname === "/bakery" || pathname === "/cafe") {
      setActiveSection("products");
      return undefined;
    }
    if (pathname === "/gallery") {
      setActiveSection("gallery");
      return undefined;
    }
    if (pathname === "/contact") {
      setActiveSection("contact");
      return undefined;
    }
    if (isHomePage) {
      const sections = ["hero", "signature-cakes", "products", "about", "services", "gallery", "reviews", "contact"];
      const handleScrollSpy = () => {
        const scrollPosition = window.scrollY + 160;
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveSection(id);
          }
        }
      };
      handleScrollSpy();
      window.addEventListener("scroll", handleScrollSpy, { passive: true });
      return () => window.removeEventListener("scroll", handleScrollSpy);
    }
    return undefined;
  }, [pathname, isHomePage]);

  // Sliding underline calculation
  const updateIndicator = () => {
    const currentKey = hoveredNav || activeSection || "hero";
    const el = navItemRefs.current[currentKey];
    const container = navContainerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener("resize", updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [hoveredNav, activeSection, pathname]);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hello Karshni Bakers! I would like to inquire about ordering handcrafted cakes & fresh treats."
  )}`;

  const productCategories = [
    { name: "Celebration Cakes Studio", icon: "🎂", href: "/cakes", desc: "Custom, fondant & milestone cakes" },
    { name: "Fresh Bakery & Pastries", icon: "🥐", href: "/bakery", desc: "Croissants, brownies & bakes" },
    { name: "Café Delights & Snacks", icon: "☕", href: "/cafe", desc: "Beverages, savouries & coffee" },
    { name: "Full Visual Gallery", icon: "🖼️", href: "/gallery", desc: "Real photos from our kitchen" },
    { name: "Guest Reviews & Feedback", icon: "⭐", href: "/reviews", desc: "What our patrons say" },
  ];

  const handleNavClick = (item: NavItem) => {
    setOpen(false);
    setActiveSection(item.id);

    if (isHomePage) {
      // If target is on home page, scroll to section
      const targetId = item.id;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Otherwise navigate to the route or hash
    if (item.routePath && !item.routePath.startsWith("/#")) {
      window.location.href = item.routePath;
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A1A12] flex flex-col font-sans selection:bg-[#C69A52] selection:text-white">
      {/* ====================================================================
          MASTER LUXURY NAVBAR (Always visible, animated sliding underline)
          - 100% Transparent at hero top on homepage, seamlessly floating over dark bakery ceiling
          - Frosted luxury dark espresso blur when scrolled or on subpages
          - Smooth animated sliding gold line under hovered & active items
          ==================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          showSolidNavbar
            ? "bg-[#140804]/96 backdrop-blur-xl border-b border-[#C69A52]/25 shadow-[0_8px_32px_rgba(0,0,0,0.65)] py-2.5"
            : "bg-transparent py-4 sm:py-5 border-none shadow-none"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Divider */}
            <div className="flex items-center">
              <a
                href="/#hero"
                onClick={(e) => {
                  e.preventDefault();
                  if (isHomePage) {
                    const el = document.getElementById("hero");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                  }
                }}
                className="group focus:outline-none cursor-pointer"
              >
                <BrandLogo scrolled={showSolidNavbar} />
              </a>

              {/* Vertical Divider from Artwork */}
              <div className="h-6 w-[1.5px] bg-[#DFC085]/35 mx-4 lg:mx-6 hidden md:block" />
            </div>

            {/* Center: Desktop Navigation with Animated Sliding Underline */}
            <nav
              ref={navContainerRef}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative hidden lg:flex items-center gap-7 xl:gap-9 py-1"
            >
              {/* The Sliding Animated Underline */}
              <span
                className="absolute bottom-0 left-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#F5D8A0] via-[#DFC085] to-[#C69A52] shadow-[0_0_12px_rgba(223,192,133,0.95)] pointer-events-none transition-all duration-300 ease-out"
                style={{
                  transform: `translateX(${indicatorStyle.left}px)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                }}
              />

              {navItems.map((item) => {
                const isTarget = (hoveredNav || activeSection) === item.id;
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredNav(item.id);
                        setProductMenuOpen(true);
                      }}
                      onMouseLeave={() => {
                        setProductMenuOpen(false);
                      }}
                    >
                      <a
                        ref={(el) => {
                          navItemRefs.current[item.id] = el;
                        }}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item);
                        }}
                        className={`flex items-center gap-1.5 py-1 px-1 text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${
                          isTarget
                            ? "text-white font-semibold"
                            : "text-[#F5EDE2]/85 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span
                          className={`text-[10px] text-[#DFC085] transition-transform duration-200 ${
                            productMenuOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </a>

                      {/* Animated Dropdown Menu */}
                      {productMenuOpen && (
                        <div className="absolute top-full -left-6 mt-2 w-72 rounded-2xl bg-[#1C0E07]/98 backdrop-blur-2xl border border-[#C69A52]/40 shadow-[0_16px_40px_rgba(0,0,0,0.7)] p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-[#DFC085] px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
                            <span>Artisan Bakery Studios</span>
                            <span className="text-[9px] text-[#DFC085]">Explore</span>
                          </div>
                          {productCategories.map((cat) => (
                            <a
                              key={cat.name}
                              href={cat.href}
                              onClick={() => setProductMenuOpen(false)}
                              className="w-full flex items-center gap-3 px-3 py-2 text-left text-xs font-medium text-[#F5EDE2] hover:text-white hover:bg-[#C69A52]/25 rounded-xl transition-all cursor-pointer"
                            >
                              <span className="text-base flex-shrink-0">{cat.icon}</span>
                              <div className="flex flex-col">
                                <span className="font-semibold text-white">{cat.name}</span>
                                <span className="text-[10px] text-[#DFC085]/80 font-light leading-tight">{cat.desc}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    ref={(el) => {
                      navItemRefs.current[item.id] = el;
                    }}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`py-1 px-1 text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${
                      isTarget
                        ? "text-white font-semibold"
                        : "text-[#F5EDE2]/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

              {/* Right: Golden Pill "Order" Button & Mobile Toggle */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order Now on WhatsApp"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#F5DFB0] via-[#DFC085] to-[#B97942] text-[#140A04] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-[0_4px_18px_rgba(223,192,133,0.45)] hover:shadow-[0_6px_25px_rgba(223,192,133,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 select-none cursor-pointer whitespace-nowrap"
                >
                  <ShoppingBag size={14} className="text-[#140A04] stroke-[2.2]" />
                  <span className="hidden sm:inline">Order Now →</span>
                  <span className="sm:hidden font-bold tracking-wider">ORDER</span>
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle Mobile Navigation"
                  className="lg:hidden p-2 rounded-xl bg-[#24150D]/90 backdrop-blur-md text-[#DFC085] border border-[#C69A52]/45 hover:border-[#DFC085] hover:text-white transition-all shadow-md active:scale-95 flex-shrink-0 cursor-pointer"
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#1A0E08]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-300 overflow-y-auto">
          <div className="flex flex-col items-center gap-4 text-center mt-2">
            <BrandLogo scrolled={false} size="lg" />

            <div className="flex flex-wrap items-center justify-center gap-2 py-1 text-xs text-[#DFC085]">
              <Link to="/cakes" onClick={() => setOpen(false)} className="px-2.5 py-1 rounded-full bg-white/5 border border-[#C69A52]/30 hover:border-[#DFC085]">Cakes</Link>
              <Link to="/bakery" onClick={() => setOpen(false)} className="px-2.5 py-1 rounded-full bg-white/5 border border-[#C69A52]/30 hover:border-[#DFC085]">Bakery</Link>
              <Link to="/cafe" onClick={() => setOpen(false)} className="px-2.5 py-1 rounded-full bg-white/5 border border-[#C69A52]/30 hover:border-[#DFC085]">Café</Link>
              <Link to="/gallery" onClick={() => setOpen(false)} className="px-2.5 py-1 rounded-full bg-white/5 border border-[#C69A52]/30 hover:border-[#DFC085]">Gallery</Link>
            </div>

            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C69A52] to-transparent mx-auto my-1" />

            <div className="flex flex-col gap-2 w-full max-w-xs">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="font-serif text-lg tracking-wider text-white/90 hover:text-[#DFC085] py-1.5 transition-colors border-b border-white/5 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Contacts */}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#C69A52]/30 text-center">
            <div className="text-xs text-[#E6D2B8]/80 mb-1">
              <p className="font-light">{BRAND.address}</p>
            </div>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#C69A52]/50 bg-[#29170F] text-[#DFC085] text-xs font-semibold tracking-wider"
            >
              <Phone size={15} />
              <span>Call: {BRAND.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#C69A52] via-[#DFC085] to-[#B97942] text-[#180C06] text-xs font-bold tracking-wider uppercase shadow-lg"
            >
              <MessageCircle size={16} />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Luxury Brand Footer */}
      <footer className="bg-[#180C06] text-[#F3E8D5] border-t border-[#C69A52]/30 pt-16 pb-10 px-6">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo scrolled={false} size="lg" />
            <p className="text-sm text-[#E6D2B8]/80 leading-relaxed font-light mt-4">
              {BRAND.tagline} Handcrafted celebration cakes and artisanal delicacies, baked fresh daily in Dinanagar, Punjab.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#DFC085] block mb-1.5">
                Specialties
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                <span className="bg-[#29170F] px-2.5 py-1 rounded-full border border-[#C69A52]/40 text-[#DFC085]">
                  Custom Birthday Cakes
                </span>
                <span className="bg-[#29170F] px-2.5 py-1 rounded-full border border-[#C69A52]/40 text-[#DFC085]">
                  Wedding Cakes
                </span>
                <span className="bg-[#29170F] px-2.5 py-1 rounded-full border border-[#C69A52]/40 text-[#DFC085]">
                  Designer Cakes
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium mb-4 pb-1 border-b border-[#C69A52]/30 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6D2B8]/80">
              <li>
                <a href="/#hero" className="hover:text-[#DFC085] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#DFC085] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#DFC085] transition-colors">
                  Bakery Services
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-[#DFC085] transition-colors">
                  Our Products & Menu
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-[#DFC085] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#DFC085] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Food & Product Categories */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium mb-4 pb-1 border-b border-[#C69A52]/30 inline-block">
              Bakery Specialties
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-[#E6D2B8]/80">
              <li>• Celebration Cakes</li>
              <li>• Designer Cakes</li>
              <li>• Fresh Pastries</li>
              <li>• Cupcakes</li>
              <li>• Cookies & Biscuits</li>
              <li>• Fresh Bread Loaves</li>
              <li>• Dessert Hampers</li>
              <li>• Party Cake Pops</li>
              <li>• Fruit Tarts</li>
              <li>• Fudge Brownies</li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-white font-medium mb-4 pb-1 border-b border-[#C69A52]/30 inline-block">
              Visit Karshni Baker’s
            </h4>
            <div className="text-sm text-[#E6D2B8]/90 space-y-3 font-light">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-[#DFC085] flex-shrink-0 mt-1" />
                <span>{BRAND.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#DFC085] flex-shrink-0" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[#DFC085] font-medium">
                  {BRAND.phone}
                </a>
              </p>
            </div>
            <div className="pt-3">
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white !py-2.5 !px-4 !text-xs w-full text-center"
              >
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1360px] mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</p>
          <p className="text-[#DFC085]/80">
            Shree Ram Market, Near Punjab & Sind Bank, Dinanagar, Punjab 143531
          </p>
        </div>
      </footer>

      {/* Global Floating Call-To-Action Dock (Always slides with scroll on mobile & desktop) */}
      <FloatingSocialDock />
    </div>
  );
}

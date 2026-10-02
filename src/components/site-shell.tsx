import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  X,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";
import { FloatingSocialDock, SocialActionButtons } from "./ui/social-action-buttons";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Fresh Bakery", href: "/#bakery-products" },
  { label: "Cakes", href: "/cakes" },
  { label: "Special Orders", href: "/#special-orders" },
  { label: "Celebrations", href: "/#celebrations" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const whatsappOrderUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hello Karshni Baker's! I would like to place an order / inquire about your celebration cakes."
  )}`;

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-chocolate)] flex flex-col font-sans selection:bg-[var(--color-gold)] selection:text-white">
      {/* Top Notification Bar */}
      <div className="bg-[var(--color-chocolate)] text-[var(--color-sand)] text-xs py-1.5 px-4 text-center tracking-wider border-b border-[var(--color-gold-border)] hidden sm:flex items-center justify-between z-50">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-gold-light)] font-medium">
            <Clock size={13} /> {BRAND.hours} · {BRAND.days}
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-1">
            <MapPin size={13} className="text-[var(--color-gold-light)]" /> {BRAND.landmark}, {BRAND.city}
          </span>
          <span className="text-white/30">|</span>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="hover:text-[var(--color-gold-light)] transition-colors"
          >
            Call: {BRAND.phone}
          </a>
        </div>
      </div>

      {/* Sticky Main Navigation: Transparent initially, solid cream/sand on scroll */}
      <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-[1360px] mx-auto flex items-center justify-between">
          {/* Karshni Baker's Official Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={REAL_PHOTOS.logo}
              alt="Karshni Baker's Official Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
            />
            <div className="flex flex-col text-left">
              <span
                className={`font-serif text-lg sm:text-xl font-medium tracking-wide transition-colors ${
                  scrolled ? "text-[var(--color-chocolate)]" : "text-white"
                }`}
              >
                {BRAND.name}
              </span>
              <span className="text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-gold-light)] font-semibold">
                Cakes · Bakes · Sweet Moments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isCakePage = link.href === "/cakes" && pathname === "/cakes";
              if (link.href === "/cakes") {
                return (
                  <Link
                    key={link.label}
                    to="/cakes"
                    className={`nav-link ${isCakePage ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Social Action Buttons & Call */}
          <div className="hidden lg:flex items-center gap-3">
            <SocialActionButtons size="sm" />

            <a
              href={`tel:${BRAND.phoneRaw}`}
              className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 ${
                scrolled
                  ? "border-[var(--color-sand)] text-[var(--color-chocolate)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  : "border-white/30 text-white hover:border-white hover:bg-white/10"
              }`}
              title={`Call ${BRAND.phone}`}
              aria-label={`Call ${BRAND.phone}`}
            >
              <Phone size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={`lg:hidden p-2.5 rounded-xl border transition-colors ${
              scrolled
                ? "border-[var(--color-sand)] bg-white text-[var(--color-chocolate)]"
                : "border-white/30 bg-black/40 text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="lg:hidden mt-3 bg-[#FFFFFF]/98 backdrop-blur-xl rounded-2xl p-5 border border-[var(--color-sand)] shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-sand-light)]">
              <div className="flex items-center gap-2.5">
                <img
                  src={REAL_PHOTOS.logo}
                  alt="Karshni Baker's Logo"
                  className="h-10 w-10 rounded-full object-cover shadow-sm flex-shrink-0"
                />
                <span className="font-serif font-medium text-[var(--color-chocolate)]">
                  {BRAND.name}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 py-4 border-b border-[var(--color-sand-light)]">
              {navLinks.map((link) => {
                if (link.href === "/cakes") {
                  return (
                    <Link
                      key={link.label}
                      to="/cakes"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--color-chocolate)] hover:bg-[var(--color-sand-light)] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={14} className="text-[var(--color-gold)]" />
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--color-chocolate)] hover:bg-[var(--color-sand-light)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="text-[var(--color-gold)]" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between gap-3 border-t border-[var(--color-sand)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-chocolate)]">
                Connect With Us
              </span>
              <SocialActionButtons size="sm" />
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="btn btn-primary w-full py-2.5 text-sm justify-center"
              >
                <Phone size={15} />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Slot */}
      <main className="flex-grow">{children}</main>

      {/* Floating Social Media Action Buttons (Mobile & Desktop) */}
      <FloatingSocialDock />

      {/* FOOTER: Dark chocolate/black footer */}
      <footer className="site-footer-luxury">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Logo */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-5">
              <img
                src={REAL_PHOTOS.logo}
                alt="Karshni Baker's Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <h3 className="font-serif text-2xl text-white font-medium tracking-wide">
                  {BRAND.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-semibold">
                  Crafted for Sweet Moments.
                </p>
              </div>
            </div>

            <p className="text-sm text-[var(--color-sand)] leading-relaxed max-w-md mb-6 opacity-90">
              {BRAND.aboutText}
            </p>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-3">
              <SocialActionButtons size="sm" />
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-white flex items-center justify-center transition-all duration-300 text-[var(--color-sand)] border border-white/20 hover:scale-110 active:scale-95 shadow-md"
                aria-label={`Call Karshni Baker's at ${BRAND.phone}`}
                title={`Call ${BRAND.phone}`}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-5 tracking-wide">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <a href="/#bakery-products" className="footer-link">Fresh From Our Bakery</a>
            <Link to="/cakes" className="footer-link">Cakes & Custom Creations</Link>
            <a href="/#special-orders" className="footer-link">Special & Bulk Orders</a>
            <a href="/#celebrations" className="footer-link">Party & Celebrations</a>
            <a href="/#gallery" className="footer-link">Portfolio Gallery</a>
            <a href="/#contact" className="footer-link">Contact & Orders</a>
            <a href="/?replay=true" className="footer-link inline-flex items-center gap-1.5 text-xs text-[var(--color-gold-light)] hover:text-white mt-1">
              <span>✨ Replay Intro Animation</span>
            </a>
          </div>

          {/* Contact Details & Visit */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif text-lg mb-5 tracking-wide">Visit Our Bakery</h4>
            <address className="not-italic text-sm text-[var(--color-sand)] leading-relaxed mb-4 opacity-90">
              <span className="text-white font-medium block mb-1">{BRAND.landmark}</span>
              {BRAND.address}
            </address>

            <p className="text-sm text-[var(--color-sand)] mb-2 flex items-center gap-2">
              <Clock size={15} className="text-[var(--color-gold-light)]" />
              <span>{BRAND.hours} · Daily</span>
            </p>

            <p className="text-sm text-[var(--color-sand)] mb-4 flex items-center gap-2">
              <Phone size={15} className="text-[var(--color-gold-light)]" />
              <a href={`tel:${BRAND.phoneRaw}`} className="text-white hover:underline">
                {BRAND.phone}
              </a>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-light)] hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1320px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-sand)] opacity-70 gap-4">
          <p>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
          <p>
            Karshni Baker's · Cakes · Bakes · Sweet Moments · Dinanagar, Punjab
          </p>
        </div>
      </footer>
    </div>
  );
}
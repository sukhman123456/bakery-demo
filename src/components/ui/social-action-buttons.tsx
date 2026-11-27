import { useState, useEffect } from "react";
import { BRAND } from "../../lib/bakery-data";
import { WhatsAppIcon } from "./whatsapp-icon";
import { InstagramIcon } from "./instagram-icon";
import { Phone, ChevronUp } from "lucide-react";

interface SocialActionButtonsProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  whatsappMessage?: string;
}

export function SocialActionButtons({
  className = "",
  size = "md",
  orientation = "horizontal",
  whatsappMessage,
}: SocialActionButtonsProps) {
  const sizeClasses = {
    sm: "w-9 h-9 sm:w-10 sm:h-10",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  }[size];

  const defaultWhatsappText =
    `Hello ${BRAND.name}! I would like to inquire about ordering / cakes / café menu.`;
  const encodedMsg = encodeURIComponent(whatsappMessage || defaultWhatsappText);
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodedMsg}`;

  const layoutClasses =
    orientation === "vertical"
      ? "flex flex-col items-center gap-2"
      : "inline-flex items-center gap-2.5 sm:gap-3";

  return (
    <div className={`${layoutClasses} ${className}`}>
      {/* Phone Call Action Button */}
      <a
        href={`tel:${BRAND.phoneRaw}`}
        aria-label={`Call ${BRAND.name}`}
        title={`Call ${BRAND.phone}`}
        className={`${sizeClasses} rounded-full bg-[#1C0F08] text-[#DFC085] flex items-center justify-center shadow-lg border border-[#C69A52]/50 transition-all duration-300 ease-out hover:scale-110 hover:border-[#DFC085] hover:text-white active:scale-95`}
      >
        <Phone size={18} />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Order & Chat on WhatsApp"
        className={`${sizeClasses} rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-600/30 border border-white/40 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:shadow-green-600/40 active:scale-95`}
      >
        <WhatsAppIcon size={20} />
      </a>
    </div>
  );
}

export function FloatingSocialDock() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultWhatsappText =
    "Hello Karshni Bakers! I would like to inquire about ordering handcrafted celebration cakes & fresh bakery treats.";
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(defaultWhatsappText)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Floating Quick Contact Actions"
      className="fixed right-3.5 sm:right-6 bottom-6 sm:bottom-8 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto select-none"
    >
      {/* 1. Scroll-To-Top Button (Appears when scrolled down) */}
      {scrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Scroll back to top"
          className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#180C05]/95 backdrop-blur-md text-[#DFC085] border border-[#C69A52]/40 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:border-[#DFC085] hover:text-white hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer animate-in fade-in zoom-in-75 duration-300"
        >
          <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* 2. Instagram Direct Button */}
      <div className="relative group flex items-center">
        <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-2.5 py-1 px-2.5 rounded-full bg-[#1C1008]/95 backdrop-blur-md border border-[#E1306C]/40 text-[#F5EDE2] text-[11px] font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          📸 @karshni_bakers
        </span>

        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Karshni Bakers on Instagram"
          title="Follow Karshni Bakers on Instagram (@karshni_bakers)"
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white border-2 border-white/70 shadow-[0_4px_18px_rgba(225,48,108,0.55)] hover:scale-115 hover:shadow-[0_6px_26px_rgba(225,48,108,0.85)] active:scale-90 transition-all duration-300 cursor-pointer"
        >
          <InstagramIcon size={19} />
        </a>
      </div>

      {/* 3. Direct Phone Call Button */}
      <div className="relative group flex items-center">
        <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-2.5 py-1 px-2.5 rounded-full bg-[#1C1008]/95 backdrop-blur-md border border-[#C69A52]/40 text-[#DFC085] text-[11px] font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          📞 Call Kitchen (+91 98885 26072)
        </span>

        <a
          href={`tel:${BRAND.phoneRaw}`}
          aria-label="Call Karshni Bakers"
          title="Call Karshni Bakers (+91 98885 26072)"
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C0F08]/95 backdrop-blur-md text-[#DFC085] border-2 border-[#DFC085]/70 shadow-[0_4px_18px_rgba(0,0,0,0.65)] hover:border-[#DFC085] hover:text-white hover:scale-110 hover:shadow-[0_6px_24px_rgba(223,192,133,0.55)] active:scale-90 transition-all duration-300 cursor-pointer"
        >
          <Phone size={18} />
        </a>
      </div>

      {/* 4. Master WhatsApp Button (Prominent with Live Beacon) */}
      <div className="relative group flex items-center">
        <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-2.5 py-1.5 px-3 rounded-full bg-[#1C1008]/95 backdrop-blur-md border border-[#25D366]/50 text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          💬 Order & Chat on WhatsApp
        </span>

        {/* Live ping ring dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-white shadow" />
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          title="Order & Chat on WhatsApp (+91 98885 26072)"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white border-2 border-white/80 shadow-[0_4px_22px_rgba(37,211,102,0.65)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.95)] hover:scale-115 active:scale-90 transition-all duration-300 cursor-pointer"
        >
          <WhatsAppIcon size={24} className="transition-transform group-hover:scale-110" />
        </a>
      </div>
    </aside>
  );
}

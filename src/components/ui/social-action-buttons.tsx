import { BRAND } from "../../lib/bakery-data";
import { InstagramIcon } from "./instagram-icon";
import { WhatsAppIcon } from "./whatsapp-icon";

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

  const iconSize = {
    sm: 17,
    md: 20,
    lg: 24,
  }[size];

  const defaultWhatsappText =
    "Hello Karshni Baker's! I would like to inquire about ordering / custom cakes.";
  const encodedMsg = encodeURIComponent(whatsappMessage || defaultWhatsappText);
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodedMsg}`;

  const layoutClasses =
    orientation === "vertical"
      ? "flex flex-col items-center gap-2"
      : "inline-flex items-center gap-2.5 sm:gap-3";

  return (
    <div className={`${layoutClasses} ${className}`}>
      {/* Instagram Action Button (Upper / First) */}
      <a
        href={BRAND.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile @karshni_bakers"
        title="@karshni_bakers on Instagram"
        className={`${sizeClasses} rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-lg shadow-pink-500/20 border border-white/30 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:shadow-pink-500/35 active:scale-95`}
      >
        <InstagramIcon size={iconSize} />
      </a>

      {/* WhatsApp Action Button (Lower / Second) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Order & Chat on WhatsApp"
        className={`${sizeClasses} rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-white/30 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-95`}
      >
        <WhatsAppIcon size={iconSize} />
      </a>
    </div>
  );
}

/**
 * Floating persistent social media action dock for mobile and desktop (vertically stacked)
 */
export function FloatingSocialDock() {
  return (
    <aside
      aria-label="Social media quick actions"
      className="fixed bottom-5 right-5 z-40 p-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 hover:bg-black/60 flex flex-col items-center"
    >
      <SocialActionButtons size="md" orientation="vertical" />
    </aside>
  );
}

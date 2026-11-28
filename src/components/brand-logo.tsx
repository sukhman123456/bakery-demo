interface BrandLogoProps {
  scrolled?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ scrolled = false, size = "md" }: BrandLogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none group cursor-pointer">
      {/* Royal Artisan Cupcake Crest Emblem */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-108 brand-logo-crest">
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isSm ? "w-7 h-7" : isLg ? "w-12 h-12 sm:w-14 sm:h-14" : "w-8 h-8 sm:w-10 sm:h-10"}
        >
          {/* Subtle Golden Ambient Backlight Glow */}
          <circle cx="27" cy="27" r="22" fill="url(#ambientGlow)" opacity="0.45" />

          {/* Golden Royal Crown Sparkle Finial */}
          <g className="animate-sparkle-twinkle">
            <path
              d="M27 5L28.2 10.5C28.4 11.4 29.1 12.1 30 12.3L34.5 13.5L30 14.7C29.1 14.9 28.4 15.6 28.2 16.5L27 21L25.8 16.5C25.6 15.6 24.9 14.9 24 14.7L19.5 13.5L24 12.3C24.9 12.1 25.6 11.4 25.8 10.5L27 5Z"
              fill="url(#sparkleGradient)"
            />
            <circle cx="27" cy="13.5" r="1.5" fill="#FFFFFF" />
          </g>

          {/* Top Swirl Tier with Rich Buttercream Drop */}
          <path
            d="M20 18C22.5 15.5 31.5 15.5 34 18C37 20 38 23.5 36.5 26.5C33 27.5 21 27.5 17.5 26.5C16 23.5 17 20 20 18Z"
            fill="url(#goldSwirlTop)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          />

          {/* Middle Swirl Tier with Scalloped Drip Layer */}
          <path
            d="M14.5 26.5C13 28.5 13.5 31.5 16 32.5C19.5 33.5 34.5 33.5 38 32.5C40.5 31.5 41 28.5 39.5 26.5C36.5 27.8 17.5 27.8 14.5 26.5Z"
            fill="url(#goldSwirlMid)"
          />

          {/* Golden Filigree Cream Highlights */}
          <path
            d="M18 21.5C22.5 19.5 31.5 19.5 36 21.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M20 25C24 23.5 30 23.5 34 25"
            stroke="#FFF4DB"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Fluted Royal Patisserie Cup Liner with Golden Pleats */}
          <path
            d="M15 32.5L18.5 47.5C18.8 48.5 19.8 49 21 49H33C34.2 49 35.2 48.5 35.5 47.5L39 32.5H15Z"
            fill="url(#cupLinerGradient)"
            stroke="url(#linerBorderGradient)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Vertical Pleat Ribs in Shimmering Gold */}
          <path d="M19.5 33L21.5 48" stroke="url(#ribGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24.5 33L25.5 48.5" stroke="url(#ribGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M29.5 33L28.5 48.5" stroke="url(#ribGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34.5 33L32.5 48" stroke="url(#ribGradient)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Gradients */}
          <defs>
            <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DFC085" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DFC085" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sparkleGradient" x1="19.5" y1="5" x2="34.5" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.5" stopColor="#F5DFB0" />
              <stop offset="1" stopColor="#DFC085" />
            </linearGradient>
            <linearGradient id="goldSwirlTop" x1="16" y1="15" x2="38" y2="27" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF4DB" />
              <stop offset="0.35" stopColor="#E6C280" />
              <stop offset="0.75" stopColor="#DFC085" />
              <stop offset="1" stopColor="#8A5324" />
            </linearGradient>
            <linearGradient id="goldSwirlMid" x1="14" y1="26" x2="40" y2="33" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5DFB0" />
              <stop offset="0.5" stopColor="#DFC085" />
              <stop offset="1" stopColor="#7A451C" />
            </linearGradient>
            <linearGradient id="cupLinerGradient" x1="15" y1="32" x2="39" y2="49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A1408" />
              <stop offset="0.5" stopColor="#1B0C04" />
              <stop offset="1" stopColor="#0F0502" />
            </linearGradient>
            <linearGradient id="linerBorderGradient" x1="15" y1="32" x2="39" y2="49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF0D0" />
              <stop offset="0.5" stopColor="#DFC085" />
              <stop offset="1" stopColor="#B97942" />
            </linearGradient>
            <linearGradient id="ribGradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFF3D4" />
              <stop offset="0.7" stopColor="#DFC085" />
              <stop offset="1" stopColor="#9B6636" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Typography: Calligraphy Script "Karshni" + Serif "Bakers" + Artisan Tagline */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline gap-1 sm:gap-2 leading-none">
          <span
            className="text-white text-[23px] xs:text-[26px] sm:text-[32px] md:text-[34px] font-normal tracking-wide whitespace-nowrap brand-logo-karshni will-change-transform"
            style={{
              fontFamily: "'Great Vibes', cursive, serif",
              textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 10px rgba(223,192,133,0.35)",
            }}
          >
            Karshni
          </span>
          <span
            className="font-serif font-bold text-[13px] xs:text-[15px] sm:text-[18px] md:text-[20px] tracking-[0.22em] uppercase whitespace-nowrap animate-gold-shimmer-text brand-logo-bakers will-change-transform"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.85)",
            }}
          >
            Bakers
          </span>
        </div>
        <span className="text-[7.5px] xs:text-[8px] sm:text-[9.5px] tracking-[0.24em] uppercase font-serif text-[#DFC085]/90 font-light -mt-0.5 sm:-mt-1 drop-shadow flex items-center gap-1.5 brand-logo-tagline will-change-transform">
          <span className="w-3 sm:w-4 h-[0.5px] bg-[#DFC085]/60 inline-block" />
          <span>Haute Pâtisserie</span>
          <span className="w-3 sm:w-4 h-[0.5px] bg-[#DFC085]/60 inline-block" />
        </span>
      </div>
    </div>
  );
}

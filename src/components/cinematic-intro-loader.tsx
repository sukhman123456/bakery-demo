import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CinematicIntroLoaderProps {
  onComplete: () => void;
}

export function CinematicIntroLoader({ onComplete }: CinematicIntroLoaderProps) {
  const [isFinished, setIsFinished] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const crestRef = useRef<HTMLDivElement>(null);
  const karshniRef = useRef<HTMLSpanElement>(null);
  const bakersRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const haloGlowRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Lock page scroll during the luxury intro presentation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Setup initial GSAP states
    const ctx = gsap.context(() => {
      // Ambient spotlight & sparkles
      gsap.set(haloGlowRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(sparklesRef.current, { opacity: 0 });

      // Core brand emblem & typography
      gsap.set(crestRef.current, { scale: 0.65, opacity: 0, rotation: -8 });
      gsap.set(karshniRef.current, { opacity: 0, y: 22, filter: "blur(5px)" });
      gsap.set(bakersRef.current, { opacity: 0, y: 18, letterSpacing: "0.32em" });
      gsap.set(taglineRef.current, { opacity: 0, y: 14, scale: 0.94 });

      const tl = gsap.timeline();

      // -------------------------------------------------------------
      // PHASE 1: Center Majesty Reveal (0.0s - 1.2s)
      // Royal emblem scales & glows, cursive Karshni & serif Bakers emerge
      // -------------------------------------------------------------
      tl.to(
        haloGlowRef.current,
        {
          scale: 1.15,
          opacity: 0.9,
          duration: 1.2,
          ease: "power2.out",
        },
        0.1
      )
        .to(
          crestRef.current,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.0,
            ease: "back.out(1.4)",
          },
          0.2
        )
        .to(
          sparklesRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.35
        )
        .to(
          karshniRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power2.out",
          },
          0.3
        )
        .to(
          bakersRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.22em",
            duration: 0.9,
            ease: "power2.out",
          },
          0.45
        );

      // -------------------------------------------------------------
      // PHASE 2: Tagline Reveal Underneath (1.05s - 1.85s)
      // "— HAUTE PÂTISSERIE —" fades in and tracks gracefully below
      // -------------------------------------------------------------
      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
        },
        1.05
      );

      // -------------------------------------------------------------
      // PHASE 3: Ultra-Smooth Glide to Navbar Target (2.0s - 3.4s)
      // Flawless Zero-Blink Handoff:
      // - Calculates live exact bounding coordinates
      // - Glides with silky 'power3.inOut' easing over 1.35s
      // - Fades backdrop curtain in sync
      // - Pre-activates navbar logo underneath at landing moment
      // - Seamless cross-fade leaving zero gap, zero flicker!
      // -------------------------------------------------------------
      tl.add(() => {
        const targetEl = document.getElementById("header-brand-logo");
        const logoEl = logoWrapperRef.current;

        if (targetEl && logoEl) {
          const targetRect = targetEl.getBoundingClientRect();
          const currentRect = logoEl.getBoundingClientRect();

          // Calculate exact center-to-center translation offsets
          const targetCenterX = targetRect.left + targetRect.width / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;

          const currentCenterX = currentRect.left + currentRect.width / 2;
          const currentCenterY = currentRect.top + currentRect.height / 2;

          const deltaX = targetCenterX - currentCenterX;
          const deltaY = targetCenterY - currentCenterY;

          // Proportional scale to fit navbar logo height
          const scaleRatio = targetRect.height / currentRect.height;

          // 1. Silky flight to target
          gsap.to(logoEl, {
            x: deltaX,
            y: deltaY,
            scale: scaleRatio,
            duration: 1.35,
            ease: "power3.inOut",
            onComplete: () => {
              // Immediately ensure target element is solid 100%
              targetEl.style.opacity = "1";

              // Cross-fade out the intro logo over 100ms — 100% zero blink!
              gsap.to(logoEl, {
                opacity: 0,
                duration: 0.1,
                ease: "none",
                onComplete: () => {
                  document.body.style.overflow = originalOverflow;
                  setIsFinished(true);
                  onComplete();
                },
              });
            },
          });

          // 2. Concurrently fade out dark backdrop overlay
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 1.05,
            ease: "power2.inOut",
            delay: 0.2,
          });

          // 3. Fade out ambient glow & sparkles during flight
          gsap.to([haloGlowRef.current, sparklesRef.current], {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          });

          // 4. Reveal navbar logo just before touchdown so there is NEVER a blank gap
          gsap.delayedCall(1.2, () => {
            targetEl.style.opacity = "1";
          });
        } else {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.6,
            onComplete: () => {
              document.body.style.overflow = originalOverflow;
              setIsFinished(true);
              onComplete();
            },
          });
        }
      }, 2.0);
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, [onComplete]);

  const handleSkip = () => {
    document.body.style.overflow = "";
    const targetEl = document.getElementById("header-brand-logo");
    if (targetEl) targetEl.style.opacity = "1";

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.35,
        onComplete: () => {
          setIsFinished(true);
          onComplete();
        },
      });
    } else {
      setIsFinished(true);
      onComplete();
    }
  };

  if (isFinished) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-[#0E0502] flex items-center justify-center overflow-hidden select-none pointer-events-auto"
      style={{
        background: "radial-gradient(circle at center, #241108 0%, #120703 65%, #080201 100%)",
      }}
    >
      {/* Ambient Halo Radial Spotlight */}
      <div
        ref={haloGlowRef}
        className="pointer-events-none absolute w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-radial from-[#DFC085]/25 via-[#6B4435]/15 to-transparent blur-3xl will-change-transform"
      />

      {/* Floating Golden Dust Particles */}
      <div ref={sparklesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#DFC085] opacity-60 animate-sparkle-twinkle" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#FFE29A] opacity-75 animate-sparkle-twinkle-delay" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-[#DFC085] opacity-50 animate-sparkle-twinkle" />
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-[#FFF8E7] opacity-70 animate-sparkle-twinkle-delay" />
      </div>

      {/* Centered Brand Presentation Container (Glides to Navbar on Phase 3) */}
      <div
        ref={logoWrapperRef}
        className="relative z-10 flex flex-col items-center justify-center will-change-transform pointer-events-none"
      >
        {/* Main Logo Row: Crest + Brand Name (Exact 2x Proportions of BrandLogo) */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Royal Artisan Cupcake Crest Emblem */}
          <div ref={crestRef} className="relative flex-shrink-0">
            <svg
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_24px_rgba(223,192,133,0.55)]"
            >
              {/* Golden Ambient Backlight Glow */}
              <circle cx="27" cy="27" r="22" fill="url(#introAmbientGlow)" opacity="0.6" />

              {/* Golden Royal Crown Sparkle Finial */}
              <g className="animate-sparkle-twinkle">
                <path
                  d="M27 5L28.2 10.5C28.4 11.4 29.1 12.1 30 12.3L34.5 13.5L30 14.7C29.1 14.9 28.4 15.6 28.2 16.5L27 21L25.8 16.5C25.6 15.6 24.9 14.9 24 14.7L19.5 13.5L24 12.3C24.9 12.1 25.6 11.4 25.8 10.5L27 5Z"
                  fill="url(#introSparkleGradient)"
                />
                <circle cx="27" cy="13.5" r="1.5" fill="#FFFFFF" />
              </g>

              {/* Top Swirl Tier with Rich Buttercream Drop */}
              <path
                d="M20 18C22.5 15.5 31.5 15.5 34 18C37 20 38 23.5 36.5 26.5C33 27.5 21 27.5 17.5 26.5C16 23.5 17 20 20 18Z"
                fill="url(#introGoldSwirlTop)"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
              />

              {/* Middle Swirl Tier with Scalloped Drip Layer */}
              <path
                d="M14.5 26.5C13 28.5 13.5 31.5 16 32.5C19.5 33.5 34.5 33.5 38 32.5C40.5 31.5 41 28.5 39.5 26.5C36.5 27.8 17.5 27.8 14.5 26.5Z"
                fill="url(#introGoldSwirlMid)"
              />

              {/* Golden Filigree Cream Highlights */}
              <path
                d="M18 21.5C22.5 19.5 31.5 19.5 36 21.5"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.95"
              />
              <path
                d="M20 25C24 23.5 30 23.5 34 25"
                stroke="#FFF4DB"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Fluted Royal Patisserie Cup Liner with Golden Pleats */}
              <path
                d="M15 32.5L18.5 47.5C18.8 48.5 19.8 49 21 49H33C34.2 49 35.2 48.5 35.5 47.5L39 32.5H15Z"
                fill="url(#introCupLinerGradient)"
                stroke="url(#introLinerBorderGradient)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Vertical Pleat Ribs in Shimmering Gold */}
              <path d="M19.5 33L21.5 48" stroke="url(#introRibGradient)" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M24.5 33L25.5 48.5" stroke="url(#introRibGradient)" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M29.5 33L28.5 48.5" stroke="url(#introRibGradient)" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M34.5 33L32.5 48" stroke="url(#introRibGradient)" strokeWidth="1.6" strokeLinecap="round" />

              <defs>
                <radialGradient id="introAmbientGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DFC085" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#DFC085" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="introSparkleGradient" x1="19.5" y1="5" x2="34.5" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="0.5" stopColor="#F5DFB0" />
                  <stop offset="1" stopColor="#DFC085" />
                </linearGradient>
                <linearGradient id="introGoldSwirlTop" x1="16" y1="15" x2="38" y2="27" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF4DB" />
                  <stop offset="0.35" stopColor="#E6C280" />
                  <stop offset="0.75" stopColor="#DFC085" />
                  <stop offset="1" stopColor="#8A5324" />
                </linearGradient>
                <linearGradient id="introGoldSwirlMid" x1="14" y1="26" x2="40" y2="33" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F5DFB0" />
                  <stop offset="0.5" stopColor="#DFC085" />
                  <stop offset="1" stopColor="#7A451C" />
                </linearGradient>
                <linearGradient id="introCupLinerGradient" x1="15" y1="32" x2="39" y2="49" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2A1408" />
                  <stop offset="0.5" stopColor="#1B0C04" />
                  <stop offset="1" stopColor="#0F0502" />
                </linearGradient>
                <linearGradient id="introLinerBorderGradient" x1="15" y1="32" x2="39" y2="49" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF0D0" />
                  <stop offset="0.5" stopColor="#DFC085" />
                  <stop offset="1" stopColor="#B97942" />
                </linearGradient>
                <linearGradient id="introRibGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#FFF3D4" />
                  <stop offset="0.7" stopColor="#DFC085" />
                  <stop offset="1" stopColor="#9B6636" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Brand Name Typography */}
          <div className="flex flex-col text-left justify-center">
            <div className="flex items-baseline gap-2 sm:gap-3 leading-none">
              <span
                ref={karshniRef}
                className="text-white text-[46px] xs:text-[52px] sm:text-[64px] md:text-[68px] font-normal tracking-wide whitespace-nowrap will-change-transform"
                style={{
                  fontFamily: "'Great Vibes', cursive, serif",
                  textShadow: "0 4px 24px rgba(0,0,0,0.95), 0 0 20px rgba(223,192,133,0.45)",
                }}
              >
                Karshni
              </span>
              <span
                ref={bakersRef}
                className="font-serif font-bold text-[26px] xs:text-[30px] sm:text-[36px] md:text-[40px] uppercase whitespace-nowrap animate-gold-shimmer-text will-change-transform"
                style={{
                  textShadow: "0 4px 16px rgba(0,0,0,0.85)",
                }}
              >
                Bakers
              </span>
            </div>

            {/* Tagline Underneath: Revealed on Phase 2 */}
            <div
              ref={taglineRef}
              className="mt-0.5 sm:mt-1 flex items-center gap-2 sm:gap-2.5 text-[15px] xs:text-[16px] sm:text-[19px] tracking-[0.24em] uppercase font-serif text-[#DFC085]/95 font-light drop-shadow will-change-transform"
            >
              <span className="w-6 sm:w-8 h-[1px] bg-[#DFC085]/70 inline-block" />
              <span className="font-medium whitespace-nowrap">Haute Pâtisserie</span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#DFC085]/70 inline-block" />
            </div>
          </div>
        </div>
      </div>

      {/* Discreet Skip Option for Seamless Accessibility */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-20 text-[11px] uppercase tracking-[0.2em] font-serif text-[#DFC085]/70 hover:text-[#DFC085] transition-all px-4 py-1.5 rounded-full border border-[#DFC085]/25 hover:border-[#DFC085]/60 bg-black/40 backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
      >
        Skip Intro &rarr;
      </button>
    </div>
  );
}

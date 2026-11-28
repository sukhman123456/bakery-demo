import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CinematicIntroLoaderProps {
  onComplete: () => void;
}

export function CinematicIntroLoader({ onComplete }: CinematicIntroLoaderProps) {
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const hasRunRef = useRef(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const haloGlowRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Scroll to top so navbar geometry matches exact hero coordinates
    window.scrollTo(0, 0);

    // Lock page scroll during the luxury intro presentation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const logoEl = document.getElementById("header-brand-logo");
    if (!logoEl) {
      document.body.style.overflow = originalOverflow;
      setIsFinished(true);
      onCompleteRef.current?.();
      return;
    }

    // Measure exact geometry
    const rect = logoEl.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = centerX - (rect.left + rect.width / 2);
    const deltaY = centerY - (rect.top + rect.height / 2);

    // Responsive scaling: fits comfortably on small mobile screens up to wide desktops
    const maxAllowedWidth = window.innerWidth * 0.82;
    const baseScale = window.innerWidth < 640 ? 1.6 : 2.1;
    const scale = Math.min(baseScale, maxAllowedWidth / Math.max(rect.width, 1));

    const crest = logoEl.querySelector<HTMLElement>(".brand-logo-crest");
    const karshni = logoEl.querySelector<HTMLElement>(".brand-logo-karshni");
    const bakers = logoEl.querySelector<HTMLElement>(".brand-logo-bakers");
    const tagline = logoEl.querySelector<HTMLElement>(".brand-logo-tagline");

    const ctx = gsap.context(() => {
      // 1. Instantly place the real navbar logo in the dead center of the viewport
      gsap.set(logoEl, {
        x: deltaX,
        y: deltaY,
        scale: scale,
        transformOrigin: "center center",
        zIndex: 60,
        opacity: 1,
      });

      // 2. Prep ambient halo spotlight & sparkles in the background
      gsap.set(haloGlowRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(sparklesRef.current, { opacity: 0 });

      // 3. Prep internal brand typography & crest reveals
      if (crest) gsap.set(crest, { scale: 0.65, opacity: 0, rotation: -8 });
      if (karshni) gsap.set(karshni, { opacity: 0, y: 18, filter: "blur(5px)" });
      if (bakers) gsap.set(bakers, { opacity: 0, y: 14, letterSpacing: "0.32em" });
      if (tagline) gsap.set(tagline, { opacity: 0, y: 10 });

      const tl = gsap.timeline();

      // -------------------------------------------------------------
      // PHASE 1: Center Majesty Reveal (0.0s - 1.1s)
      // -------------------------------------------------------------
      tl.to(
        haloGlowRef.current,
        {
          scale: 1.15,
          opacity: 0.9,
          duration: 1.1,
          ease: "power2.out",
        },
        0.1
      ).to(
        sparklesRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.25
      );

      if (crest) {
        tl.to(
          crest,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.9,
            ease: "back.out(1.4)",
          },
          0.2
        );
      }

      if (karshni) {
        tl.to(
          karshni,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power2.out",
          },
          0.3
        );
      }

      if (bakers) {
        tl.to(
          bakers,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.22em",
            duration: 0.85,
            ease: "power2.out",
          },
          0.45
        );
      }

      // -------------------------------------------------------------
      // PHASE 2: Tagline Reveal Underneath (1.0s - 1.75s)
      // -------------------------------------------------------------
      if (tagline) {
        tl.to(
          tagline,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
          },
          1.0
        );
      }

      // -------------------------------------------------------------
      // PHASE 3: Ultra-Smooth Flight to Navbar (1.95s - 3.3s)
      // The ONE real logo glides smoothly into place and stays there!
      // NO swap, NO second element, NO delayedCall, NO BLINK!
      // -------------------------------------------------------------
      tl.to(
        logoEl,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.35,
          ease: "power3.inOut",
          onComplete: () => {
            // Clear all GSAP inline transforms so logo rests cleanly in native CSS layout
            gsap.set(logoEl, { clearProps: "all" });
            if (crest) gsap.set(crest, { clearProps: "all" });
            if (karshni) gsap.set(karshni, { clearProps: "all" });
            if (bakers) gsap.set(bakers, { clearProps: "all" });
            if (tagline) gsap.set(tagline, { clearProps: "all" });

            document.body.style.overflow = originalOverflow;
            setIsFinished(true);
            onCompleteRef.current?.();
          },
        },
        1.95
      );

      // Concurrently fade out dark backdrop overlay
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1.05,
          ease: "power2.inOut",
        },
        2.15
      );

      // Fade out halo & sparkles during flight
      tl.to(
        [haloGlowRef.current, sparklesRef.current],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        1.95
      );

      // Smoothly fade in other navbar accessories (divider, menu links, order button)
      tl.to(
        ".navbar-accessory",
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        2.5
      );
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, []);

  const handleSkip = () => {
    document.body.style.overflow = "";
    const logoEl = document.getElementById("header-brand-logo");
    if (logoEl) {
      gsap.set(logoEl, { clearProps: "all" });
      const crest = logoEl.querySelector(".brand-logo-crest");
      const karshni = logoEl.querySelector(".brand-logo-karshni");
      const bakers = logoEl.querySelector(".brand-logo-bakers");
      const tagline = logoEl.querySelector(".brand-logo-tagline");
      if (crest) gsap.set(crest, { clearProps: "all" });
      if (karshni) gsap.set(karshni, { clearProps: "all" });
      if (bakers) gsap.set(bakers, { clearProps: "all" });
      if (tagline) gsap.set(tagline, { clearProps: "all" });
    }
    gsap.set(".navbar-accessory", { opacity: 1 });

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsFinished(true);
          onCompleteRef.current?.();
        },
      });
    } else {
      setIsFinished(true);
      onCompleteRef.current?.();
    }
  };

  if (isFinished) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 bg-[#0E0502] flex items-center justify-center overflow-hidden select-none pointer-events-auto"
      style={{
        background: "radial-gradient(circle at center, #241108 0%, #120703 65%, #080201 100%)",
      }}
    >
      {/* Ambient Halo Radial Spotlight */}
      <div
        ref={haloGlowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-radial from-[#DFC085]/25 via-[#6B4435]/15 to-transparent blur-3xl will-change-transform"
      />

      {/* Floating Golden Dust Particles */}
      <div ref={sparklesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#DFC085] opacity-60 animate-sparkle-twinkle" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#FFE29A] opacity-75 animate-sparkle-twinkle-delay" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-[#DFC085] opacity-50 animate-sparkle-twinkle" />
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-[#FFF8E7] opacity-70 animate-sparkle-twinkle-delay" />
      </div>

      {/* Discreet Skip Option */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-50 text-[11px] uppercase tracking-[0.2em] font-serif text-[#DFC085]/70 hover:text-[#DFC085] transition-all px-4 py-1.5 rounded-full border border-[#DFC085]/25 hover:border-[#DFC085]/60 bg-black/40 backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
      >
        Skip Intro &rarr;
      </button>
    </div>
  );
}

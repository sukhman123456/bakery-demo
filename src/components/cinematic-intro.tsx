import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

// In-memory guard to prevent re-triggering during SPA route transitions
let hasIntroPlayedInApp = false;

export interface CinematicIntroProps {
  desktopImage?: string;
  mobileImage?: string;
  logoSrc?: string;
  duration?: number; // duration in ms (default: 4600ms)
  onDismiss?: () => void;
}

export function CinematicIntro({
  desktopImage = "/images/intro/intro-desktop.jpg",
  mobileImage = "/images/intro/intro-mobile.jpg",
  logoSrc = "/images/karshni-logo.jpg",
  duration = 4600,
  onDismiss,
}: CinematicIntroProps) {
  // Synchronized initial state to prevent any SSR hydration mismatch
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dismissTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const hasDismissedRef = useRef<boolean>(false);
  const startTimeRef = useRef<number>(0);

  // Check client-only motion preferences & in-app navigation guard
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsMounted(false);
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const forceReplay = urlParams.has("intro") || urlParams.has("replay");

    if (!forceReplay && hasIntroPlayedInApp) {
      setIsMounted(false);
    }
  }, []);

  // Detect mobile portrait vs desktop widescreen
  useEffect(() => {
    const checkOrientation = () => {
      const mobileQuery = window.matchMedia("(max-width: 768px), (orientation: portrait)");
      setIsMobile(mobileQuery.matches);
    };
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  // Safe dismiss handler with smooth crossfade
  const handleDismiss = useCallback(
    (immediate = false) => {
      if (hasDismissedRef.current) return;
      hasDismissedRef.current = true;
      hasIntroPlayedInApp = true;

      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }

      // Restore body scroll
      document.body.style.overflow = "";

      if (immediate) {
        setIsMounted(false);
        onDismiss?.();
        return;
      }

      setIsFading(true);

      // Smooth unmount after 650ms crossfade
      dismissTimerRef.current = setTimeout(() => {
        setIsMounted(false);
        onDismiss?.();
      }, 650);
    },
    [onDismiss]
  );

  // Lock body scroll while intro is active
  useEffect(() => {
    if (!isMounted) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
    };
  }, [isMounted, handleDismiss]);

  // Smooth Progress Bar Timeline via requestAnimationFrame
  useEffect(() => {
    if (!isMounted) return;

    startTimeRef.current = performance.now();

    const updateTimeline = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const linearProgress = Math.min(1, elapsed / duration);
      setProgress(linearProgress);

      if (linearProgress >= 1) {
        handleDismiss();
      } else {
        animFrameRef.current = requestAnimationFrame(updateTimeline);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateTimeline);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isMounted, duration, handleDismiss]);

  // High-DPI Floating Golden Sparkles Particle Canvas
  useEffect(() => {
    if (!isMounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particleAnimFrame: number;
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const particleCount = isMobile ? 30 : 50;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.25,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let tick = 0;
    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.25 + 0.75;
        const currentOpacity = Math.max(0.1, Math.min(1, p.opacity * pulse));

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(255, 235, 175, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(207, 172, 116, ${currentOpacity * 0.7})`);
        gradient.addColorStop(1, "rgba(207, 172, 116, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      particleAnimFrame = requestAnimationFrame(renderParticles);
    };

    particleAnimFrame = requestAnimationFrame(renderParticles);

    return () => {
      cancelAnimationFrame(particleAnimFrame);
    };
  }, [isMounted, isMobile]);

  if (!isMounted) return null;

  const currentHeroImage = isMobile ? mobileImage : desktopImage;

  return (
    <div
      onClick={() => handleDismiss()}
      className={`fixed inset-0 z-[100] w-full h-[100dvh] bg-[#0A0503] select-none overflow-hidden transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between ${
        isFading
          ? "opacity-0 scale-[1.02] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      role="dialog"
      aria-label="Welcome to Karshni Baker's"
      aria-modal="true"
    >
      {/* 1. Ultra-HD Cinematic Visual Layer with Ken Burns Motion */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={currentHeroImage}
          alt="Karshni Baker's Showcase"
          onError={(e) => {
            if (e.currentTarget.src !== mobileImage) {
              e.currentTarget.src = mobileImage;
            }
          }}
          className="w-full h-full object-cover transition-all duration-700 ease-out opacity-95"
          style={{
            animation: "kenburns 22s ease-in-out infinite alternate",
            transformOrigin: "center center",
            objectPosition: isMobile ? "center 32%" : "center 38%",
            filter: "contrast(1.05) brightness(0.95) saturate(1.08)",
          }}
        />

        {/* Ambient Film Vignette Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(14,7,4,0.1) 0%, rgba(14,7,4,0.45) 60%, rgba(10,5,3,0.85) 100%)",
          }}
        />

        {/* Top & Bottom Cinematic Letterbox Shadows */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0503] via-[#0A0503]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0503] via-[#0A0503]/70 to-transparent pointer-events-none" />
      </div>

      {/* 2. Floating Golden Sparkle Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 4. Luxury Centerpiece: The cake showcases the integrated 3D gold emblem and Karshni Baker's tier */}
      <main className="relative z-20 w-full flex-1 flex flex-col items-center justify-center px-4 text-center pointer-events-none" />

      {/* 5. Bottom Timeline Bar & Mobile Safe-Area */}
      <footer
        className="relative z-30 w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center gap-2.5 px-6"
        style={{
          paddingBottom: "max(1.2rem, env(safe-area-inset-bottom))",
        }}
      >
        <span className="text-[10px] text-[#CFAC74]/80 tracking-[0.22em] uppercase font-medium animate-pulse">
          Tap anywhere to enter
        </span>

        {/* Shimmering Golden Progress Bar */}
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#B08A52] via-[#CFAC74] to-[#FFF0B8] transition-all duration-75 ease-linear rounded-full shadow-[0_0_12px_#CFAC74]"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </footer>
    </div>
  );
}

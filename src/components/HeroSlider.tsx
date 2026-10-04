"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type SlideRatio = { width: number; height: number };

const slides = [
  { img: "/slider/slider-1.avif" },
  { img: "/slider/slider-2.avif" },
];

const FALLBACK_RATIO: SlideRatio = { width: 16, height: 9 };

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ratios, setRatios] = useState<Record<string, SlideRatio>>({});
  const animRef = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1200);
    },
    [current, isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const preload = slides.map(
      (s) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            if (img.naturalWidth && img.naturalHeight) {
              setRatios((prev) =>
                prev[s.img]?.width === img.naturalWidth
                  ? prev
                  : {
                      ...prev,
                      [s.img]: { width: img.naturalWidth, height: img.naturalHeight },
                    },
              );
            }
            resolve();
          };
          img.onerror = () => resolve();
          img.src = s.img;
        }),
    );
    Promise.all(preload).then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 1000);
    }, 8);
    return () => clearInterval(interval);
  }, []);

  const activeRatio = ratios[slides[current].img] ?? FALLBACK_RATIO;

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-900"
      aria-label="Hero slider"
      role="region"
    >
      {/* Background layers with crossfade */}
      <div
        className="relative w-full bg-neutral-900 transition-[aspect-ratio] duration-[1800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          aspectRatio: `${activeRatio.width} / ${activeRatio.height}`,
        }}
        aria-hidden="true"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-[1800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url('${slide.img}')`,
              willChange: "opacity",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Content layer with staggered reveal */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <SlideContent
            key={current}
            loaded={loaded}
          />
        </AnimatePresence>
      </div>

      {/* Progress dots with animated fill */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3" role="tablist" aria-label="Slide indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="relative flex h-3 w-3 items-center justify-center rounded-full bg-white/30 transition-all duration-500 hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`
                absolute inset-0 rounded-full bg-secondary transform origin-center transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${index === current ? "scale-x-100" : "scale-x-0"}
              `}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      {/* Auto-play progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-primary origin-left transition-transform duration-[8000ms] ease-linear"
        style={{
          transform: `scaleX(${progress / 1000})`,
          transformOrigin: "left center",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function AnimatePresence({ children, mode }: { children: React.ReactNode; mode: "wait" }) {
  return <>{children}</>;
}

function SlideContent({ loaded }: { loaded: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), loaded ? 50 : 100);
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <div
      className="container-custom text-center text-white"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="max-w-4xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms",
        }}
      >
      </div>
    </div>
  );
}
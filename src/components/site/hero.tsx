"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { heroBackground } from "@/lib/products";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: "var(--wood-950)" }}
    >
      {/* Background image — sharp, with lighter overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${heroBackground}&q=90`}
          alt="Handcrafted willow and rattan furniture in a warm living room"
          className="w-full h-full object-cover"
        />
        {/* Lighter overlay so the image stays sharp */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,16,8,0.45) 0%, rgba(26,16,8,0.25) 30%, rgba(26,16,8,0.55) 75%, rgba(26,16,8,0.92) 100%)",
          }}
        />
        {/* Soft vignette on the sides only */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,16,8,0.55) 0%, transparent 22%, transparent 78%, rgba(26,16,8,0.55) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="ww-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-[0.15em] mb-6"
            style={{
              background: "rgba(45,28,13,0.7)",
              border: "1px solid var(--wood-700)",
              color: "var(--gold)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            Hand-woven in Ireland · Made to outlive you
          </span>

          {/* Headline — sharp, no text-shadow, matches the logo */}
          <h1
            className="text-[clamp(2.75rem,9vw,6.5rem)] font-extrabold leading-[1] tracking-[-0.02em] mb-3"
            style={{ color: "var(--wood-50)" }}
          >
            <span className="ww-gold-gradient-text">WOOD</span>
            <span style={{ color: "var(--wood-50)" }}>WAVE</span>
          </h1>

          <p
            className="text-[clamp(1.1rem,2.4vw,1.75rem)] font-light uppercase tracking-[0.15em] mb-5"
            style={{ color: "var(--wood-100)" }}
          >
            Handcrafted willow, rattan &amp; solid wood furniture
          </p>

          <p
            className="text-base md:text-lg max-w-xl mb-8"
            style={{ color: "var(--wood-200)" }}
          >
            Dining chairs, beds, sideboards, lighting — woven by hand from
            natural rattan and willow over solid oak, walnut, and ash. No MDF,
            no plastic, no shortcuts. Free delivery across the country,
            2-year warranty, 14-day returns.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#catalog" className="ww-btn ww-btn-solid">
              Shop the catalog
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#gallery" className="ww-btn ww-btn-outline">
              View the gallery
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14 max-w-xl">
            {[
              { num: "3,000+", label: "Pieces delivered" },
              { num: "12 yrs", label: "In the workshop" },
              { num: "4.9★", label: "Average rating" },
            ].map((s, i) => (
              <div
                key={i}
                className={`border-l-2 pl-4 ww-reveal ww-reveal-delay-${i + 1}`}
                style={{ borderColor: "var(--wood-700)" }}
              >
                <div
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ color: "var(--gold)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs sm:text-sm mt-1"
                  style={{ color: "var(--wood-200)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#marquee"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 ww-scroll-indicator flex flex-col items-center gap-1"
        style={{ color: "var(--wood-300)" }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}

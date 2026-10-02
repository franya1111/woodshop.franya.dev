"use client";

import { Sparkles } from "lucide-react";

const ITEMS = [
  "100% Hand-Woven",
  "Solid Oak, Walnut & Ash",
  "Natural Rattan & Willow",
  "Free Delivery",
  "2-Year Warranty",
  "14-Day Returns",
  "Made By Hand",
  "No MDF · No Plastic",
];

export function Marquee() {
  return (
    <section
      id="marquee"
      className="relative py-5 border-y"
      style={{ background: "var(--wood-900)", borderColor: "var(--wood-800)" }}
    >
      <div className="ww-marquee">
        <div className="ww-marquee-track">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.08em]"
              style={{ color: "var(--wood-300)" }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{ color: "var(--gold)" }}
              />
              <span>{item}</span>
              <span style={{ color: "var(--wood-700)" }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

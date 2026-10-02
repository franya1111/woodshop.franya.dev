"use client";

import { Truck, ShieldCheck, RotateCcw, HandHeart } from "lucide-react";

const BENEFITS = [
  {
    icon: HandHeart,
    title: "Made by hand",
    text: "Every piece is woven, sanded, and finished by a single craftsperson in our workshop.",
  },
  {
    icon: Truck,
    title: "Free delivery",
    text: "Across the country in 3–7 days. We carry it to the room of your choice and unpack it.",
  },
  {
    icon: ShieldCheck,
    title: "2-year warranty",
    text: "Anything that fails because of how we built it — we repair or replace it, free.",
  },
  {
    icon: RotateCcw,
    title: "14-day returns",
    text: "If a piece doesn't fit your space, we collect it and refund you within 5 working days.",
  },
];

export function Benefits() {
  return (
    <section
      className="py-14"
      style={{
        background:
          "linear-gradient(180deg, var(--wood-950) 0%, var(--wood-900) 100%)",
      }}
    >
      <div className="ww-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className={`ww-reveal ww-reveal-delay-${i + 1} group flex flex-col items-start gap-3 p-6 rounded-2xl transition-all`}
              style={{
                background: "var(--wood-950)",
                border: "1px solid var(--wood-800)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, var(--wood-700), var(--gold))",
                }}
              >
                <b.icon
                  className="w-6 h-6"
                  style={{ color: "var(--wood-50)" }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{ color: "var(--wood-50)" }}
              >
                {b.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--wood-400)" }}
              >
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

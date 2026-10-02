"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/products";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="ww-section"
      style={{ background: "var(--wood-950)" }}
    >
      <div className="ww-container">
        <div className="text-center mb-12">
          <span className="ww-label">Customer stories</span>
          <h2 className="ww-section-title">
            What our <span className="ww-gold-gradient-text">customers say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`ww-card ww-card-hover ww-reveal ww-reveal-delay-${
                i + 1
              } p-7 flex flex-col gap-5`}
            >
              <Quote
                className="w-8 h-8"
                style={{
                  color: "var(--gold)",
                  fill: "var(--gold)",
                  opacity: 0.5,
                }}
              />
              <div className="ww-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4"
                    style={{
                      color: s <= t.rating ? "var(--gold)" : "var(--wood-700)",
                      fill: s <= t.rating ? "var(--gold)" : "transparent",
                    }}
                  />
                ))}
              </div>
              <blockquote
                className="italic text-base leading-relaxed flex-1"
                style={{ color: "var(--wood-200)" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer
                className="flex items-center gap-3 pt-2 border-t"
                style={{ borderColor: "var(--wood-800)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--wood-700), var(--gold))",
                    color: "var(--wood-50)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: "var(--wood-50)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--wood-400)" }}
                  >
                    {t.city}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

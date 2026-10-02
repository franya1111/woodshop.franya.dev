"use client";

import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";

export function Categories() {
  return (
    <section
      id="categories"
      className="ww-section"
      style={{ background: "var(--wood-950)" }}
    >
      <div className="ww-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="ww-label">Catalog</span>
            <h2 className="ww-section-title">
              Furniture <span className="ww-gold-gradient-text">categories</span>
            </h2>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:text-[var(--gold)]"
            style={{ color: "var(--wood-200)" }}
          >
            Full catalog
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#catalog"
              className={`ww-reveal ww-reveal-delay-${(i % 4) + 1} group block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/2]`}
              style={{
                border: "1px solid var(--wood-800)",
                background: "var(--wood-900)",
              }}
            >
              <div className="ww-img-zoom absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,16,8,0.85) 0%, rgba(26,16,8,0.45) 40%, rgba(26,16,8,0.1) 100%)",
                }}
              />
              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
                <h3
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "var(--wood-50)" }}
                >
                  {cat.name}
                </h3>
                <p
                  className="text-xs md:text-sm mb-2"
                  style={{ color: "var(--wood-300)" }}
                >
                  {cat.description}
                </p>
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em]"
                  style={{ color: "var(--gold)" }}
                >
                  <span>{cat.count} pieces</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

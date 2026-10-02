"use client";

import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function Bestsellers() {
  const bestsellers = products
    .filter((p) => p.badge === "bestseller")
    .slice(0, 4);
  if (bestsellers.length < 4) {
    const extra = products
      .filter((p) => p.badge !== "bestseller")
      .slice(0, 4 - bestsellers.length);
    bestsellers.push(...extra);
  }
  return (
    <section
      className="ww-section relative overflow-hidden"
      style={{ background: "var(--wood-900)" }}
    >
      {/* Decorative glow */}
      <div
        className="ww-blur-glow"
        style={{
          top: "10%",
          left: "-5%",
          width: 400,
          height: 400,
          background: "rgba(212,163,115,0.07)",
        }}
      />

      <div className="ww-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="ww-label">Bestsellers</span>
            <h2 className="ww-section-title">
              This <span className="ww-gold-gradient-text">month&apos;s favourites</span>
            </h2>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:text-[var(--gold)]"
            style={{ color: "var(--wood-200)" }}
          >
            All pieces
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

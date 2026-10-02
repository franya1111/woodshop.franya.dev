"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "./product-card";

const TABS = [
  { id: "all", label: "All" },
  { id: "rattan-seating", label: "Rattan Seating" },
  { id: "wooden-tables", label: "Wooden Tables" },
  { id: "woven-storage", label: "Woven Storage" },
  { id: "rattan-beds", label: "Rattan Beds" },
  { id: "lighting", label: "Lighting" },
  { id: "hall-console", label: "Hall & Console" },
] as const;

export function FeaturedProducts() {
  const [active, setActive] =
    useState<(typeof TABS)[number]["id"]>("all");

  const filtered: Product[] =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="catalog"
      className="ww-section"
      style={{ background: "var(--wood-900)" }}
    >
      <div className="ww-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="ww-label">Featured pieces</span>
            <h2 className="ww-section-title">
              The <span className="ww-gold-gradient-text">WOODWAVE</span> collection
            </h2>
            <p
              className="mt-3 max-w-xl text-sm md:text-base"
              style={{ color: "var(--wood-400)" }}
            >
              {products.length} pieces in the catalog — each one woven and
              assembled by hand from natural rattan, willow, and solid hardwood.
              Pick a category or open quick view for colours and specifications.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-1 px-1">
          <Filter
            className="w-4 h-4 shrink-0"
            style={{ color: "var(--wood-500)" }}
          />
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.08em] transition-all"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, var(--wood-700), var(--gold))"
                    : "transparent",
                  color: isActive ? "var(--wood-50)" : "var(--wood-300)",
                  border: `1px solid ${
                    isActive ? "transparent" : "var(--wood-700)"
                  }`,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

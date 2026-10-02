"use client";

import { useEffect, useState } from "react";
import {
  Star,
  X,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { useQuickView } from "@/lib/quickview-store";
import { useCart } from "@/lib/cart-store";
import type { Product } from "@/lib/products";

export function QuickView() {
  const product = useQuickView((s) => s.product);
  const close = useQuickView((s) => s.close);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [product, close]);

  if (typeof window === "undefined" || !product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={close}
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--wood-900)",
          border: "1px solid var(--wood-700)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <QuickViewContent product={product} onClose={close} />
      </div>
    </div>
  );
}

function QuickViewContent({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const addItem = useCart((s) => s.addItem);
  const [color, setColor] = useState<string>(product.defaultColor);

  return (
    <>
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:rotate-90"
        style={{
          background: "rgba(26,16,8,0.85)",
          border: "1px solid var(--wood-700)",
          color: "var(--wood-200)",
        }}
      >
        <X className="w-5 h-5" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge === "new" && (
              <span className="ww-badge-new">NEW</span>
            )}
            {product.badge === "sale" && product.oldPrice && (
              <span className="ww-badge-discount">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="ww-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4"
                    style={{
                      color:
                        s <= Math.round(product.rating)
                          ? "var(--gold)"
                          : "var(--wood-700)",
                      fill:
                        s <= Math.round(product.rating)
                          ? "var(--gold)"
                          : "transparent",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: "var(--wood-400)" }}>
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl font-bold mb-1"
              style={{ color: "var(--wood-50)" }}
            >
              {product.name}
            </h2>
            <div className="ww-badge-stock">
              <Check className="w-4 h-4" />
              {product.inStock ? "In stock" : "Made to order · 7–10 days"}
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-extrabold"
              style={{ color: "var(--gold)" }}
            >
              €{product.price}
            </span>
            {product.oldPrice && (
              <span className="ww-price-old">€{product.oldPrice}</span>
            )}
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--wood-200)" }}
          >
            {product.description}
          </p>

          {/* Color selector */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-3"
              style={{ color: "var(--wood-300)" }}
            >
              Colour: <span style={{ color: "var(--gold)" }}>{color}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  aria-label={c.name}
                  className={`ww-swatch ${
                    color === c.name ? "ww-swatch-active" : ""
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Specs */}
          <div
            className="grid grid-cols-2 gap-3 p-4 rounded-xl"
            style={{
              background: "var(--wood-950)",
              border: "1px solid var(--wood-800)",
            }}
          >
            {product.specs.map((s) => (
              <div key={s.label}>
                <div
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-0.5"
                  style={{ color: "var(--wood-500)" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--wood-100)" }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { icon: ShieldCheck, label: "2-year warranty" },
              { icon: Truck, label: "Free delivery" },
              { icon: RotateCcw, label: "14-day returns" },
            ].map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 p-3 rounded-lg"
                style={{
                  background: "var(--wood-950)",
                  border: "1px solid var(--wood-800)",
                }}
              >
                <b.icon className="w-5 h-5" style={{ color: "var(--gold)" }} />
                <span
                  className="text-[0.65rem] font-medium"
                  style={{ color: "var(--wood-300)" }}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* Add to cart */}
          <button
            onClick={() => {
              addItem(product, color, 1);
              onClose();
            }}
            className="ww-btn ww-btn-solid w-full mt-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to cart · €{product.price}
          </button>
        </div>
      </div>
    </>
  );
}

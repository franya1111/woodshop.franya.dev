"use client";

import { Star, Eye, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { useQuickView } from "@/lib/quickview-store";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const addItem = useCart((s) => s.addItem);
  const openQuickView = useQuickView((s) => s.open);

  return (
    <div
      className={`ww-card ww-card-hover ww-reveal ww-reveal-delay-${
        (index % 4) + 1
      } group flex flex-col overflow-hidden`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden ww-img-zoom">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge === "new" && <span className="ww-badge-new">NEW</span>}
          {product.badge === "sale" && product.oldPrice && (
            <span className="ww-badge-discount">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
          {product.badge === "bestseller" && (
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-md text-[0.65rem] font-bold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(212,163,115,0.18)",
                color: "var(--gold)",
                border: "1px solid rgba(212,163,115,0.4)",
              }}
            >
              BESTSELLER
            </span>
          )}
        </div>
        {/* Quick view */}
        <button
          aria-label="Quick view"
          onClick={() => openQuickView(product)}
          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: "rgba(26,16,8,0.85)",
            backdropFilter: "blur(8px)",
            color: "var(--gold)",
            border: "1px solid var(--wood-700)",
          }}
        >
          <Eye className="w-5 h-5" />
        </button>
        {!product.inStock && (
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2 text-center text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(26,16,8,0.85)",
              color: "var(--wood-300)",
            }}
          >
            Made to order
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div
          className="flex items-center gap-2 mb-2 text-xs"
          style={{ color: "var(--wood-400)" }}
        >
          <span className="ww-stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-3.5 h-3.5"
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
          </span>
          <span>({product.reviews})</span>
        </div>

        <h3
          className="text-base sm:text-lg font-semibold mb-1"
          style={{ color: "var(--wood-50)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs mb-4"
          style={{ color: "var(--wood-400)" }}
        >
          {product.shortDescription}
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-2 mb-4">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="w-5 h-5 rounded-full border"
              style={{
                background: c.hex,
                borderColor: "var(--wood-700)",
              }}
            />
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="ww-price">€{product.price}</span>
            {product.oldPrice && (
              <span className="ww-price-old">€{product.oldPrice}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product, product.defaultColor, 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.05em] transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--wood-700), var(--gold))",
              color: "var(--wood-50)",
            }}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

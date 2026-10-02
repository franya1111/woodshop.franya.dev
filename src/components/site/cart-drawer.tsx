"use client";

import { useEffect } from "react";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const closeCart = useCart((s) => s.closeCart);
  const items = useCart((s) => s.items);
  const removeItem = useCart((s) => s.removeItem);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const total = useCart((s) => s.totalPrice());

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] transition-opacity"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "var(--wood-950)",
          borderLeft: "1px solid var(--wood-800)",
          boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
        }}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-5 border-b shrink-0"
          style={{ borderColor: "var(--wood-800)" }}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" style={{ color: "var(--gold)" }} />
            <div>
              <h2
                className="text-lg font-bold"
                style={{ color: "var(--wood-50)" }}
              >
                Your cart
              </h2>
              <p className="text-xs" style={{ color: "var(--wood-400)" }}>
                {items.length === 0
                  ? "Empty"
                  : `${items.reduce((s, i) => s + i.quantity, 0)} items · €${total}`}
              </p>
            </div>
          </div>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:rotate-90"
            style={{ color: "var(--wood-200)", border: "1px solid var(--wood-700)" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--wood-900), var(--wood-800))",
                  border: "1px solid var(--wood-700)",
                }}
              >
                <ShoppingBag
                  className="w-8 h-8"
                  style={{ color: "var(--gold)", opacity: 0.5 }}
                />
              </div>
              <div>
                <div
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--wood-100)" }}
                >
                  Your cart is empty
                </div>
                <p className="text-sm" style={{ color: "var(--wood-400)" }}>
                  Add a piece from the catalog to start your order.
                </p>
              </div>
              <button onClick={closeCart} className="ww-btn ww-btn-outline">
                Browse the catalog
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.color}`}
                  className="flex gap-3 p-3 rounded-xl"
                  style={{
                    background: "var(--wood-900)",
                    border: "1px solid var(--wood-800)",
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0"
                    style={{ border: "1px solid var(--wood-800)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-sm mb-1 line-clamp-2"
                      style={{ color: "var(--wood-50)" }}
                    >
                      {item.product.name}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full inline-block"
                        style={{
                          background:
                            item.product.colors.find(
                              (c) => c.name === item.color
                            )?.hex || "var(--wood-600)",
                          border: "1px solid var(--wood-700)",
                        }}
                      />
                      <span className="text-xs" style={{ color: "var(--wood-400)" }}>
                        {item.color}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className="flex items-center gap-1 rounded-lg"
                        style={{ border: "1px solid var(--wood-700)" }}
                      >
                        <button
                          aria-label="Decrease"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center transition-colors hover:bg-[rgba(212,163,115,0.1)]"
                          style={{ color: "var(--wood-200)" }}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span
                          className="w-7 text-center text-sm font-semibold"
                          style={{ color: "var(--wood-50)" }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          aria-label="Increase"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center transition-colors hover:bg-[rgba(212,163,115,0.1)]"
                          style={{ color: "var(--wood-200)" }}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-bold" style={{ color: "var(--gold)" }}>
                        €{item.product.price * item.quantity}
                      </div>
                    </div>
                  </div>
                  <button
                    aria-label="Remove"
                    onClick={() => removeItem(item.product.id, item.color)}
                    className="self-start w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-[#f87171]"
                    style={{ color: "var(--wood-500)" }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="p-5 border-t shrink-0"
            style={{ borderColor: "var(--wood-800)", background: "var(--wood-900)" }}
          >
            <div
              className="flex items-center justify-between mb-2 text-sm"
              style={{ color: "var(--wood-400)" }}
            >
              <span>Delivery</span>
              <span style={{ color: "#4ade80" }}>Free</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-sm uppercase tracking-widest"
                style={{ color: "var(--wood-400)" }}
              >
                Total
              </span>
              <span
                className="text-2xl font-extrabold"
                style={{ color: "var(--gold)" }}
              >
                €{total}
              </span>
            </div>
            <button
              className="ww-btn ww-btn-solid w-full"
              onClick={() =>
                alert(
                  "Demo: this is a mock checkout. A real payment provider is not connected."
                )
              }
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--wood-500)" }}
            >
              Card · Apple Pay · Google Pay · Bank transfer · 0% installments
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

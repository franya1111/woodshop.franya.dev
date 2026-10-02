"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
  color: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, color: string, quantity?: number) => void;
  removeItem: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

const sameLine = (a: CartItem, productId: string, color: string) =>
  a.product.id === productId && a.color === color;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, color, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((it) =>
            sameLine(it, product.id, color)
          );
          if (existing) {
            return {
              items: state.items.map((it) =>
                sameLine(it, product.id, color)
                  ? { ...it, quantity: it.quantity + quantity }
                  : it
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { product, color, quantity }],
            isOpen: true,
          };
        });
      },
      removeItem: (productId, color) =>
        set((state) => ({
          items: state.items.filter((it) => !sameLine(it, productId, color)),
        })),
      updateQuantity: (productId, color, quantity) =>
        set((state) => ({
          items: state.items
            .map((it) =>
              sameLine(it, productId, color)
                ? { ...it, quantity: Math.max(1, quantity) }
                : it
            )
            .filter((it) => it.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      totalItems: () =>
        get().items.reduce((sum, it) => sum + it.quantity, 0),
      totalPrice: () =>
        get().items.reduce(
          (sum, it) => sum + it.product.price * it.quantity,
          0
        ),
    }),
    { name: "ww-cart" }
  )
);

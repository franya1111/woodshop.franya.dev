"use client";

import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingCart, User, Phone } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { contactInfo } from "@/lib/products";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#catalog", label: "Catalog" },
  { href: "#categories", label: "Categories" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openCart = useCart((s) => s.openCart);
  const totalItems = useCart((s) => s.totalItems());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
      style={{
        background: scrolled
          ? "rgba(26,16,8,0.92)"
          : "rgba(26,16,8,0.4)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
        borderBottom: scrolled
          ? "1px solid var(--wood-800)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="ww-container flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span
            className="text-xl md:text-2xl font-extrabold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="ww-gold-gradient-text">WOOD</span>
            <span style={{ color: "var(--wood-100)" }}>WAVE</span>
          </span>
          <span
            className="hidden sm:inline-block text-[0.6rem] font-semibold uppercase tracking-[0.2em] translate-y-[3px]"
            style={{ color: "var(--wood-400)" }}
          >
            HOME
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="ww-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Search"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-[rgba(212,163,115,0.1)]"
            style={{ color: "var(--wood-200)" }}
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href={contactInfo.phoneHref}
            className="hidden md:flex items-center gap-2 text-xs font-medium"
            style={{ color: "var(--wood-200)" }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">{contactInfo.phone}</span>
          </a>
          <button
            aria-label="Account"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-[rgba(212,163,115,0.1)]"
            style={{ color: "var(--wood-200)" }}
          >
            <User className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-[rgba(212,163,115,0.1)]"
            style={{ color: "var(--wood-200)" }}
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "linear-gradient(135deg, var(--wood-700), var(--gold))",
                  color: "var(--wood-50)",
                }}
              >
                {totalItems}
              </span>
            )}
          </button>

          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: "var(--wood-200)" }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{ background: "rgba(26,16,8,0.98)" }}
        >
          <div className="flex items-center justify-between p-5">
            <span className="text-2xl font-extrabold">
              <span className="ww-gold-gradient-text">WOOD</span>
              <span style={{ color: "var(--wood-100)" }}>WAVE</span>
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-90"
              style={{ color: "var(--wood-200)" }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-7 mt-16">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-semibold uppercase tracking-widest transition-colors"
                style={{ color: "var(--wood-100)" }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openCart();
              }}
              className="ww-btn ww-btn-solid mt-6"
            >
              Cart ({totalItems})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

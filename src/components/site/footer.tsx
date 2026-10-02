"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { contactInfo } from "@/lib/products";

const SHOP = [
  { label: "Rattan Seating", href: "#catalog" },
  { label: "Wooden Tables", href: "#catalog" },
  { label: "Woven Storage", href: "#catalog" },
  { label: "Rattan Beds", href: "#catalog" },
  { label: "Lighting", href: "#catalog" },
  { label: "Hall & Console", href: "#catalog" },
];
const HELP = [
  { label: "Delivery", href: "#" },
  { label: "14-day returns", href: "#" },
  { label: "2-year warranty", href: "#" },
  { label: "Certificates", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#contact" },
];
const COMPANY = [
  { label: "About the workshop", href: "#about" },
  { label: "Work gallery", href: "#gallery" },
  { label: "Customer stories", href: "#testimonials" },
  { label: "Custom orders", href: "#contact" },
  { label: "Trade & B2B", href: "#contact" },
  { label: "Partnerships", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-16 pb-8 mt-auto"
      style={{ background: "var(--wood-950)" }}
    >
      <div className="ww-divider absolute top-0 left-0 right-0" />

      <div className="ww-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span
                className="text-2xl font-extrabold"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span className="ww-gold-gradient-text">WOOD</span>
                <span style={{ color: "var(--wood-100)" }}>WAVE</span>
              </span>
            </a>
            <p
              className="text-sm mb-6 max-w-xs"
              style={{ color: "var(--wood-400)" }}
            >
              Handcrafted furniture woven from natural willow and rattan over
              solid oak, walnut, and ash. Free delivery across the country,
              2-year warranty, 14-day returns.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Social"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{
                    background: "var(--wood-900)",
                    border: "1px solid var(--wood-700)",
                    color: "var(--wood-200)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--wood-200)" }}
            >
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SHOP.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-[var(--gold)]"
                    style={{ color: "var(--wood-400)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--wood-200)" }}
            >
              Help
            </h4>
            <ul className="flex flex-col gap-2.5">
              {HELP.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-[var(--gold)]"
                    style={{ color: "var(--wood-400)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--wood-200)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-[var(--gold)]"
                    style={{ color: "var(--wood-400)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-8 px-6 rounded-2xl mb-10"
          style={{
            background: "var(--wood-900)",
            border: "1px solid var(--wood-800)",
          }}
        >
          {[
            {
              icon: Phone,
              title: "Phone",
              value: contactInfo.phone,
              sub: "Mon – Sun, free line",
            },
            {
              icon: Mail,
              title: "Email",
              value: contactInfo.email,
              sub: "We reply within 2 hours",
            },
            {
              icon: MapPin,
              title: "Workshop",
              value: contactInfo.address,
              sub: "Showroom & workshop",
            },
            {
              icon: Clock,
              title: "Hours",
              value: contactInfo.hoursShort,
              sub: "Sunday — by appointment",
            },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--wood-700), var(--gold))",
                }}
              >
                <c.icon className="w-5 h-5" style={{ color: "var(--wood-50)" }} />
              </div>
              <div className="min-w-0">
                <div
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "var(--wood-500)" }}
                >
                  {c.title}
                </div>
                <div
                  className="text-sm font-semibold truncate"
                  style={{ color: "var(--wood-50)" }}
                >
                  {c.value}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--wood-400)" }}
                >
                  {c.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "var(--wood-800)" }}
        >
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
            style={{ color: "var(--wood-400)" }}
          >
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Returns &amp; exchanges
            </a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Terms of use
            </a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Delivery terms
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: "var(--wood-400)" }}>
              © 2026 WOODWAVE HOME. All rights reserved.
            </span>
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgba(212,163,115,0.15)]"
              style={{ color: "var(--wood-400)", border: "1px solid var(--wood-700)" }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/products";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((p) =>
          p === null ? p : (p + 1) % galleryImages.length
        );
      if (e.key === "ArrowLeft")
        setOpen((p) =>
          p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length
        );
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section
      id="gallery"
      className="ww-section"
      style={{ background: "var(--wood-900)" }}
    >
      <div className="ww-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="ww-label">Inspiration</span>
            <h2 className="ww-section-title">
              In <span className="ww-gold-gradient-text">real homes</span>
            </h2>
          </div>
          <p
            className="max-w-md text-sm md:text-base"
            style={{ color: "var(--wood-400)" }}
          >
            Photographs of our pieces in customers&apos; homes and in our
            workshop. Click any image to open it full screen.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryImages.map((src, i) => {
            const feature = i === 0;
            return (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className={`ww-reveal ww-reveal-delay-${
                  (i % 6) + 1
                } group relative overflow-hidden rounded-xl sm:rounded-2xl ${
                  feature ? "col-span-2 row-span-2" : ""
                }`}
                style={{ border: "1px solid var(--wood-800)" }}
              >
                <div className="ww-img-zoom absolute inset-0">
                  <img
                    src={src}
                    alt={`Interior ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ background: "rgba(26,16,8,0.6)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(212,163,115,0.9)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1a1008"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:rotate-90"
            style={{
              background: "rgba(212,163,115,0.15)",
              color: "var(--wood-200)",
              border: "1px solid var(--wood-700)",
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((p) =>
                p === null
                  ? p
                  : (p - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(212,163,115,0.15)",
              color: "var(--wood-200)",
              border: "1px solid var(--wood-700)",
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={galleryImages[open]}
            alt={`Interior ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain"
            style={{ border: "2px solid var(--wood-700)" }}
          />
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((p) => (p === null ? p : (p + 1) % galleryImages.length));
            }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(212,163,115,0.15)",
              color: "var(--wood-200)",
              border: "1px solid var(--wood-700)",
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm"
            style={{ color: "var(--wood-300)" }}
          >
            {open + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

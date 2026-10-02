"use client";

import { aboutImage } from "@/lib/products";

export function About() {
  return (
    <section
      id="about"
      className="ww-section"
      style={{ background: "var(--wood-950)" }}
    >
      <div className="ww-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="ww-reveal relative">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--wood-800)" }}
            >
              <img
                src={aboutImage}
                alt="WOODWAVE workshop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Glass badge */}
            <div
              className="absolute bottom-4 left-4 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(26,16,8,0.85)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--wood-700)",
              }}
            >
              <div
                className="text-3xl font-extrabold leading-none"
                style={{ color: "var(--gold)" }}
              >
                12
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "var(--wood-300)" }}
              >
                years in the workshop
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="ww-reveal ww-reveal-delay-2">
            <span className="ww-label">About us</span>
            <h2 className="ww-section-title mb-6">
              We weave willow, rattan &amp;
              <br />
              <span className="ww-gold-gradient-text">solid hardwood</span>
            </h2>
            <p
              className="text-base mb-5"
              style={{ color: "var(--wood-200)", lineHeight: 1.7 }}
            >
              WOODWAVE is a small workshop of ten weavers, joiners, and
              finishers based in Athy, co. Kildare, Ireland. We build furniture
              the slow way — from solid oak, walnut, and ash, hand-woven with
              natural rattan and willow reed. No MDF, no plastic, no
              formaldehyde, no shortcuts. Each piece takes a single
              craftsperson between 12 and 40 hours to complete.
            </p>
            <p
              className="text-base mb-8"
              style={{ color: "var(--wood-300)", lineHeight: 1.7 }}
            >
              Every piece goes through three quality checks before it leaves
              the workshop. We also take on custom work — send us a sketch or
              a measurement and we&apos;ll come back with a quote within 48
              hours.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { num: "100%", label: "Natural materials" },
                { num: "48h", label: "Custom quote" },
                { num: "2 yrs", label: "Warranty" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border-l-2 pl-3 sm:pl-4"
                  style={{ borderColor: "var(--wood-700)" }}
                >
                  <div
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--wood-400)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center gap-2"
              style={{ borderColor: "var(--wood-800)" }}
            >
              <div
                className="text-lg font-semibold"
                style={{ color: "var(--wood-100)" }}
              >
                With love and respect,
              </div>
              <div className="text-lg font-semibold ww-gold-gradient-text">
                the WOODWAVE team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

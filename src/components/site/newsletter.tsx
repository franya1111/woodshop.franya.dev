"use client";

import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section
      className="ww-section"
      style={{
        background:
          "linear-gradient(135deg, var(--wood-950) 0%, var(--wood-900) 50%, var(--wood-950) 100%)",
      }}
    >
      <div className="ww-container">
        <div
          className="ww-reveal relative overflow-hidden rounded-2xl px-6 py-12 md:px-14 md:py-16 text-center"
          style={{
            border: "1px solid var(--wood-800)",
            background:
              "linear-gradient(135deg, rgba(45,28,13,0.5), rgba(26,16,8,0.5))",
          }}
        >
          {/* Decorative blur */}
          <div
            className="ww-blur-glow"
            style={{
              top: "-30%",
              right: "-10%",
              width: 400,
              height: 400,
              background: "rgba(212,163,115,0.12)",
            }}
          />
          <div
            className="ww-blur-glow"
            style={{
              bottom: "-40%",
              left: "-10%",
              width: 320,
              height: 320,
              background: "rgba(162,115,63,0.10)",
            }}
          />

          <div className="relative z-10">
            <Mail
              className="w-10 h-10 mx-auto mb-4"
              style={{ color: "var(--gold)" }}
            />
            <h2 className="ww-section-title mb-3">
              Get new pieces &amp; <span className="ww-gold-gradient-text">private offers</span>
            </h2>
            <p
              className="max-w-xl mx-auto mb-7 text-sm md:text-base"
              style={{ color: "var(--wood-300)" }}
            >
              Subscribe to our newsletter — every two weeks we send a small
              letter with new pieces, interior photos, and a private promo
              code. No spam, ever.
            </p>

            <form
              onSubmit={submit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="ww-input flex-1"
                style={{ background: "var(--wood-950)" }}
              />
              <button
                type="submit"
                className="ww-btn ww-btn-solid shrink-0"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Done
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {sent && (
              <p className="mt-3 text-sm" style={{ color: "#4ade80" }}>
                Thank you! Check your inbox — we&apos;ve sent a confirmation email.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

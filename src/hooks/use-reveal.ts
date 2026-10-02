"use client";

import { useEffect } from "react";

/**
 * Adds a global scroll-reveal observer.
 * Any element with class `ww-reveal` will toggle to `ww-revealed`
 * when it scrolls into view. Optional `ww-reveal-delay-N` for staggering.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ww-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    const revealEls = document.querySelectorAll(".ww-reveal:not(.ww-revealed)");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

"use client";

import { useEffect } from "react";

const revealSelector = [
  ".portfolio-shell > div > div",
  "#sobre-mi .lg\\:sticky",
  "#sobre-mi article",
  "#sobre-mi .surface-panel",
  "#proyectos article",
  "#contacto .surface-panel",
  "#contacto form",
  "footer > div > div",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
      element.style.setProperty("--reveal-x", index % 2 === 0 ? "-3rem" : "3rem");
    });

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("scroll-reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

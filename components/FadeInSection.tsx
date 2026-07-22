"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  /** Use time-based fade on load instead of scroll-driven view() — for above-fold heroes. */
  onLoad?: boolean;
}

export default function FadeInSection({ children, onLoad = false }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (onLoad) {
      el.classList.add("is-visible");
      return;
    }

    const reveal = () => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      reveal();
    }

    return () => observer.disconnect();
  }, [onLoad]);

  return (
    <div
      ref={ref}
      className={onLoad ? "fade-in-section fade-in-on-load is-visible" : "fade-in-section"}
    >
      {children}
    </div>
  );
}

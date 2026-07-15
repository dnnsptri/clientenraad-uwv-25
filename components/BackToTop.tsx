"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_DESKTOP = 800;
const SCROLL_THRESHOLD_MOBILE = 400;

function getScrollThreshold() {
  return window.innerWidth < 640
    ? SCROLL_THRESHOLD_MOBILE
    : SCROLL_THRESHOLD_DESKTOP;
}

function getScrollTop() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function setScrollTop(value: number) {
  window.scrollTo(0, value);
  document.documentElement.scrollTop = value;
  document.body.scrollTop = value;
}

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    let footerInView = false;

    const updateVisibility = () => {
      setIsVisible(getScrollTop() > getScrollThreshold() && !footerInView);
    };

    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => {
            footerInView = entry.isIntersecting;
            updateVisibility();
          },
          { threshold: 0 },
        )
      : null;

    footerObserver?.observe(footer!);

    window.addEventListener("scroll", updateVisibility, { passive: true });
    document.body.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      footerObserver?.disconnect();
      window.removeEventListener("scroll", updateVisibility);
      document.body.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const start = getScrollTop();
    if (start <= 0) return;

    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setScrollTop(start * (1 - easeOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "back-to-top pdf-button fixed bottom-0 right-0 z-50 !min-w-[48px]",
        isVisible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      aria-label="Terug naar boven"
      aria-hidden={!isVisible}
    >
      <ChevronUp className="size-6" />
    </button>
  );
};

export default BackToTop;

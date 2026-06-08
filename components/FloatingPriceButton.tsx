// components/FloatingPriceButton.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function FloatingPriceButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Target the ID of the DecorPriceList section
    const priceListSection = document.getElementById("pricelist");
    if (!priceListSection) return;

    // BEST PRACTICE: Use IntersectionObserver instead of a scroll listener
    // This is significantly better for browser performance.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the button when the pricelist intersects the viewport
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        // Trigger when 10% of the pricelist section becomes visible
        threshold: 0.1,
      },
    );

    observer.observe(priceListSection);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#pricelist"
      className={`
        fixed top-[85%] md:top-1/2 left-0 -translate-y-1/2 z-50 
        flex flex-col items-center gap-3 
        bg-[#f5f3e6] text-gray-900
        py-6 px-3 
        rounded-r-2xl 
        shadow-[5px_0_20px_rgba(0,0,0,0.15)]
        border-y border-r border-gray-300
        transition-all duration-500 
        hover:translate-x-2
        group
        /* The conditional logic that smoothly slides the button off-screen */
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to Price List"
    >
      <span
        className="font-bold text-sm tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        Lihat Harga
      </span>
      <ArrowDown className="w-5 h-5 text-amber-500 group-hover:translate-y-2 transition-transform duration-300" />
    </a>
  );
}

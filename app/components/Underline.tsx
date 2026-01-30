"use client";

import React, { useEffect, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type UnderlineProps = {
  children: React.ReactNode;

  /** Delay before animation starts AFTER entering view (ms) */
  delayMs?: number;

  /** Animation duration (ms) */
  durationMs?: number;

  /** Thickness of the underline in px */
  thicknessPx?: number;

  /**
   * Width of the underline:
   * - "text" → matches text width (default)
   * - "full" → spans full container
   * - number → percentage of text width (0–1)
   */
  width?: "text" | "full" | number;

  /** Intersection threshold */
  threshold?: number;
};

export function Underline({
  children,
  delayMs = 0,
  durationMs = 1500,
  thicknessPx = 2,
  width = "text",
  threshold = 0.3,
}: UnderlineProps) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({ threshold });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let timeoutId: number;

    requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => setOn(true), delayMs);
    });

    return () => window.clearTimeout(timeoutId);
  }, [inView, delayMs]);

  // width logic
  const widthStyle =
    width === "full"
      ? { left: 0, right: 0 }
      : typeof width === "number"
      ? {
          left: `${(1 - width) * 50}%`,
          right: `${(1 - width) * 50}%`,
        }
      : { left: 0, right: 0 };

  return (
    <span ref={ref} className="relative inline-flex align-baseline">
      {children}

      <span
        aria-hidden="true"
        style={{
          transitionDuration: `${durationMs}ms`,
          height: `${thicknessPx}px`,
          ...widthStyle,
        }}
        className={[
          "pointer-events-none",
          "absolute -bottom-[2px]",
          "bg-[#0095FF]",
          "origin-left scale-x-0",
          "transition-transform ease-linear",
          on ? "scale-x-100" : "scale-x-0",
        ].join(" ")}
      />
    </span>
  );
}

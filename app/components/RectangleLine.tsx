"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type RectangleLineProps = {
  children: React.ReactNode;
  /** px per second (increase = faster) */
  speedPxPerSec?: number;
  /** thickness of the line in px */
  thicknessPx?: number;
  /** color class like "bg-[#0095FF]" */
  colorClassName?: string;
  /** in-view threshold */
  threshold?: number;
};

export function RectangleLine({
  children,
  speedPxPerSec = 400,
  thicknessPx = 4,
  colorClassName = "bg-[#0095FF]",
  threshold = 0.3,
}: RectangleLineProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold });

  // measurement refs (not affected by transforms)
  const leftRef = useRef<HTMLSpanElement | null>(null);
  const rightRef = useRef<HTMLSpanElement | null>(null);
  const topRef = useRef<HTMLSpanElement | null>(null);
  const bottomRef = useRef<HTMLSpanElement | null>(null);

  // animation state
  const [leftOn, setLeftOn] = useState(false);
  const [topOn, setTopOn] = useState(false);
  const [bottomOn, setBottomOn] = useState(false);
  const [rightOn, setRightOn] = useState(false);

  // computed durations
  const [leftMs, setLeftMs] = useState(500);
  const [rightMs, setRightMs] = useState(500);
  const [topMs, setTopMs] = useState(500);
  const [bottomMs, setBottomMs] = useState(500);

  useLayoutEffect(() => {
    const compute = () => {
      if (leftRef.current) {
        const h = leftRef.current.offsetHeight;
        setLeftMs(Math.max(200, Math.round((h / speedPxPerSec) * 1000)));
      }
      if (rightRef.current) {
        const h = rightRef.current.offsetHeight;
        setRightMs(Math.max(200, Math.round((h / speedPxPerSec) * 1000)));
      }
      if (topRef.current) {
        const w = topRef.current.offsetWidth;
        setTopMs(Math.max(200, Math.round((w / speedPxPerSec) * 1000)));
      }
      if (bottomRef.current) {
        const w = bottomRef.current.offsetWidth;
        setBottomMs(Math.max(200, Math.round((w / speedPxPerSec) * 1000)));
      }
    };

    compute();

    const ros: ResizeObserver[] = [];
    const observe = (el: HTMLSpanElement | null) => {
      if (!el) return;
      const ro = new ResizeObserver(compute);
      ro.observe(el);
      ros.push(ro);
    };

    observe(leftRef.current);
    observe(rightRef.current);
    observe(topRef.current);
    observe(bottomRef.current);

    return () => ros.forEach((ro) => ro.disconnect());
  }, [speedPxPerSec]);

  useEffect(() => {
    if (!inView) return;
    requestAnimationFrame(() => setLeftOn(true));
  }, [inView]);

  const onLeftEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    setTopOn(true);
    setBottomOn(true);
  };

  const onTopOrBottomEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (topOn && bottomOn && !rightOn) setRightOn(true);
  };

  return (
    <div ref={ref} className="relative">
      {/* Your content */}
      {children}

      {/* Animated lines overlay */}
      <div className="pointer-events-none absolute inset-0">
        {/* LEFT (1st) */}
        <span
          ref={leftRef}
          onTransitionEnd={onLeftEnd}
          style={{
            transitionDuration: `${leftMs}ms`,
            width: `${thicknessPx}px`,
          }}
          className={[
            "absolute left-0 top-0 h-full",
            colorClassName,
            "origin-top transition-transform ease-linear",
            leftOn ? "scale-y-100" : "scale-y-0",
          ].join(" ")}
        />

        {/* TOP (2nd, simultaneous) */}
        <span
          ref={topRef}
          onTransitionEnd={onTopOrBottomEnd}
          style={{
            transitionDuration: `${topMs}ms`,
            height: `${thicknessPx}px`,
          }}
          className={[
            "absolute left-0 top-0 w-full",
            colorClassName,
            "origin-left transition-transform ease-linear",
            topOn ? "scale-x-100" : "scale-x-0",
          ].join(" ")}
        />

        {/* BOTTOM (2nd, simultaneous) */}
        <span
          ref={bottomRef}
          onTransitionEnd={onTopOrBottomEnd}
          style={{
            transitionDuration: `${bottomMs}ms`,
            height: `${thicknessPx}px`,
          }}
          className={[
            "absolute left-0 bottom-0 w-full",
            colorClassName,
            "origin-left transition-transform ease-linear",
            bottomOn ? "scale-x-100" : "scale-x-0",
          ].join(" ")}
        />

        {/* RIGHT (3rd) */}
        <span
          ref={rightRef}
          style={{
            transitionDuration: `${rightMs}ms`,
            width: `${thicknessPx}px`,
          }}
          className={[
            "absolute right-0 top-0 h-full",
            colorClassName,
            "origin-top transition-transform ease-linear",
            rightOn ? "scale-y-100" : "scale-y-0",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = window.setTimeout(() => setOn(true), delayMs);
    return () => window.clearTimeout(t);
  }, [inView, delayMs]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-600 ease-out will-change-transform will-change-opacity",
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Animated number count-up that triggers when scrolled into view.
 * Parses a value like "2.500+", "98%", "29", "8 th" into a numeric part
 * (supporting thousands separators with "." or ",") + a suffix.
 */
export function CountUp({
  value,
  duration = 2,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([\d.,]+)(.*)$/);
  const numericPart = match?.[1] ?? "";
  const suffix = match?.[2] ?? "";
  const usesDotThousands =
    numericPart.includes(".") && !numericPart.includes(",");
  const rawNumber = parseFloat(numericPart.replace(/[.,]/g, ""));
  const hasNumber = !isNaN(rawNumber) && numericPart !== "";

  const formatNum = (n: number) =>
    usesDotThousands
      ? n.toLocaleString("de-DE")
      : n.toLocaleString("en-US");

  const [display, setDisplay] = useState(() =>
    hasNumber ? formatNum(0) + suffix : value,
  );

  useEffect(() => {
    if (!inView || !hasNumber) return;
    const controls = animate(0, rawNumber, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatNum(Math.round(latest)) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, rawNumber, suffix, usesDotThousands, duration, hasNumber]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

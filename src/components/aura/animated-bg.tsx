"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

/**
 * Floating gold particles + bokeh that drift upward across the viewport.
 * Purely decorative; pointer-events disabled.
 */
export function FloatingGoldParticles({ count = 22 }: { count?: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 12,
        opacity: 0.25 + Math.random() * 0.55,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: -20,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle at 30% 30%, #fff8d6, #f5d061 45%, #c9971f 100%)",
            opacity: p.opacity,
            boxShadow: "0 0 12px rgba(245,208,97,0.65)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-20, -700], opacity: [0, p.opacity, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Soft animated gradient blobs that sit behind a section. */
export function AuraBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,208,97,0.55), transparent 70%)",
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,146,124,0.45), transparent 70%)",
        }}
        animate={{ x: [0, -25, 10, 0], y: [0, 30, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)",
        }}
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

type Star = { id: number; top: number; left: number; delay: number; size: number };

/** Twinkling tiny stars scattered across a section. */
export function Twinkles({ count = 18 }: { count?: number }) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: 2 + Math.random() * 3,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            background: "radial-gradient(circle, #fff8d6, #f5d061)",
            borderRadius: 9999,
            boxShadow: "0 0 8px rgba(245,208,97,0.8)",
          }}
        />
      ))}
    </div>
  );
}

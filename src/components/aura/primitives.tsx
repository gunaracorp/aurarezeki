"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Reveal-on-scroll wrapper. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow pill with diamond separators. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep backdrop-blur",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      {children}
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
    </span>
  );
}

/** Ornamental gold divider with central diamond. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <span className="relative flex h-3 w-3 rotate-45 bg-gold">
        <span className="absolute inset-0 rotate-45 animate-pulse-glow bg-gold-light/70" />
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  );
}

/** Section heading with eyebrow, title and subtitle, centered. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.22}>
        <GoldDivider className="mt-6" />
      </Reveal>
    </div>
  );
}

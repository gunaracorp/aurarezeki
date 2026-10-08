"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5500);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = TESTIMONIALS[index];

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-cream-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title={
            <>
              Kisah Nyata, Rezeki{" "}
              <span className="text-gold-gradient">Berlimpah</span>
            </>
          }
          subtitle="Ribuan klien telah merasakan sendiri perubahan setelah therapy aura rezeki."
        />

        <Reveal className="mt-14">
          <div
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* card */}
            <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-white/80 p-8 backdrop-blur shadow-warm-lg sm:p-10">
              <Quote className="absolute -left-2 -top-2 h-20 w-20 text-gold/10" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient font-display text-base font-bold text-white shadow-warm">
                      {active.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        {active.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {active.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* shimmer */}
              <div className="shimmer-sweep absolute inset-0 pointer-events-none" />
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button
                onClick={prev}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gold/40 bg-white/70 text-gold-deep hover:bg-gold/10"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimoni ${i + 1}`}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      i === index
                        ? "w-8 bg-gold-gradient"
                        : "w-2.5 bg-gold/30 hover:bg-gold/60",
                    )}
                  />
                ))}
              </div>
              <Button
                onClick={next}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gold/40 bg-white/70 text-gold-deep hover:bg-gold/10"
                aria-label="Berikutnya"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

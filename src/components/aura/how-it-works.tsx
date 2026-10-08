"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import { AuraBlobs } from "./animated-bg";

export function HowItWorks() {
  return (
    <section
      id="proses"
      className="relative overflow-hidden bg-warm-glow py-24 sm:py-28"
    >
      <AuraBlobs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cara Kerja"
          title={
            <>
              Empat Langkah Menuju{" "}
              <span className="text-gold-gradient">Rezeki Mengalir</span>
            </>
          }
          subtitle="Proses yang sederhana, jelas, dan penuh berkah dari awal hingga rezeki mulai mengalir."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.12}>
                <div className="group relative h-full">
                  {/* number bubble */}
                  <div className="relative z-10 mx-auto mb-6 w-fit">
                    <div className="absolute inset-0 -m-2 rounded-full bg-gold/20 blur-md animate-pulse-glow" />
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      className="relative grid h-24 w-24 place-items-center rounded-full bg-gold-gradient text-white shadow-warm-lg"
                    >
                      <s.icon className="h-9 w-9" />
                      <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-white font-display text-sm font-extrabold text-gold-deep shadow-warm">
                        {s.no}
                      </span>
                    </motion.div>
                  </div>

                  <div className="rounded-2xl border border-gold/20 bg-white/70 p-5 text-center backdrop-blur transition-shadow group-hover:shadow-warm">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>

                  {/* arrow between (desktop) */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute -right-3 top-10 hidden text-gold lg:block">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

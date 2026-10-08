"use client";

import { motion } from "framer-motion";
import { BENEFIT_GROUPS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import { Twinkles } from "./animated-bg";

export function Benefits() {
  return (
    <section
      id="manfaat"
      className="relative overflow-hidden bg-ivory py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-islamic opacity-40" />
      <Twinkles count={20} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="29 Manfaat Rezeki"
          title={
            <>
              Transformasi yang Anda{" "}
              <span className="text-gold-gradient">Rasakan</span>
            </>
          }
          subtitle="Setiap terapi membuka pintu rezeki yang berbeda. Inilah manfaat yang mengalir ke dalam hidup Anda."
        />

        <div className="mt-16 space-y-14">
          {BENEFIT_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="mb-7 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {group.subtitle}
                </p>
                <div
                  className={`mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r ${group.accent}`}
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05 } },
                }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3"
              >
                {group.items.map((b, i) => (
                  <motion.div
                    key={`${group.title}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 24, scale: 0.96 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-gold/20 bg-white/80 p-4 backdrop-blur transition-shadow hover:shadow-warm"
                  >
                    {/* shimmer sweep on hover */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-light/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-warm`}
                    >
                      <b.icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold leading-tight text-foreground">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-base text-muted-foreground">
            Dan masih banyak lagi berkah yang menyusul. Setiap orang memiliki
            pintu rezekinya sendiri —{" "}
            <span className="font-semibold text-gold-deep">
              kami bantu menemukan dan membukanya
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

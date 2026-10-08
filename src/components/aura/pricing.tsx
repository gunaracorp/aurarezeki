"use client";

import { motion } from "framer-motion";
import { Check, Crown, Sparkles, MessageCircle } from "lucide-react";
import { PACKAGES, SITE, waLink } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import { TiltCard } from "./tilt-card";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="paket"
      className="relative overflow-hidden bg-ivory py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-islamic opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Paket Terapi"
          title={
            <>
              Pilih Paket yang{" "}
              <span className="text-gold-gradient">Sesuai</span>
            </>
          }
          subtitle="Setiap paket dirancang untuk kebutuhan berbeda. Konsultasikan untuk saran terbaik."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <TiltCard
                max={6}
                className={cn(
                  "relative h-full rounded-3xl",
                  p.popular && "md:scale-105",
                )}
              >
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/85 p-7 backdrop-blur transition-shadow",
                  p.popular
                    ? "border-gold/60 shadow-warm-lg"
                    : "border-gold/20 shadow-warm",
                )}
              >
                {p.popular && (
                  <>
                    <div className="absolute -right-12 top-6 rotate-45 bg-gold-gradient px-12 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-warm">
                      Populer
                    </div>
                    <div className="shimmer-sweep absolute inset-0 pointer-events-none" />
                  </>
                )}

                {/* Icon */}
                <span
                  className={cn(
                    "mb-4 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-warm",
                    p.popular
                      ? "bg-gold-gradient"
                      : "bg-gradient-to-br from-rose-400 to-amber-500",
                  )}
                >
                  {p.popular ? (
                    <Crown className="h-7 w-7" />
                  ) : i === 0 ? (
                    <Sparkles className="h-7 w-7" />
                  ) : (
                    <Crown className="h-7 w-7" />
                  )}
                </span>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-gold-gradient">
                    {p.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    {p.period}
                  </span>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <ul className="flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-deep/15 text-emerald-deep">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Assalamualaikum, saya ingin ${p.cta} (${p.name} - ${p.price}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-7 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all",
                    p.popular
                      ? "bg-gold-gradient text-white shadow-warm hover:brightness-105"
                      : "border border-gold/40 bg-white/70 text-gold-deep hover:bg-gold/10",
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  {p.cta}
                </a>
              </motion.div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
            Butuh paket khusus?{" "}
            <a
              href={waLink(`Assalamualaikum, saya ingin konsultasi paket khusus ${SITE.brand}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              Konsultasikan kebutuhan Anda
            </a>{" "}
            dan kami siap menyusun yang terbaik.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

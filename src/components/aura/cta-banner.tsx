"use client";

import { motion } from "framer-motion";
import { MessageCircle, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingGoldParticles, Twinkles } from "./animated-bg";
import { Reveal } from "./primitives";
import { SITE, waLink } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-yellow-500 to-rose-400" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
      <div className="absolute inset-0 pattern-islamic opacity-30" />
      <Twinkles count={24} />
      <FloatingGoldParticles count={20} />

      {/* decorative rotating ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72"
      >
        <div className="absolute inset-0 animate-spin-slower rounded-full border-2 border-dashed border-white/30" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72"
      >
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-white/30" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <Crown className="h-3.5 w-3.5" />
            Saatnya Rezeki Anda Mengalir
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
            Buka Pintu Rezeki
            <br className="hidden sm:block" /> Bersama{" "}
            <span className="text-glow-gold">AURA REZEKI</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-white/90">
            Konsultasi gratis sekarang. Tim kami siap mendengar dan membantu
            membuka jalan rezeki Anda — dengan berkah, bukan sekadar usaha.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative w-full overflow-hidden rounded-full bg-white px-8 text-base font-bold text-gold-deep shadow-warm-lg hover:bg-cream sm:w-auto"
            >
              <a
                href={waLink(
                  `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20 sm:w-auto"
            >
              <a href="#kontak">
                <Sparkles className="mr-2 h-5 w-5" />
                Isi Form Pendaftaran
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 text-sm font-medium text-white/80">
            Hubungi langsung:{" "}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline-offset-4 hover:underline"
            >
              {SITE.whatsapp}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

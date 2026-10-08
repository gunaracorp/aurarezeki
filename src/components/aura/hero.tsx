"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  Crown,
  Star,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FloatingGoldParticles, Twinkles } from "./animated-bg";
import { SITE, waLink, STATS } from "@/lib/site-data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-warm-glow pt-20 pb-24"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 pattern-islamic opacity-50" />
      <Twinkles count={26} />
      <FloatingGoldParticles count={26} />

      {/* Rotating ornamental ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 hidden h-[36rem] w-[36rem] lg:block"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 animate-spin-slower rounded-full border border-gold/30" />
        <div className="absolute inset-10 animate-spin-slow rounded-full border border-dashed border-gold/40" />
        <div className="absolute inset-24 rounded-full border border-gold/20" />
        <div className="absolute inset-0 animate-spin-slower rounded-full pattern-dots opacity-30" />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Terapi Spiritual Berlandaskan Tauhid
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block text-foreground">Therapy</span>
            <span className="block text-gold-gradient text-glow-gold">AURA REZEKI</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted-foreground lg:mx-0"
          >
            Buka pintu rezeki, pelarisan usaha, dan pelunasan hutang —
            dengan cahaya{" "}
            <span className="font-bold text-gold-deep">aura tauhid</span> yang
            benar-benar bekerja.
          </motion.p>

          {/* Tagline badge */}
          <motion.div variants={item} className="mt-6 flex justify-center lg:justify-start">
            <div className="relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-rose-50 px-5 py-3 gold-border shadow-warm">
              <Crown className="h-5 w-5 text-gold" />
              <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                Rezeki paling tinggi adalah{" "}
                <span className="text-gold-gradient">TAUHID</span>
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="group relative w-full overflow-hidden rounded-full bg-emerald-deep px-8 text-base font-semibold text-white shadow-warm hover:bg-emerald-deep/90 sm:w-auto"
            >
              <a
                href={waLink(
                  `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}. Mohon info paketnya.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi & Pendaftaran
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-gold/50 bg-white/60 px-8 text-base font-semibold text-gold-deep backdrop-blur hover:bg-gold/10 sm:w-auto"
            >
              <a href="#manfaat">
                <Sparkles className="mr-2 h-5 w-5" />
                Lihat 29 Manfaat
              </a>
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-deep" /> 100% Rahasia
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 text-gold" /> 2.500+ klien terbantu
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Crown className="h-4 w-4 text-gold" /> 8 tahun pengalaman
            </span>
          </motion.div>
        </motion.div>

        {/* Right: floating image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            {/* Glow halo */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gold-gradient opacity-30 blur-2xl animate-pulse-glow" />

            {/* Image card */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] gold-border-strong shadow-warm-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="shimmer-sweep absolute inset-0 z-10" />
              <Image
                src="/aura/queen-aura.jpeg"
                alt="Therapy Aura Rezeki - Queen Aura"
                width={720}
                height={900}
                priority
                className="h-[28rem] w-full object-cover sm:h-[34rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating mini cards */}
            <motion.div
              className="absolute -left-5 top-10 hidden rounded-2xl glass-card px-4 py-3 shadow-warm sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-foreground">Aura Rezeki</p>
                  <p className="text-[10px] text-muted-foreground">Menyala terang</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-12 hidden rounded-2xl glass-card px-4 py-3 shadow-warm sm:block"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-deep text-white">
                  <Crown className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-foreground">Berkah Mengalir</p>
                  <p className="text-[10px] text-muted-foreground">Dari arah tak terduga</p>
                </div>
              </div>
            </motion.div>

            {/* Rotating star accent */}
            <motion.div
              className="absolute -right-6 -top-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-warm"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-6 w-6 fill-gold text-gold" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute inset-x-0 bottom-0 mx-auto hidden max-w-5xl px-6 md:block"
      >
        <div className="mb-6 grid grid-cols-4 gap-3 rounded-2xl border border-gold/20 bg-white/70 p-4 backdrop-blur-lg shadow-warm">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-gold-gradient">
                {s.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#tentang"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-deep md:bottom-4"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Gulir ke bawah"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

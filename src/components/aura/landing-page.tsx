"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Sparkles,
  Crown,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Reveal, GoldDivider, Eyebrow } from "./primitives";
import { FloatingGoldParticles, AuraBlobs, Twinkles } from "./animated-bg";
import { Button } from "@/components/ui/button";
import type { PageSeo } from "@/lib/seo-pages";
import { SITE, waLink, BENEFIT_GROUPS, PACKAGES, TESTIMONIALS, STATS } from "@/lib/site-data";

export function LandingPage({ page }: { page: PageSeo }) {
  const waMsg = `Assalamualaikum, saya tertarik dengan ${page.h1}. Mohon info konsultasi & pendaftaran.`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-warm-glow">
      <AuraBlobs />
      <div className="absolute inset-0 pattern-islamic opacity-30" />
      <FloatingGoldParticles count={20} />
      <Twinkles count={18} />

      {/* Back to home link */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-28 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-gold-deep"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>{page.breadcrumbLabel}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-gold-gradient">{page.h1}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              {page.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <GoldDivider className="mt-6" />
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-emerald-deep px-8 text-base font-semibold text-white shadow-warm hover:bg-emerald-deep/90 sm:w-auto"
              >
                <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-gold/50 bg-white/60 px-8 text-base font-semibold text-gold-deep backdrop-blur hover:bg-gold/10 sm:w-auto"
              >
                <Link href="/paket-terapi">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Lihat Paket
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body content (SEO copy) */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {page.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Page-specific rich sections */}
      {page.path === "/pelarisan-usaha" && <PelarisanExtra />}
      {page.path === "/pelunasan-hutang" && <HutangExtra />}
      {page.path === "/terapi-aura" && <AuraExtra />}
      {page.path === "/konsultasi-spiritual" && <KonsultasiExtra />}
      {page.path === "/tentang-umma-yunita" && <TentangExtra />}
      {page.path === "/paket-terapi" && <PaketExtra />}
      {page.path === "/testimoni" && <TestimoniExtra />}

      {/* Trust strip */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-gold/20 bg-white/70 p-4 text-center backdrop-blur">
                  <p className="font-display text-2xl font-extrabold text-gold-gradient">{s.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-yellow-500 to-rose-400 p-8 text-center shadow-warm-lg sm:p-12">
            <div className="absolute inset-0 pattern-islamic opacity-30" />
            <div className="relative">
              <Crown className="mx-auto h-10 w-10 text-white" />
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Saatnya Rezeki Anda Mengalir
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/90">
                Konsultasi gratis sekarang bersama Umma Yunita. Buka pintu rezeki dengan berkah tauhid.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-white px-8 text-base font-bold text-gold-deep shadow-warm-lg hover:bg-cream sm:w-auto"
                >
                  <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp {SITE.whatsapp}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ── Page-specific extra sections ──────────────────────────── */

function BenefitList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-white/70 p-4 backdrop-blur">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function PelarisanExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            Manfaat Pelarisan Usaha
          </h2>
        </Reveal>
        <BenefitList
          items={[
            "Lancar usaha",
            "Jualan apa saja laris",
            "Dapat pesanan terus menerus",
            "Pelanggan semakin banyak",
            "Bekerja di mana saja hoki",
            "Dipercaya banyak orang",
            "Proposal selalu disetujui",
            "Perputaran uang bagus",
          ]}
        />
      </div>
    </section>
  );
}

function HutangExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            Manfaat Pelunasan Hutang
          </h2>
        </Reveal>
        <BenefitList
          items={[
            "Lunas semua hutang",
            "Jauh dari akad riba",
            "Uang datang dari mana saja",
            "Piutang dibayar tanpa drama",
            "Menjadi magnet rezeki",
            "Perputaran uang bagus",
            "Banyak menerima hadiah",
            "Harta benda berlimpah",
          ]}
        />
      </div>
    </section>
  );
}

function AuraExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            Manfaat Terapi Aura
          </h2>
        </Reveal>
        <BenefitList
          items={[
            "Cahaya rezekinya menyala",
            "Undian apa pun menang",
            "Keputusan selalu tepat",
            "Nasihatnya selalu benar",
            "Disukai semua orang",
            "Selalu ceria bahagia",
            "Kehadirannya menyenangkan",
            "Mulia derajat tinggi",
            "Hidup mulia terhormat",
            "Sedekah selalu terbaik",
          ]}
        />
      </div>
    </section>
  );
}

function KonsultasiExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            Cara Konsultasi
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: MessageCircle, title: "Chat WhatsApp", desc: "Hubungi 087881912019, ceritakan kondisi Anda." },
            { icon: Sparkles, title: "Diagnosis Spiritual", desc: "Umma Yunita baca penyumbat rezeki Anda." },
            { icon: Crown, title: "Terapi & Amalan", desc: "Terima terapi aura rezeki + amalan harian." },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-gold/20 bg-white/70 p-5 text-center backdrop-blur">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-white shadow-warm">
                  <step.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 font-display text-base font-bold text-foreground">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-deep" /> 100% Rahasia</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {SITE.hours}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> {SITE.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TentangExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rounded-3xl border border-gold/25 bg-white/80 p-6 backdrop-blur shadow-warm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Profil Singkat</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: "Nama", value: SITE.ownerName },
                { label: "Spesialisasi", value: "Therapy Aura Rezeki & Pelarisan Usaha" },
                { label: "Lokasi", value: "Tangerang Selatan, Banten" },
                { label: "Pengalaman", value: "8+ tahun · 2.500+ klien" },
                { label: "Pendekatan", value: "Tauhid · Tanpa Syirik · Tanpa Khurafat" },
                { label: "Konsultasi", value: SITE.whatsapp },
              ].map((row) => (
                <div key={row.label} className="rounded-xl bg-cream/60 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{row.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PaketExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/85 p-7 backdrop-blur shadow-warm ${
                  p.popular ? "border-gold/60 shadow-warm-lg md:scale-105" : "border-gold/20"
                }`}
              >
                {p.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-gold-gradient px-12 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-warm">
                    Populer
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-gold-gradient">{p.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">{p.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Assalamualaikum, saya ingin ${p.cta} (${p.name} - ${p.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    p.popular
                      ? "bg-gold-gradient text-white shadow-warm hover:brightness-105"
                      : "border border-gold/40 bg-white/70 text-gold-deep hover:bg-gold/10"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimoniExtra() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-2xl border border-gold/25 bg-white/80 p-6 backdrop-blur shadow-warm">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-base leading-relaxed text-foreground sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-display text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

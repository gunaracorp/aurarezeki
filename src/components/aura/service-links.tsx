"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Sparkles,
  MessageCircle,
  Crown,
  Package,
  Star,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { Twinkles } from "./animated-bg";

const SERVICES = [
  {
    href: "/pelarisan-usaha",
    icon: TrendingUp,
    title: "Pelarisan Usaha",
    desc: "Dagang laris, pesanan mengalir, pelanggan bertambah.",
    color: "from-amber-400 via-yellow-500 to-amber-600",
  },
  {
    href: "/pelunasan-hutang",
    icon: Coins,
    title: "Pelunasan Hutang",
    desc: "Lunas semua hutang, jauh dari riba, piutang dibayar.",
    color: "from-rose-400 via-orange-500 to-amber-500",
  },
  {
    href: "/terapi-aura",
    icon: Sparkles,
    title: "Terapi Aura Rezeki",
    desc: "Buka cahaya aura, jadi magnet keberuntungan.",
    color: "from-teal-400 via-emerald-500 to-green-600",
  },
  {
    href: "/konsultasi-spiritual",
    icon: MessageCircle,
    title: "Konsultasi Spiritual",
    desc: "Bimbingan rezeki & hati via WhatsApp, 100% rahasia.",
    color: "from-violet-400 via-purple-500 to-indigo-600",
  },
  {
    href: "/tentang-umma-yunita",
    icon: Crown,
    title: "Tentang Umma Yunita",
    desc: "Praktisi Therapy Aura Rezeki, 8+ tahun pengalaman.",
    color: "from-pink-400 via-rose-500 to-red-600",
  },
  {
    href: "/paket-terapi",
    icon: Package,
    title: "Paket Terapi",
    desc: "3 paket pilihan: Awal, Pelarisan, dan Royal.",
    color: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    href: "/testimoni",
    icon: Star,
    title: "Testimoni Klien",
    desc: "Kisah nyata rezeki berlimpah dari klien kami.",
    color: "from-yellow-400 via-amber-500 to-orange-600",
  },
];

export function ServiceLinks() {
  return (
    <section
      id="layanan"
      className="relative overflow-hidden bg-ivory py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <Twinkles count={14} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title={
            <>
              Jelajahi <span className="text-gold-gradient">Setiap Layanan</span>
            </>
          }
          subtitle="Setiap halaman layanan membahas manfaat, proses, dan kisah nyata secara lengkap."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.href}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link
                href={s.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-warm-lg"
              >
                {/* shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-light/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span
                  className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-warm`}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="relative mt-1 flex-1 text-sm text-muted-foreground">
                  {s.desc}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                  Pelajari lebih lanjut
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

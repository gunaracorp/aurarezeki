"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crown, Heart, Sparkles, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { AuraBlobs } from "./animated-bg";

const PILLARS = [
  {
    icon: Crown,
    title: "Berlandaskan Tauhid",
    desc: "Allah sebagai sumber rezeki. Bukan syirik, bukan khurafat — murni doa, wirid, dan kebersihan hati.",
  },
  {
    icon: Sparkles,
    title: "Energi Aura Murni",
    desc: "Dibuka dengan ritual khusus agar cahaya rezeki menyala dan menarik keberuntungan dari segala arah.",
  },
  {
    icon: Heart,
    title: "Amanah & Rahasia",
    desc: "Seluruh konsultasi dirahasiakan. Keberkahan terjaga karena adab dan amanah diutamakan.",
  },
];

export function About() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-cream-gradient py-24 sm:py-28"
    >
      <AuraBlobs />
      <div className="absolute inset-0 pattern-dots opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Kami"
          title={
            <>
              Cahaya <span className="text-gold-gradient">Tauhid</span> Pembuka
              Pintu Rezeki
            </>
          }
          subtitle="Therapy Aura Rezeki menyatukan kekuatan spiritual tauhid dengan pengalaman mendalam untuk membuka aliran rezeki Anda."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gold-gradient opacity-25 blur-2xl animate-pulse-glow" />
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] gold-border-strong shadow-warm-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="shimmer-sweep absolute inset-0 z-10" />
                <Image
                  src="/aura/tauhid-aura.jpeg"
                  alt="Therapy Aura Rezeki - Aura Tauhid"
                  width={640}
                  height={800}
                  className="h-[30rem] w-full object-cover"
                />
              </motion.div>

              {/* floating quote card */}
              <motion.div
                className="absolute -bottom-6 -right-3 max-w-[15rem] rounded-2xl glass-card p-4 shadow-warm sm:-right-8"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="mb-1 h-4 w-4 fill-gold text-gold" />
                <p className="font-display text-sm font-semibold italic text-foreground">
                  “Rezeki paling tinggi adalah Tauhid.”
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Text + pillars */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Banyak orang berusaha keras namun rezeki serasa tersumbat.
                <span className="font-semibold text-foreground">
                  {" "}
                  Therapy Aura Rezeki{" "}
                </span>
                hadir untuk membantu membuka kembali aliran rezeki Anda dengan
                pendekatan yang bersih, mulia, dan berlandaskan tauhid kepada
                Allah Subhanahu wa Ta&apos;ala.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="group flex items-start gap-4 rounded-2xl border border-gold/20 bg-white/70 p-5 backdrop-blur transition-shadow hover:shadow-warm"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-white shadow-warm">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 p-4 gold-border">
                <Sparkles className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm font-medium text-foreground">
                  Sudah membantu{" "}
                  <span className="font-bold text-gold-deep">2.500+ klien</span>{" "}
                  melunasi hutang, melariskan usaha, dan menarik rezeki dari arah
                  yang tidak disangka.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

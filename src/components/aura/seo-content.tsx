"use client";

import { motion } from "framer-motion";
import { Sparkles, Search } from "lucide-react";
import { SEO } from "@/lib/seo-data";

/**
 * SEO organik content block — natural Indonesian copy targeting primary &
 * long-tail keywords. Visually subtle (smaller, muted) so it doesn't disrupt
 * the premium hero design, but indexed by search engines.
 */
export function SeoContent() {
  return (
    <section
      aria-label="Informasi lengkap therapy aura rezeki"
      className="relative overflow-hidden bg-ivory py-16"
    >
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-gold/20 bg-white/70 p-6 backdrop-blur sm:p-10"
        >
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-deep">
              <Search className="h-3 w-3" />
              Tentang Layanan
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              <span className="text-gold-gradient">Therapy Aura Rezeki</span> —
              Terapi Spiritual Pembuka Pintu Rezeki
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              <strong className="font-semibold text-foreground">
                Therapy Aura Rezeki
              </strong>{" "}
              adalah terapi spiritual Islami yang berlandaskan tauhid untuk
              membuka pintu rezeki, melariskan usaha, dan menarik keberuntungan
              dari arah yang tidak disangka. Dibimbing oleh{" "}
              <strong className="font-semibold text-foreground">Umma Yunita</strong>,
              praktisi therapy aura rezeki berpengalaman dari Tangerang Selatan,
              terapi ini telah membantu ribuan klien melunasi hutang, melariskan
              dagangan, dan menemukan kembali keberkahan dalam hidup.
            </p>

            <p>
              Layanan <strong className="font-semibold text-foreground">
                pelarisan usaha
              </strong>{" "}
              kami cocok untuk pemilik toko, online shop, kontraktor, dan pelaku
              usaha yang ingin dagangannya laris serta pelanggan datang terus
              menerus. Bagi Anda yang tertahan masalah hutang, therapy aura
              rezeki juga membantu <strong className="font-semibold text-foreground">
              pelunasan hutang</strong> tanpa drama, bahkan piutang yang macet
              bertahun-tahun bisa dibayar lunas.
            </p>

            <p>
              Berbeda dengan praktik spiritual lain, therapy aura rezeki kami{" "}
              <strong className="font-semibold text-foreground">
                tanpa syirik, tanpa khurafat
              </strong>{" "}
              — murni doa, wirid pelarisan, dan pembukaan aura rezeki melalui
              kebersihan hati dan tauhid kepada Allah Subhanahu wa Ta&apos;ala.
              Terapi dapat dilakukan <strong className="font-semibold text-foreground">
              jarak jauh</strong> via konsultasi WhatsApp, sehingga dapat diakses
              dari mana saja di Indonesia.
            </p>

            <p>
              Kami menyediakan beberapa paket terapi: Paket Awal untuk mencoba,
              Paket Pelarisan untuk pelarisan usaha &amp; dagang, dan Paket Royal
              untuk transformasi penuh dengan bimbingan 60 hari. Konsultasi gratis
              setiap hari pukul 08.00–21.00 WIB melalui WhatsApp{" "}
              <strong className="font-semibold text-foreground">087881912019</strong>.
            </p>
          </div>

          {/* Hidden keyword cloud (visually muted, semantically present) */}
          <div className="mt-6 border-t border-gold/15 pt-4">
            <p className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground/70">
              <Sparkles className="h-3 w-3 text-gold/60" />
              <span className="font-semibold uppercase tracking-wide">
                Kata kunci:
              </span>
              {SEO.focusKeywords.slice(0, 12).map((kw) => (
                <span key={kw} className="rounded bg-gold/5 px-1.5 py-0.5">
                  {kw}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

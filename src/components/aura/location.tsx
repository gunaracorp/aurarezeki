"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, MessageCircle, Clock, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { AuraBlobs, Twinkles } from "./animated-bg";
import { SITE, waLink } from "@/lib/site-data";

// Google Maps embed (no API key needed) using the q=...&output=embed format.
const mapQuery = encodeURIComponent(
  "Pondok Pucung Indah II, Jl. Tarumanegara A22/1, Pondok Pucung, Pondok Aren, Tangerang Selatan 15229",
);
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed&z=16`;
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function Location() {
  return (
    <section
      id="lokasi"
      className="relative overflow-hidden bg-cream-gradient py-24 sm:py-28"
    >
      <AuraBlobs />
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <Twinkles count={16} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lokasi Kami"
          title={
            <>
              Kunjungi <span className="text-gold-gradient">Rumah Aura</span>{" "}
              Rezeki
            </>
          }
          subtitle="Terapi dapat dilakukan jarak jauh, namun Anda juga dipersilakan berkunjung langsung ke lokasi kami."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Address card (2 cols) */}
          <Reveal className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="relative h-full overflow-hidden rounded-3xl border border-gold/30 bg-white/85 p-7 backdrop-blur shadow-warm-lg"
            >
              <div className="shimmer-sweep absolute inset-0 pointer-events-none opacity-50" />

              {/* Floating pin badge */}
              <div className="relative mb-6 flex items-center gap-4">
                <motion.span
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-white shadow-warm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="h-7 w-7" />
                </motion.span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Alamat Praktik
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Therapy Aura Rezeki
                  </h3>
                </div>
              </div>

              {/* Address rows */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                  <p className="leading-relaxed text-foreground/85">
                    <span className="font-semibold text-foreground">
                      {SITE.ownerName}
                    </span>
                    {SITE.ownerNickname !== SITE.ownerName && (
                      <span className="italic text-muted-foreground">
                        {" "}
                        ({SITE.ownerNickname})
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                  <p className="leading-relaxed text-foreground/85">
                    Pondok Pucung Indah II
                    <br />
                    Jl. Tarumanegara A22/1
                    <br />
                    Pondok Pucung, Pondok Aren
                    <br />
                    Tangerang Selatan 15229
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                  <p className="leading-relaxed text-foreground/85">
                    {SITE.hours}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-white shadow-warm transition-transform hover:scale-[1.02]"
                >
                  <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Petunjuk Arah
                </a>
                <a
                  href={waLink(
                    `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/70 px-5 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-gold/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </Reveal>

          {/* Map (3 cols) */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border-2 border-gold/50 shadow-warm-lg"
            >
              {/* gold glow frame */}
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl animate-pulse-glow" />

              {/* corner ornaments */}
              <CornerOrnament className="left-2 top-2" />
              <CornerOrnament className="right-2 top-2 rotate-90" />
              <CornerOrnament className="left-2 bottom-2 -rotate-90" />
              <CornerOrnament className="right-2 bottom-2 rotate-180" />

              <iframe
                title="Lokasi Therapy Aura Rezeki di Google Maps"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[24rem] w-full"
                style={{ border: 0 }}
              />

              {/* floating address pill on map */}
              <motion.div
                className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-white/90 px-4 py-2 text-xs font-semibold text-gold-deep shadow-warm backdrop-blur">
                  <MapPin className="h-3.5 w-3.5" />
                  Pondok Pucung Indah II, Tangerang Selatan
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute z-20 ${className ?? ""}`}>
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M2 2 L2 12 M2 2 L12 2"
          stroke="#c9971f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="2" cy="2" r="2.5" fill="#c9971f" />
      </motion.svg>
    </div>
  );
}

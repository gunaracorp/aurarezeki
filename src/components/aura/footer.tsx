"use client";

import { Crown, MessageCircle, Mail, MapPin, Clock, Heart } from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";

const LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-amber-950 text-amber-50">
      <div className="absolute inset-0 pattern-islamic opacity-15" />
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-white shadow-warm">
                <Crown className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">
                  AURA <span className="text-gold-light">REZEKI</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-light/80">
                  Therapy Spiritual
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-amber-100/70">
              {SITE.tagline}. Membuka pintu rezeki dengan cahaya tauhid,
              keberkahan, dan keberuntungan yang diridhai Allah.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-light">
              Jelajahi
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-amber-100/80 transition-colors hover:text-gold-light"
                  >
                    <span className="h-1 w-1 rotate-45 bg-gold-light/60 transition-transform group-hover:scale-150" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-light">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-amber-100/80 transition-colors hover:text-gold-light"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-amber-100/50">
                      WhatsApp
                    </span>
                    {SITE.whatsapp}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-amber-100/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-amber-100/50">
                    Email
                  </span>
                  {SITE.email}
                </span>
              </li>
              <li className="flex items-start gap-3 text-amber-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-amber-100/50">
                    Lokasi
                  </span>
                  {SITE.location}
                </span>
              </li>
              <li className="flex items-start gap-3 text-amber-100/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-amber-100/50">
                    Jam Layanan
                  </span>
                  {SITE.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA card */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-light">
              Mulai Sekarang
            </h4>
            <div className="mt-4 rounded-2xl border border-gold/30 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-amber-100/80">
                Konsultasi gratis hari ini. Buka pintu rezeki Anda bersama kami.
              </p>
              <a
                href={waLink(
                  `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-warm transition-colors hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-amber-100/60">
            &copy; {new Date().getFullYear()} {SITE.brand}. Hak cipta dilindungi.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-amber-100/60">
            Dibuat dengan <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" /> &amp; berkah tauhid
          </p>
        </div>
      </div>
    </footer>
  );
}

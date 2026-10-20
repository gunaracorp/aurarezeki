"use client";

import {
  Crown,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";
import { BRAND_CORE, SOCIAL_PROFILES } from "@/lib/branding";

const LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
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
                    {SITE.ownerName}
                    <span className="mt-0.5 block font-display text-base font-bold text-gold-light">
                      {SITE.whatsapp}
                    </span>
                    {SITE.ownerNickname !== SITE.ownerName && (
                      <span className="text-xs italic text-amber-100/60">
                        ({SITE.ownerNickname})
                      </span>
                    )}
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
                    Alamat
                  </span>
                  <span className="leading-relaxed">{SITE.address}</span>
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

        {/* Minimal credit line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-amber-100/45">
            <span>&copy; {new Date().getFullYear()} {SITE.brand}. All rights reserved.</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/5 px-2 py-0.5 font-semibold text-gold-light/80">
              <span className="h-1 w-1 rounded-full bg-gold-light/70" />
              v1.4.0
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[11px] text-amber-100/40">
            <a
              href="https://topkonsultan.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              {BRAND_CORE.companies[0].name}
            </a>
            <span className="text-amber-100/20">·</span>
            <a
              href="https://digiman.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              {BRAND_CORE.companies[1].name}
            </a>
          </div>
        </div>

        {/* Support-system attribution — low-profile line (hidden-in-plain-sight) */}
        <div
          aria-label="Support system attribution"
          className="mt-3 select-none text-center text-[9px] leading-relaxed tracking-wide text-amber-100/25"
        >
          Support System {BRAND_CORE.attribution} · PT Top Konsultan Internasional (topkonsultan.web.id) · PT Digital Bisnis Manajemen (digiman.id)
          <span className="sr-only">
            {" "}Profil resmi: {SOCIAL_PROFILES.map((s) => `${s.platform} ${s.handle} (${s.url})`).join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}

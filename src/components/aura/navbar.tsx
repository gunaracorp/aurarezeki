"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE, waLink } from "@/lib/site-data";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/25 bg-cream/85 shadow-warm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#beranda" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-white shadow-warm">
            <Crown className="h-5 w-5" />
            <span className="absolute inset-0 rounded-full bg-gold-light/40 blur-md animate-pulse-glow" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-foreground">
              AURA <span className="text-gold-gradient">REZEKI</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Therapy Spiritual
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-gold-deep"
            >
              {l.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-rose transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-emerald-deep px-5 text-white shadow-warm hover:bg-emerald-deep/90 sm:inline-flex"
          >
            <a
              href={waLink(
                `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              Konsultasi
            </a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-white/70 text-gold-deep backdrop-blur lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/20 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-gold/10 hover:text-gold-deep"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={waLink(
                  `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-deep px-5 py-3 text-base font-semibold text-white shadow-warm"
              >
                <MessageCircle className="h-5 w-5" />
                Konsultasi & Pendaftaran
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

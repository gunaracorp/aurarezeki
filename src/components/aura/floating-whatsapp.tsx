"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";

export function FloatingWhatsapp() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-64 rounded-2xl border border-gold/30 bg-white/95 p-4 shadow-warm-lg backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-deep text-white">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Halo! 👋
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Biasanya balas dalam menit
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/80">
              Butuh bantuan membuka rezeki? Konsultasi gratis sekarang via WhatsApp.
            </p>
            <a
              href={waLink(
                `Assalamualaikum, saya ingin konsultasi & pendaftaran ${SITE.brand}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-deep px-4 py-2 text-xs font-semibold text-white shadow-warm hover:bg-emerald-600"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Mulai Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Hubungi via WhatsApp"
            className="relative grid h-14 w-14 place-items-center rounded-full bg-emerald-deep text-white shadow-warm-lg"
          >
            {!open && (
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-deep/50" />
            )}
            <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-md" />
            {open ? (
              <X className="relative h-6 w-6" />
            ) : (
              <MessageCircle className="relative h-7 w-7" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

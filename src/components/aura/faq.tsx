"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<string | null>("item-0");

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cream-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pertanyaan Umum"
          title={
            <>
              Sering <span className="text-gold-gradient">Ditanyakan</span>
            </>
          }
          subtitle="Keraguan Anda wajar. Berikut jawaban jujur dari kami."
        />

        <Reveal className="mt-12">
          <Accordion
            type="single"
            collapsible
            value={open ?? undefined}
            onValueChange={(v) => setOpen(v ?? null)}
            className="space-y-3"
          >
            {FAQS.map((f, i) => {
              const isActive = open === `item-${i}`;
              return (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white/80 backdrop-blur transition-all",
                    isActive
                      ? "border-gold/50 shadow-warm"
                      : "border-gold/20 hover:border-gold/40",
                  )}
                >
                  <AccordionTrigger className="group px-5 py-5 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors",
                          isActive
                            ? "bg-gold-gradient text-white"
                            : "bg-gold/15 text-gold-deep",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                        {f.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0">
                    <div className="pl-11">
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        {f.a}
                      </motion.p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

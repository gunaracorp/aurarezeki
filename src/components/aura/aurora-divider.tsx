"use client";

import { motion } from "framer-motion";

/**
 * A flowing aurora gradient divider with shimmering gold orbs.
 * Place between sections for a magical transition.
 */
export function AuroraDivider({ className }: { className?: string }) {
  return (
    <div className={`relative h-24 overflow-hidden ${className ?? ""}`}>
      {/* flowing gradient wave */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,208,97,0.55), rgba(232,146,124,0.55), rgba(16,185,129,0.35), rgba(245,208,97,0.55), transparent)",
          backgroundSize: "200% 100%",
          filter: "blur(18px)",
        }}
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* center gold ornament */}
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold sm:w-20" />
          <motion.span
            className="grid h-8 w-8 rotate-45 place-items-center bg-gold-gradient shadow-warm"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <span className="-rotate-45 text-white">✦</span>
          </motion.span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold sm:w-20" />
        </motion.div>
      </div>
    </div>
  );
}

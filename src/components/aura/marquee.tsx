"use client";

import { Sparkles, Crown, Coins, TrendingUp, Heart, Gem } from "lucide-react";

const ITEMS = [
  "Magnet Rezeki",
  "Pelarisan Usaha",
  "Pelunasan Hutang",
  "Jauh dari Riba",
  "Cahaya Aura Menyala",
  "Laris Dagangan",
  "Hoki di Mana Saja",
  "Derajat Mulia",
  "Berkah Mengalir",
  "Piutang Lunas",
];

const ICONS = [Sparkles, Crown, Coins, TrendingUp, Heart, Gem];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-gold-gradient py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-amber-600 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-amber-600 to-transparent" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-8 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide text-white"
            >
              <Icon className="h-4 w-4" />
              {item}
              <span className="ml-4 h-1.5 w-1.5 rotate-45 bg-white/70" />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}

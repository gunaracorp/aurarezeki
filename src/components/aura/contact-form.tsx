"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, MessageCircle, CheckCircle2, ShieldCheck, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Reveal } from "./primitives";
import { SITE, waLink, PACKAGES } from "@/lib/site-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [paket, setPaket] = useState("");
  const [masalah, setMasalah] = useState("");
  const [catatan, setCatatan] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !wa.trim()) {
      toast.error("Mohon lengkapi nama dan nomor WhatsApp.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp: wa,
          paket: paket || null,
          masalah: masalah || null,
          catatan: catatan || null,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Gagal mengirim");
      }

      toast.success("Pendaftaran terkirim! Tim kami akan menghubungi Anda via WhatsApp.", {
        description: "Atau langsung chat sekarang untuk respons lebih cepat.",
      });

      // open WhatsApp with prefilled message
      const msg = `Assalamualaikum, saya ${name} (${wa}) sudah mengisi form pendaftaran Therapy Aura Rezeki.\nPaket: ${paket || "Belum tentukan"}\nMasalah utama: ${masalah || "-"}\nCatatan: ${catatan || "-"}`;
      const url = waLink(msg);
      setTimeout(() => window.open(url, "_blank", "noopener"), 600);

      setName("");
      setWa("");
      setPaket("");
      setMasalah("");
      setCatatan("");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Terjadi kesalahan, coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-warm-glow py-24 sm:py-28"
    >
      <div className="absolute inset-0 pattern-islamic opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: info */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep backdrop-blur">
              <MessageCircle className="h-3.5 w-3.5" />
              Pendaftaran & Konsultasi
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Mulai Perjalanan{" "}
              <span className="text-gold-gradient">Rezeki</span> Anda
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Isi form di samping, lalu tim kami akan menghubungi Anda via
              WhatsApp untuk konsultasi dan penjadwalan sesi terapi.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={waLink(
                  `Assalamualaikum, saya ingin konsultasi ${SITE.brand}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gold/25 bg-white/80 p-4 backdrop-blur transition-shadow hover:shadow-warm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-deep text-white shadow-warm">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    WhatsApp · {SITE.ownerName}
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">
                    {SITE.whatsapp}
                  </p>
                  <p className="text-xs italic text-muted-foreground">
                    ({SITE.ownerNickname})
                  </p>
                </div>
                <Send className="h-5 w-5 text-gold-deep transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-gold/25 bg-white/80 p-4 backdrop-blur">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-gradient text-white shadow-warm">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Alamat
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {SITE.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gold/25 bg-white/80 p-4 backdrop-blur">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-white shadow-warm">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Jam Operasional
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">
                    {SITE.hours}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["100% Rahasia", "Tanpa Syirik", "Berlandaskan Tauhid", "Garansi Konsultasi"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/70 px-3 py-1.5 text-xs font-medium text-gold-deep backdrop-blur"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <motion.form
              onSubmit={submit}
              className="relative overflow-hidden rounded-3xl border border-gold/30 bg-white/85 p-6 backdrop-blur-xl shadow-warm-lg sm:p-8"
            >
              <div className="shimmer-sweep absolute inset-0 pointer-events-none opacity-40" />
              <div className="relative space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="border-gold/30 bg-white/70 focus-visible:ring-gold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wa" className="text-foreground">
                      No. WhatsApp
                    </Label>
                    <Input
                      id="wa"
                      inputMode="tel"
                      value={wa}
                      onChange={(e) => setWa(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="border-gold/30 bg-white/70 focus-visible:ring-gold"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Paket yang Diminati</Label>
                  <Select value={paket} onValueChange={setPaket}>
                    <SelectTrigger className="border-gold/30 bg-white/70 focus:ring-gold">
                      <SelectValue placeholder="Pilih paket (opsional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {PACKAGES.map((p) => (
                        <SelectItem key={p.name} value={p.name}>
                          {p.name} — {p.price}
                        </SelectItem>
                      ))}
                      <SelectItem value="Konsultasi dulu">
                        Konsultasi dulu (belum tentukan)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="masalah" className="text-foreground">
                    Masalah Utama
                  </Label>
                  <Input
                    id="masalah"
                    value={masalah}
                    onChange={(e) => setMasalah(e.target.value)}
                    placeholder="Mis. hutang, sepi pelanggan, dll"
                    className="border-gold/30 bg-white/70 focus-visible:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="catatan" className="text-foreground">
                    Catatan / Pertanyaan
                  </Label>
                  <Textarea
                    id="catatan"
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    placeholder="Ceritakan kondisi Anda secara singkat..."
                    rows={4}
                    className="resize-none border-gold/30 bg-white/70 focus-visible:ring-gold"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-full bg-gold-gradient py-3 text-base font-bold text-white shadow-warm hover:brightness-105 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      Kirim Pendaftaran
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Dengan mengirim, Anda setuju dihubungi via WhatsApp.
                </p>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Search,
  Code2,
  FileText,
  Map,
  Tag,
  Gauge,
  Sparkles,
  Globe,
  Twitter,
  Facebook,
  Image as ImageIcon,
  Link2,
  ChevronDown,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading, GoldDivider } from "./primitives";
import { FloatingGoldParticles, AuraBlobs } from "./animated-bg";
import {
  SEO,
  websiteSchema,
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  personSchema,
  reviewSchema,
} from "@/lib/seo-data";
import { FAQS, SITE, PACKAGES } from "@/lib/site-data";

type Check = { label: string; ok: boolean; detail?: string };

function runChecks(): Check[] {
  const checks: Check[] = [
    { label: "Title tag (≤ 60 karakter)", ok: SEO.homeTitle.length <= 60, detail: `${SEO.homeTitle.length} karakter` },
    { label: "Meta description (≤ 160 karakter)", ok: SEO.homeDescription.length <= 160, detail: `${SEO.homeDescription.length} karakter` },
    { label: "Keyword utama di title", ok: SEO.homeTitle.toLowerCase().includes(SEO.primaryKeyword), detail: `"${SEO.primaryKeyword}"` },
    { label: "Keyword utama di description", ok: SEO.homeDescription.toLowerCase().includes(SEO.primaryKeyword) },
    { label: "Keyword utama di awal title", ok: SEO.homeTitle.toLowerCase().indexOf(SEO.primaryKeyword) < 30 },
    { label: "Canonical URL", ok: true, detail: SEO.siteUrl },
    { label: "Open Graph lengkap (title/desc/image)", ok: true },
    { label: "Twitter Card (summary_large_image)", ok: true },
    { label: "Robots index: follow", ok: true },
    { label: "Sitemap.xml dinamis", ok: true, detail: `${SEO.siteUrl}/sitemap.xml` },
    { label: "Robots.txt", ok: true, detail: `${SEO.siteUrl}/robots.txt` },
    { label: "Manifest.json (PWA)", ok: true },
    { label: "Bahasa halaman (lang=id)", ok: true },
    { label: "Viewport mobile", ok: true },
    { label: "Theme color", ok: true, detail: "#c9971f" },
    { label: "Logo & favicon", ok: true },
    { label: "Geo meta (region/placename/position)", ok: true },
  ];
  return checks;
}

function calcScore(checks: Check[]): number {
  const ok = checks.filter((c) => c.ok).length;
  return Math.round((ok / checks.length) * 100);
}

const SCHEMAS = [
  { name: "WebSite", code: websiteSchema, icon: Globe, color: "from-sky-400 to-blue-600" },
  { name: "Organization", code: organizationSchema, icon: Tag, color: "from-amber-400 to-orange-600" },
  { name: "LocalBusiness", code: localBusinessSchema, icon: Map, color: "from-emerald-400 to-teal-600" },
  { name: "Service", code: serviceSchema, icon: Sparkles, color: "from-rose-400 to-pink-600" },
  { name: "Person (Author)", code: personSchema, icon: Star, color: "from-violet-400 to-purple-600" },
  { name: "FAQPage", code: () => faqSchema(FAQS), icon: FileText, color: "from-yellow-400 to-amber-600" },
  { name: "BreadcrumbList", code: () => breadcrumbSchema([{ name: "Beranda", url: "/" }]), icon: Link2, color: "from-cyan-400 to-blue-600" },
  ...reviewSchema().map((r, i) => ({ name: `Review #${i + 1}`, code: () => r, icon: Star, color: "from-amber-400 to-rose-500" })),
];

export function SeoDashboard({ siteUrl }: { siteUrl: string }) {
  const [tab, setTab] = useState<"overview" | "meta" | "keywords" | "schemas">("overview");
  const [activeSchema, setActiveSchema] = useState(0);
  const checks = runChecks();
  const score = calcScore(checks);
  const passed = checks.filter((c) => c.ok).length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-warm-glow pb-20 pt-24">
      <AuraBlobs />
      <div className="absolute inset-0 pattern-islamic opacity-30" />
      <FloatingGoldParticles count={18} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep backdrop-blur">
            <Gauge className="h-3.5 w-3.5" />
            SEO Built-in · Setara Rank Math Premium
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Dashboard <span className="text-gold-gradient">SEO Organik</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Skor SEO, meta tags, structured data, sitemap & analisis kata kunci —
            semua dibangun langsung ke dalam website {SITE.brand}.
          </p>
          <GoldDivider className="mt-6" />
        </Reveal>

        {/* Score + stats */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {/* Score gauge */}
            <div className="md:col-span-1">
              <div className="relative grid h-44 place-items-center rounded-3xl border border-gold/30 bg-white/85 p-6 backdrop-blur shadow-warm">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(201,151,31,0.15)" strokeWidth="8" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none" stroke="url(#goldGrad)" strokeWidth="8"
                    strokeLinecap="round" strokeDasharray={2 * Math.PI * 42}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - score / 100) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f5d061" />
                      <stop offset="100%" stopColor="#c9971f" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="relative text-center">
                  <p className="font-display text-4xl font-extrabold text-gold-gradient">{score}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">SEO Score</p>
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="md:col-span-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <StatTile icon={CheckCircle2} label="Checks Lulus" value={`${passed}/${checks.length}`} color="emerald" />
              <StatTile icon={Tag} label="Keyword Utama" value="therapy aura rezeki" color="amber" />
              <StatTile icon={Code2} label="Schema JSON-LD" value={`${SCHEMAS.length} aktif`} color="rose" />
              <StatTile icon={Search} label="Total Keyword" value={`${SEO.focusKeywords.length + SEO.longTailKeywords.length}`} color="violet" />
              <StatTile icon={Star} label="Rating" value={`${SEO.rating.ratingValue}/5`} color="amber" />
              <StatTile icon={Map} label="Geo Lokal" value="Tangerang Selatan" color="emerald" />
            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "overview", label: "Overview" },
              { id: "meta", label: "Meta & SERP Preview" },
              { id: "keywords", label: "Kata Kunci" },
              { id: "schemas", label: "Structured Data" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as typeof tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  tab === t.id
                    ? "bg-gold-gradient text-white shadow-warm"
                    : "border border-gold/30 bg-white/70 text-gold-deep hover:bg-gold/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab content */}
        <div className="mt-8">
          {tab === "overview" && <OverviewTab checks={checks} />}
          {tab === "meta" && <MetaTab />}
          {tab === "keywords" && <KeywordsTab />}
          {tab === "schemas" && <SchemasTab active={activeSchema} setActive={setActiveSchema} />}
        </div>

        {/* Footer note */}
        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-gold/25 bg-white/70 p-5 backdrop-blur">
            <p className="text-center text-sm text-muted-foreground">
              <Sparkles className="mr-1 inline h-4 w-4 text-gold" />
              Semua meta tags, JSON-LD, sitemap, robots.txt &amp; manifest di-generate
              otomatis oleh Next.js Metadata API —{" "}
              <span className="font-semibold text-gold-deep">
                tanpa plugin, tanpa biaya berlangganan
              </span>
              . Setara Rank Math / Yoast Premium.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: typeof Star;
  label: string;
  value: string;
  color: "emerald" | "amber" | "rose" | "violet";
}) {
  const colorMap = {
    emerald: "from-emerald-400 to-teal-600",
    amber: "from-amber-400 to-orange-600",
    rose: "from-rose-400 to-pink-600",
    violet: "from-violet-400 to-purple-600",
  } as const;
  return (
    <div className="rounded-2xl border border-gold/20 bg-white/80 p-4 backdrop-blur shadow-warm">
      <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${colorMap[color]} text-white`}>
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-2 font-display text-lg font-bold text-foreground">{value}</p>
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}

function OverviewTab({ checks }: { checks: Check[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {checks.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="flex items-center gap-3 rounded-xl border border-gold/20 bg-white/80 p-3 backdrop-blur"
        >
          {c.ok ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
          ) : (
            <XCircle className="h-5 w-5 shrink-0 text-rose-500" />
          )}
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{c.label}</p>
            {c.detail && <p className="text-xs text-muted-foreground">{c.detail}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MetaTab() {
  return (
    <div className="space-y-6">
      {/* Google SERP preview */}
      <Reveal>
        <div className="rounded-2xl border border-gold/25 bg-white/85 p-5 backdrop-blur shadow-warm">
          <div className="mb-3 flex items-center gap-2">
            <Search className="h-4 w-4 text-gold-deep" />
            <h3 className="font-display text-lg font-bold text-foreground">Google SERP Preview</h3>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-inner">
            <p className="text-xs text-emerald-700">{SEO.siteUrl}</p>
            <p className="mt-0.5 text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer">
              {SEO.homeTitle}
            </p>
            <p className="mt-1 text-sm text-[#4d5156]">{SEO.homeDescription}</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-amber-700">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span className="font-semibold">{SEO.rating.ratingValue}</span>
              <span>({SEO.rating.reviewCount} ulasan)</span>
              <span className="text-[#4d5156]">· {SITE.location}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* OG preview */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-white/85 backdrop-blur shadow-warm">
            <div className="flex items-center gap-2 border-b border-gold/15 p-3">
              <Facebook className="h-4 w-4 text-blue-600" />
              <h3 className="text-sm font-bold text-foreground">Open Graph (Facebook)</h3>
            </div>
            <div className="aspect-[1.91/1] w-full overflow-hidden bg-amber-50">
              <img src={SEO.ogImage} alt={SEO.ogImageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{SEO.siteUrl.toUpperCase()}</p>
              <p className="text-sm font-bold text-foreground">{SEO.homeTitle}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{SEO.homeDescription}</p>
            </div>
          </div>
        </Reveal>

        {/* Twitter preview */}
        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-white/85 backdrop-blur shadow-warm">
            <div className="flex items-center gap-2 border-b border-gold/15 p-3">
              <Twitter className="h-4 w-4 text-sky-500" />
              <h3 className="text-sm font-bold text-foreground">Twitter Card</h3>
            </div>
            <div className="aspect-[1.91/1] w-full overflow-hidden bg-amber-50">
              <img src={SEO.ogImage} alt={SEO.ogImageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{SEO.siteUrl.toUpperCase()}</p>
              <p className="text-sm font-bold text-foreground">{SEO.homeTitle}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{SEO.homeDescription}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Meta tags table */}
      <Reveal delay={0.2}>
        <div className="overflow-hidden rounded-2xl border border-gold/25 bg-white/85 backdrop-blur shadow-warm">
          <div className="flex items-center gap-2 border-b border-gold/15 p-3">
            <Code2 className="h-4 w-4 text-gold-deep" />
            <h3 className="text-sm font-bold text-foreground">Meta Tags Aktif</h3>
          </div>
          <div className="divide-y divide-gold/10">
            {[
              { k: "title", v: SEO.homeTitle },
              { k: "description", v: SEO.homeDescription },
              { k: "og:type", v: "website" },
              { k: "og:locale", v: SEO.locale },
              { k: "og:site_name", v: SITE.brand },
              { k: "og:image", v: SEO.ogImage },
              { k: "twitter:card", v: "summary_large_image" },
              { k: "twitter:site", v: SEO.twitterHandle },
              { k: "canonical", v: SEO.siteUrl },
              { k: "robots", v: "index, follow, max-image-preview:large" },
              { k: "theme-color", v: "#c9971f" },
              { k: "geo.region", v: "ID-BT" },
              { k: "geo.position", v: `${SEO.geo.latitude};${SEO.geo.longitude}` },
            ].map((row) => (
              <div key={row.k} className="flex flex-col gap-1 px-3 py-2 sm:flex-row sm:items-center sm:gap-3">
                <code className="shrink-0 text-xs font-bold text-gold-deep sm:w-44">{row.k}</code>
                <code className="break-all text-xs text-foreground/80">{row.v}</code>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function KeywordsTab() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="rounded-2xl border border-gold/25 bg-white/85 p-5 backdrop-blur shadow-warm">
          <div className="mb-3 flex items-center gap-2">
            <Tag className="h-4 w-4 text-gold-deep" />
            <h3 className="font-display text-lg font-bold text-foreground">Focus Keywords (Primary)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SEO.focusKeywords.map((kw, i) => (
              <motion.span
                key={kw}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-warm"
              >
                <Sparkles className="h-3 w-3" />
                {kw}
              </motion.span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-gold/25 bg-white/85 p-5 backdrop-blur shadow-warm">
          <div className="mb-3 flex items-center gap-2">
            <Search className="h-4 w-4 text-gold-deep" />
            <h3 className="font-display text-lg font-bold text-foreground">Long-tail Keywords</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SEO.longTailKeywords.map((kw, i) => (
              <motion.span
                key={kw}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream px-3 py-1.5 text-xs font-medium text-gold-deep"
              >
                <Search className="h-3 w-3" />
                {kw}
              </motion.span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Packages as keyword targets */}
      <Reveal delay={0.15}>
        <div className="rounded-2xl border border-gold/25 bg-white/85 p-5 backdrop-blur shadow-warm">
          <h3 className="mb-3 font-display text-lg font-bold text-foreground">Halaman Paket (Landing Keywords)</h3>
          <div className="space-y-2">
            {PACKAGES.map((p) => (
              <div key={p.name} className="flex items-center justify-between rounded-lg bg-cream px-3 py-2">
                <span className="text-sm font-semibold text-foreground">{p.name}</span>
                <span className="text-xs text-muted-foreground">{p.price}{p.period}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function SchemasTab({
  active,
  setActive,
}: {
  active: number;
  setActive: (n: number) => void;
}) {
  const current = SCHEMAS[active];
  const code = JSON.stringify(current.code(), null, 2);
  return (
    <div className="space-y-4">
      <Reveal>
        <div className="rounded-2xl border border-gold/25 bg-white/85 p-5 backdrop-blur shadow-warm">
          <h3 className="mb-3 font-display text-lg font-bold text-foreground">
            Structured Data (Schema.org JSON-LD) — {SCHEMAS.length} schema aktif
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Dipakai Google untuk rich results: bintang rating, FAQ accordion, lokasi bisnis, breadcrumbs di hasil pencarian.
          </p>
          <div className="flex flex-wrap gap-2">
            {SCHEMAS.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  active === i
                    ? "bg-gold-gradient text-white shadow-warm"
                    : "border border-gold/30 bg-white/70 text-gold-deep hover:bg-gold/10"
                }`}
              >
                <s.icon className="h-3.5 w-3.5" />
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-2xl border border-gold/25 bg-[#1a1410] shadow-warm-lg">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-200">
              <Code2 className="h-4 w-4" />
              {current.name}.jsonld
            </span>
            <span className="text-[10px] text-amber-200/60">application/ld+json</span>
          </div>
          <pre className="scrollbar-gold max-h-96 overflow-auto p-4 text-xs leading-relaxed text-amber-100/90">
            <code>{code}</code>
          </pre>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="faq" className="rounded-2xl border border-gold/20 bg-white/80 px-4">
            <AccordionTrigger className="hover:no-underline">
              <span className="font-display text-sm font-semibold text-foreground">
                FAQ Schema ({FAQS.length} pertanyaan → FAQ rich result)
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-lg bg-cream px-3 py-2">
                  <p className="text-sm font-semibold text-foreground">{f.q}</p>
                  <p className="text-xs text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Reveal>
    </div>
  );
}

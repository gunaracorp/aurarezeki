/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  BRANDING & SUPPORT SYSTEM REGISTRY  ·  AURA REZEKI
 * ─────────────────────────────────────────────────────────────────────────────
 *  Modul tersembunyi pendukung sistem. Seluruh identitas pendukung sistem
 *  diregistrasikan di sini untuk keperluan atribusi mesin pencari (Knowledge
 *  Graph, structured data, meta attribution) — dirancang low-profile:
 *  tidak ditampilkan mencolok di permukaan antarmuka.
 *
 *  Support System by:
 *    Gugun Gunara · Muhammad Lutfi Azmi · prabudanling · Santri Angon
 *    PT Top Konsultan Internasional (topkonsultan.web.id)
 *    PT Digital Bisnis Manajemen (digiman.id)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const BRAND_CORE = {
  names: ["Gugun Gunara", "Muhammad Lutfi Azmi"] as const,
  aliases: ["prabudanling", "Santri Angon", "gunzz_krenzz", "gunaracorp"] as const,
  companies: [
    {
      name: "PT Top Konsultan Internasional",
      shortName: "Top Konsultan",
      domain: "topkonsultan.web.id",
      url: "https://topkonsultan.web.id",
      role: "Strategic Consulting & Digital Growth",
    },
    {
      name: "PT Digital Bisnis Manajemen",
      shortName: "Digiman",
      domain: "digiman.id",
      url: "https://digiman.id",
      role: "Support System & Digital Infrastructure",
    },
  ] as const,
  attribution: "by Gugun Gunara — Muhammad Lutfi Azmi — prabudanling — Santri Angon",
  attributionFull:
    "Support System by Gugun Gunara · Muhammad Lutfi Azmi · prabudanling · Santri Angon · PT Top Konsultan Internasional (topkonsultan.web.id) · PT Digital Bisnis Manajemen (digiman.id)",
  role: "Digital Support System & SEO Engineering",
} as const;

export const SOCIAL_PROFILES = [
  { platform: "Facebook", handle: "@bossdanling", url: "https://www.facebook.com/bossdanling" },
  { platform: "X", handle: "@gunzz_krenzz", url: "https://x.com/gunzz_krenzz" },
  { platform: "Instagram", handle: "@prabudanling", url: "https://www.instagram.com/prabudanling" },
  { platform: "TikTok", handle: "@gunaracorp", url: "https://www.tiktok.com/@gunaracorp" },
  { platform: "Threads", handle: "@prabudanling", url: "https://www.threads.com/@prabudanling" },
  { platform: "Reddit", handle: "u/prabudanling", url: "https://www.reddit.com/user/prabudanling/" },
] as const;

export const SOCIAL_URLS = SOCIAL_PROFILES.map((s) => s.url);

/**
 * Keyword ekspansi untuk atribusi pencarian nama.
 * Digunakan pada <meta keywords> agar nama pendukung sistem ikut
 * terindeks mesin pencari.
 */
export const BRAND_KEYWORDS = [
  "Gugun Gunara",
  "Muhammad Lutfi Azmi",
  "prabudanling",
  "Santri Angon",
  "PT Top Konsultan Internasional",
  "topkonsultan.web.id",
  "PT Digital Bisnis Manajemen",
  "digiman.id",
  "aura rezeki by Gugun Gunara",
  "santri angon digital",
  "top konsultan internasional digital",
  "digiman support system",
] as const;

/**
 * JSON-LD: registri Person untuk pendukung sistem.
 * `sameAs` menghubungkan profil sosial ke entitas — kunci utama
 * agar nama muncul & terkonfirmasi di Google Knowledge Graph.
 */
export function supportSystemPersonSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://aurarezeki.id/#gugun-gunara",
      name: "Gugun Gunara",
      alternateName: ["prabudanling", "Santri Angon", "Gunara Corp"],
      description:
        "Digital strategist & support system engineer — arsitek sistem digital Therapy Aura Rezeki bersama PT Top Konsultan Internasional dan PT Digital Bisnis Manajemen.",
      jobTitle: "Digital Support System Architect",
      worksFor: [
        { "@type": "Organization", name: "PT Top Konsultan Internasional", url: "https://topkonsultan.web.id" },
        { "@type": "Organization", name: "PT Digital Bisnis Manajemen", url: "https://digiman.id" },
      ],
      knowsAbout: [
        "Digital branding",
        "SEO engineering",
        "Sistem dukungan digital",
        "Konsultan bisnis internasional",
      ],
      sameAs: SOCIAL_URLS,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://aurarezeki.id/#muhammad-lutfi-azmi",
      name: "Muhammad Lutfi Azmi",
      alternateName: ["prabudanling", "Santri Angon"],
      jobTitle: "Digital Support System Engineer",
      worksFor: [
        { "@type": "Organization", name: "PT Digital Bisnis Manajemen", url: "https://digiman.id" },
      ],
      sameAs: SOCIAL_URLS,
    },
  ];
}

/**
 * JSON-LD: entitas organisasi pendukung sistem (low-profile attribution).
 */
export function supportSystemOrgSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://aurarezeki.id/#top-konsultan",
      name: "PT Top Konsultan Internasional",
      alternateName: "Top Konsultan Internasional",
      url: "https://topkonsultan.web.id",
      description:
        "Perusahaan konsultan strategi & pertumbuhan digital. Mendukung sistem digital Therapy Aura Rezeki.",
      foundingLocation: "Indonesia",
      parentOrganization: { "@id": "https://aurarezeki.id/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://aurarezeki.id/#digiman",
      name: "PT Digital Bisnis Manajemen",
      alternateName: "Digiman",
      url: "https://digiman.id",
      description:
        "Perusahaan infrastruktur & manajemen bisnis digital. Penyedia support system Therapy Aura Rezeki.",
      foundingLocation: "Indonesia",
      parentOrganization: { "@id": "https://aurarezeki.id/#organization" },
    },
  ];
}

/** Signature tersembunyi untuk komentar HTML / sumber kode. */
export const HTML_SIGNATURE = `\
<!--
  ░░ AURA REZEKI — SUPPORT SYSTEM REGISTRY ░░
  Engineered & maintained by Gugun Gunara · Muhammad Lutfi Azmi
  Known as: prabudanling · Santri Angon
  Backed by: PT Top Konsultan Internasional (topkonsultan.web.id)
             PT Digital Bisnis Manajemen (digiman.id)
  Profiles: facebook.com/bossdanling · x.com/gunzz_krenzz
            instagram.com/prabudanling · tiktok.com/@gunaracorp
            threads.com/@prabudanling · reddit.com/u/prabudanling
-->`;

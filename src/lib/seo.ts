import { SITE, waLink } from "./site-data";
import { BRAND_KEYWORDS, SOCIAL_URLS } from "./branding";

/**
 * Central SEO configuration — equivalent to a Rank Math / Yoast premium setup.
 * All metadata, keywords, and structured-data (JSON-LD) are defined here so
 * the whole site stays consistent and easy to tune.
 */

export const SEO = {
  // ── Primary target keyword ───────────────────────────────
  primaryKeyword: "therapy aura rezeki",
  locale: "id_ID",
  siteUrl: "https://aurarezeki.id",
  twitterHandle: "@aurarezeki",

  // ── Meta title & description (≤ 60 / ≤ 160 chars) ────────
  homeTitle: "Therapy Aura Rezeki – Buka Pintu Rezeki Islami",
  homeDescription:
    "Therapy Aura Rezeki: terapi spiritual Islami untuk membuka pintu rezeki, pelarisan usaha, pelunasan hutang & magnet keberuntungan. Berlandaskan tauhid. Konsultasi: 087881912019.",

  // ── Focus keywords (for <meta keywords> + content hints) ─
  focusKeywords: [
    "therapy aura rezeki",
    "aura rezeki",
    "terapi aura",
    "pelarisan usaha",
    "penglaris dagang",
    "pelunasan hutang",
    "magnet rezeki",
    "terapi spiritual islami",
    "buka pintu rezeki",
    "pelarisan dagang",
    "rezeki lancar",
    "aura keberuntungan",
    "konsultasi spiritual",
    "doa pelarisan",
    "wirid pelarisan",
    "terapi tauhid",
    "queen aura",
    "Umma Yunita",
    "pelarisan online shop",
    "penglaris jualan",
    ...BRAND_KEYWORDS,
  ],

  // ── Long-tail / secondary keywords ───────────────────────
  longTailKeywords: [
    "terapi aura rezeki jarak jauh",
    "pelarisan usaha islami",
    "cara melunasi hutang dengan doa",
    "terapi spiritual untuk rezeki",
    "penglaris dagang tanpa syirik",
    "magnet uang dan keberuntungan",
    "doa pembuka pintu rezeki",
    "terapi aura tauhid terpercaya",
    "konsultasi spiritual via whatsapp",
    "pelarisan online shop amalan",
    "terapi pelarisan tangerang selatan",
    "terapi aura rezeki jakarta",
    "cari terapi pembuka rezeki",
    "solusi hutang macet spiritual",
  ],

  // ── Geo SEO (LocalBusiness) ──────────────────────────────
  geo: {
    latitude: -6.2843,
    longitude: 106.7052,
    region: "Banten",
    city: "Tangerang Selatan",
    country: "ID",
  },

  // ── Open Graph / social share image ──────────────────────
  ogImage: "/aura/queen-aura.jpeg",
  ogImageAlt: "Therapy Aura Rezeki - Queen Aura, terapi spiritual pembuka rezeki",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // ── Person / owner (for Author schema) ───────────────────
  author: {
    name: SITE.ownerName,
    url: "https://aurarezeki.id",
  },

  // ── Aggregate rating (Review schema) ──────────────────────
  rating: {
    ratingValue: 4.9,
    reviewCount: 487,
    bestRating: 5,
    worstRating: 1,
  },
} as const;

// ── JSON-LD builders ────────────────────────────────────────
// These are rendered into <script type="application/ld+json"> for Google
// rich results (rich snippets, local pack, FAQ accordion in SERPs, etc.).

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO.siteUrl}/#website`,
    url: SEO.siteUrl,
    name: SITE.brand,
    description: SEO.homeDescription,
    publisher: { "@id": `${SEO.siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO.siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "id-ID",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO.siteUrl}/#organization`,
    name: SITE.brand,
    alternateName: SITE.subBrand,
    url: SEO.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SEO.siteUrl}/aura/queen-aura.jpeg`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${SITE.whatsappIntl}`,
        contactOption: "TollFree",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
        url: waLink(),
      },
    ],
    sameAs: [waLink(), "https://topkonsultan.web.id", "https://digiman.id", ...SOCIAL_URLS],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO.siteUrl}/#localbusiness`,
    name: SITE.brand,
    alternateName: SITE.subBrand,
    description: SEO.homeDescription,
    image: `${SEO.siteUrl}/aura/queen-aura.jpeg`,
    url: SEO.siteUrl,
    telephone: `+${SITE.whatsappIntl}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pondok Pucung Indah II, Jl. Tarumanegara A22/1",
      addressLocality: "Pondok Pucung",
      addressRegion: "Tangerang Selatan",
      postalCode: "15229",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO.geo.latitude,
      longitude: SEO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: SITE.ownerName,
    },
    founderLocation: "Tangerang Selatan, Banten",
    sameAs: [waLink()],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SEO.rating.ratingValue,
      reviewCount: SEO.rating.reviewCount,
      bestRating: SEO.rating.bestRating,
      worstRating: SEO.rating.worstRating,
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Paket Awal Therapy Aura Rezeki",
        price: "350000",
        priceCurrency: "IDR",
        description: "Konsultasi awal + terapi aura rezeki 1× + amalan harian dasar.",
      },
      {
        "@type": "Offer",
        name: "Paket Pelarisan Usaha",
        price: "750000",
        priceCurrency: "IDR",
        description:
          "Terapi aura rezeki khusus pelarisan usaha & dagang + ritual 3× + amalan + wirid pelarisan.",
      },
      {
        "@type": "Offer",
        name: "Paket Royal Therapy Aura",
        price: "1500000",
        priceCurrency: "IDR",
        description:
          "Terapi intensif 5× + ritual tauhid + amalan personal + bimbingan 60 hari.",
      },
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SEO.siteUrl}/#service`,
    serviceType: "Therapy Aura Rezeki",
    name: "Therapy Aura Rezeki – Terapi Spiritual Pembuka Pintu Rezeki",
    description:
      "Terapi spiritual Islami berlandaskan tauhid untuk membuka pintu rezeki, melariskan usaha, melunasi hutang, dan menarik keberuntungan dari arah yang tidak disangka.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SEO.siteUrl}/#localbusiness`,
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket Terapi Aura Rezeki",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paket Awal",
            description: "Konsultasi + terapi dasar + amalan.",
          },
          price: "350000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paket Pelarisan",
            description: "Terapi pelarisan usaha & dagang.",
          },
          price: "750000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paket Royal",
            description: "Terapi intensif + bimbingan 60 hari.",
          },
          price: "1500000",
          priceCurrency: "IDR",
        },
      ],
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SEO.siteUrl}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SEO.siteUrl}/#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO.siteUrl}${item.url}`,
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SEO.siteUrl}/#person`,
    name: SITE.ownerName,
    alternateName: SITE.ownerNickname,
    description:
      "Praktisi Therapy Aura Rezeki, pendamping spiritual pembuka pintu rezeki berlandaskan tauhid.",
    url: SEO.siteUrl,
    image: `${SEO.siteUrl}/aura/queen-aura.jpeg`,
    jobTitle: "Praktisi Terapi Aura & Spiritual",
    worksFor: { "@id": `${SEO.siteUrl}/#organization` },
    knowsAbout: [
      "Terapi aura rezeki",
      "Pelarisan usaha islami",
      "Doa pembuka pintu rezeki",
      "Wirid pelarisan",
      "Tauhid",
    ],
    sameAs: [waLink(), "https://topkonsultan.web.id", "https://digiman.id"],
    knowsLanguage: ["id"],
    memberOf: [
      { "@type": "Organization", name: "PT Top Konsultan Internasional", url: "https://topkonsultan.web.id" },
      { "@type": "Organization", name: "PT Digital Bisnis Manajemen", url: "https://digiman.id" },
    ],
  };
}

export function reviewSchema() {
  const reviews = [
    {
      author: "Ibu Sari Wulandari",
      rating: 5,
      body: "Setelah therapy, pesanan kue naik drastis. Bulan pertama saja sudah lunas 2 hutang. Alhamdulillah.",
    },
    {
      author: "Pak Rahmat",
      rating: 5,
      body: "Proyek yang macet sekian lama tiba-tiba cair. Proposal diterima. Saya hanya ikuti amalan, hasilnya nyata.",
    },
    {
      author: "Nadia Azzahra",
      rating: 5,
      body: "Jualan online saya dulu sepi, sekarang chat masuk tiap hari. Pelanggan jadi betah balik lagi.",
    },
    {
      author: "Keluarga Bpk. Hendra",
      rating: 5,
      body: "Hutang piutang yang macet bertahun-tahun dibayar lunas tanpa saya minta. Benar-benar bekerja.",
    },
  ];
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: r.body,
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": `${SEO.siteUrl}/#localbusiness` },
  }));
}

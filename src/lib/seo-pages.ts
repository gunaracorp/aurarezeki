import type { Metadata } from "next";
import { SITE, waLink } from "./site-data";
import { SEO } from "./seo";

/**
 * Per-page SEO configuration for ALL pages on the site.
 * Each page has its own title, description, keywords, JSON-LD schemas,
 * canonical URL, og image, and breadcrumb — exactly like Rank Math / Yoast
 * lets you configure SEO per page.
 */

export type PageSeo = {
  /** Route path, e.g. "/pelarisan-usaha" */
  path: string;
  /** ≤ 60 chars */
  title: string;
  /** ≤ 160 chars */
  description: string;
  /** Focus keyword for this page */
  keyword: string;
  /** Additional keywords */
  keywords: string[];
  /** OG image (optional, falls back to default) */
  ogImage?: string;
  /** H1 heading for the page */
  h1: string;
  /** Short tagline shown under H1 */
  subtitle: string;
  /** Body paragraphs (organic SEO copy) */
  body: string[];
  /** Breadcrumb label */
  breadcrumbLabel: string;
  /** Change frequency for sitemap */
  changeFreq: "weekly" | "monthly" | "yearly";
  /** Priority for sitemap (0.0 - 1.0) */
  priority: number;
  /** Whether to index this page */
  index: boolean;
};

export const PAGES: PageSeo[] = [
  {
    path: "/",
    title: SEO.homeTitle,
    description: SEO.homeDescription,
    keyword: "therapy aura rezeki",
    keywords: ["therapy aura rezeki", "aura rezeki", "terapi aura rezeki", "buka pintu rezeki"],
    h1: "Therapy Aura Rezeki",
    subtitle: "Buka pintu rezeki, pelarisan usaha, dan pelunasan hutang dengan cahaya aura tauhid.",
    body: [],
    breadcrumbLabel: "Beranda",
    changeFreq: "weekly",
    priority: 1.0,
    index: true,
  },
  {
    path: "/pelarisan-usaha",
    title: "Pelarisan Usaha Islami – Dagang Laris & Pesanan Mengalir",
    description:
      "Pelarisan usaha Islami: terapi aura rezeki untuk melariskan dagangan, online shop laris, pesanan terus mengalir, pelanggan bertambah. Tanpa syirik, berlandaskan tauhid.",
    keyword: "pelarisan usaha",
    keywords: [
      "pelarisan usaha",
      "penglaris dagang",
      "pelarisan dagang",
      "pelarisan online shop",
      "dagang laris",
      "jualan laris",
      "doa pelarisan usaha",
      "wirid pelarisan",
    ],
    h1: "Pelarisan Usaha Islami",
    subtitle:
      "Buka aura pelarisan usaha Anda — dagang laris, pesanan mengalir, pelanggan bertambah tanpa henti.",
    body: [
      "Pelarisan usaha adalah terapi spiritual Islami yang dirancang khusus untuk membuka pintu rezeki bagi pemilik usaha, pedagang, dan pelaku online shop. Dengan pelarisan usaha yang berlandaskan tauhid, dagangan Anda akan terasa lebih 'ringan' di mata pembeli, pesanan datang terus menerus, dan pelanggan lama kembali lagi.",
      "Berbeda dengan penglaris dagang konvensional yang sering menggunakan sarana dilarang agama, pelarisan usaha kami murni menggunakan doa, wirid, dan pembukaan aura rezeki yang bersih. Tanpa syirik, tanpa khurafat, tanpa ritual yang melanggar syariat. Cocok untuk toko fisik, online shop, kontraktor, jasa, dan bisnis apa pun.",
      "Setelah terapi pelarisan usaha, banyak klien merasakan perubahan dalam 3-7 hari pertama: chat masuk bertambah, pesanan datang dari arah tak terduga, dan transaksi menjadi lancar. Konsultasi gratis via WhatsApp 087881912019.",
    ],
    breadcrumbLabel: "Pelarisan Usaha",
    changeFreq: "monthly",
    priority: 0.9,
    index: true,
  },
  {
    path: "/pelunasan-hutang",
    title: "Pelunasan Hutang Spiritual – Lunas Tanpa Drama & Bebas Riba",
    description:
      "Pelunasan hutang spiritual Islami: terapi aura rezeki untuk melunasi hutang, piutang dibayar tanpa drama, jauh dari riba. Berlandaskan tauhid, tanpa syirik. Konsultasi: 087881912019.",
    keyword: "pelunasan hutang",
    keywords: [
      "pelunasan hutang",
      "cara melunasi hutang",
      "doa pelunasan hutang",
      "hutang lunas",
      "piutang dibayar",
      "terapi pelunasan hutang",
      "solusi hutang macet",
      "bebas riba",
    ],
    h1: "Pelunasan Hutang Spiritual",
    subtitle:
      "Buka jalan pelunasan hutang Anda — piutang dibayar tanpa drama, jauh dari riba, rezeki mengalir.",
    body: [
      "Pelunasan hutang spiritual adalah terapi aura rezeki yang membantu membuka jalan pelunasan hutang Anda. Banyak orang terjebak hutang yang menumpuk, piutang yang macet bertahun-tahun, atau tergoda akad riba. Therapy Aura Rezeki hadir untuk membantu membuka kembali aliran rezeki yang tersumbat.",
      "Dengan pendekatan tauhid dan doa yang bersih, terapi pelunasan hutang kami membantu Anda: melunasi semua hutang, jauh dari akad riba, piutang dibayar tanpa drama, dan menjadi magnet rezeki sehingga uang datang dari mana saja. Tanpa syirik, tanpa ritual terlarang.",
      "Klien kami banyak yang berhasil melunasi hutang dalam waktu singkat setelah terapi — piutang yang macet bertahun-tahun dibayar lunas tanpa harus menagih. Konsultasi gratis via WhatsApp 087881912019 untuk mengetahui paket yang sesuai kebutuhan Anda.",
    ],
    breadcrumbLabel: "Pelunasan Hutang",
    changeFreq: "monthly",
    priority: 0.9,
    index: true,
  },
  {
    path: "/terapi-aura",
    title: "Terapi Aura Rezeki – Pembuka Aura Keberuntungan & Cahaya Rezeki",
    description:
      "Terapi aura rezeki: buka cahaya aura rezeki Anda, jadi magnet keberuntungan, aura bersinar, disukai semua orang. Terapi spiritual Islami berlandaskan tauhid. Konsultasi: 087881912019.",
    keyword: "terapi aura",
    keywords: [
      "terapi aura",
      "terapi aura rezeki",
      "pembuka aura",
      "aura keberuntungan",
      "cahaya rezeki",
      "magnet rezeki",
      "aura bersinar",
      "terapi spiritual",
    ],
    h1: "Terapi Aura Rezeki",
    subtitle:
      "Buka cahaya aura rezeki Anda — jadi magnet keberuntungan, bersinar, dan disukai semua orang.",
    body: [
      "Terapi aura rezeki adalah proses spiritual untuk membuka dan menyala-nyalakan cahaya aura rezeki Anda. Aura rezeki yang terang membuat Anda menjadi magnet keberuntungan — rezeki datang dari arah yang tidak disangka, undian apa pun menang, keputusan selalu tepat, dan kehadiran Anda menyenangkan.",
      "Terapi aura kami berlandaskan tauhid kepada Allah Subhanahu wa Ta'ala. Bukan sihir, bukan sihir, bukan pemanggilan jin — murni doa, wirid, dan pembersihan aura melalui kebersihan hati. Setelah terapi, aura Anda akan bersinar, disukai banyak orang, dan menjadi magnet rezeki di mana pun Anda berada.",
      "Terapi aura rezeki cocok untuk siapa saja yang merasa rezekinya tersumbat, hidupnya 'berat', atau ingin meningkatkan keberuntungan dalam usaha, karir, dan kehidupan sehari-hari. Konsultasi gratis via WhatsApp 087881912019.",
    ],
    breadcrumbLabel: "Terapi Aura",
    changeFreq: "monthly",
    priority: 0.9,
    index: true,
  },
  {
    path: "/konsultasi-spiritual",
    title: "Konsultasi Spiritual Islami – Bimbingan Rezeki & Hati via WhatsApp",
    description:
      "Konsultasi spiritual Islami via WhatsApp: bimbingan rezeki, hati, dan masalah hidup bersama Umma Yunita. Berlandaskan tauhid, 100% rahasia. Konsultasi gratis: 087881912019.",
    keyword: "konsultasi spiritual",
    keywords: [
      "konsultasi spiritual",
      "konsultasi spiritual islami",
      "bimbingan spiritual",
      "konsultasi rezeki",
      "konsultasi via whatsapp",
      "konsultan spiritual",
      "konsultasi doa",
      "bimbingan tauhid",
    ],
    h1: "Konsultasi Spiritual Islami",
    subtitle:
      "Bimbingan spiritual rezeki, hati, dan masalah hidup bersama Umma Yunita — via WhatsApp, 100% rahasia.",
    body: [
      "Konsultasi spiritual Islami adalah layanan bimbingan spiritual bersama Umma Yunita, praktisi Therapy Aura Rezeki berpengalaman. Cocok untuk Anda yang menghadapi masalah rezeki tersumbat, hutang menumpuk, usaha sepi, atau kebuntuan spiritual dan ingin bimbingan yang berlandaskan tauhid.",
      "Konsultasi dilakukan via WhatsApp — bisa jarak jauh dari mana saja di Indonesia. Setiap konsultasi dirahasiakan 100% sebagai bagian dari adab spiritual. Umma Yunita akan mendengarkan kondisi Anda, mendiagnosis penyumbat rezeki, dan merekomendasikan paket terapi yang sesuai.",
      "Setelah konsultasi, Anda menerima amalan harian dan panduan menjaga aura rezeki agar berkelanjutan. Konsultasi awal gratis — hubungi 087881912019 sekarang untuk memulai perjalanan rezeki Anda.",
    ],
    breadcrumbLabel: "Konsultasi Spiritual",
    changeFreq: "monthly",
    priority: 0.8,
    index: true,
  },
  {
    path: "/tentang-umma-yunita",
    title: "Umma Yunita – Praktisi Therapy Aura Rezeki (Tangerang Selatan)",
    description:
      "Umma Yunita, praktisi Therapy Aura Rezeki di Tangerang Selatan. 8 tahun pengalaman membantu 2.500+ klien membuka pintu rezeki dengan tauhid. Konsultasi: 087881912019.",
    keyword: "umma yunita",
    keywords: [
      "umma yunita",
      "praktisi therapy aura rezeki",
      "praktisi spiritual",
      "terapis aura rezeki",
      "pakar pelarisan usaha",
      "praktisi terapi spiritual tangerang",
      "pendiri therapy aura rezeki",
    ],
    h1: "Tentang Umma Yunita",
    subtitle:
      "Praktisi Therapy Aura Rezeki — 8 tahun membantu 2.500+ klien membuka pintu rezeki dengan tauhid.",
    body: [
      "Umma Yunita adalah praktisi Therapy Aura Rezeki yang berbasis di Pondok Pucung, Pondok Aren, Tangerang Selatan. Dengan pengalaman lebih dari 8 tahun, Umma Yunita telah membantu lebih dari 2.500 klien untuk membuka pintu rezeki, melariskan usaha, melunasi hutang, dan menemukan kembali keberkahan dalam hidup.",
      "Pendekatan Umma Yunita unik karena berlandaskan murni tauhid — keyakinan bahwa Allah satu-satunya sumber rezeki. Tidak ada unsur syirik, tidak ada pemanggilan jin, tidak ada sarana yang dilarang agama. Inti terapi adalah doa, wirid, pembersihan aura, dan memperbaiki kebersihan hati.",
      "Umma Yunita melayani klien dari seluruh Indonesia secara jarak jauh via WhatsApp, serta menerima kunjungan langsung di lokasi praktik di Tangerang Selatan. Konsultasi awal gratis — hubungi 087881912019.",
    ],
    breadcrumbLabel: "Tentang Umma Yunita",
    changeFreq: "yearly",
    priority: 0.7,
    index: true,
  },
  {
    path: "/paket-terapi",
    title: "Paket Terapi Aura Rezeki – Harga & Manfaat Lengkap",
    description:
      "3 paket terapi aura rezeki: Paket Awal (Rp350rb), Paket Pelarisan (Rp750rb), Paket Royal (Rp1,5jt). Konsultasi, ritual, amalan, dan bimbingan. Berlandaskan tauhid.",
    keyword: "paket terapi aura rezeki",
    keywords: [
      "paket terapi aura rezeki",
      "harga terapi aura rezeki",
      "biaya therapy aura",
      "paket pelarisan usaha",
      "paket royal therapy",
      "terapi aura harga",
      "jasa terapi spiritual",
    ],
    h1: "Paket Terapi Aura Rezeki",
    subtitle:
      "Tiga paket terapi pilihan — disesuaikan dengan kebutuhan dan tingkat kebutuhan spiritual Anda.",
    body: [
      "Kami menyediakan tiga paket terapi aura rezeki yang dirancang untuk kebutuhan berbeda. Setiap paket mencakup konsultasi awal, terapi aura rezeki, amalan harian, dan masa konsultasi via WhatsApp sebagai pendampingan.",
      "Paket Awal (Rp350.000) cocok untuk mencoba dan membuka aura rezeki dasar. Paket Pelarisan (Rp750.000) paling diminati untuk pelarisan usaha dan dagang. Paket Royal (Rp1.500.000) adalah terapi penuh untuk transformasi total dengan bimbingan 60 hari.",
      "Semua paket berlandaskan tauhid, tanpa syirik, dan dirahasiakan 100%. Konsultasi gratis untuk membantu Anda memilih paket yang sesuai — hubungi 087881912019.",
    ],
    breadcrumbLabel: "Paket Terapi",
    changeFreq: "monthly",
    priority: 0.9,
    index: true,
  },
  {
    path: "/testimoni",
    title: "Testimoni Klien Therapy Aura Rezeki – Kisah Nyata Rezeki Berlimpah",
    description:
      "Kisah nyata klien Therapy Aura Rezeki: hutang lunas, usaha laris, online shop pesanan menumpuk. Rating 4.9 dari 487 ulasan. Konsultasi: 087881912019.",
    keyword: "testimoni therapy aura rezeki",
    keywords: [
      "testimoni therapy aura rezeki",
      "ulasan therapy aura rezeki",
      "kisah nyata rezeki",
      "review terapi spiritual",
      "pengalaman klien aura rezeki",
      "testimoni pelarisan usaha",
      "testimoni pelunasan hutang",
    ],
    h1: "Testimoni Klien",
    subtitle:
      "Kisah nyata klien Therapy Aura Rezeki — rezeki berlimpah, hutang lunas, usaha laris.",
    body: [
      "Testimoni klien Therapy Aura Rezeki adalah bukti nyata bahwa terapi spiritual berlandaskan tauhid benar-benar bekerja. Dengan rating 4.9 dari 487 ulasan, ribuan klien telah merasakan transformasi hidup setelah menjalani terapi.",
      "Kisah nyata dari klien kami: Ibu Sari Wulandari dari Bandung lunas 2 hutang di bulan pertama setelah therapy. Pak Rahmat dari Surabaya proyek yang macet sekian lama tiba-tiba cair. Nadia Azzahra dari Jakarta jualan online-nya sepi chat, sekarang chat masuk tiap hari. Keluarga Bpk. Hendra dari Semarang piutang yang macet bertahun-tahun dibayar lunas tanpa diminta.",
      "Setiap testimoni adalah pengalaman asli klien kami. Ingin menjadi kisah sukses berikutnya? Konsultasi gratis via WhatsApp 087881912019.",
    ],
    breadcrumbLabel: "Testimoni",
    changeFreq: "weekly",
    priority: 0.8,
    index: true,
  },
];

/** Get a page SEO config by path */
export function getPage(path: string): PageSeo | undefined {
  return PAGES.find((p) => p.path === path);
}

/** Generate Next.js Metadata for a page */
export function generatePageMetadata(path: string): Metadata {
  const page = getPage(path);
  if (!page) {
    return {
      title: "Halaman Tidak Ditemukan",
      robots: { index: false, follow: false },
    };
  }
  const url = `${SEO.siteUrl}${page.path}`;
  const ogImage = page.ogImage ?? SEO.ogImage;
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, ...page.keywords],
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url,
      siteName: SITE.brand,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: SEO.ogImageWidth,
          height: SEO.ogImageHeight,
          alt: page.h1,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    robots: page.index
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: false },
  };
}

/** Generate JSON-LD schemas for a specific page (breadcrumb + relevant schemas) */
export function generatePageSchemas(path: string): object[] {
  const page = getPage(path);
  if (!page) return [];

  const schemas: object[] = [];

  // Breadcrumb for every page
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SEO.siteUrl}${page.path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: `${SEO.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: page.breadcrumbLabel, item: `${SEO.siteUrl}${page.path}` },
    ],
  });

  // Page-specific schemas
  if (path === "/pelarisan-usaha" || path === "/pelunasan-hutang" || path === "/terapi-aura") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SEO.siteUrl}${page.path}#service`,
      name: page.h1,
      description: page.description,
      serviceType: page.h1,
      url: `${SEO.siteUrl}${page.path}`,
      provider: { "@id": `${SEO.siteUrl}/#localbusiness` },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: `${SEO.siteUrl}/paket-terapi`,
      },
    });
  }

  if (path === "/tentang-umma-yunita") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${SEO.siteUrl}/tentang-umma-yunita#profilepage`,
      mainEntity: {
        "@type": "Person",
        name: SITE.ownerName,
        alternateName: SITE.ownerNickname,
        jobTitle: "Praktisi Therapy Aura Rezeki",
        url: `${SEO.siteUrl}/tentang-umma-yunita`,
        image: `${SEO.siteUrl}${SEO.ogImage}`,
        worksFor: { "@id": `${SEO.siteUrl}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tangerang Selatan",
          addressRegion: "Banten",
          addressCountry: "ID",
        },
        knowsAbout: page.keywords,
        sameAs: [waLink()],
      },
    });
  }

  if (path === "/paket-terapi") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${SEO.siteUrl}/paket-terapi#itemlist`,
      name: "Paket Terapi Aura Rezeki",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Paket Awal",
            description: "Konsultasi + terapi dasar + amalan.",
            offers: { "@type": "Offer", price: "350000", priceCurrency: "IDR" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Paket Pelarisan",
            description: "Terapi pelarisan usaha & dagang.",
            offers: { "@type": "Offer", price: "750000", priceCurrency: "IDR" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Paket Royal",
            description: "Terapi intensif + bimbingan 60 hari.",
            offers: { "@type": "Offer", price: "1500000", priceCurrency: "IDR" },
          },
        },
      ],
    });
  }

  if (path === "/testimoni") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SEO.siteUrl}/testimoni#collectionpage`,
      name: page.h1,
      description: page.description,
      hasPart: [
        {
          "@type": "Review",
          reviewBody: "Setelah therapy, pesanan kue naik drastis. Bulan pertama sudah lunas 2 hutang.",
          author: { "@type": "Person", name: "Ibu Sari Wulandari" },
          reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        },
        {
          "@type": "Review",
          reviewBody: "Proyek yang macet sekian lama tiba-tiba cair. Proposal diterima.",
          author: { "@type": "Person", name: "Pak Rahmat" },
          reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        },
      ],
    });
  }

  return schemas;
}

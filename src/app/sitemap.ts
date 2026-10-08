import type { MetadataRoute } from "next";
import { SEO } from "@/lib/seo-data";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    { url: "/", path: "/", priority: 1.0, changeFreq: "weekly" as const },
    { url: "/#tentang", path: "/#tentang", priority: 0.9, changeFreq: "monthly" as const },
    { url: "/#manfaat", path: "/#manfaat", priority: 0.9, changeFreq: "monthly" as const },
    { url: "/#proses", path: "/#proses", priority: 0.8, changeFreq: "monthly" as const },
    { url: "/#testimoni", path: "/#testimoni", priority: 0.8, changeFreq: "weekly" as const },
    { url: "/#paket", path: "/#paket", priority: 0.9, changeFreq: "monthly" as const },
    { url: "/#faq", path: "/#faq", priority: 0.7, changeFreq: "monthly" as const },
    { url: "/#lokasi", path: "/#lokasi", priority: 0.8, changeFreq: "monthly" as const },
    { url: "/#kontak", path: "/#kontak", priority: 0.9, changeFreq: "monthly" as const },
  ];

  return sections.map((s) => ({
    url: `${SEO.siteUrl}${s.path}`,
    lastModified: now,
    changeFrequency: s.changeFreq,
    priority: s.priority,
  }));
}

// Also export as a simple sitemap string for the OG/sitemap.xml route fallback
export const dynamic = "force-static";

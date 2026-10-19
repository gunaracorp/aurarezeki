import type { MetadataRoute } from "next";
import { SEO } from "@/lib/seo-data";
import { PAGES } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.filter((p) => p.index).map((p) => ({
    url: `${SEO.siteUrl}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}

export const dynamic = "force-static";

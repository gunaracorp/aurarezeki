import type { Metadata } from "next";
import { SeoDashboard } from "@/components/aura/seo-dashboard";
import { SEO } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "SEO Dashboard — Skor & Status SEO Organik",
  description:
    "Dashboard SEO built-in: skor SEO, meta tags, structured data (Schema.org JSON-LD), sitemap, robots.txt, dan analisis kata kunci Therapy Aura Rezeki.",
  robots: { index: true, follow: true },
};

export default function SeoPage() {
  return <SeoDashboard siteUrl={SEO.siteUrl} />;
}

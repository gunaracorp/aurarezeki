import type { Metadata } from "next";
import { SeoDashboard } from "@/components/aura/seo-dashboard";
import { SEO } from "@/lib/seo-data";

// Hidden internal route — no public links point here.
// Not indexed by search engines (noindex).
export const metadata: Metadata = {
  title: "Internal SEO Dashboard",
  description: "Internal SEO monitoring dashboard. Not publicly listed.",
  robots: { index: false, follow: false },
};

export default function SeoPage() {
  return <SeoDashboard siteUrl={SEO.siteUrl} />;
}

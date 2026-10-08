import type { MetadataRoute } from "next";
import { SEO } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/seo"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/seo"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
    host: SEO.siteUrl,
  };
}

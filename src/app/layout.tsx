import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SITE } from "@/lib/site-data";
import { SEO, FAQS } from "@/lib/seo-data";
import {
  websiteSchema,
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  personSchema,
  reviewSchema,
} from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const allSchemas = [
  websiteSchema(),
  organizationSchema(),
  localBusinessSchema(),
  serviceSchema(),
  personSchema(),
  faqSchema(FAQS),
  breadcrumbSchema([{ name: "Beranda", url: "/" }]),
  ...reviewSchema(),
];

export const viewport: Viewport = {
  themeColor: "#c9971f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.homeTitle,
    template: `%s · ${SITE.brand}`,
  },
  description: SEO.homeDescription,
  applicationName: SITE.brand,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [...SEO.focusKeywords, ...SEO.longTailKeywords],
  authors: [{ name: SITE.ownerName, url: SEO.siteUrl }],
  creator: SITE.ownerName,
  publisher: SITE.brand,
  category: "Spiritual Services",
  classification: "Business Services",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SITE.brand,
    title: SEO.homeTitle,
    description: SEO.homeDescription,
    images: [
      {
        url: SEO.ogImage,
        width: SEO.ogImageWidth,
        height: SEO.ogImageHeight,
        alt: SEO.ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    title: SEO.homeTitle,
    description: SEO.homeDescription,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/aura/queen-aura.jpeg", type: "image/jpeg" },
    ],
    apple: [{ url: "/aura/queen-aura.jpeg" }],
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  verification: {
    google: "google-site-verification-token-aurarezeki",
  },
  other: {
    "format-detection": "telephone=yes",
    "theme-color": "#c9971f",
    "msapplication-TileColor": "#c9971f",
    "rating": "general",
    "revisit-after": "3 days",
    "language": "Indonesian",
    "geo.region": "ID-BT",
    "geo.placename": "Tangerang Selatan",
    "geo.position": `${SEO.geo.latitude};${SEO.geo.longitude}`,
    "ICBM": `${SEO.geo.latitude}, ${SEO.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data — Google rich results */}
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} ${amiri.variable} antialiased bg-background text-foreground font-jakarta`}
      >
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              borderRadius: "0.85rem",
              border: "1px solid rgba(201,151,31,0.35)",
              background: "var(--card)",
              color: "var(--card-foreground)",
            },
          }}
        />
      </body>
    </html>
  );
}

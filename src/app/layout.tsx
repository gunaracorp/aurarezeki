import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
  title: "Therapy Aura Rezeki — Tarik Kekayaan & Berkah dengan Tauhid",
  description:
    "Therapy Aura Rezeki membuka pintu rezeki, pelarisan usaha, pelunasan hutang, dan aura keberuntungan yang bersumber dari tauhid. Konsultasi & pendaftaran: 087725581800.",
  keywords: [
    "therapy aura rezeki",
    "aura rezeki",
    "pelarisan usaha",
    "penglaris dagang",
    "pelunasan hutang",
    "spiritual islami",
    "tauhid",
    "queen aura",
  ],
  authors: [{ name: "Therapy Aura Rezeki" }],
  openGraph: {
    title: "Therapy Aura Rezeki",
    description:
      "Buka pintu rezeki dengan aura tauhid. Pelarisan usaha, pelunasan hutang, magnet keberuntungan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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

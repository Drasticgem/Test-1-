import type { Metadata, Viewport } from "next";
import { Roboto_Slab, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const headingFont = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: "https://www.owenplumbing.com",
  founder: BUSINESS.founder,
  foundingDate: String(BUSINESS.founded),
  areaServed: BUSINESS.areaServed,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-17:00",
};

export const metadata: Metadata = {
  title: `${BUSINESS.name} — Plumbing in the Coastal Bend since ${BUSINESS.founded}`,
  description:
    "Honest work. Clean solutions. Family-owned plumbing and drain service across Corpus Christi and the Coastal Bend. Master Lic. M8552.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#061E33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

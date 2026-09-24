import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/data/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} · ${SITE.tagline}`,
    template: `%s · CVS`,
  },
  description: SITE.description,
  keywords: [
    "AI video analytics",
    "computer vision",
    "CCTV AI",
    "intelligent video surveillance",
    "digital twin",
    "PPE detection",
    "intrusion detection",
    "ANPR",
    "Bengaluru",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.fullName} · ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/digital-twin.jpg", width: 1400, height: 1400, alt: "CVS real-time Digital Twin" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

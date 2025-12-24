import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Advokata Partners | Keunggulan dalam Layanan Hukum",
    template: "%s | Advokata Partners",
  },
  description:
    "Advokata Partners adalah firma hukum korporasi dan komersial terkemuka yang menyediakan layanan hukum luar biasa sejak 1995. Melindungi kepentingan Anda. Membangun masa depan Anda.",
  keywords: [
    "firma hukum",
    "hukum korporasi",
    "merger dan akuisisi",
    "konsultan hukum",
    "hukum bisnis",
    "litigasi",
    "kekayaan intelektual",
    "hukum properti",
    "pengacara Jakarta",
    "law firm Indonesia",
  ],
  authors: [{ name: "Advokata Partners" }],
  openGraph: {
    title: "Advokata Partners | Keunggulan dalam Layanan Hukum",
    description:
      "Firma hukum korporasi dan komersial terkemuka yang menyediakan layanan hukum luar biasa sejak 1995.",
    url: "https://advokata.co.id",
    siteName: "Advokata Partners",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

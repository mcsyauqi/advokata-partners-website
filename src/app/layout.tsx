import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Advokata Partners | Excellence in Legal Counsel",
    template: "%s | Advokata Partners",
  },
  description:
    "Advokata Partners is a leading corporate and commercial law firm providing exceptional legal counsel since 1995. Protecting your interests. Building your future.",
  keywords: [
    "law firm",
    "corporate law",
    "mergers and acquisitions",
    "legal counsel",
    "business law",
    "litigation",
    "intellectual property",
    "real estate law",
  ],
  authors: [{ name: "Advokata Partners" }],
  openGraph: {
    title: "Advokata Partners | Excellence in Legal Counsel",
    description:
      "A leading corporate and commercial law firm providing exceptional legal counsel since 1995.",
    url: "https://advokata-partners.com",
    siteName: "Advokata Partners",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Serif+4:wght@400;500;600;700&display=swap"
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

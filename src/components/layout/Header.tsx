"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Layanan Hukum",
    href: "/practice-areas",
    children: [
      { name: "Hukum Korporasi", href: "/practice-areas/corporate-law" },
      { name: "Merger & Akuisisi", href: "/practice-areas/mergers-acquisitions" },
      { name: "Properti & Real Estat", href: "/practice-areas/real-estate" },
      { name: "Kekayaan Intelektual", href: "/practice-areas/intellectual-property" },
      { name: "Litigasi", href: "/practice-areas/litigation" },
      { name: "Perbankan & Keuangan", href: "/practice-areas/banking-finance" },
    ],
  },
  { name: "Tim Pengacara", href: "/attorneys" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Artikel", href: "/insights" },
  { name: "Karir", href: "/careers" },
  { name: "Kontak", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-navy/95 backdrop-blur-sm py-4"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "font-heading text-2xl font-bold tracking-wide transition-colors",
                isScrolled ? "text-navy" : "text-white"
              )}
            >
              ADVOKATA
              <span className={cn(isScrolled ? "text-gold" : "text-gold-light")}>
                {" "}
                PARTNERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-charcoal hover:text-gold"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-charcoal hover:bg-ivory hover:text-gold transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+622112345678"
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-charcoal" : "text-white/90"
              )}
            >
              <Phone className="h-4 w-4" />
              (021) 1234-5678
            </a>

            <Button
              variant={isScrolled ? "gold" : "secondary"}
              size="sm"
              asChild
              className={cn(
                "hidden sm:inline-flex",
                !isScrolled && "border-white text-white hover:bg-white hover:text-navy"
              )}
            >
              <Link href="/contact">Konsultasi Gratis</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled ? "text-navy" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block py-2 text-base font-medium transition-colors",
                        isScrolled
                          ? "text-charcoal hover:text-gold"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block py-1 text-sm transition-colors",
                              isScrolled
                                ? "text-charcoal/70 hover:text-gold"
                                : "text-white/70 hover:text-white"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button
                  variant="gold"
                  className="w-full mt-4"
                  asChild
                >
                  <Link href="/contact">Konsultasi Gratis</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

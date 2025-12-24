"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import {
  Building2,
  ArrowRightLeft,
  Home,
  Lightbulb,
  Gavel,
  Landmark,
  ArrowRight,
} from "lucide-react";

const layananHukum = [
  {
    title: "Hukum Korporasi",
    slug: "corporate-law",
    description:
      "Pendampingan hukum komprehensif untuk bisnis dari pendirian hingga seluruh tahap pertumbuhan.",
    icon: Building2,
  },
  {
    title: "Merger & Akuisisi",
    slug: "mergers-acquisitions",
    description:
      "Panduan strategis untuk transaksi M&A yang kompleks, dari awal hingga penutupan deal.",
    icon: ArrowRightLeft,
  },
  {
    title: "Properti & Real Estat",
    slug: "real-estate",
    description:
      "Solusi real estat lengkap untuk akuisisi, pengembangan, dan pembiayaan properti.",
    icon: Home,
  },
  {
    title: "Kekayaan Intelektual",
    slug: "intellectual-property",
    description:
      "Perlindungan dan penegakan paten, merek dagang, hak cipta, dan rahasia dagang.",
    icon: Lightbulb,
  },
  {
    title: "Litigasi",
    slug: "litigation",
    description:
      "Advokasi persidangan ahli dan penyelesaian sengketa untuk perkara komersial kompleks.",
    icon: Gavel,
  },
  {
    title: "Perbankan & Keuangan",
    slug: "banking-finance",
    description:
      "Solusi pembiayaan canggih untuk pemberi pinjaman, peminjam, dan institusi keuangan.",
    icon: Landmark,
  },
];

export function PracticeAreasSection() {
  return (
    <section className="py-24 bg-ivory">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Layanan Hukum Kami"
            subtitle="Kami menyediakan layanan hukum komprehensif di berbagai bidang praktik, memberikan solusi yang disesuaikan untuk tantangan yang kompleks."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {layananHukum.map((area) => (
            <StaggerItem key={area.slug}>
              <Link href={`/practice-areas/${area.slug}`}>
                <Card className="h-full group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                      <area.icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                      {area.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">
                      Selengkapnya
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/practice-areas">Lihat Semua Layanan</Link>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

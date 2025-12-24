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

const practiceAreas = [
  {
    title: "Corporate Law",
    slug: "corporate-law",
    description:
      "Comprehensive counsel for businesses from formation through all stages of growth.",
    icon: Building2,
  },
  {
    title: "Mergers & Acquisitions",
    slug: "mergers-acquisitions",
    description:
      "Strategic guidance through complex M&A transactions, from deal inception to closing.",
    icon: ArrowRightLeft,
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Full-service real estate solutions for acquisitions, development, and financing.",
    icon: Home,
  },
  {
    title: "Intellectual Property",
    slug: "intellectual-property",
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    icon: Lightbulb,
  },
  {
    title: "Litigation",
    slug: "litigation",
    description:
      "Skilled trial advocacy and dispute resolution for complex commercial matters.",
    icon: Gavel,
  },
  {
    title: "Banking & Finance",
    slug: "banking-finance",
    description:
      "Sophisticated financing solutions for lenders, borrowers, and institutions.",
    icon: Landmark,
  },
];

export function PracticeAreasSection() {
  return (
    <section className="py-24 bg-ivory">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Practice Areas"
            subtitle="We provide comprehensive legal services across a wide range of practice areas, delivering tailored solutions for complex challenges."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {practiceAreas.map((area) => (
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
                      Learn More
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
            <Link href="/practice-areas">View All Practice Areas</Link>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { insights } from "@/data/insights";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export function InsightsPreview() {
  const latestInsights = insights.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Artikel Hukum"
            subtitle="Tetap terinformasi dengan perkembangan hukum terbaru, analisis industri, dan komentar ahli dari pengacara kami."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {latestInsights.map((insight) => (
            <StaggerItem key={insight.id}>
              <Link href={`/insights/${insight.slug}`}>
                <Card className="h-full group">
                  {/* Image */}
                  <div className="aspect-video bg-navy/5 relative overflow-hidden">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-charcoal/50 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(insight.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {insight.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {insight.title}
                    </h3>

                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-charcoal/60">
                      <User className="h-4 w-4" />
                      <span>{insight.author}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/insights" className="flex items-center gap-2">
              Lihat Semua Artikel
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

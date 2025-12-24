"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { attorneys } from "@/data/attorneys";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function AttorneysPreview() {
  const featuredAttorneys = attorneys.slice(0, 4);

  return (
    <section className="py-24 bg-ivory-dark">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experienced attorneys who lead our practice and deliver exceptional results for clients."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {featuredAttorneys.map((attorney) => (
            <StaggerItem key={attorney.id}>
              <Link href={`/attorneys/${attorney.slug}`}>
                <div className="group">
                  {/* Photo Placeholder */}
                  <div className="relative aspect-[3/4] bg-navy/10 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex gap-3">
                        <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                          <Mail className="h-4 w-4 text-white" />
                        </span>
                        <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                          <Phone className="h-4 w-4 text-white" />
                        </span>
                      </div>
                    </div>
                    {/* Placeholder initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-navy/30">
                        {attorney.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1">
                    {attorney.title}
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2">
                    {attorney.practiceAreas.join(", ")}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/attorneys" className="flex items-center gap-2">
              View All Attorneys
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

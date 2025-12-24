"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const awards = [
  { name: "Chambers Global", rating: "Band 1" },
  { name: "Legal 500", rating: "Tier 1" },
  { name: "Best Lawyers", rating: "Best Law Firms" },
  { name: "Benchmark Litigation", rating: "Top Tier" },
  { name: "IFLR1000", rating: "Leading Firm" },
];

export function AwardsSection() {
  return (
    <section className="py-16 bg-ivory-dark border-y border-silver/20">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-charcoal/60 text-sm uppercase tracking-wider font-medium">
              Recognized for Excellence
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {awards.map((award) => (
              <div key={award.name} className="text-center">
                <div className="font-heading text-xl font-bold text-navy">
                  {award.name}
                </div>
                <div className="text-gold text-sm font-medium mt-1">
                  {award.rating}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

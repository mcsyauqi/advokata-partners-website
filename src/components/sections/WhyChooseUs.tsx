"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Award, Users, Globe, Shield, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Tier 1 Rankings",
    description:
      "Consistently recognized by Chambers, Legal 500, and Best Lawyers for excellence across practice areas.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We prioritize understanding your business objectives to deliver practical, results-driven solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "With offices in major financial centers and a network of international partners, we handle cross-border matters seamlessly.",
  },
  {
    icon: Shield,
    title: "Trusted Advisors",
    description:
      "Fortune 500 companies and leading institutions rely on us for their most critical legal matters.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Over $50 billion in transactions closed and numerous landmark litigation victories.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description:
      "We understand the pace of business and provide timely, efficient legal support when you need it.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Advokata Partners"
            subtitle="For nearly three decades, we have been the trusted legal partner for businesses seeking exceptional counsel and strategic advocacy."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-16">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

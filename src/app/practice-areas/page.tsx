import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { practiceAreas } from "@/data/practice-areas";
import {
  Building2,
  ArrowRightLeft,
  Home,
  Lightbulb,
  Gavel,
  Landmark,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore our comprehensive legal services across corporate law, M&A, real estate, IP, litigation, and banking & finance.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ArrowRightLeft,
  Home,
  Lightbulb,
  Gavel,
  Landmark,
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Practice Areas
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Our attorneys bring decades of experience across a comprehensive
              range of practice areas. We deliver sophisticated legal solutions
              tailored to meet the unique needs of each client.
            </p>
          </div>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = iconMap[area.icon] || Building2;

              return (
                <Link key={area.id} href={`/practice-areas/${area.slug}`}>
                  <Card className="h-full group">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <div className="shrink-0">
                          <div className="w-16 h-16 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                            <IconComponent className="h-8 w-8 text-navy group-hover:text-gold transition-colors" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="font-heading text-2xl font-semibold text-navy group-hover:text-gold transition-colors mb-3">
                            {area.title}
                          </h2>
                          <p className="text-charcoal/70 leading-relaxed mb-4">
                            {area.shortDescription}
                          </p>
                          <ul className="space-y-1 mb-4">
                            {area.keyServices.slice(0, 4).map((service) => (
                              <li
                                key={service}
                                className="text-sm text-charcoal/60 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                {service}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ivory-dark">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
              Our attorneys are ready to discuss how we can help with your
              specific legal needs. Contact us for a confidential consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 font-medium hover:bg-gold-dark transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

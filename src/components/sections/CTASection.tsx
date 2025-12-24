"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our attorneys are ready to provide the strategic counsel and
              dedicated representation your matter deserves. Contact us today to
              schedule a confidential consultation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                <a href="tel:+15551234000" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (555) 123-4000
                </a>
              </Button>
            </div>

            <p className="mt-8 text-white/50 text-sm">
              Available 24/7 for urgent matters. All consultations are confidential.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

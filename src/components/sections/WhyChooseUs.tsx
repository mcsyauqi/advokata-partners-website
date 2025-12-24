"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Award, Users, Globe, Shield, TrendingUp, Clock } from "lucide-react";

const keunggulan = [
  {
    icon: Award,
    title: "Peringkat Tier 1",
    description:
      "Secara konsisten diakui oleh Chambers, Legal 500, dan Best Lawyers untuk keunggulan di berbagai bidang praktik.",
  },
  {
    icon: Users,
    title: "Pendekatan Berpusat pada Klien",
    description:
      "Kami memprioritaskan pemahaman terhadap tujuan bisnis Anda untuk memberikan solusi praktis dan berorientasi hasil.",
  },
  {
    icon: Globe,
    title: "Jangkauan Nasional",
    description:
      "Dengan kantor di kota-kota besar Indonesia dan jaringan mitra internasional, kami menangani perkara lintas batas dengan mulus.",
  },
  {
    icon: Shield,
    title: "Penasihat Terpercaya",
    description:
      "Perusahaan Fortune 500 dan institusi terkemuka mengandalkan kami untuk perkara hukum paling kritis mereka.",
  },
  {
    icon: TrendingUp,
    title: "Rekam Jejak Terbukti",
    description:
      "Lebih dari Rp 50 triliun dalam transaksi yang ditutup dan berbagai kemenangan litigasi penting.",
  },
  {
    icon: Clock,
    title: "Layanan Responsif",
    description:
      "Kami memahami kecepatan bisnis dan menyediakan dukungan hukum yang tepat waktu dan efisien saat Anda membutuhkannya.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Mengapa Memilih Advokata Partners"
            subtitle="Selama hampir tiga dekade, kami telah menjadi mitra hukum terpercaya bagi bisnis yang mencari konsultasi luar biasa dan advokasi strategis."
          />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-16">
          {keunggulan.map((feature) => (
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

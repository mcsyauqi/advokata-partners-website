import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { practiceAreas, getPracticeAreaBySlug } from "@/data/practice-areas";
import { getAttorneysByPracticeArea } from "@/data/attorneys";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return { title: "Practice Area Not Found" };
  }

  return {
    title: area.title,
    description: area.shortDescription,
  };
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const attorneys = getAttorneysByPracticeArea(area.title);
  const relatedAreas = area.relatedAreas
    ? practiceAreas.filter((a) => area.relatedAreas?.includes(a.slug))
    : [];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <Link
            href="/practice-areas"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Practice Areas
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            {area.title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {area.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {area.description}
                </p>
              </div>

              {/* Key Services */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Our Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.keyServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attorneys in this Practice Area */}
              {attorneys.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Attorneys in {area.title}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {attorneys.map((attorney) => (
                      <Link
                        key={attorney.id}
                        href={`/attorneys/${attorney.slug}`}
                      >
                        <Card className="h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                                <span className="font-heading font-bold text-navy/40">
                                  {attorney.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <h3 className="font-heading font-semibold text-navy">
                                  {attorney.name}
                                </h3>
                                <p className="text-gold text-sm">
                                  {attorney.title}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">
                    Speak with an Attorney
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-6">
                    Contact us to discuss how our {area.title} team can assist
                    with your legal needs.
                  </p>
                  <div className="space-y-4">
                    <Button variant="gold" className="w-full" asChild>
                      <Link href="/contact">
                        Request Consultation
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-charcoal/70">
                      <Phone className="h-4 w-4" />
                      <a
                        href="tel:+15551234000"
                        className="hover:text-gold transition-colors"
                      >
                        (555) 123-4000
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal/70">
                      <Mail className="h-4 w-4" />
                      <a
                        href="mailto:info@advokata.com"
                        className="hover:text-gold transition-colors"
                      >
                        info@advokata.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Practice Areas */}
              {relatedAreas.length > 0 && (
                <Card hover={false}>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-navy mb-4">
                      Related Practice Areas
                    </h3>
                    <ul className="space-y-3">
                      {relatedAreas.map((related) => (
                        <li key={related.id}>
                          <Link
                            href={`/practice-areas/${related.slug}`}
                            className="flex items-center text-charcoal hover:text-gold transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 mr-2" />
                            {related.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

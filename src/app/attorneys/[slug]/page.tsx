import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { attorneys, getAttorneyBySlug } from "@/data/attorneys";
import { getInsightsByAuthor } from "@/data/insights";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Scale,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    return { title: "Attorney Not Found" };
  }

  return {
    title: `${attorney.name} - ${attorney.title}`,
    description: attorney.bio.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return attorneys.map((attorney) => ({
    slug: attorney.slug,
  }));
}

export default async function AttorneyPage({ params }: PageProps) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    notFound();
  }

  const attorneyInsights = getInsightsByAuthor(attorney.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <Link
            href="/attorneys"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Attorneys
          </Link>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] bg-white/10 rounded-lg overflow-hidden">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2">
                {attorney.name}
              </h1>
              <p className="text-gold text-xl font-medium mb-6">
                {attorney.title}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {attorney.email}
                </a>
                <a
                  href={`tel:${attorney.phone}`}
                  className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {attorney.phone}
                </a>
                <span className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-5 w-5" />
                  New York
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {attorney.practiceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Biography */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Biography
                </h2>
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {attorney.bio}
                </p>
              </div>

              {/* Achievements */}
              {attorney.achievements && attorney.achievements.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                    <Award className="h-6 w-6 text-gold" />
                    Notable Achievements
                  </h2>
                  <ul className="space-y-3">
                    {attorney.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-charcoal/80"
                      >
                        <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications/Insights */}
              {attorneyInsights.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Publications & Insights
                  </h2>
                  <div className="space-y-4">
                    {attorneyInsights.map((insight) => (
                      <Link
                        key={insight.id}
                        href={`/insights/${insight.slug}`}
                      >
                        <Card className="p-4">
                          <h3 className="font-semibold text-navy hover:text-gold transition-colors">
                            {insight.title}
                          </h3>
                          <p className="text-sm text-charcoal/60 mt-1">
                            {new Date(insight.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
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
                    Contact {attorney.name.split(" ")[0]}
                  </h3>
                  <div className="space-y-4">
                    <Button variant="gold" className="w-full" asChild>
                      <a href={`mailto:${attorney.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href={`tel:${attorney.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gold" />
                    Education
                  </h3>
                  <ul className="space-y-3">
                    {attorney.education.map((edu, index) => (
                      <li key={index} className="text-charcoal/80 text-sm">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Bar Admissions */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-gold" />
                    Bar Admissions
                  </h3>
                  <ul className="space-y-2">
                    {attorney.barAdmissions.map((bar, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-charcoal/80 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {bar}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

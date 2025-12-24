import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { insights, getInsightBySlug } from "@/data/insights";
import { getAttorneyBySlug } from "@/data/attorneys";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return { title: "Article Not Found" };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const author = getAttorneyBySlug(insight.authorSlug);
  const relatedInsights = insights
    .filter(
      (i) => i.category === insight.category && i.id !== insight.id
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container size="narrow">
          <Link
            href="/insights"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Insights
          </Link>

          <span className="inline-block bg-gold text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
            {insight.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {new Date(insight.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {insight.readTime}
            </span>
            <Link
              href={`/attorneys/${insight.authorSlug}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <User className="h-5 w-5" />
              {insight.author}
            </Link>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-ivory">
        <Container size="narrow">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Share Sidebar */}
            <div className="lg:col-span-1 order-last lg:order-first">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="flex lg:flex-col gap-3">
                  <span className="text-sm text-charcoal/60 hidden lg:block mb-2">
                    Share this article
                  </span>
                  <button className="p-3 bg-white rounded-full shadow-sm hover:bg-[#0077B5] hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-sm hover:bg-[#1DA1F2] hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-sm hover:bg-gold hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <p className="text-xl text-charcoal/80 leading-relaxed mb-8 font-medium">
                  {insight.excerpt}
                </p>

                <div
                  className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                />
              </div>

              {/* Author Card */}
              {author && (
                <Card hover={false} className="mt-12">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-2xl font-heading font-bold text-navy/30">
                          {author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60 mb-1">
                          Written by
                        </p>
                        <h3 className="font-heading text-xl font-semibold text-navy">
                          {author.name}
                        </h3>
                        <p className="text-gold text-sm font-medium mb-3">
                          {author.title}
                        </p>
                        <p className="text-charcoal/70 text-sm line-clamp-2">
                          {author.bio}
                        </p>
                        <Link
                          href={`/attorneys/${author.slug}`}
                          className="inline-flex items-center text-gold text-sm font-medium mt-4 hover:gap-2 transition-all"
                        >
                          View Profile
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Related Articles */}
              {relatedInsights.length > 0 && (
                <div className="mt-16">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-8">
                    Related Articles
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {relatedInsights.map((related) => (
                      <Link key={related.id} href={`/insights/${related.slug}`}>
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <p className="text-xs text-gold font-medium mb-2">
                              {related.category}
                            </p>
                            <h3 className="font-semibold text-navy text-sm line-clamp-3 hover:text-gold transition-colors">
                              {related.title}
                            </h3>
                            <p className="text-xs text-charcoal/50 mt-2">
                              {related.readTime}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ivory-dark">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              Need Legal Guidance?
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
              Our attorneys are ready to discuss how these developments may impact
              your business.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

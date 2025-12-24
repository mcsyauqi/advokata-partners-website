import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { insights } from "@/data/insights";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal insights, industry analysis, and expert commentary from Advokata Partners attorneys.",
};

const categories = [
  "All",
  "Corporate Law",
  "Mergers & Acquisitions",
  "Real Estate",
  "Intellectual Property",
  "Litigation",
  "Banking & Finance",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Legal Insights
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Stay informed with the latest legal developments, industry analysis,
              and expert commentary from our attorneys. Our insights help you
              navigate complex legal issues and make informed business decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="bg-ivory-dark py-6 border-b border-silver/20 sticky top-16 z-40">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category === "All"
                    ? "bg-navy text-white"
                    : "bg-white text-charcoal hover:bg-navy hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          {/* Featured Article */}
          <div className="mb-16">
            <Link href={`/insights/${insights[0].slug}`}>
              <Card className="overflow-hidden group">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-video md:aspect-auto md:min-h-[400px] bg-navy/10 relative overflow-hidden">
                    <Image
                      src={insights[0].image}
                      alt={insights[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                        {insights[0].category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-charcoal/50 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(insights[0].date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {insights[0].readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy group-hover:text-gold transition-colors mb-4">
                      {insights[0].title}
                    </h2>

                    <p className="text-charcoal/70 leading-relaxed mb-6">
                      {insights[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-charcoal/60">
                        <User className="h-4 w-4" />
                        <span>{insights[0].author}</span>
                      </div>
                      <span className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>

          {/* Rest of Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(1).map((insight) => (
              <Link key={insight.id} href={`/insights/${insight.slug}`}>
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
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {insight.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors mb-3 line-clamp-2">
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
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-navy rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Receive the latest legal insights and industry updates directly in
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-white font-medium rounded-md hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

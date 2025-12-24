import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Scale,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Advokata Partners' history, values, and commitment to legal excellence since 1995.",
};

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our dealings, maintaining trust and transparency with clients, colleagues, and the community.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We are committed to delivering exceptional legal services, continuously improving our skills and staying at the forefront of legal developments.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as a unified team, leveraging diverse expertise to provide comprehensive solutions that address all aspects of our clients' needs.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description:
      "We prioritize understanding our clients' businesses and objectives, tailoring our approach to deliver practical, results-oriented advice.",
  },
];

const milestones = [
  {
    year: "1995",
    title: "Firm Founded",
    description:
      "Alexander Petrov establishes Advokata Partners with a vision of providing exceptional corporate legal services.",
  },
  {
    year: "2000",
    title: "Washington DC Office",
    description:
      "Expansion to the nation's capital to better serve clients with regulatory and government affairs needs.",
  },
  {
    year: "2008",
    title: "London Office Opens",
    description:
      "International expansion to serve multinational clients and handle cross-border transactions.",
  },
  {
    year: "2015",
    title: "Tier 1 Rankings",
    description:
      "Recognized by Chambers Global and Legal 500 with top-tier rankings across multiple practice areas.",
  },
  {
    year: "2020",
    title: "50 Attorneys",
    description:
      "Firm grows to 50 attorneys while maintaining its commitment to personalized client service.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "Celebrating 29 years of excellence with expanded capabilities and continued recognition.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              About Advokata Partners
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              For nearly three decades, Advokata Partners has been a trusted
              legal partner for businesses and individuals seeking exceptional
              counsel. Our commitment to excellence, integrity, and client
              service has made us a leading firm in corporate and commercial law.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Advokata Partners was founded in 1995 by Alexander Petrov with
                  a clear vision: to create a law firm that combines
                  sophisticated legal expertise with genuine commitment to client
                  success. What began as a boutique corporate practice has grown
                  into a full-service firm with a global reach.
                </p>
                <p>
                  Our growth has been guided by a simple philosophy: hire
                  exceptional attorneys, invest in their development, and focus
                  relentlessly on client outcomes. This approach has attracted
                  some of the finest legal talent in the industry and built a
                  client base that includes Fortune 500 companies, leading
                  financial institutions, and successful entrepreneurs.
                </p>
                <p>
                  Today, with offices in New York, Washington DC, and London, we
                  continue to expand our capabilities while maintaining the
                  personalized attention and strategic focus that have defined our
                  practice since day one.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  30+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Years of Excellence
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  500+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Corporate Clients
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  50+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Experienced Attorneys
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">3</div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Global Offices
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              These core values guide everything we do and define who we are as a
              firm.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Our Journey
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Key milestones in our growth and development as a leading law firm.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card hover={false}>
                      <CardContent className="p-6">
                        <div className="text-gold font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-charcoal/70 text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 bg-gold rounded-full shrink-0 relative z-10" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Recognition & Awards
            </h2>
            <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Chambers Global", rating: "Band 1 - Corporate/M&A" },
              { name: "Legal 500", rating: "Tier 1 - Multiple Practice Areas" },
              { name: "Best Lawyers", rating: "Best Law Firms 2024" },
              { name: "Benchmark Litigation", rating: "Top Tier" },
            ].map((award) => (
              <div key={award.name} className="text-center">
                <Award className="h-12 w-12 text-gold mx-auto mb-3" />
                <div className="font-heading font-bold text-navy">
                  {award.name}
                </div>
                <div className="text-charcoal/60 text-sm mt-1">
                  {award.rating}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-white/80 mb-8">
              We're always looking for talented attorneys and professionals who
              share our commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/careers">
                  View Opportunities
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

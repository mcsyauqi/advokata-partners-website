import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { jobs } from "@/data/jobs";
import {
  MapPin,
  Briefcase,
  Clock,
  GraduationCap,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Advokata Partners. Explore legal career opportunities with a leading corporate law firm.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Clear path to partnership with mentorship from experienced attorneys.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Ongoing training, CLE programs, and support for advanced degrees.",
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description:
      "Health insurance, 401(k) matching, and generous paid time off.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside talented colleagues in a supportive, team-oriented environment.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              At Advokata Partners, we are committed to attracting and developing
              exceptional legal talent. Join a firm where your contributions are
              valued, your growth is supported, and your career can thrive.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Why Advokata Partners?
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              We offer more than just a job – we offer a career with purpose,
              growth, and exceptional rewards.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Open Positions
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Explore our current opportunities and find the role that's right
              for you.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 gap-6 p-6">
                    {/* Job Info */}
                    <div className="md:col-span-3">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-heading text-xl font-semibold text-navy">
                          {job.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            job.type === "Full-time"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {job.type}
                        </span>
                      </div>

                      <p className="text-charcoal/70 text-sm mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-charcoal/60">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Posted{" "}
                          {new Date(job.postedDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex items-center justify-start md:justify-end">
                      <Button variant="gold" asChild>
                        <a
                          href={`mailto:careers@advokata.com?subject=Application: ${job.title}`}
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="bg-ivory-dark px-6 py-4 border-t border-silver/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-2">
                          Requirements
                        </h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li
                              key={index}
                              className="text-sm text-charcoal/70 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1">
                          {job.responsibilities.slice(0, 3).map((resp, index) => (
                            <li
                              key={index}
                              className="text-sm text-charcoal/70 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Summer Program CTA */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Summer Associate Program
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Our Summer Associate Program offers law students an immersive
                experience in the practice of law. Summer Associates work on
                substantive matters alongside our attorneys, receiving mentorship
                and training while experiencing the culture of our firm.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The program includes rotations across practice groups, training
                sessions, networking events, and community service opportunities.
                Many of our current partners and associates began their careers
                as Summer Associates.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href="mailto:careers@advokata.com?subject=Summer Associate Program Inquiry">
                  Learn More About the Program
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Program Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "10-week summer program",
                  "Substantive work across practice areas",
                  "Dedicated mentor and buddy system",
                  "Professional development workshops",
                  "Client meetings and deal exposure",
                  "Social events and networking opportunities",
                  "Competitive compensation",
                  "Path to full-time offers",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-charcoal/80"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-white/80 mb-8">
              We're always interested in hearing from talented legal
              professionals. Send us your resume and we'll keep you in mind for
              future opportunities.
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              <a href="mailto:careers@advokata.com">
                Send Your Resume
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Scale } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          >
            <Scale className="h-4 w-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">
              Excellence in Legal Counsel Since 1995
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Protecting Your Interests.{" "}
            <span className="text-gold">Building Your Future.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Advokata Partners is a premier corporate and commercial law firm
            providing strategic legal counsel to businesses, institutions, and
            individuals worldwide.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div className="border-l-2 border-gold pl-4">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-white/60 text-sm">Years of Excellence</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Corporate Clients</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-3xl font-bold text-white">Tier 1</div>
              <div className="text-white/60 text-sm">Chambers Rankings</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              <Link href="/practice-areas">Our Practice Areas</Link>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}

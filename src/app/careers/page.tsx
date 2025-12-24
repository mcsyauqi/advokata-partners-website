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
  title: "Karir",
  description:
    "Bergabunglah dengan Advokata Partners. Jelajahi peluang karir hukum dengan firma hukum korporasi terkemuka.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Pengembangan Karir",
    description:
      "Jalur yang jelas menuju partnership dengan bimbingan dari pengacara senior berpengalaman.",
  },
  {
    icon: GraduationCap,
    title: "Pengembangan Profesional",
    description:
      "Pelatihan berkelanjutan, program PKPA, dan dukungan untuk gelar lanjutan.",
  },
  {
    icon: Heart,
    title: "Benefit Komprehensif",
    description:
      "Asuransi kesehatan, tunjangan hari tua, dan cuti berbayar yang memadai.",
  },
  {
    icon: Users,
    title: "Budaya Kolaboratif",
    description:
      "Bekerja bersama kolega berbakat dalam lingkungan yang mendukung dan berorientasi tim.",
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
              Bergabunglah dengan Tim Kami
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Di Advokata Partners, kami berkomitmen untuk menarik dan mengembangkan
              talenta hukum yang luar biasa. Bergabunglah dengan firma di mana kontribusi Anda
              dihargai, pertumbuhan Anda didukung, dan karir Anda dapat berkembang.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Mengapa Advokata Partners?
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami menawarkan lebih dari sekadar pekerjaan – kami menawarkan karir dengan
              tujuan, pertumbuhan, dan penghargaan yang luar biasa.
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
              Lowongan Tersedia
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Jelajahi peluang kami saat ini dan temukan posisi yang tepat untuk Anda.
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
                            job.type === "Penuh Waktu"
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
                          Diposting{" "}
                          {new Date(job.postedDate).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex items-center justify-start md:justify-end">
                      <Button variant="gold" asChild>
                        <a
                          href={`mailto:karir@advokata.co.id?subject=Lamaran: ${job.title}`}
                        >
                          Lamar Sekarang
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
                          Persyaratan
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
                          Tanggung Jawab Utama
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
                Program Magang
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Program Magang kami menawarkan mahasiswa hukum pengalaman mendalam
                dalam praktik hukum. Peserta magang bekerja pada perkara substantif
                bersama pengacara kami, menerima bimbingan dan pelatihan sambil
                merasakan budaya firma kami.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Program ini mencakup rotasi di berbagai grup praktik, sesi pelatihan,
                acara networking, dan kesempatan pelayanan masyarakat. Banyak partner
                dan associate kami saat ini memulai karir mereka sebagai peserta magang.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href="mailto:karir@advokata.co.id?subject=Pertanyaan Program Magang">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Keunggulan Program
              </h3>
              <ul className="space-y-4">
                {[
                  "Program magang 10 minggu",
                  "Pekerjaan substantif di berbagai bidang praktik",
                  "Sistem mentor dan buddy yang berdedikasi",
                  "Workshop pengembangan profesional",
                  "Eksposur rapat klien dan deal",
                  "Acara sosial dan kesempatan networking",
                  "Kompensasi kompetitif",
                  "Jalur menuju penawaran penuh waktu",
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
              Tidak Menemukan Posisi yang Tepat?
            </h2>
            <p className="text-white/80 mb-8">
              Kami selalu tertarik mendengar dari profesional hukum berbakat.
              Kirimkan CV Anda dan kami akan mempertimbangkan Anda untuk peluang
              di masa depan.
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              <a href="mailto:karir@advokata.co.id">
                Kirim CV Anda
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

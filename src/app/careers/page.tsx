import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Award,
  Coffee,
  Plane,
  Wallet,
  Shield,
  BookOpen,
  Globe,
  CheckCircle,
  Quote,
  Star,
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

      {/* Comprehensive Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Benefit & Kompensasi
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami menawarkan paket kompensasi kompetitif dan benefit komprehensif
              untuk mendukung kesejahteraan karyawan.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wallet,
                title: "Kompensasi Kompetitif",
                items: ["Gaji di atas rata-rata industri", "Bonus kinerja tahunan", "Review gaji berkala"],
              },
              {
                icon: Shield,
                title: "Asuransi & Kesehatan",
                items: ["Asuransi kesehatan keluarga", "Asuransi jiwa", "Medical check-up tahunan"],
              },
              {
                icon: Coffee,
                title: "Work-Life Balance",
                items: ["Cuti tahunan 20+ hari", "Cuti melahirkan/paternitas", "Flexible working arrangement"],
              },
              {
                icon: Plane,
                title: "Tunjangan Lainnya",
                items: ["Tunjangan transportasi", "Tunjangan komunikasi", "Fasilitas olahraga"],
              },
            ].map((benefit) => (
              <Card key={benefit.title} hover={false}>
                <CardContent className="p-6">
                  <benefit.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy mb-4">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/70">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Career Development */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Jalur Pengembangan Karir
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Kami berkomitmen untuk mengembangkan talenta dan memberikan jalur
                karir yang jelas. Dengan bimbingan dari senior partner dan program
                pengembangan terstruktur, Anda dapat mencapai potensi maksimal.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Associate (0-3 tahun)",
                    description: "Membangun fondasi kuat dalam praktik hukum dengan supervisi intensif.",
                  },
                  {
                    title: "Senior Associate (3-6 tahun)",
                    description: "Menangani kasus secara mandiri dan mulai membimbing junior.",
                  },
                  {
                    title: "Counsel (6-10 tahun)",
                    description: "Spesialisasi mendalam dan peran kepemimpinan dalam tim.",
                  },
                  {
                    title: "Partner (10+ tahun)",
                    description: "Memimpin praktik, mengembangkan klien, dan membentuk strategi firma.",
                  },
                ].map((level, index) => (
                  <div key={level.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{level.title}</h4>
                      <p className="text-white/60 text-sm">{level.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "85%", label: "Partner dari Internal" },
                { number: "24", label: "Bulan Rata-rata Promosi" },
                { number: "100%", label: "PKPA Didanai" },
                { number: "40+", label: "Jam Training/Tahun" },
              ].map((stat) => (
                <Card key={stat.label} hover={false} className="bg-white/5 border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gold font-heading">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Program Pelatihan
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Investasi berkelanjutan dalam pengembangan profesional untuk
              memastikan tim kami selalu di garis depan praktik hukum.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Legal Training",
                description: "Workshop hukum substansif, update regulasi, dan studi kasus.",
                features: ["Training bulanan", "Narasumber eksternal", "Sertifikasi profesi"],
              },
              {
                icon: Users,
                title: "Soft Skills",
                description: "Pengembangan kemampuan komunikasi, negosiasi, dan kepemimpinan.",
                features: ["Public speaking", "Client management", "Leadership workshop"],
              },
              {
                icon: Globe,
                title: "Secondment Program",
                description: "Kesempatan bekerja di firma mitra internasional.",
                features: ["Jaringan global", "Pengalaman lintas budaya", "Durasi 3-6 bulan"],
              },
            ].map((program) => (
              <Card key={program.title} hover={false}>
                <CardContent className="p-6">
                  <program.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {program.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-charcoal/60">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Cerita dari Tim Kami
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Dengarkan langsung dari para pengacara yang telah membangun karir
              mereka di Advokata Partners.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Bergabung dengan Advokata Partners adalah keputusan terbaik dalam karir saya. Bimbingan dari partner senior sangat berharga.",
                name: "Andi Pratama",
                role: "Senior Associate",
                years: "5 tahun di firma",
                image: "/images/attorneys/dewi-kusuma.jpg",
              },
              {
                quote: "Lingkungan kerja yang mendukung dan kesempatan untuk menangani kasus-kasus menarik membuat setiap hari terasa bermakna.",
                name: "Lisa Wijaya",
                role: "Associate",
                years: "3 tahun di firma",
                image: "/images/attorneys/sarah-tanujaya.jpg",
              },
              {
                quote: "Dari magang hingga menjadi counsel, firma ini benar-benar berinvestasi dalam pengembangan karir setiap individu.",
                name: "Budi Santoso",
                role: "Counsel",
                years: "8 tahun di firma",
                image: "/images/attorneys/michael-hartono.jpg",
              },
            ].map((testimonial, index) => (
              <Card key={index} hover={false}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gold/30 mb-4" />
                  <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{testimonial.name}</p>
                      <p className="text-gold text-sm">{testimonial.role}</p>
                      <p className="text-charcoal/60 text-xs">{testimonial.years}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Office Culture */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Budaya Kantor
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Kami percaya bahwa lingkungan kerja yang positif menghasilkan
                kinerja terbaik. Budaya kami dibangun di atas rasa hormat,
                kolaborasi, dan keseimbangan hidup-kerja.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Town hall bulanan",
                  "Team building quarterly",
                  "Olahraga bersama",
                  "Perayaan milestone",
                  "CSR & pro bono",
                  "Mentorship program",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-charcoal/80">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-navy/10 rounded-lg flex items-center justify-center">
                <Users className="h-16 w-16 text-navy/30" />
              </div>
              <div className="aspect-square bg-gold/10 rounded-lg flex items-center justify-center">
                <Coffee className="h-16 w-16 text-gold/50" />
              </div>
              <div className="aspect-square bg-gold/10 rounded-lg flex items-center justify-center">
                <Award className="h-16 w-16 text-gold/50" />
              </div>
              <div className="aspect-square bg-navy/10 rounded-lg flex items-center justify-center">
                <Heart className="h-16 w-16 text-navy/30" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Proses Rekrutmen
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami menghargai waktu Anda dan berusaha membuat proses rekrutmen
              setransparan dan seefisien mungkin.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Kirim Lamaran", time: "5 menit" },
                { step: "2", title: "Review CV", time: "1-2 minggu" },
                { step: "3", title: "Interview HR", time: "30-60 menit" },
                { step: "4", title: "Interview Partner", time: "60 menit" },
                { step: "5", title: "Penawaran", time: "1 minggu" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <Card hover={false} className="h-full">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-gold font-bold">{item.step}</span>
                      </div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{item.title}</h4>
                      <p className="text-charcoal/60 text-xs">{item.time}</p>
                    </CardContent>
                  </Card>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="h-4 w-4 text-gold/30" />
                    </div>
                  )}
                </div>
              ))}
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
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                asChild
              >
                <a href="mailto:karir@advokata.co.id">
                  Kirim CV Anda
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

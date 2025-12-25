import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { allPracticeAreas } from "@/data/practice-areas";
import {
  Building2,
  ArrowRightLeft,
  Home,
  Lightbulb,
  Gavel,
  Landmark,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  FileText,
  Briefcase,
  Globe,
  Award,
  Scale,
  Clock,
  Target,
  Cpu,
  Leaf,
  Coins,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Hukum",
  description:
    "Jelajahi layanan hukum komprehensif kami di bidang hukum korporasi, M&A, real estat, KI, litigasi, dan perbankan & keuangan.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ArrowRightLeft,
  Home,
  Lightbulb,
  Gavel,
  Landmark,
  Coins,
  Briefcase,
  Cpu,
  Leaf,
  BadgeCheck,
  Users,
};

const industryExpertise = [
  {
    icon: Building2,
    title: "Manufaktur & Industri",
    description: "Pendampingan regulasi industri, perizinan, dan kepatuhan lingkungan.",
  },
  {
    icon: TrendingUp,
    title: "Teknologi & Startup",
    description: "Dari pendirian hingga pendanaan seri dan exit strategy.",
  },
  {
    icon: Landmark,
    title: "Perbankan & Fintech",
    description: "Regulasi OJK, lisensi, dan kepatuhan sektor keuangan.",
  },
  {
    icon: Home,
    title: "Properti & Konstruksi",
    description: "Pengembangan, perizinan, dan transaksi real estat.",
  },
  {
    icon: Globe,
    title: "Perdagangan Internasional",
    description: "Ekspor-impor, bea cukai, dan perjanjian perdagangan.",
  },
  {
    icon: Briefcase,
    title: "Ritel & Consumer",
    description: "Franchise, distribusi, dan perlindungan konsumen.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konsultasi Awal",
    description: "Diskusi mendalam untuk memahami kebutuhan dan tujuan hukum Anda.",
  },
  {
    step: "02",
    title: "Analisis & Strategi",
    description: "Tim kami menganalisis situasi dan merancang strategi terbaik.",
  },
  {
    step: "03",
    title: "Eksekusi",
    description: "Implementasi strategi dengan komunikasi transparan di setiap tahap.",
  },
  {
    step: "04",
    title: "Penyelesaian & Tindak Lanjut",
    description: "Memastikan hasil optimal dan dukungan berkelanjutan.",
  },
];

const stats = [
  { number: "1.000+", label: "Transaksi Berhasil" },
  { number: "95%", label: "Tingkat Keberhasilan" },
  { number: "Rp 50T+", label: "Nilai Transaksi" },
  { number: "30+", label: "Tahun Pengalaman" },
];

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Layanan Hukum
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Pengacara kami membawa pengalaman puluhan tahun di berbagai bidang
              praktik yang komprehensif. Kami memberikan solusi hukum canggih
              yang disesuaikan untuk memenuhi kebutuhan unik setiap klien.
            </p>
          </div>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {allPracticeAreas.map((area) => {
              const IconComponent = iconMap[area.icon] || Building2;

              return (
                <Link key={area.id} href={`/practice-areas/${area.slug}`}>
                  <Card className="h-full group">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <div className="shrink-0">
                          <div className="w-16 h-16 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                            <IconComponent className="h-8 w-8 text-navy group-hover:text-gold transition-colors" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="font-heading text-2xl font-semibold text-navy group-hover:text-gold transition-colors mb-3">
                            {area.title}
                          </h2>
                          <p className="text-charcoal/70 leading-relaxed mb-4">
                            {area.shortDescription}
                          </p>
                          <ul className="space-y-1 mb-4">
                            {area.keyServices.slice(0, 4).map((service) => (
                              <li
                                key={service}
                                className="text-sm text-charcoal/60 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                {service}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
                            Selengkapnya
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold font-heading">
                  {stat.number}
                </div>
                <div className="text-white/70 mt-2 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Keahlian Industri
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Pengalaman mendalam di berbagai sektor industri memungkinkan kami
              memberikan nasihat yang relevan dan praktis.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry) => (
              <Card key={industry.title} hover={false}>
                <CardContent className="p-6">
                  <industry.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Pendekatan Kami
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Kami percaya bahwa setiap klien dan situasi hukum adalah unik.
                Pendekatan kami menggabungkan keahlian hukum mendalam dengan
                pemahaman bisnis praktis untuk memberikan solusi yang efektif.
              </p>
              <ul className="space-y-4">
                {[
                  "Analisis mendalam terhadap kebutuhan spesifik klien",
                  "Strategi yang disesuaikan dengan tujuan bisnis",
                  "Komunikasi transparan di setiap tahap proses",
                  "Fokus pada hasil yang terukur dan berkelanjutan",
                  "Dukungan tim multidisiplin untuk solusi komprehensif",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Keunggulan Layanan Kami
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Kerahasiaan Terjamin",
                    desc: "Semua informasi klien dilindungi dengan standar keamanan tertinggi.",
                  },
                  {
                    icon: Clock,
                    title: "Respons Cepat",
                    desc: "Tim kami responsif dan tersedia untuk urusan mendesak 24/7.",
                  },
                  {
                    icon: Target,
                    title: "Berorientasi Hasil",
                    desc: "Fokus pada pencapaian tujuan dengan efisiensi biaya optimal.",
                  },
                  {
                    icon: Users,
                    title: "Tim Berdedikasi",
                    desc: "Setiap klien didampingi oleh tim yang konsisten dan berkomitmen.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-charcoal/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Proses kerja kami yang terstruktur memastikan setiap langkah
              diambil dengan pertimbangan matang untuk hasil optimal.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className="relative">
                <Card hover={false} className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {process.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-4 w-8">
                    <ArrowRight className="h-6 w-6 text-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Pengalaman yang Relevan
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Beberapa contoh transaksi dan perkara signifikan yang telah kami tangani.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Akuisisi Lintas Batas",
                value: "Rp 2,5 Triliun",
                description: "Akuisisi perusahaan manufaktur oleh investor asing dengan regulasi yang kompleks.",
                area: "M&A",
              },
              {
                title: "IPO Perusahaan Teknologi",
                value: "Rp 1,8 Triliun",
                description: "Pendampingan penuh dari persiapan hingga listing di Bursa Efek Indonesia.",
                area: "Pasar Modal",
              },
              {
                title: "Sengketa Kontrak Internasional",
                value: "USD 50 Juta",
                description: "Arbitrase internasional yang dimenangkan untuk klien perusahaan energi.",
                area: "Litigasi",
              },
            ].map((caseStudy) => (
              <Card key={caseStudy.title} hover={false} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <span className="inline-block bg-gold/20 text-gold text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {caseStudy.area}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gold font-bold text-lg mb-3">
                    {caseStudy.value}
                  </p>
                  <p className="text-white/60 text-sm">
                    {caseStudy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/60 text-sm">
              *Detail transaksi dijaga kerahasiaannya sesuai ketentuan yang berlaku
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Pertanyaan Umum
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Bagaimana cara memulai konsultasi dengan Advokata Partners?",
                  a: "Anda dapat menghubungi kami melalui formulir kontak, email, atau telepon untuk menjadwalkan konsultasi awal. Konsultasi pertama biasanya berlangsung 30-60 menit untuk memahami kebutuhan Anda.",
                },
                {
                  q: "Berapa biaya layanan hukum di Advokata Partners?",
                  a: "Biaya layanan kami transparan dan kompetitif. Kami menawarkan berbagai model penagihan termasuk tarif per jam, biaya tetap, atau retainer bulanan tergantung jenis layanan yang dibutuhkan.",
                },
                {
                  q: "Apakah Advokata Partners menangani kasus di luar Jakarta?",
                  a: "Ya, dengan kantor di Jakarta dan Surabaya, serta jaringan mitra di seluruh Indonesia, kami dapat menangani kasus di berbagai wilayah Indonesia.",
                },
                {
                  q: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah kasus?",
                  a: "Durasi penyelesaian sangat bervariasi tergantung kompleksitas dan jenis kasus. Kami akan memberikan estimasi waktu yang realistis setelah menganalisis detail kasus Anda.",
                },
              ].map((faq, idx) => (
                <Card key={idx} hover={false}>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-navy mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-navy rounded-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  Butuh Bantuan Hukum?
                </h2>
                <p className="text-white/80 mb-6">
                  Pengacara kami siap mendiskusikan bagaimana kami dapat membantu
                  kebutuhan hukum spesifik Anda. Hubungi kami untuk konsultasi rahasia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <Link href="/contact">
                      Jadwalkan Konsultasi
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-navy"
                  >
                    <Link href="/attorneys">Lihat Tim Kami</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end gap-8">
                <div className="text-center">
                  <Award className="h-10 w-10 text-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Tier 1</p>
                  <p className="text-white/60 text-sm">Legal 500</p>
                </div>
                <div className="text-center">
                  <Award className="h-10 w-10 text-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Band 1</p>
                  <p className="text-white/60 text-sm">Chambers</p>
                </div>
                <div className="text-center">
                  <Scale className="h-10 w-10 text-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">30+ Tahun</p>
                  <p className="text-white/60 text-sm">Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

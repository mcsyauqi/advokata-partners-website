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
  title: "Tentang Kami",
  description:
    "Pelajari tentang sejarah Advokata Partners, nilai-nilai, dan komitmen terhadap keunggulan hukum sejak 1995.",
};

const values = [
  {
    icon: Scale,
    title: "Integritas",
    description:
      "Kami menjunjung standar etika tertinggi dalam semua urusan kami, menjaga kepercayaan dan transparansi dengan klien, kolega, dan masyarakat.",
  },
  {
    icon: Target,
    title: "Keunggulan",
    description:
      "Kami berkomitmen untuk memberikan layanan hukum luar biasa, terus meningkatkan keterampilan dan tetap terdepan dalam perkembangan hukum.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description:
      "Kami bekerja sebagai tim yang bersatu, memanfaatkan keahlian beragam untuk memberikan solusi komprehensif yang menangani semua aspek kebutuhan klien.",
  },
  {
    icon: Heart,
    title: "Fokus pada Klien",
    description:
      "Kami memprioritaskan pemahaman bisnis dan tujuan klien, menyesuaikan pendekatan kami untuk memberikan nasihat praktis dan berorientasi hasil.",
  },
];

const milestones = [
  {
    year: "1995",
    title: "Firma Didirikan",
    description:
      "Alexander Widodo mendirikan Advokata Partners dengan visi menyediakan layanan hukum korporasi yang luar biasa.",
  },
  {
    year: "2000",
    title: "Kantor Jakarta Selatan",
    description:
      "Ekspansi ke Jakarta Selatan untuk melayani klien dengan kebutuhan korporasi dan komersial yang berkembang.",
  },
  {
    year: "2008",
    title: "Kantor Surabaya Dibuka",
    description:
      "Ekspansi regional untuk melayani klien multinasional dan menangani transaksi antar kota.",
  },
  {
    year: "2015",
    title: "Peringkat Tier 1",
    description:
      "Diakui oleh Chambers dan Legal 500 dengan peringkat teratas di berbagai bidang praktik.",
  },
  {
    year: "2020",
    title: "50 Pengacara",
    description:
      "Firma tumbuh menjadi 50 pengacara sambil mempertahankan komitmennya terhadap layanan klien yang personal.",
  },
  {
    year: "2024",
    title: "Pertumbuhan Berkelanjutan",
    description:
      "Merayakan 29 tahun keunggulan dengan kemampuan yang diperluas dan pengakuan berkelanjutan.",
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
              Tentang Advokata Partners
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Selama hampir tiga dekade, Advokata Partners telah menjadi mitra
              hukum terpercaya bagi bisnis dan individu yang mencari konsultasi
              luar biasa. Komitmen kami terhadap keunggulan, integritas, dan
              layanan klien telah menjadikan kami firma terkemuka dalam hukum
              korporasi dan komersial.
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
                Cerita Kami
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Advokata Partners didirikan pada tahun 1995 oleh Alexander Widodo
                  dengan visi yang jelas: menciptakan firma hukum yang menggabungkan
                  keahlian hukum canggih dengan komitmen tulus terhadap kesuksesan klien.
                  Apa yang dimulai sebagai praktik korporasi boutique telah berkembang
                  menjadi firma layanan lengkap dengan jangkauan nasional.
                </p>
                <p>
                  Pertumbuhan kami dipandu oleh filosofi sederhana: rekrut pengacara
                  luar biasa, investasikan dalam pengembangan mereka, dan fokus
                  tanpa henti pada hasil klien. Pendekatan ini telah menarik beberapa
                  talenta hukum terbaik di industri dan membangun basis klien yang
                  mencakup perusahaan Fortune 500, institusi keuangan terkemuka,
                  dan pengusaha sukses.
                </p>
                <p>
                  Saat ini, dengan kantor di Jakarta Pusat, Jakarta Selatan, dan
                  Surabaya, kami terus memperluas kemampuan kami sambil mempertahankan
                  perhatian personal dan fokus strategis yang telah mendefinisikan
                  praktik kami sejak hari pertama.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  30+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Tahun Pengalaman
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  500+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Klien Korporasi
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">
                  50+
                </div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Pengacara Berpengalaman
                </div>
              </Card>
              <Card hover={false} className="text-center p-8">
                <div className="text-4xl font-bold text-navy font-heading">3</div>
                <div className="text-charcoal/60 text-sm mt-2">
                  Kantor di Indonesia
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
              Nilai-Nilai Kami
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Nilai-nilai inti ini memandu segala yang kami lakukan dan mendefinisikan
              siapa kami sebagai firma.
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
              Perjalanan Kami
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Tonggak penting dalam pertumbuhan dan perkembangan kami sebagai firma hukum terkemuka.
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
              Pengakuan & Penghargaan
            </h2>
            <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Chambers Global", rating: "Band 1 - Korporasi/M&A" },
              { name: "Legal 500", rating: "Tier 1 - Berbagai Bidang Praktik" },
              { name: "Best Lawyers", rating: "Firma Hukum Terbaik 2024" },
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
              Bergabunglah dengan Tim Kami
            </h2>
            <p className="text-white/80 mb-8">
              Kami selalu mencari pengacara dan profesional berbakat yang berbagi
              komitmen kami terhadap keunggulan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/careers">
                  Lihat Lowongan
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
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

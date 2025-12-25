import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Building2,
  Handshake,
  BookOpen,
  Quote,
  MapPin,
  CheckCircle,
  Star,
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

const leadership = [
  {
    name: "Alexander Widodo",
    title: "Managing Partner",
    image: "/images/attorneys/alexander-widodo.jpg",
    description: "Pendiri firma dengan pengalaman 35+ tahun di bidang hukum korporasi dan M&A.",
  },
  {
    name: "Sarah Tanujaya",
    title: "Senior Partner",
    image: "/images/attorneys/sarah-tanujaya.jpg",
    description: "Ahli litigasi komersial dengan rekam jejak memenangkan kasus-kasus kompleks.",
  },
  {
    name: "Michael Hartono",
    title: "Partner",
    image: "/images/attorneys/michael-hartono.jpg",
    description: "Spesialis perbankan & keuangan dengan keahlian dalam transaksi lintas batas.",
  },
  {
    name: "Dewi Kusuma",
    title: "Partner",
    image: "/images/attorneys/dewi-kusuma.jpg",
    description: "Pemimpin praktik real estat dengan fokus pada pengembangan properti komersial.",
  },
];

const probonoStats = [
  { number: "500+", label: "Jam Pro Bono/Tahun" },
  { number: "50+", label: "Kasus Pro Bono" },
  { number: "15+", label: "Mitra LSM" },
  { number: "Rp 2M+", label: "Nilai Layanan Gratis" },
];

const csrPrograms = [
  {
    title: "Bantuan Hukum Masyarakat",
    description: "Layanan hukum gratis untuk masyarakat kurang mampu dalam kasus perdata dan keluarga.",
    icon: Users,
  },
  {
    title: "Edukasi Hukum",
    description: "Workshop dan seminar hukum untuk UMKM, startup, dan komunitas.",
    icon: BookOpen,
  },
  {
    title: "Pendampingan LSM",
    description: "Konsultasi hukum gratis untuk organisasi nirlaba dan yayasan sosial.",
    icon: Heart,
  },
  {
    title: "Beasiswa Hukum",
    description: "Program beasiswa untuk mahasiswa hukum berprestasi dari keluarga kurang mampu.",
    icon: Award,
  },
];

const globalNetwork = [
  { region: "Asia Tenggara", countries: "Singapura, Malaysia, Thailand, Vietnam, Filipina" },
  { region: "Asia Timur", countries: "Jepang, Korea Selatan, Tiongkok, Hong Kong, Taiwan" },
  { region: "Eropa", countries: "Inggris, Jerman, Belanda, Swiss, Prancis" },
  { region: "Amerika", countries: "Amerika Serikat, Kanada, Brasil" },
  { region: "Australia & Oceania", countries: "Australia, Selandia Baru" },
];

const testimonials = [
  {
    quote: "Advokata Partners adalah mitra hukum terbaik yang pernah kami miliki. Profesionalisme dan dedikasi mereka luar biasa.",
    author: "Direktur Utama",
    company: "PT Maju Bersama Tbk",
    rating: 5,
  },
  {
    quote: "Tim mereka berhasil menangani akuisisi kompleks kami dengan sempurna. Sangat merekomendasikan untuk transaksi M&A.",
    author: "CFO",
    company: "Grup Investasi Nusantara",
    rating: 5,
  },
  {
    quote: "Responsif, kompeten, dan selalu memberikan solusi praktis. Sudah 10 tahun menjadi klien setia.",
    author: "General Counsel",
    company: "Perusahaan Multinasional",
    rating: 5,
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

      {/* Leadership Team */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Dipimpin oleh para pengacara berpengalaman yang telah membangun
              reputasi Advokata Partners selama hampir tiga dekade.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <Link key={leader.name} href="/attorneys">
                <Card className="h-full group">
                  <div className="relative aspect-[4/5] bg-navy/10 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-gold font-medium text-sm mt-1">
                      {leader.title}
                    </p>
                    <p className="text-charcoal/60 text-sm mt-2 line-clamp-2">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" asChild>
              <Link href="/attorneys">
                Lihat Semua Tim Kami
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Pro Bono & CSR */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Komitmen Sosial & Pro Bono
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Kami percaya bahwa keberhasilan bisnis harus diimbangi dengan
                kontribusi kepada masyarakat. Melalui program pro bono dan
                tanggung jawab sosial, kami memberikan dampak positif bagi
                komunitas yang membutuhkan.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {probonoStats.map((stat) => (
                  <div key={stat.label} className="text-center bg-ivory rounded-lg p-4">
                    <div className="text-2xl font-bold text-navy font-heading">
                      {stat.number}
                    </div>
                    <div className="text-charcoal/60 text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {csrPrograms.map((program) => (
                <Card key={program.title} hover={false}>
                  <CardContent className="p-5">
                    <program.icon className="h-8 w-8 text-gold mb-3" />
                    <h3 className="font-heading font-semibold text-navy mb-2">
                      {program.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="text-center mb-16">
            <Globe className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Jaringan Global
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Melalui aliansi strategis dengan firma hukum terkemuka di seluruh
              dunia, kami dapat mendukung klien dalam transaksi lintas batas
              di lebih dari 30 negara.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {globalNetwork.map((network) => (
              <Card key={network.region} hover={false} className="bg-white/5 border-white/10">
                <CardContent className="p-5 text-center">
                  <MapPin className="h-6 w-6 text-gold mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-white mb-2">
                    {network.region}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {network.countries}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold font-heading">30+</div>
              <div className="text-white/70 mt-2">Negara Terjangkau</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold font-heading">50+</div>
              <div className="text-white/70 mt-2">Firma Mitra</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold font-heading">100+</div>
              <div className="text-white/70 mt-2">Transaksi Lintas Batas</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Berikut adalah
              beberapa testimoni dari klien yang telah mempercayakan urusan
              hukum mereka kepada kami.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover={false}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gold/30 mb-4" />
                  <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-navy">
                      {testimonial.author}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us - Additional */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Mengapa Memilih Advokata Partners?
            </h2>
            <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Rekam Jejak Terbukti",
                description: "Lebih dari 1.000 kasus dan transaksi berhasil ditangani dengan tingkat keberhasilan 95%.",
              },
              {
                icon: Users,
                title: "Tim Multidisiplin",
                description: "Pengacara dengan berbagai spesialisasi bekerja sama untuk solusi komprehensif.",
              },
              {
                icon: Globe,
                title: "Kapabilitas Global",
                description: "Jaringan mitra internasional untuk mendukung transaksi lintas negara.",
              },
              {
                icon: Handshake,
                title: "Pendekatan Personal",
                description: "Setiap klien mendapat perhatian penuh dari partner yang berpengalaman.",
              },
              {
                icon: Building2,
                title: "Pemahaman Industri",
                description: "Pengalaman mendalam di berbagai sektor industri dan regulasi terkait.",
              },
              {
                icon: Scale,
                title: "Etika Tertinggi",
                description: "Berpegang teguh pada standar etika profesi dan integritas tanpa kompromi.",
              },
            ].map((item) => (
              <Card key={item.title} hover={false}>
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
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

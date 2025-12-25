import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { insights } from "@/data/insights";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  FileText,
  Mic,
  Video,
  Download,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel Hukum",
  description:
    "Artikel hukum, analisis industri, dan komentar ahli dari pengacara Advokata Partners.",
};

const categories = [
  "Semua",
  "Hukum Korporasi",
  "Merger & Akuisisi",
  "Properti & Real Estat",
  "Kekayaan Intelektual",
  "Litigasi",
  "Perbankan & Keuangan",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Artikel Hukum
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Tetap terinformasi dengan perkembangan hukum terbaru, analisis industri,
              dan komentar ahli dari pengacara kami. Artikel kami membantu Anda
              menavigasi isu hukum kompleks dan membuat keputusan bisnis yang tepat.
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
                  category === "Semua"
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
                        {new Date(insights[0].date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
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
                        Baca Artikel
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
                        {new Date(insight.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
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
              Berlangganan Newsletter Kami
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Dapatkan artikel hukum terbaru dan update industri langsung di inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-white font-medium rounded-md hover:bg-gold-dark transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Jenis Konten
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami menyediakan berbagai format konten untuk memenuhi kebutuhan
              informasi hukum Anda.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Artikel Hukum",
                description: "Analisis mendalam tentang perkembangan hukum terbaru dan implikasinya.",
                count: "50+ artikel",
              },
              {
                icon: BookOpen,
                title: "Legal Alerts",
                description: "Update cepat tentang perubahan regulasi dan kebijakan yang perlu Anda ketahui.",
                count: "Mingguan",
              },
              {
                icon: Video,
                title: "Webinar",
                description: "Sesi interaktif dengan pengacara kami membahas topik hukum populer.",
                count: "Bulanan",
              },
              {
                icon: Download,
                title: "Panduan & E-book",
                description: "Materi komprehensif yang dapat diunduh untuk referensi Anda.",
                count: "20+ panduan",
              },
            ].map((type) => (
              <Card key={type.title} hover={false}>
                <CardContent className="p-6 text-center">
                  <type.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-3">
                    {type.description}
                  </p>
                  <span className="text-gold font-medium text-sm">{type.count}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Topik Populer
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Topik-topik yang paling banyak dibaca oleh klien dan profesional hukum.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UU Cipta Kerja & Implikasinya",
                count: "15 artikel",
                trending: true,
              },
              {
                title: "Regulasi Fintech & Pembayaran Digital",
                count: "12 artikel",
                trending: true,
              },
              {
                title: "M&A di Era Digital",
                count: "10 artikel",
                trending: false,
              },
              {
                title: "Perlindungan Data Pribadi (PDP)",
                count: "18 artikel",
                trending: true,
              },
              {
                title: "Investasi Asing di Indonesia",
                count: "8 artikel",
                trending: false,
              },
              {
                title: "Penyelesaian Sengketa Bisnis",
                count: "14 artikel",
                trending: false,
              },
            ].map((topic) => (
              <Card key={topic.title} className="group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {topic.title}
                    </h3>
                    {topic.trending && (
                      <TrendingUp className="h-5 w-5 text-gold shrink-0" />
                    )}
                  </div>
                  <p className="text-charcoal/60 text-sm">{topic.count}</p>
                  <div className="mt-4 flex items-center text-gold font-medium text-sm group-hover:gap-2 transition-all">
                    Lihat Artikel
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Authors */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Penulis Unggulan
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Artikel kami ditulis oleh pengacara berpengalaman dengan keahlian
              di berbagai bidang praktik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexander Widodo",
                role: "Managing Partner",
                expertise: "Hukum Korporasi, M&A",
                articles: 25,
                image: "/images/attorneys/alexander-widodo.jpg",
              },
              {
                name: "Sarah Tanujaya",
                role: "Senior Partner",
                expertise: "Litigasi Komersial",
                articles: 18,
                image: "/images/attorneys/sarah-tanujaya.jpg",
              },
              {
                name: "Michael Hartono",
                role: "Partner",
                expertise: "Perbankan & Keuangan",
                articles: 22,
                image: "/images/attorneys/michael-hartono.jpg",
              },
              {
                name: "Dewi Kusuma",
                role: "Partner",
                expertise: "Real Estat",
                articles: 15,
                image: "/images/attorneys/dewi-kusuma.jpg",
              },
            ].map((author) => (
              <Card key={author.name} hover={false} className="bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {author.name}
                  </h3>
                  <p className="text-gold text-sm">{author.role}</p>
                  <p className="text-white/60 text-sm mt-2">{author.expertise}</p>
                  <p className="text-white/80 text-sm mt-3">
                    {author.articles} artikel dipublikasikan
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Acara Mendatang
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Bergabunglah dengan webinar dan seminar kami untuk mendapatkan
              insight langsung dari pengacara kami.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Webinar: Update UU Perlindungan Data Pribadi",
                date: "15 Januari 2025",
                time: "14:00 - 16:00 WIB",
                type: "Webinar",
                speakers: ["Sarah Tanujaya", "Jonathan Wijaya"],
              },
              {
                title: "Seminar: Strategi M&A di 2025",
                date: "22 Januari 2025",
                time: "09:00 - 12:00 WIB",
                type: "Seminar",
                speakers: ["Alexander Widodo", "Michael Hartono"],
              },
              {
                title: "Workshop: Due Diligence dalam Akuisisi",
                date: "5 Februari 2025",
                time: "13:00 - 17:00 WIB",
                type: "Workshop",
                speakers: ["Michael Hartono", "Dewi Kusuma"],
              },
            ].map((event) => (
              <Card key={event.title} hover={false}>
                <CardContent className="p-6">
                  <span className="inline-block bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {event.type}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-charcoal/70">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal/70">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal/70">
                      <Users className="h-4 w-4" />
                      {event.speakers.join(", ")}
                    </div>
                  </div>
                  <Button variant="secondary" size="sm" className="w-full">
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Publications & Awards */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Publikasi & Kontribusi
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Pengacara kami secara aktif berkontribusi pada perkembangan
                hukum Indonesia melalui berbagai publikasi dan partisipasi
                dalam organisasi profesi.
              </p>
              <div className="space-y-4">
                {[
                  "Kontributor tetap Hukumonline dan Kontan",
                  "Penulis buku tentang Hukum Bisnis Indonesia",
                  "Pembicara di konferensi hukum internasional",
                  "Anggota tim penyusun regulasi OJK",
                  "Kolumnis di media hukum nasional",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Unduh Materi Gratis
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Panduan Pendirian PT di Indonesia", pages: "32 halaman" },
                  { title: "Checklist Due Diligence M&A", pages: "15 halaman" },
                  { title: "FAQ UU Perlindungan Data Pribadi", pages: "24 halaman" },
                  { title: "Template Perjanjian Kerja", pages: "10 halaman" },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="flex items-center justify-between p-4 bg-ivory rounded-lg hover:bg-ivory-dark transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-gold" />
                      <div>
                        <p className="font-medium text-navy text-sm">{doc.title}</p>
                        <p className="text-charcoal/60 text-xs">{doc.pages}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-charcoal/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Butuh Konsultasi Hukum?
            </h2>
            <p className="text-white/80 mb-8">
              Artikel kami hanya memberikan informasi umum. Untuk nasihat hukum
              yang sesuai dengan situasi Anda, silakan konsultasikan dengan tim kami.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">
                Jadwalkan Konsultasi
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

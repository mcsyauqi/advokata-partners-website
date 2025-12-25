import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { attorneys } from "@/data/attorneys";
import {
  Mail,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  ArrowRight,
  Scale,
  Globe,
  BookOpen,
  Building2,
  Quote,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tim Pengacara",
  description:
    "Temui para pengacara berpengalaman di Advokata Partners yang memberikan hasil luar biasa bagi klien di berbagai bidang praktik.",
};

export default function AttorneysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Tim Pengacara Kami
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Pengacara kami membawa latar belakang beragam dan keahlian mendalam
              ke setiap perkara. Setiap anggota tim kami berkomitmen untuk memberikan
              layanan luar biasa dan mencapai hasil terbaik bagi klien kami.
            </p>
          </div>
        </Container>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          {/* Filter by Practice Area */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {["Semua", "Hukum Korporasi", "M&A", "Litigasi", "Real Estat", "Kekayaan Intelektual", "Perbankan"].map((area) => (
                <button
                  key={area}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    area === "Semua"
                      ? "bg-navy text-white"
                      : "bg-white text-charcoal hover:bg-navy hover:text-white"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <Link key={attorney.id} href={`/attorneys/${attorney.slug}`}>
                <Card className="h-full group">
                  {/* Photo */}
                  <div className="relative aspect-[4/5] bg-navy/10 overflow-hidden">
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-3">
                        <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                          <Mail className="h-4 w-4 text-white" />
                        </span>
                        <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                          <Phone className="h-4 w-4 text-white" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h2 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                      {attorney.name}
                    </h2>
                    <p className="text-gold font-medium mt-1">{attorney.title}</p>
                    <p className="text-charcoal/60 text-sm mt-3">
                      {attorney.practiceAreas.join(" | ")}
                    </p>
                    <div className="mt-4 pt-4 border-t border-silver/20">
                      <div className="flex items-center gap-2 text-sm text-charcoal/70">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{attorney.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Pengacara Berpengalaman", icon: Users },
              { number: "15+", label: "Partner Senior", icon: Briefcase },
              { number: "10+", label: "Universitas Terkemuka", icon: GraduationCap },
              { number: "30+", label: "Penghargaan Industri", icon: Award },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
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

      {/* Why Our Team */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Mengapa Tim Kami Berbeda
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami bangga memiliki tim pengacara terbaik dengan latar belakang
              beragam dan komitmen tinggi terhadap keberhasilan klien.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Pendidikan Terbaik",
                description: "Lulusan universitas hukum terkemuka di Indonesia dan luar negeri dengan spesialisasi mendalam.",
              },
              {
                icon: Briefcase,
                title: "Pengalaman Luas",
                description: "Pengalaman puluhan tahun menangani transaksi dan perkara kompleks di berbagai industri.",
              },
              {
                icon: Globe,
                title: "Perspektif Global",
                description: "Pengalaman internasional dan jaringan global untuk mendukung transaksi lintas batas.",
              },
              {
                icon: Scale,
                title: "Integritas Tinggi",
                description: "Berpegang teguh pada standar etika profesi tertinggi dalam setiap penugasan.",
              },
              {
                icon: BookOpen,
                title: "Pembelajaran Berkelanjutan",
                description: "Terus mengikuti perkembangan hukum terbaru melalui pelatihan dan publikasi.",
              },
              {
                icon: Users,
                title: "Kolaborasi Tim",
                description: "Bekerja sebagai tim terpadu untuk memberikan solusi komprehensif kepada klien.",
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

      {/* Practice Area Leaders */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Kepala Praktik
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Setiap bidang praktik kami dipimpin oleh partner berpengalaman
              dengan keahlian mendalam di bidangnya.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "Hukum Korporasi",
                name: "Alexander Widodo",
                experience: "35+ tahun pengalaman",
                image: "/images/attorneys/alexander-widodo.jpg",
              },
              {
                area: "Merger & Akuisisi",
                name: "Michael Hartono",
                experience: "20+ tahun pengalaman",
                image: "/images/attorneys/michael-hartono.jpg",
              },
              {
                area: "Litigasi",
                name: "Sarah Tanujaya",
                experience: "18+ tahun pengalaman",
                image: "/images/attorneys/sarah-tanujaya.jpg",
              },
              {
                area: "Real Estat",
                name: "Dewi Kusuma",
                experience: "15+ tahun pengalaman",
                image: "/images/attorneys/dewi-kusuma.jpg",
              },
              {
                area: "Kekayaan Intelektual",
                name: "Jonathan Wijaya",
                experience: "12+ tahun pengalaman",
                image: "/images/attorneys/jonathan-wijaya.jpg",
              },
              {
                area: "Perbankan & Keuangan",
                name: "Michael Hartono",
                experience: "20+ tahun pengalaman",
                image: "/images/attorneys/michael-hartono.jpg",
              },
            ].map((leader, index) => (
              <Card key={index} className="group">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gold text-sm font-medium">{leader.area}</p>
                      <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-charcoal/60 text-sm">{leader.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-gold/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white font-heading leading-relaxed mb-8">
              &ldquo;Tim pengacara Advokata Partners sangat profesional dan berdedikasi.
              Mereka tidak hanya memberikan nasihat hukum, tetapi juga memahami
              bisnis kami secara mendalam.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white font-semibold">CEO</p>
            <p className="text-white/60">Perusahaan Teknologi Terkemuka</p>
          </div>
        </Container>
      </section>

      {/* Education & Bar Admissions */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Latar Belakang Pendidikan
              </h2>
              <p className="text-charcoal/70 mb-6">
                Tim kami terdiri dari lulusan institusi hukum terkemuka di
                Indonesia dan internasional.
              </p>
              <div className="space-y-4">
                {[
                  "Universitas Indonesia",
                  "Universitas Gadjah Mada",
                  "Universitas Padjadjaran",
                  "Harvard Law School",
                  "National University of Singapore",
                  "Melbourne Law School",
                ].map((univ) => (
                  <div key={univ} className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-gold" />
                    <span className="text-charcoal/80">{univ}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Lisensi & Keanggotaan
              </h2>
              <p className="text-charcoal/70 mb-6">
                Pengacara kami memiliki lisensi praktik dan keanggotaan di
                berbagai organisasi profesi.
              </p>
              <div className="space-y-4">
                {[
                  "PERADI (Perhimpunan Advokat Indonesia)",
                  "HKHPM (Himpunan Konsultan Hukum Pasar Modal)",
                  "AKHI (Asosiasi Konsultan HKI Indonesia)",
                  "IBA (International Bar Association)",
                  "IPBA (Inter-Pacific Bar Association)",
                  "ASEAN Law Association",
                ].map((org) => (
                  <div key={org} className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-gold" />
                    <span className="text-charcoal/80">{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="bg-navy rounded-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  Bergabunglah dengan Tim Kami
                </h2>
                <p className="text-white/80 mb-6">
                  Kami selalu mencari pengacara berbakat yang berbagi komitmen
                  kami terhadap keunggulan. Jelajahi peluang karir di Advokata Partners.
                </p>
                <div className="flex flex-wrap gap-4">
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
              <div className="flex justify-center lg:justify-end">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Lokasi Kantor", value: "3 Kota" },
                    { label: "Bidang Praktik", value: "12+" },
                    { label: "Pengembangan", value: "Berkelanjutan" },
                    { label: "Budaya", value: "Kolaboratif" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-gold font-bold text-lg">{item.value}</p>
                      <p className="text-white/60 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              Butuh Konsultasi?
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
              Tim kami siap membantu Anda. Hubungi kami untuk menjadwalkan
              konsultasi dengan pengacara yang sesuai dengan kebutuhan Anda.
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

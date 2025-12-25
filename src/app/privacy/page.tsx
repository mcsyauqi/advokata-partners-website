import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield, Lock, Eye, FileText, UserCheck, Bell, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Advokata Partners - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
};

const privacySections = [
  {
    icon: FileText,
    title: "Informasi yang Kami Kumpulkan",
    content: [
      "Informasi identitas: nama, alamat email, nomor telepon, dan alamat.",
      "Informasi profesional: nama perusahaan, jabatan, dan bidang industri.",
      "Data komunikasi: korespondensi dan catatan rapat dengan tim kami.",
      "Data teknis: alamat IP, jenis browser, dan informasi perangkat.",
      "Data penggunaan: halaman yang dikunjungi dan cara Anda menggunakan situs kami.",
    ],
  },
  {
    icon: Eye,
    title: "Cara Kami Menggunakan Informasi",
    content: [
      "Memberikan layanan hukum profesional yang Anda minta.",
      "Berkomunikasi mengenai kasus dan layanan Anda.",
      "Mengirimkan pembaruan hukum dan newsletter (dengan persetujuan Anda).",
      "Meningkatkan layanan dan pengalaman pengguna di situs kami.",
      "Mematuhi kewajiban hukum dan regulasi yang berlaku.",
    ],
  },
  {
    icon: Shield,
    title: "Perlindungan Data",
    content: [
      "Enkripsi SSL/TLS untuk semua transmisi data.",
      "Akses terbatas hanya untuk personel yang berwenang.",
      "Audit keamanan berkala dan pengujian penetrasi.",
      "Penyimpanan data di server yang aman dengan backup terenkripsi.",
      "Kebijakan retensi data yang ketat dan penghapusan aman.",
    ],
  },
  {
    icon: UserCheck,
    title: "Hak Privasi Anda",
    content: [
      "Hak untuk mengakses data pribadi yang kami simpan tentang Anda.",
      "Hak untuk meminta koreksi data yang tidak akurat.",
      "Hak untuk meminta penghapusan data (dengan batasan hukum tertentu).",
      "Hak untuk menarik persetujuan penggunaan data.",
      "Hak untuk mengajukan keluhan ke otoritas perlindungan data.",
    ],
  },
];

const kerahasiaanPoin = [
  {
    title: "Hak Istimewa Pengacara-Klien",
    description: "Semua komunikasi antara Anda dan pengacara kami dilindungi oleh hak istimewa pengacara-klien yang diakui oleh hukum Indonesia.",
  },
  {
    title: "Kode Etik Profesi",
    description: "Kami terikat oleh Kode Etik Advokat Indonesia (KEAI) yang mewajibkan kerahasiaan absolut terhadap informasi klien.",
  },
  {
    title: "Perjanjian Kerahasiaan",
    description: "Semua karyawan dan mitra kami menandatangani perjanjian kerahasiaan yang ketat sebelum bergabung dengan firma.",
  },
  {
    title: "Sistem Informasi Terpisah",
    description: "Data klien disimpan dalam sistem terpisah dengan kontrol akses berbasis peran yang ketat.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center">
                <Lock className="h-7 w-7 text-gold" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
                Kebijakan Privasi
              </h1>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Di Advokata Partners, kami berkomitmen untuk melindungi privasi dan
              kerahasiaan informasi klien kami. Kebijakan ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.
            </p>
            <p className="text-white/60 text-sm mt-4">
              Terakhir diperbarui: 1 Desember 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Komitmen Kami */}
      <section className="py-16 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card hover={false} className="bg-gold/5 border-gold/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-gold shrink-0 mt-1" />
                  <div>
                    <h2 className="font-heading text-xl font-bold text-navy mb-3">
                      Komitmen Kami terhadap Privasi Anda
                    </h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      Sebagai firma hukum, menjaga kerahasiaan adalah inti dari praktik kami.
                      Kami menerapkan standar keamanan tertinggi dan mematuhi semua peraturan
                      perlindungan data yang berlaku di Indonesia, termasuk UU Perlindungan
                      Data Pribadi (UU PDP). Kepercayaan Anda adalah aset terpenting kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Kebijakan Privasi Detail */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Praktik Privasi Kami
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Berikut adalah penjelasan lengkap tentang bagaimana kami menangani
                informasi pribadi Anda.
              </p>
              <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
            </div>

            <div className="space-y-12">
              {privacySections.map((section, index) => (
                <div key={section.title} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-navy" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                      {index + 1}. {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-charcoal/80"
                        >
                          <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Kerahasiaan Pengacara-Klien */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Kerahasiaan Pengacara-Klien
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Sebagai firma hukum, kami terikat oleh kewajiban kerahasiaan yang
              lebih ketat dari kebijakan privasi standar.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {kerahasiaanPoin.map((poin) => (
              <Card key={poin.title} hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    {poin.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {poin.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Cookie dan Tracking */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                  Cookie & Teknologi Pelacakan
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    Situs web kami menggunakan cookie dan teknologi serupa untuk
                    meningkatkan pengalaman Anda. Cookie adalah file kecil yang
                    disimpan di perangkat Anda.
                  </p>
                  <p>
                    <strong className="text-navy">Cookie Esensial:</strong> Diperlukan untuk
                    fungsi dasar situs web dan tidak dapat dinonaktifkan.
                  </p>
                  <p>
                    <strong className="text-navy">Cookie Analitik:</strong> Membantu kami
                    memahami bagaimana pengunjung menggunakan situs kami. Anda dapat
                    memilih untuk tidak mengaktifkan cookie ini.
                  </p>
                  <p>
                    Anda dapat mengatur preferensi cookie melalui pengaturan browser
                    Anda kapan saja.
                  </p>
                </div>
              </div>
              <div className="bg-ivory-dark rounded-lg p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-6">
                  Jenis Cookie yang Kami Gunakan
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Cookie Sesi", purpose: "Menjaga status login Anda" },
                    { name: "Cookie Preferensi", purpose: "Mengingat pilihan bahasa dan tampilan" },
                    { name: "Cookie Analitik", purpose: "Menganalisis penggunaan situs" },
                    { name: "Cookie Keamanan", purpose: "Melindungi dari serangan siber" },
                  ].map((cookie) => (
                    <div key={cookie.name} className="flex items-start gap-3">
                      <Bell className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy">{cookie.name}</p>
                        <p className="text-sm text-charcoal/60">{cookie.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Berbagi Data dengan Pihak Ketiga */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
              Berbagi Data dengan Pihak Ketiga
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga.
                Kami hanya dapat membagikan informasi Anda dalam keadaan berikut:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dengan Persetujuan Anda",
                    desc: "Ketika Anda secara eksplisit menyetujui berbagi informasi tertentu.",
                  },
                  {
                    title: "Kewajiban Hukum",
                    desc: "Ketika diwajibkan oleh hukum, perintah pengadilan, atau otoritas regulasi.",
                  },
                  {
                    title: "Penyedia Layanan",
                    desc: "Vendor terpercaya yang membantu operasi kami dengan perjanjian kerahasiaan ketat.",
                  },
                  {
                    title: "Kepentingan Vital",
                    desc: "Untuk melindungi keselamatan atau kepentingan vital individu.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    <div>
                      <p className="font-medium text-navy">{item.title}</p>
                      <p className="text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Retensi Data */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Retensi & Penghapusan Data
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    Data Kasus Hukum
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Disimpan selama 10 tahun setelah penutupan kasus sesuai
                    regulasi profesi advokat.
                  </p>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    Data Pemasaran
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Disimpan hingga Anda berhenti berlangganan atau meminta
                    penghapusan.
                  </p>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    Data Analitik
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Dianonimkan dan diagregasi setelah 26 bulan untuk analisis
                    jangka panjang.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Hubungi Kami */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Pertanyaan tentang Privasi?
            </h2>
            <p className="text-white/80 mb-8">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin
              menggunakan hak privasi Anda, silakan hubungi Petugas Perlindungan Data kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@advokata.co.id"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
              >
                <Mail className="h-5 w-5" />
                privacy@advokata.co.id
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-navy transition-colors"
              >
                Hubungi Kami
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Link ke Terms */}
      <section className="py-12 bg-ivory-dark">
        <Container>
          <div className="text-center">
            <p className="text-charcoal/70">
              Lihat juga{" "}
              <Link
                href="/terms"
                className="text-gold hover:text-gold-dark font-medium"
              >
                Syarat & Ketentuan
              </Link>{" "}
              penggunaan layanan kami.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan layanan Advokata Partners - Ketahui hak dan kewajiban Anda.",
};

const ketentuanUtama = [
  {
    icon: CheckCircle,
    title: "Yang Anda Setujui",
    items: [
      "Memberikan informasi yang akurat dan lengkap kepada kami.",
      "Mematuhi semua hukum dan regulasi yang berlaku.",
      "Menjaga kerahasiaan kredensial akun Anda.",
      "Menggunakan layanan kami hanya untuk tujuan yang sah.",
      "Membayar biaya layanan sesuai kesepakatan.",
    ],
    color: "green",
  },
  {
    icon: XCircle,
    title: "Yang Tidak Diperbolehkan",
    items: [
      "Menggunakan layanan untuk kegiatan ilegal.",
      "Memberikan informasi palsu atau menyesatkan.",
      "Mendistribusikan malware atau konten berbahaya.",
      "Melanggar hak kekayaan intelektual pihak lain.",
      "Mengakses sistem kami secara tidak sah.",
    ],
    color: "red",
  },
];

const layananTerms = [
  {
    title: "Ruang Lingkup Layanan",
    content:
      "Layanan hukum yang kami berikan terbatas pada ruang lingkup yang disepakati dalam surat penunjukan atau perjanjian layanan. Setiap layanan tambahan memerlukan persetujuan tertulis terpisah.",
  },
  {
    title: "Konsultasi Awal",
    content:
      "Konsultasi awal bersifat eksploratori dan tidak menciptakan hubungan pengacara-klien sampai surat penunjukan ditandatangani. Informasi yang disampaikan dalam konsultasi awal tetap dijaga kerahasiaannya.",
  },
  {
    title: "Komunikasi",
    content:
      "Kami akan berkomunikasi dengan Anda melalui saluran yang disepakati. Komunikasi melalui email tidak dijamin 100% aman; untuk informasi sangat sensitif, harap gunakan saluran komunikasi yang kami sarankan.",
  },
  {
    title: "Waktu Penyelesaian",
    content:
      "Perkiraan waktu yang diberikan bersifat indikatif dan dapat berubah tergantung kompleksitas kasus dan faktor eksternal seperti jadwal pengadilan atau respons pihak ketiga.",
  },
];

const biayaTerms = [
  {
    title: "Struktur Biaya",
    description:
      "Biaya layanan dapat berupa tarif per jam, biaya tetap, atau kombinasi keduanya. Struktur biaya akan dijelaskan secara terperinci dalam surat penunjukan.",
  },
  {
    title: "Retainer",
    description:
      "Untuk beberapa layanan, kami mungkin memerlukan pembayaran retainer di muka. Retainer akan dikurangi sesuai dengan pekerjaan yang dilakukan.",
  },
  {
    title: "Pengeluaran",
    description:
      "Pengeluaran terpisah seperti biaya pengadilan, biaya notaris, dan biaya perjalanan akan ditagihkan secara terpisah dengan bukti pengeluaran.",
  },
  {
    title: "Penagihan",
    description:
      "Tagihan dikeluarkan secara berkala (biasanya bulanan) dan jatuh tempo dalam 30 hari. Keterlambatan pembayaran dapat dikenakan bunga sesuai ketentuan yang berlaku.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center">
                <FileText className="h-7 w-7 text-gold" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
                Syarat & Ketentuan
              </h1>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Dokumen ini mengatur hubungan antara Anda dan Advokata Partners
              dalam penggunaan layanan kami. Mohon baca dengan seksama sebelum
              menggunakan layanan kami.
            </p>
            <p className="text-white/60 text-sm mt-4">
              Terakhir diperbarui: 1 Desember 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Pengantar */}
      <section className="py-16 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card hover={false} className="bg-gold/5 border-gold/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="h-8 w-8 text-gold shrink-0 mt-1" />
                  <div>
                    <h2 className="font-heading text-xl font-bold text-navy mb-3">
                      Perjanjian Layanan Hukum
                    </h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      Dengan menggunakan layanan Advokata Partners, Anda menyetujui
                      syarat dan ketentuan yang tercantum di sini. Syarat-syarat ini
                      berlaku bersamaan dengan surat penunjukan atau perjanjian layanan
                      khusus yang mungkin Anda tandatangani dengan kami. Jika terdapat
                      pertentangan, surat penunjukan akan berlaku.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Kewajiban Pengguna */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Kewajiban & Larangan
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Penggunaan layanan kami tunduk pada ketentuan berikut.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ketentuanUtama.map((ketentuan) => (
              <Card
                key={ketentuan.title}
                hover={false}
                className={
                  ketentuan.color === "green"
                    ? "border-green-200 bg-green-50/30"
                    : "border-red-200 bg-red-50/30"
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ketentuan.icon
                      className={`h-6 w-6 ${
                        ketentuan.color === "green"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    <h3 className="font-heading text-lg font-semibold text-navy">
                      {ketentuan.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {ketentuan.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-charcoal/80 text-sm"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                            ketentuan.color === "green"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
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

      {/* Ketentuan Layanan */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Ketentuan Layanan Hukum
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold mx-auto" />
            </div>

            <div className="space-y-6">
              {layananTerms.map((term, index) => (
                <Card key={term.title} hover={false}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                          {term.title}
                        </h3>
                        <p className="text-charcoal/70 leading-relaxed">
                          {term.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Biaya & Pembayaran */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Biaya & Pembayaran
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Transparansi biaya adalah prioritas kami. Berikut ketentuan
              terkait biaya layanan.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {biayaTerms.map((term) => (
              <Card key={term.title} hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    {term.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {term.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Batasan Tanggung Jawab */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <AlertTriangle className="h-8 w-8 text-gold shrink-0 mt-1" />
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                  Batasan Tanggung Jawab
                </h2>
                <p className="text-charcoal/70 leading-relaxed">
                  Pengacara kami akan memberikan nasihat hukum terbaik berdasarkan
                  informasi yang tersedia dan hukum yang berlaku. Namun, kami tidak
                  dapat menjamin hasil spesifik dari proses hukum karena berbagai
                  faktor di luar kendali kami.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="font-heading text-lg font-semibold text-navy mb-4">
                Hal-hal yang Perlu Dipahami:
              </h3>
              <ul className="space-y-3">
                {[
                  "Hasil kasus hukum tidak dapat dijamin dan bergantung pada banyak faktor termasuk keputusan pengadilan.",
                  "Nasihat hukum diberikan berdasarkan informasi yang Anda berikan; informasi tidak lengkap dapat mempengaruhi kualitas nasihat.",
                  "Perubahan hukum atau regulasi dapat mempengaruhi strategi atau hasil yang diharapkan.",
                  "Tanggung jawab kami terbatas pada nilai layanan yang dibayarkan atau batas asuransi profesional kami.",
                  "Kami tidak bertanggung jawab atas kerugian tidak langsung, konsekuensial, atau kehilangan keuntungan.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-charcoal/80"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pengakhiran Layanan */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                  Pengakhiran Layanan
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    Hubungan pengacara-klien dapat diakhiri oleh kedua belah pihak
                    dengan pemberitahuan tertulis yang wajar, kecuali dilarang oleh
                    hukum atau perintah pengadilan.
                  </p>
                  <p>
                    Anda berhak mengakhiri penunjukan kami kapan saja. Kami akan
                    memberikan bantuan yang wajar untuk transisi ke pengacara baru.
                  </p>
                  <p>
                    Kami dapat mengundurkan diri dari representasi jika terdapat
                    konflik kepentingan, ketidakmampuan berkomunikasi yang wajar,
                    atau alasan lain yang diizinkan oleh kode etik profesi.
                  </p>
                </div>
              </div>
              <Card hover={false} className="bg-navy text-white">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Setelah Pengakhiran
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Semua tagihan yang belum dibayar tetap jatuh tempo.",
                      "Dokumen klien akan dikembalikan sesuai permintaan.",
                      "Kerahasiaan informasi tetap berlaku tanpa batas waktu.",
                      "Salinan file dapat disimpan sesuai regulasi profesi.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Penyelesaian Sengketa */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-navy mb-6">
              Penyelesaian Sengketa
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Jika terjadi sengketa terkait layanan kami, kami menganjurkan
              penyelesaian melalui dialog langsung terlebih dahulu. Jika tidak
              tercapai kesepakatan, sengketa akan diselesaikan melalui mediasi
              atau arbitrase sesuai Undang-Undang Arbitrase dan Alternatif
              Penyelesaian Sengketa Indonesia.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Negosiasi Langsung", desc: "Diskusi itikad baik antara kedua pihak" },
                { step: "2", title: "Mediasi", desc: "Mediasi dengan mediator yang disepakati bersama" },
                { step: "3", title: "Arbitrase", desc: "Arbitrase di BANI jika mediasi gagal" },
              ].map((item) => (
                <Card key={item.step} hover={false}>
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Perubahan Ketentuan */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-ivory-dark rounded-lg p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Perubahan Syarat & Ketentuan
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu
                untuk mencerminkan perubahan dalam praktik kami atau peraturan yang
                berlaku. Perubahan signifikan akan diberitahukan melalui email atau
                pengumuman di situs web kami.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Penggunaan layanan kami setelah perubahan berlaku dianggap sebagai
                penerimaan Anda terhadap syarat yang diperbarui. Kami menyarankan
                Anda untuk meninjau halaman ini secara berkala.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Ada Pertanyaan?
            </h2>
            <p className="text-white/80 mb-8">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini,
              tim kami siap membantu Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@advokata.co.id"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@advokata.co.id
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

      {/* Link ke Privacy */}
      <section className="py-12 bg-ivory-dark">
        <Container>
          <div className="text-center">
            <p className="text-charcoal/70">
              Lihat juga{" "}
              <Link
                href="/privacy"
                className="text-gold hover:text-gold-dark font-medium"
              >
                Kebijakan Privasi
              </Link>{" "}
              untuk informasi tentang bagaimana kami melindungi data Anda.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Shield,
  Users,
  ArrowRight,
  Building2,
  Globe,
  Award,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  firstName: z.string().min(2, "Nama depan wajib diisi"),
  lastName: z.string().min(2, "Nama belakang wajib diisi"),
  email: z.string().email("Mohon masukkan email yang valid"),
  phone: z.string().min(10, "Mohon masukkan nomor telepon yang valid"),
  company: z.string().optional(),
  practiceArea: z.string().min(1, "Mohon pilih bidang layanan"),
  message: z.string().min(10, "Mohon berikan detail lebih lanjut tentang pertanyaan Anda"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const practiceAreaOptions = [
  { value: "", label: "Pilih bidang layanan" },
  { value: "corporate-law", label: "Hukum Korporasi" },
  { value: "mergers-acquisitions", label: "Merger & Akuisisi" },
  { value: "real-estate", label: "Properti & Real Estat" },
  { value: "intellectual-property", label: "Kekayaan Intelektual" },
  { value: "litigation", label: "Litigasi" },
  { value: "banking-finance", label: "Perbankan & Keuangan" },
  { value: "other", label: "Lainnya" },
];

const offices = [
  {
    city: "Jakarta Pusat",
    address: "Jl. Sudirman Kav. 52-53",
    addressLine2: "Gedung BNI 46 Lt. 35",
    phone: "+62 21 1234 5678",
    email: "jakarta@advokata.co.id",
  },
  {
    city: "Jakarta Selatan",
    address: "Jl. TB Simatupang No. 18",
    addressLine2: "Cilandak, Jakarta 12430",
    phone: "+62 21 2345 6789",
    email: "jaksel@advokata.co.id",
  },
  {
    city: "Surabaya",
    address: "Jl. Basuki Rahmat No. 100",
    addressLine2: "Surabaya, Jawa Timur 60271",
    phone: "+62 31 3456 7890",
    email: "surabaya@advokata.co.id",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Hubungi Kami
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Siap mendiskusikan kebutuhan hukum Anda? Pengacara kami siap membantu.
              Hubungi kami untuk menjadwalkan konsultasi rahasia atau pelajari lebih
              lanjut tentang bagaimana kami dapat membantu Anda.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card hover={false}>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Minta Konsultasi
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                        Terima Kasih!
                      </h3>
                      <p className="text-charcoal/70 mb-6">
                        Kami telah menerima pertanyaan Anda dan akan menghubungi Anda
                        dalam satu hari kerja.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Kirim Pertanyaan Lain
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="firstName"
                          label="Nama Depan *"
                          placeholder="Budi"
                          {...register("firstName")}
                          error={errors.firstName?.message}
                        />
                        <Input
                          id="lastName"
                          label="Nama Belakang *"
                          placeholder="Santoso"
                          {...register("lastName")}
                          error={errors.lastName?.message}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="email"
                          type="email"
                          label="Alamat Email *"
                          placeholder="budi.santoso@perusahaan.com"
                          {...register("email")}
                          error={errors.email?.message}
                        />
                        <Input
                          id="phone"
                          type="tel"
                          label="Nomor Telepon *"
                          placeholder="0812-3456-7890"
                          {...register("phone")}
                          error={errors.phone?.message}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="company"
                          label="Perusahaan/Organisasi"
                          placeholder="PT Maju Bersama"
                          {...register("company")}
                        />
                        <Select
                          id="practiceArea"
                          label="Bidang Layanan *"
                          options={practiceAreaOptions}
                          {...register("practiceArea")}
                          error={errors.practiceArea?.message}
                        />
                      </div>

                      <Textarea
                        id="message"
                        label="Bagaimana kami dapat membantu Anda? *"
                        placeholder="Mohon jelaskan permasalahan hukum atau pertanyaan Anda..."
                        rows={5}
                        {...register("message")}
                        error={errors.message?.message}
                      />

                      <p className="text-sm text-charcoal/60">
                        Dengan mengirimkan formulir ini, Anda menyetujui{" "}
                        <a href="/privacy" className="text-gold hover:underline">
                          Kebijakan Privasi
                        </a>
                        . Semua komunikasi bersifat rahasia.
                      </p>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Mengirim..."
                        ) : (
                          <>
                            Kirim Pertanyaan
                            <Send className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">
                    Kontak Cepat
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Telepon Utama</p>
                        <a
                          href="tel:+622112345678"
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          (021) 1234-5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Email</p>
                        <a
                          href="mailto:info@advokata.co.id"
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          info@advokata.co.id
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Jam Kantor</p>
                        <p className="font-medium text-navy">
                          Sen-Jum: 09:00 - 18:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Offices */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">
                    Kantor Kami
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="pb-6 border-b border-silver/20 last:border-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-navy mb-2">
                          {office.city}
                        </h4>
                        <div className="space-y-2 text-sm text-charcoal/70">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                            <div>
                              <p>{office.address}</p>
                              <p>{office.addressLine2}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gold" />
                            <a
                              href={`tel:${office.phone}`}
                              className="hover:text-gold transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gold" />
                            <a
                              href={`mailto:${office.email}`}
                              className="hover:text-gold transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">
                  Urusan Mendesak
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Untuk masalah hukum yang sensitif waktu, pengacara kami tersedia
                  24/7.
                </p>
                <a
                  href="tel:+622112349999"
                  className="inline-flex items-center text-gold font-medium hover:text-gold-light transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (021) 1234-9999
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-navy/10 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-navy/30 mx-auto mb-4" />
          <p className="text-charcoal/50">
            Peta interaktif akan ditampilkan di sini
          </p>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Mengapa Menghubungi Kami?
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan layanan terbaik dan respons
              cepat untuk setiap pertanyaan Anda.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Respons Cepat",
                description: "Tim kami merespons dalam waktu 24 jam kerja.",
              },
              {
                icon: Shield,
                title: "Kerahasiaan Terjamin",
                description: "Semua informasi dilindungi oleh kerahasiaan pengacara-klien.",
              },
              {
                icon: Users,
                title: "Tim Ahli",
                description: "Langsung terhubung dengan pengacara berpengalaman.",
              },
              {
                icon: MessageCircle,
                title: "Konsultasi Awal Gratis",
                description: "Diskusi pertama tanpa biaya untuk memahami kebutuhan Anda.",
              },
            ].map((item) => (
              <Card key={item.title} hover={false}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Proses Konsultasi
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Langkah-langkah sederhana untuk memulai konsultasi dengan tim kami.
            </p>
            <div className="mt-6 h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Kirim Pertanyaan",
                  description: "Isi formulir atau hubungi kami langsung.",
                },
                {
                  step: "2",
                  title: "Konfirmasi",
                  description: "Tim kami akan menghubungi dalam 24 jam.",
                },
                {
                  step: "3",
                  title: "Konsultasi",
                  description: "Diskusi mendalam dengan pengacara ahli.",
                },
                {
                  step: "4",
                  title: "Proposal",
                  description: "Kami siapkan solusi dan estimasi biaya.",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <Card hover={false} className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-gold font-bold text-lg">{item.step}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/3 -right-4 w-8">
                      <ArrowRight className="h-6 w-6 text-gold/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Practice Areas Quick Links */}
      <section className="py-20 bg-navy">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Bidang Layanan Kami
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Pilih bidang praktik yang sesuai dengan kebutuhan Anda untuk
              langsung terhubung dengan tim ahli.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Hukum Korporasi", slug: "corporate-law" },
              { name: "Merger & Akuisisi", slug: "mergers-acquisitions" },
              { name: "Properti & Real Estat", slug: "real-estate" },
              { name: "Kekayaan Intelektual", slug: "intellectual-property" },
              { name: "Litigasi", slug: "litigation" },
              { name: "Perbankan & Keuangan", slug: "banking-finance" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <span className="text-white font-medium group-hover:text-gold transition-colors">
                  {area.name}
                </span>
                <ArrowRight className="h-5 w-5 text-gold" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="gold" size="lg" asChild>
              <Link href="/practice-areas">
                Lihat Semua Layanan
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                  q: "Apakah konsultasi pertama berbayar?",
                  a: "Konsultasi awal untuk memahami kebutuhan Anda tidak dikenakan biaya. Setelah itu, kami akan memberikan proposal dengan struktur biaya yang jelas.",
                },
                {
                  q: "Berapa lama respons untuk pertanyaan yang dikirim?",
                  a: "Kami berusaha merespons semua pertanyaan dalam waktu 24 jam kerja. Untuk urusan mendesak, silakan hubungi hotline kami yang tersedia 24/7.",
                },
                {
                  q: "Apakah bisa berkonsultasi secara online?",
                  a: "Ya, kami menyediakan konsultasi via video call untuk klien yang tidak dapat datang langsung ke kantor kami.",
                },
                {
                  q: "Bagaimana dengan kerahasiaan informasi saya?",
                  a: "Semua informasi yang Anda sampaikan dilindungi oleh kerahasiaan pengacara-klien sesuai dengan kode etik profesi advokat.",
                },
                {
                  q: "Apakah Advokata Partners menangani klien individual?",
                  a: "Ya, meskipun fokus utama kami adalah klien korporasi, kami juga melayani klien individual untuk berbagai kebutuhan hukum tertentu.",
                },
              ].map((faq, idx) => (
                <Card key={idx} hover={false}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-heading font-semibold text-navy mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-charcoal/70 text-sm leading-relaxed">
                          {faq.a}
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

      {/* Awards & Recognition */}
      <section className="py-16 bg-ivory">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              Kepercayaan Klien Kami
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Chambers Global", rating: "Band 1" },
              { name: "Legal 500", rating: "Tier 1" },
              { name: "Best Lawyers", rating: "2024" },
              { name: "Benchmark Litigation", rating: "Top Tier" },
            ].map((award) => (
              <div key={award.name} className="text-center">
                <Award className="h-10 w-10 text-gold mx-auto mb-2" />
                <div className="font-heading font-bold text-navy text-sm">
                  {award.name}
                </div>
                <div className="text-charcoal/60 text-xs mt-1">
                  {award.rating}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Building2 className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Kunjungi Kantor
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Jadwalkan kunjungan ke salah satu kantor kami
              </p>
              <Button variant="gold" size="sm" asChild>
                <Link href="#offices">
                  Lihat Lokasi
                </Link>
              </Button>
            </div>
            <div className="p-6 border-x border-white/10">
              <Globe className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Video Conference
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Konsultasi online melalui Zoom atau Google Meet
              </p>
              <Button variant="gold" size="sm" asChild>
                <a href="mailto:info@advokata.co.id?subject=Permintaan Video Conference">
                  Jadwalkan
                </a>
              </Button>
            </div>
            <div className="p-6">
              <Phone className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Telepon Langsung
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Bicara langsung dengan tim kami
              </p>
              <Button variant="gold" size="sm" asChild>
                <a href="tel:+622112345678">
                  (021) 1234-5678
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

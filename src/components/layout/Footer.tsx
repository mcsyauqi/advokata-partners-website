import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";

const layananHukum = [
  { name: "Hukum Korporasi", href: "/practice-areas/corporate-law" },
  { name: "Merger & Akuisisi", href: "/practice-areas/mergers-acquisitions" },
  { name: "Properti & Real Estat", href: "/practice-areas/real-estate" },
  { name: "Kekayaan Intelektual", href: "/practice-areas/intellectual-property" },
  { name: "Litigasi", href: "/practice-areas/litigation" },
  { name: "Perbankan & Keuangan", href: "/practice-areas/banking-finance" },
];

const linkCepat = [
  { name: "Tim Pengacara", href: "/attorneys" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Artikel Hukum", href: "/insights" },
  { name: "Karir", href: "/careers" },
  { name: "Hubungi Kami", href: "/contact" },
  { name: "Kebijakan Privasi", href: "/privacy" },
  { name: "Syarat & Ketentuan", href: "/terms" },
];

const kantorKami = [
  {
    city: "Jakarta Pusat",
    address: "Jl. Sudirman Kav. 52-53, Gedung BNI 46 Lt. 35",
    phone: "+62 21 1234 5678",
  },
  {
    city: "Jakarta Selatan",
    address: "Jl. TB Simatupang No. 18, Cilandak",
    phone: "+62 21 2345 6789",
  },
  {
    city: "Surabaya",
    address: "Jl. Basuki Rahmat No. 100, Surabaya",
    phone: "+62 31 3456 7890",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="font-heading text-2xl font-bold">
              ADVOKATA <span className="text-gold">PARTNERS</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Firma hukum korporasi dan komersial terkemuka yang menyediakan
              layanan hukum berkualitas tinggi sejak 1995. Kami berkomitmen
              melindungi kepentingan Anda dan membangun masa depan yang lebih baik.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Layanan Hukum */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Layanan Hukum
            </h3>
            <ul className="space-y-3">
              {layananHukum.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Link Cepat
            </h3>
            <ul className="space-y-3">
              {linkCepat.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kantor Kami */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Kantor Kami
            </h3>
            <div className="space-y-6">
              {kantorKami.map((office) => (
                <div key={office.city} className="space-y-2">
                  <h4 className="font-medium text-white">{office.city}</h4>
                  <div className="flex items-start gap-2 text-white/70 text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Advokata Partners. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@advokata.co.id"
                  className="hover:text-gold transition-colors"
                >
                  info@advokata.co.id
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-white/40">
              Created by{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors font-medium"
              >
                Creativism Digital Marketing
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

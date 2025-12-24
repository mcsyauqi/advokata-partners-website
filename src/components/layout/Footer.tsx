import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const practiceAreas = [
  { name: "Corporate Law", href: "/practice-areas/corporate-law" },
  { name: "Mergers & Acquisitions", href: "/practice-areas/mergers-acquisitions" },
  { name: "Real Estate", href: "/practice-areas/real-estate" },
  { name: "Intellectual Property", href: "/practice-areas/intellectual-property" },
  { name: "Litigation", href: "/practice-areas/litigation" },
  { name: "Banking & Finance", href: "/practice-areas/banking-finance" },
];

const quickLinks = [
  { name: "Our Attorneys", href: "/attorneys" },
  { name: "About the Firm", href: "/about" },
  { name: "Legal Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4500",
    phone: "+1 (555) 123-4000",
  },
  {
    city: "Washington, DC",
    address: "1200 Pennsylvania Avenue NW",
    phone: "+1 (555) 123-4100",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    phone: "+44 20 7123 4000",
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
              A leading corporate and commercial law firm providing exceptional
              legal counsel since 1995. We are committed to protecting your
              interests and building your future.
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
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
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

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">
              Our Offices
            </h3>
            <div className="space-y-6">
              {offices.map((office) => (
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
              &copy; {new Date().getFullYear()} Advokata Partners LLP. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:info@advokata.com"
                className="hover:text-gold transition-colors"
              >
                info@advokata.com
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

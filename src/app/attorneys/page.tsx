import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { attorneys } from "@/data/attorneys";
import { Mail, Phone } from "lucide-react";

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
    </>
  );
}

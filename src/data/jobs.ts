import { JobPosting } from "@/types";

export const jobs: JobPosting[] = [
  {
    id: "1",
    title: "Senior Associate - Korporasi/M&A",
    department: "Praktik Korporasi",
    location: "Jakarta Pusat",
    type: "Penuh Waktu",
    description:
      "Kami mencari Senior Associate berbakat untuk bergabung dengan praktik Korporasi/M&A kami. Kandidat ideal memiliki pengalaman substansial dalam transaksi kompleks dan keinginan untuk bekerja pada deal profil tinggi untuk klien yang sofistikated.",
    requirements: [
      "S.H. dari universitas hukum terkemuka dengan kredensial akademik sangat baik",
      "5-7 tahun pengalaman di firma hukum besar",
      "Pengalaman luas dalam transaksi M&A, termasuk deal perusahaan publik",
      "Kemampuan drafting dan negosiasi yang kuat",
      "Keanggotaan PERADI aktif diperlukan",
    ],
    responsibilities: [
      "Memimpin upaya due diligence untuk transaksi kompleks",
      "Menyusun dan menegosiasikan dokumen transaksi",
      "Mengelola tim deal dan berkoordinasi dengan spesialis",
      "Memelihara hubungan klien langsung",
      "Membimbing associate junior",
    ],
    postedDate: "2024-04-01",
  },
  {
    id: "2",
    title: "Associate - Litigasi",
    department: "Praktik Litigasi",
    location: "Jakarta Pusat",
    type: "Penuh Waktu",
    description:
      "Praktik Litigasi kami berkembang dan mencari Associate untuk bekerja pada sengketa komersial kompleks dan arbitrase. Ini adalah kesempatan untuk mengembangkan kemampuan first-chair sambil bekerja bersama pengacara litigasi yang diakui.",
    requirements: [
      "S.H. dari universitas hukum terkemuka",
      "3-5 tahun pengalaman litigasi komersial",
      "Kemampuan riset hukum dan penulisan yang kuat",
      "Pengalaman deposisi dan sidang pengadilan lebih disukai",
      "Keanggotaan PERADI aktif diperlukan",
    ],
    responsibilities: [
      "Melakukan riset hukum dan menyusun mosi dan brief",
      "Berpartisipasi dalam deposisi dan sidang pengadilan",
      "Mengelola proses penemuan bukti",
      "Membantu persiapan dan strategi persidangan",
      "Berkoordinasi dengan ahli dan saksi",
    ],
    postedDate: "2024-04-10",
  },
  {
    id: "3",
    title: "Partner - Kekayaan Intelektual",
    department: "Praktik KI",
    location: "Jakarta / Surabaya",
    type: "Penuh Waktu",
    description:
      "Kami mencari Partner untuk memimpin pertumbuhan praktik Kekayaan Intelektual kami. Kandidat ideal memiliki book of business yang kuat dan pengalaman dalam litigasi dan penuntutan paten.",
    requirements: [
      "S.H. dan gelar teknis di bidang teknik atau sains",
      "15+ tahun pengalaman hukum KI",
      "Hubungan klien yang mapan dan bisnis yang dapat dibawa",
      "Pendaftaran Konsultan HKI diperlukan",
      "Rekam jejak litigasi paten yang sukses",
    ],
    responsibilities: [
      "Memimpin dan mengembangkan grup praktik KI",
      "Mengelola hubungan klien kunci",
      "Menangani perkara litigasi paten berisiko tinggi",
      "Mengembangkan dan membimbing anggota tim KI",
      "Berkontribusi pada kepemimpinan dan strategi firma",
    ],
    postedDate: "2024-03-15",
  },
  {
    id: "4",
    title: "Sekretaris Hukum",
    department: "Administratif",
    location: "Jakarta Pusat",
    type: "Penuh Waktu",
    description:
      "Kami mencari Sekretaris Hukum berpengalaman untuk memberikan dukungan administratif komprehensif kepada pengacara di grup praktik Korporasi kami.",
    requirements: [
      "5+ tahun pengalaman sekretaris hukum di firma hukum",
      "Kemahiran dalam Microsoft Office dan sistem manajemen dokumen",
      "Kemampuan organisasi dan komunikasi yang sangat baik",
      "Pengalaman dengan transaksi korporasi lebih disukai",
      "Kemampuan mengelola banyak prioritas dan memenuhi tenggat waktu",
    ],
    responsibilities: [
      "Menyiapkan dan memformat dokumen hukum",
      "Mengelola kalender pengacara dan menjadwalkan rapat",
      "Mengkoordinasikan pengaturan perjalanan",
      "Memproses entri waktu dan laporan pengeluaran",
      "Memelihara file dan catatan klien",
    ],
    postedDate: "2024-04-05",
  },
  {
    id: "5",
    title: "Associate Magang",
    department: "Program Magang",
    location: "Jakarta Pusat",
    type: "Magang",
    description:
      "Program Associate Magang kami menawarkan mahasiswa hukum pengalaman mendalam bekerja bersama pengacara kami dalam perkara signifikan. Associate Magang adalah anggota integral tim kami dan menerima tugas kerja substantif di berbagai bidang praktik.",
    requirements: [
      "Saat ini terdaftar di program S.H. di fakultas hukum terakreditasi",
      "Catatan akademik yang kuat (peringkat atas 25% lebih disukai)",
      "Minat yang ditunjukkan dalam hukum korporasi atau litigasi",
      "Kemampuan menulis dan analitis yang sangat baik",
      "Otorisasi untuk bekerja di Indonesia",
    ],
    responsibilities: [
      "Melakukan riset hukum dan menyusun memorandum",
      "Membantu perkara klien di bawah supervisi pengacara",
      "Menghadiri rapat klien dan sidang pengadilan",
      "Berpartisipasi dalam program pelatihan dan acara sosial",
      "Menyelesaikan rotasi di berbagai grup praktik",
    ],
    postedDate: "2024-01-15",
  },
];

export function getJobById(id: string): JobPosting | undefined {
  return jobs.find((job) => job.id === id);
}

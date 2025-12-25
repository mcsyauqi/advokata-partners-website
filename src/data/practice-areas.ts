import { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    slug: "corporate-law",
    title: "Hukum Korporasi",
    shortDescription:
      "Pendampingan hukum komprehensif untuk bisnis dari pendirian hingga seluruh tahap pertumbuhan dan pengembangan.",
    description:
      "Praktik Hukum Korporasi kami menyediakan konsultasi hukum strategis untuk bisnis dari berbagai skala, mulai dari startup berkembang hingga perusahaan Fortune 500. Kami membimbing klien melalui transaksi korporasi yang kompleks, tata kelola perusahaan, dan kepatuhan regulasi dengan fokus pada pencapaian tujuan bisnis mereka. Pengacara kami menggabungkan keahlian hukum mendalam dengan ketajaman bisnis praktis untuk memberikan solusi yang mendorong kesuksesan.",
    icon: "Building2",
    keyServices: [
      "Pendirian & Strukturisasi Perusahaan",
      "Joint Venture & Aliansi Strategis",
      "Tata Kelola & Kepatuhan Perusahaan",
      "Perjanjian Pemegang Saham",
      "Layanan Penasehat Direksi",
      "Pengajuan & Kepatuhan Regulasi",
      "Restrukturisasi Korporasi",
      "Uji Tuntas (Due Diligence)",
    ],
    relatedAreas: ["mergers-acquisitions", "securities", "banking-finance"],
  },
  {
    id: "2",
    slug: "mergers-acquisitions",
    title: "Merger & Akuisisi",
    shortDescription:
      "Panduan strategis untuk transaksi M&A yang kompleks, dari awal hingga penutupan deal yang sukses.",
    description:
      "Tim M&A kami telah memberikan nasihat pada beberapa transaksi paling signifikan dalam beberapa tahun terakhir, mewakili pembeli, penjual, dan penasihat keuangan dalam transaksi domestik dan lintas batas. Kami membawa pendekatan multidisiplin ke setiap transaksi, menggabungkan keahlian dalam hukum korporasi, pajak, regulasi, dan pengetahuan khusus industri untuk menyusun deal yang memaksimalkan nilai bagi klien kami.",
    icon: "ArrowRightLeft",
    keyServices: [
      "Konsultasi Sisi Pembeli & Penjual",
      "Transaksi Lintas Batas",
      "Leveraged Buyout",
      "Management Buyout",
      "Akuisisi Strategis",
      "Carve-Out & Spin-Off",
      "Strukturisasi & Negosiasi Deal",
      "Integrasi Pasca-Merger",
    ],
    relatedAreas: ["corporate-law", "private-equity", "antitrust"],
  },
  {
    id: "3",
    slug: "real-estate",
    title: "Properti & Real Estat",
    shortDescription:
      "Solusi hukum real estat lengkap untuk akuisisi, pengembangan, pembiayaan, dan sewa-menyewa.",
    description:
      "Praktik Real Estat kami mewakili pengembang, investor, pemberi pinjaman, dan operator dalam semua aspek transaksi real estat komersial. Dari gedung pencakar langit landmark hingga pengembangan mixed-use, tim kami memiliki pengalaman untuk menangani deal paling kompleks. Kami memberikan nasihat praktis dan berorientasi bisnis yang membantu klien menavigasi tantangan regulasi dan mencapai tujuan pengembangan mereka.",
    icon: "Home",
    keyServices: [
      "Akuisisi & Divestasi Properti",
      "Pengembangan Komersial",
      "Pembiayaan Real Estat",
      "Pembentukan & Kepatuhan REIT",
      "Negosiasi Sewa",
      "Tata Guna Lahan & Zonasi",
      "Kontrak Konstruksi",
      "Manajemen Properti",
    ],
    relatedAreas: ["banking-finance", "corporate-law", "environmental"],
  },
  {
    id: "4",
    slug: "intellectual-property",
    title: "Kekayaan Intelektual",
    shortDescription:
      "Perlindungan dan penegakan paten, merek dagang, hak cipta, dan rahasia dagang.",
    description:
      "Dalam ekonomi pengetahuan saat ini, kekayaan intelektual seringkali merupakan aset paling berharga perusahaan. Tim KI kami menyediakan perlindungan komprehensif untuk inovasi, merek, dan karya kreatif. Dari penuntutan paten hingga litigasi KI, kami membantu klien membangun, melindungi, dan memonetisasi portofolio kekayaan intelektual mereka. Pengacara kami termasuk mantan pemeriksa paten dan ahli teknis yang memahami aspek hukum dan teknis perlindungan KI.",
    icon: "Lightbulb",
    keyServices: [
      "Penuntutan & Litigasi Paten",
      "Pendaftaran & Penegakan Merek Dagang",
      "Perlindungan Hak Cipta",
      "Perlindungan Rahasia Dagang",
      "Lisensi & Transaksi KI",
      "Due Diligence KI",
      "Transfer Teknologi",
      "Manajemen Portofolio KI",
    ],
    relatedAreas: ["technology", "litigation", "corporate-law"],
  },
  {
    id: "5",
    slug: "litigation",
    title: "Litigasi",
    shortDescription:
      "Advokasi persidangan ahli dan penyelesaian sengketa untuk perkara komersial yang kompleks.",
    description:
      "Praktik Litigasi kami mewakili klien dalam sengketa komersial berisiko tinggi di hadapan pengadilan negeri dan pengadilan niaga, panel arbitrase, dan badan regulasi. Kami adalah pengacara litigasi yang mempersiapkan setiap kasus seolah-olah akan dibawa ke pengadilan, yang memungkinkan kami mencapai penyelesaian yang menguntungkan atau, jika perlu, menang di persidangan. Tim kami termasuk mantan hakim dan jaksa yang membawa perspektif berharga untuk perkara litigasi kompleks.",
    icon: "Gavel",
    keyServices: [
      "Litigasi Komersial",
      "Litigasi Sekuritas",
      "Pembelaan Gugatan Kelompok",
      "Arbitrase Internasional",
      "Advokasi Banding",
      "Pembelaan Kejahatan Korporasi",
      "Investigasi Regulasi",
      "Penyelesaian Sengketa Alternatif",
    ],
    relatedAreas: ["intellectual-property", "employment", "securities"],
  },
  {
    id: "6",
    slug: "banking-finance",
    title: "Perbankan & Keuangan",
    shortDescription:
      "Solusi pembiayaan canggih untuk pemberi pinjaman, peminjam, dan institusi keuangan.",
    description:
      "Praktik Perbankan & Keuangan kami mewakili institusi keuangan terkemuka, sponsor private equity, dan peminjam korporasi dalam transaksi pembiayaan yang kompleks. Kami memiliki pengalaman luas dalam leveraged finance, acquisition finance, project finance, dan restrukturisasi. Pengacara kami memahami realitas komersial pasar pembiayaan dan memberikan nasihat praktis yang membantu menyelesaikan deal.",
    icon: "Landmark",
    keyServices: [
      "Pembiayaan Akuisisi",
      "Leveraged Finance",
      "Project Finance",
      "Pinjaman Berbasis Aset",
      "Pinjaman Sindikasi",
      "Restrukturisasi Utang",
      "Pembiayaan Dana",
      "Kepatuhan Regulasi",
    ],
    relatedAreas: ["corporate-law", "mergers-acquisitions", "private-equity"],
  },
];

// Additional practice areas
export const additionalPracticeAreas: PracticeArea[] = [
  {
    id: "7",
    slug: "securities",
    title: "Hukum Sekuritas",
    shortDescription:
      "Kepatuhan regulasi pasar modal, penawaran umum, dan transaksi sekuritas.",
    description:
      "Praktik Hukum Sekuritas kami memberikan nasihat komprehensif mengenai regulasi pasar modal Indonesia dan internasional. Kami mendampingi klien dalam penawaran umum perdana (IPO), penawaran umum terbatas (rights issue), obligasi, dan berbagai instrumen pasar modal lainnya. Tim kami memiliki pengalaman luas bekerja dengan OJK dan BEI untuk memastikan kepatuhan regulasi.",
    icon: "Coins",
    keyServices: [
      "Initial Public Offering (IPO)",
      "Rights Issue & Secondary Offering",
      "Penerbitan Obligasi & Sukuk",
      "Kepatuhan Regulasi OJK",
      "Pengungkapan & Pelaporan Berkala",
      "Program ESOP & MSOP",
      "Delisting & Go Private",
      "Akuisisi Perusahaan Terbuka",
    ],
    relatedAreas: ["corporate-law", "banking-finance", "mergers-acquisitions"],
  },
  {
    id: "8",
    slug: "private-equity",
    title: "Private Equity",
    shortDescription:
      "Strukturisasi dana, investasi, dan transaksi private equity.",
    description:
      "Tim Private Equity kami mewakili sponsor PE, investor institusional, dan perusahaan portofolio dalam seluruh siklus investasi. Dari pembentukan dana hingga exit, kami memberikan nasihat strategis tentang strukturisasi transaksi, negosiasi, dan eksekusi. Pengalaman kami mencakup transaksi leveraged buyout, growth equity, dan venture capital.",
    icon: "Briefcase",
    keyServices: [
      "Pembentukan & Strukturisasi Dana",
      "Leveraged Buyout",
      "Growth Equity Investment",
      "Venture Capital",
      "Uji Tuntas (Due Diligence)",
      "Perjanjian Pemegang Saham",
      "Manajemen Portofolio",
      "Exit Strategy & Realisasi",
    ],
    relatedAreas: ["mergers-acquisitions", "corporate-law", "banking-finance"],
  },
  {
    id: "9",
    slug: "antitrust",
    title: "Hukum Persaingan Usaha",
    shortDescription:
      "Kepatuhan antitrust, clearance M&A, dan pembelaan perkara persaingan.",
    description:
      "Praktik Hukum Persaingan Usaha kami memberikan nasihat tentang seluruh aspek hukum antitrust Indonesia. Kami mendampingi klien dalam notifikasi merger ke KPPU, program kepatuhan persaingan, dan pembelaan terhadap investigasi kartel atau penyalahgunaan posisi dominan. Tim kami memiliki pengalaman bekerja dengan KPPU dan memahami pendekatan penegakan hukum persaingan di Indonesia.",
    icon: "BadgeCheck",
    keyServices: [
      "Notifikasi Merger ke KPPU",
      "Program Kepatuhan Persaingan",
      "Investigasi & Pembelaan KPPU",
      "Analisis Persaingan dalam M&A",
      "Perjanjian Distribusi & Keagenan",
      "Audit Persaingan Usaha",
      "Litigasi Persaingan Usaha",
      "Konseling Persaingan Harian",
    ],
    relatedAreas: ["mergers-acquisitions", "litigation", "corporate-law"],
  },
  {
    id: "10",
    slug: "environmental",
    title: "Hukum Lingkungan",
    shortDescription:
      "Kepatuhan lingkungan, perizinan, dan penyelesaian sengketa lingkungan.",
    description:
      "Praktik Hukum Lingkungan kami membantu klien menavigasi regulasi lingkungan yang kompleks di Indonesia. Kami memberikan nasihat tentang perizinan lingkungan (AMDAL, UKL-UPL), kepatuhan regulasi, dan penyelesaian sengketa lingkungan. Tim kami juga berpengalaman dalam transaksi yang melibatkan isu lingkungan seperti akuisisi lahan dan pengembangan properti.",
    icon: "Leaf",
    keyServices: [
      "Dokumen AMDAL & UKL-UPL",
      "Perizinan Lingkungan",
      "Kepatuhan Regulasi Lingkungan",
      "Due Diligence Lingkungan",
      "Remediasi & Pemulihan",
      "Sengketa Lingkungan",
      "Perubahan Iklim & Carbon Credit",
      "ESG Advisory",
    ],
    relatedAreas: ["real-estate", "corporate-law", "litigation"],
  },
  {
    id: "11",
    slug: "technology",
    title: "Teknologi & Digital",
    shortDescription:
      "Regulasi teknologi, perlindungan data, dan transaksi digital.",
    description:
      "Praktik Teknologi & Digital kami memberikan nasihat tentang seluruh aspek hukum teknologi di era digital. Dari regulasi fintech hingga perlindungan data pribadi, e-commerce hingga cybersecurity, tim kami membantu klien menavigasi lanskap regulasi yang berkembang pesat. Kami juga berpengalaman dalam transaksi teknologi termasuk lisensi software, pengembangan aplikasi, dan akuisisi startup teknologi.",
    icon: "Cpu",
    keyServices: [
      "Kepatuhan Perlindungan Data (UU PDP)",
      "Regulasi Fintech & Pembayaran",
      "E-commerce & Marketplace",
      "Lisensi Software & SaaS",
      "Cybersecurity & Data Breach",
      "AI & Emerging Technologies",
      "Transaksi Startup Teknologi",
      "Platform & Content Regulation",
    ],
    relatedAreas: ["intellectual-property", "corporate-law", "banking-finance"],
  },
  {
    id: "12",
    slug: "employment",
    title: "Hukum Ketenagakerjaan",
    shortDescription:
      "Hubungan kerja, kepatuhan ketenagakerjaan, dan sengketa perburuhan.",
    description:
      "Praktik Hukum Ketenagakerjaan kami memberikan nasihat komprehensif tentang seluruh aspek hubungan kerja. Kami membantu klien dengan penyusunan kebijakan HR, kontrak kerja, PHK, dan penyelesaian sengketa perburuhan. Tim kami berpengalaman dalam menangani perkara di Pengadilan Hubungan Industrial dan negosiasi dengan serikat pekerja.",
    icon: "Users",
    keyServices: [
      "Kebijakan HR & Employment Handbook",
      "Kontrak Kerja & PKWT",
      "PHK & Pesangon",
      "Hubungan Industrial",
      "Negosiasi dengan Serikat Pekerja",
      "Litigasi PHI",
      "Expatriate & Work Permit",
      "Due Diligence Ketenagakerjaan",
    ],
    relatedAreas: ["litigation", "corporate-law", "mergers-acquisitions"],
  },
];

// Combine all practice areas
export const allPracticeAreas: PracticeArea[] = [
  ...practiceAreas,
  ...additionalPracticeAreas,
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return allPracticeAreas.find((area) => area.slug === slug);
}

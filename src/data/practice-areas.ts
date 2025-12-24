import { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    slug: "corporate-law",
    title: "Corporate Law",
    shortDescription:
      "Comprehensive legal counsel for businesses from formation through all stages of growth and development.",
    description:
      "Our Corporate Law practice provides strategic legal counsel to businesses of all sizes, from emerging startups to Fortune 500 companies. We guide clients through complex corporate transactions, governance matters, and regulatory compliance with a focus on achieving their business objectives. Our attorneys combine deep legal expertise with practical business acumen to deliver solutions that drive success.",
    icon: "Building2",
    keyServices: [
      "Corporate Formation & Structuring",
      "Joint Ventures & Strategic Alliances",
      "Corporate Governance & Compliance",
      "Shareholder Agreements",
      "Board Advisory Services",
      "Regulatory Filings & Compliance",
      "Corporate Restructuring",
      "Due Diligence",
    ],
    relatedAreas: ["mergers-acquisitions", "securities", "banking-finance"],
  },
  {
    id: "2",
    slug: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    shortDescription:
      "Strategic guidance through complex M&A transactions, from deal inception to successful closing.",
    description:
      "Our M&A team has advised on some of the most significant transactions in recent years, representing buyers, sellers, and financial advisors in domestic and cross-border deals. We bring a multidisciplinary approach to every transaction, combining expertise in corporate law, tax, regulatory matters, and industry-specific knowledge to structure deals that maximize value for our clients.",
    icon: "ArrowRightLeft",
    keyServices: [
      "Buy-Side & Sell-Side Advisory",
      "Cross-Border Transactions",
      "Leveraged Buyouts",
      "Management Buyouts",
      "Strategic Acquisitions",
      "Carve-Outs & Spin-Offs",
      "Deal Structuring & Negotiation",
      "Post-Merger Integration",
    ],
    relatedAreas: ["corporate-law", "private-equity", "antitrust"],
  },
  {
    id: "3",
    slug: "real-estate",
    title: "Real Estate",
    shortDescription:
      "Full-service real estate legal solutions for acquisitions, development, financing, and leasing.",
    description:
      "Our Real Estate practice represents developers, investors, lenders, and operators in all aspects of commercial real estate transactions. From landmark skyscrapers to mixed-use developments, our team has the experience to handle the most complex deals. We provide practical, business-focused advice that helps clients navigate regulatory challenges and achieve their development goals.",
    icon: "Home",
    keyServices: [
      "Acquisitions & Dispositions",
      "Commercial Development",
      "Real Estate Finance",
      "REIT Formation & Compliance",
      "Lease Negotiations",
      "Land Use & Zoning",
      "Construction Contracts",
      "Property Management",
    ],
    relatedAreas: ["banking-finance", "corporate-law", "environmental"],
  },
  {
    id: "4",
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortDescription:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    description:
      "In today's knowledge economy, intellectual property is often a company's most valuable asset. Our IP team provides comprehensive protection for innovations, brands, and creative works. From patent prosecution to IP litigation, we help clients build, protect, and monetize their intellectual property portfolios. Our attorneys include former patent examiners and technical experts who understand both the legal and technical aspects of IP protection.",
    icon: "Lightbulb",
    keyServices: [
      "Patent Prosecution & Litigation",
      "Trademark Registration & Enforcement",
      "Copyright Protection",
      "Trade Secret Protection",
      "IP Licensing & Transactions",
      "IP Due Diligence",
      "Technology Transfer",
      "IP Portfolio Management",
    ],
    relatedAreas: ["technology", "litigation", "corporate-law"],
  },
  {
    id: "5",
    slug: "litigation",
    title: "Litigation",
    shortDescription:
      "Skilled trial advocacy and dispute resolution for complex commercial matters.",
    description:
      "Our Litigation practice represents clients in high-stakes commercial disputes before state and federal courts, arbitration panels, and regulatory agencies. We are trial lawyers who prepare every case as if it will go to trial, which allows us to achieve favorable settlements or, when necessary, prevail at trial. Our team includes former federal clerks and prosecutors who bring valuable perspective to complex litigation matters.",
    icon: "Gavel",
    keyServices: [
      "Commercial Litigation",
      "Securities Litigation",
      "Class Action Defense",
      "International Arbitration",
      "Appellate Advocacy",
      "White Collar Defense",
      "Regulatory Investigations",
      "Alternative Dispute Resolution",
    ],
    relatedAreas: ["intellectual-property", "employment", "securities"],
  },
  {
    id: "6",
    slug: "banking-finance",
    title: "Banking & Finance",
    shortDescription:
      "Sophisticated financing solutions for lenders, borrowers, and financial institutions.",
    description:
      "Our Banking & Finance practice represents leading financial institutions, private equity sponsors, and corporate borrowers in complex financing transactions. We have extensive experience in leveraged finance, acquisition finance, project finance, and restructurings. Our lawyers understand the commercial realities of the financing markets and deliver practical advice that gets deals done.",
    icon: "Landmark",
    keyServices: [
      "Acquisition Finance",
      "Leveraged Finance",
      "Project Finance",
      "Asset-Based Lending",
      "Syndicated Loans",
      "Debt Restructuring",
      "Fund Finance",
      "Regulatory Compliance",
    ],
    relatedAreas: ["corporate-law", "mergers-acquisitions", "private-equity"],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

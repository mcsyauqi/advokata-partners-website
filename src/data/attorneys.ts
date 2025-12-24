import { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    id: "1",
    slug: "alexander-petrov",
    name: "Alexander Petrov",
    title: "Managing Partner",
    email: "a.petrov@advokata.com",
    phone: "+1 (555) 123-4001",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Corporate Law", "Mergers & Acquisitions"],
    education: [
      "J.D., Harvard Law School, 1992",
      "B.A., Economics, Yale University, 1989",
    ],
    barAdmissions: ["New York", "District of Columbia", "California"],
    bio: "Alexander Petrov founded Advokata Partners in 1995 with a vision to create a law firm that combines exceptional legal expertise with personalized client service. With over 30 years of experience in corporate law and M&A transactions, he has advised on deals valued at over $50 billion. Alexander is recognized as a leading lawyer in Chambers Global and Legal 500.",
    achievements: [
      "Named 'Lawyer of the Year' by Corporate Law Review, 2022",
      "Led team on $8.5B cross-border acquisition",
      "Chambers Global Band 1 for Corporate/M&A",
    ],
  },
  {
    id: "2",
    slug: "victoria-chambers",
    name: "Victoria Chambers",
    title: "Senior Partner",
    email: "v.chambers@advokata.com",
    phone: "+1 (555) 123-4002",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Real Estate", "Banking & Finance"],
    education: [
      "J.D., Stanford Law School, 1997",
      "M.B.A., Wharton School, 1997",
      "B.A., Political Science, Princeton University, 1993",
    ],
    barAdmissions: ["New York", "New Jersey", "Connecticut"],
    bio: "Victoria Chambers heads the Real Estate and Finance practice groups at Advokata Partners. She has structured and closed complex real estate transactions totaling over $25 billion, including landmark developments and REIT formations. Her dual expertise in law and business makes her a trusted advisor to institutional investors and developers.",
    achievements: [
      "Best Lawyers in America - Real Estate Law, 2018-2024",
      "Led $3.2B mixed-use development financing",
      "Legal 500 Hall of Fame",
    ],
  },
  {
    id: "3",
    slug: "marcus-wellington",
    name: "Marcus Wellington",
    title: "Partner",
    email: "m.wellington@advokata.com",
    phone: "+1 (555) 123-4003",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Intellectual Property", "Technology"],
    education: [
      "J.D., Columbia Law School, 2001",
      "M.S., Computer Science, MIT, 1998",
      "B.S., Electrical Engineering, MIT, 1996",
    ],
    barAdmissions: ["New York", "USPTO Patent Bar"],
    bio: "Marcus Wellington combines deep technical knowledge with legal expertise to protect clients' intellectual property assets. His background in computer science and engineering enables him to handle complex patent prosecution and litigation matters. He has successfully litigated IP cases worth over $2 billion in damages.",
    achievements: [
      "Patent Lawyer of the Year - IP Stars, 2023",
      "Won $450M patent infringement verdict",
      "Over 500 patents prosecuted",
    ],
  },
  {
    id: "4",
    slug: "elena-rodriguez",
    name: "Elena Rodriguez",
    title: "Partner",
    email: "e.rodriguez@advokata.com",
    phone: "+1 (555) 123-4004",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Litigation", "International Arbitration"],
    education: [
      "J.D., NYU School of Law, 2003",
      "LL.M., International Law, Georgetown, 2004",
      "B.A., International Relations, Georgetown University, 2000",
    ],
    barAdmissions: ["New York", "Florida", "International Court of Arbitration"],
    bio: "Elena Rodriguez is a trial attorney with an exceptional track record in complex commercial litigation and international arbitration. She has represented Fortune 500 companies in high-stakes disputes across multiple jurisdictions. Her fluency in Spanish and Portuguese makes her invaluable for Latin American matters.",
    achievements: [
      "Top 100 Trial Lawyers - National Trial Lawyers",
      "Won $780M arbitration award for energy client",
      "Super Lawyers Rising Star to Super Lawyer progression",
    ],
  },
  {
    id: "5",
    slug: "jonathan-sterling",
    name: "Jonathan Sterling",
    title: "Partner",
    email: "j.sterling@advokata.com",
    phone: "+1 (555) 123-4005",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Banking & Finance", "Private Equity"],
    education: [
      "J.D., University of Chicago Law School, 2005",
      "B.S., Finance, University of Pennsylvania, 2002",
    ],
    barAdmissions: ["New York", "Illinois"],
    bio: "Jonathan Sterling represents major financial institutions, private equity sponsors, and corporate borrowers in sophisticated financing transactions. He has closed over $40 billion in leveraged buyouts, acquisition financings, and restructurings. His practical, deal-focused approach has made him a go-to advisor for complex capital markets matters.",
    achievements: [
      "IFLR1000 Leading Lawyer - Banking & Finance",
      "Closed $5.7B leveraged buyout financing",
      "Adjunct Professor, Columbia Law School",
    ],
  },
  {
    id: "6",
    slug: "sarah-chen",
    name: "Sarah Chen",
    title: "Partner",
    email: "s.chen@advokata.com",
    phone: "+1 (555) 123-4006",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop&crop=face",
    practiceAreas: ["Corporate Law", "Securities"],
    education: [
      "J.D., Yale Law School, 2008",
      "B.A., Economics, UC Berkeley, 2005",
    ],
    barAdmissions: ["New York", "California"],
    bio: "Sarah Chen advises public and private companies on securities offerings, corporate governance, and regulatory compliance. She has led over 50 IPOs and public offerings, raising more than $15 billion for clients. Sarah is known for her ability to navigate complex SEC regulations while achieving clients' strategic objectives.",
    achievements: [
      "Chambers USA - Capital Markets",
      "Led $2.1B tech company IPO",
      "Board member, Asian American Bar Association",
    ],
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find((attorney) => attorney.slug === slug);
}

export function getAttorneysByPracticeArea(practiceArea: string): Attorney[] {
  return attorneys.filter((attorney) =>
    attorney.practiceAreas.includes(practiceArea)
  );
}

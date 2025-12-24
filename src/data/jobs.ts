import { JobPosting } from "@/types";

export const jobs: JobPosting[] = [
  {
    id: "1",
    title: "Senior Associate - Corporate/M&A",
    department: "Corporate Practice",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We are seeking a talented Senior Associate to join our Corporate/M&A practice. The ideal candidate will have substantial experience in complex transactions and a desire to work on high-profile deals for sophisticated clients.",
    requirements: [
      "J.D. from a top-tier law school with excellent academic credentials",
      "5-7 years of experience at a major law firm",
      "Extensive experience in M&A transactions, including public company deals",
      "Strong drafting and negotiation skills",
      "New York bar admission required",
    ],
    responsibilities: [
      "Lead due diligence efforts for complex transactions",
      "Draft and negotiate transaction documents",
      "Manage deal teams and coordinate with specialists",
      "Maintain direct client relationships",
      "Mentor junior associates",
    ],
    postedDate: "2024-04-01",
  },
  {
    id: "2",
    title: "Associate - Litigation",
    department: "Litigation Practice",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Our Litigation practice is expanding and seeks an Associate to work on complex commercial disputes and arbitrations. This is an opportunity to develop first-chair skills while working alongside recognized trial lawyers.",
    requirements: [
      "J.D. from a top-tier law school",
      "3-5 years of commercial litigation experience",
      "Strong legal research and writing skills",
      "Deposition and courtroom experience preferred",
      "New York bar admission required",
    ],
    responsibilities: [
      "Conduct legal research and draft motions and briefs",
      "Participate in depositions and court appearances",
      "Manage discovery processes",
      "Assist with trial preparation and strategy",
      "Coordinate with experts and witnesses",
    ],
    postedDate: "2024-04-10",
  },
  {
    id: "3",
    title: "Partner - Intellectual Property",
    department: "IP Practice",
    location: "New York, NY / Washington, DC",
    type: "Full-time",
    description:
      "We are seeking a Partner to lead the growth of our Intellectual Property practice. The ideal candidate will have a strong book of business and experience in patent litigation and prosecution.",
    requirements: [
      "J.D. and technical degree in engineering or sciences",
      "15+ years of IP law experience",
      "Established client relationships and portable business",
      "USPTO registration required",
      "Track record of successful patent litigation",
    ],
    responsibilities: [
      "Lead and grow the IP practice group",
      "Manage key client relationships",
      "Handle high-stakes patent litigation matters",
      "Develop and mentor IP team members",
      "Contribute to firm leadership and strategy",
    ],
    postedDate: "2024-03-15",
  },
  {
    id: "4",
    title: "Legal Secretary",
    department: "Administrative",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We are seeking an experienced Legal Secretary to provide comprehensive administrative support to attorneys in our Corporate practice group.",
    requirements: [
      "5+ years of legal secretary experience in a law firm",
      "Proficiency in Microsoft Office and document management systems",
      "Excellent organizational and communication skills",
      "Experience with corporate transactions preferred",
      "Ability to manage multiple priorities and meet deadlines",
    ],
    responsibilities: [
      "Prepare and format legal documents",
      "Manage attorney calendars and schedule meetings",
      "Coordinate travel arrangements",
      "Process time entries and expense reports",
      "Maintain client files and records",
    ],
    postedDate: "2024-04-05",
  },
  {
    id: "5",
    title: "Summer Associate",
    department: "Summer Program",
    location: "New York, NY",
    type: "Internship",
    description:
      "Our Summer Associate Program offers law students an immersive experience working alongside our attorneys on significant matters. Summer Associates are integral members of our teams and receive substantive work assignments across practice areas.",
    requirements: [
      "Currently enrolled in a J.D. program at an ABA-accredited law school",
      "Strong academic record (top 25% preferred)",
      "Demonstrated interest in corporate law or litigation",
      "Excellent writing and analytical skills",
      "Authorization to work in the United States",
    ],
    responsibilities: [
      "Conduct legal research and draft memoranda",
      "Assist with client matters under attorney supervision",
      "Attend client meetings and court appearances",
      "Participate in training programs and social events",
      "Complete rotations across practice groups",
    ],
    postedDate: "2024-01-15",
  },
];

export function getJobById(id: string): JobPosting | undefined {
  return jobs.find((job) => job.id === id);
}

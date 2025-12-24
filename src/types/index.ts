export interface Attorney {
  id: string;
  slug: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  practiceAreas: string[];
  education: string[];
  barAdmissions: string[];
  bio: string;
  achievements?: string[];
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  keyServices: string[];
  relatedAreas?: string[];
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorSlug: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  practiceArea: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  practiceArea: string;
  message: string;
}

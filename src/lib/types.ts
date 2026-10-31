export interface Project {
  _id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
}

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  kind: "certification" | "education";
  issueDate?: string;
  credentialUrl?: string;
  description?: string;
}

export interface VisitStats {
  total: number;
  today: number;
  last30Days: { day: string; count: number }[];
}

export const formatDate = (date?: string) =>
  date ? new Date(date).toLocaleDateString("pt-PT", { month: "long", year: "numeric" }) : "";

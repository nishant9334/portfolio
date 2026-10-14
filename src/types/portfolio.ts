export interface Social {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
  website: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  avatarSvg: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  source: string;
  image: string;
  highlight: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface Portfolio {
  profile: Profile;
  skills: { categories: SkillCategory[] };
  services: Service[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: string[];
  testimonials: Testimonial[];
}

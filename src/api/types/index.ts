import TemplateProps from "../common/TemplateProps";

export interface Certification {
  id: string;
  name: string;
  institution: string;
  date: string; // ISO date
  credentialUrl?: string;
}

export interface Link {
  id: string;
  label: string;
  url: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  present?: boolean;
  contractType?: string;
  description: string;
  tags?: string;
  link?: string;
}

export interface Project {
  id: string;
  name: string;
  link?: string;
  description: string;
  startDate?: string;
  endDate?: string;
  role?: string;
  tags?: string;
  imageUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location?: string;
  startDate: string;
  endDate?: string;
  present?: boolean;
  gpa?: string;
  description?: string;
  certifications?: Certification[];
}

export interface Skill {
  id: string;
  name: string;
  category?: string;       // e.g. "Technical", "Soft Skill"
  level: number;           // e.g. 1-5
  yearsExperience?: number;
  certificationUrl?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
  certification?: Certification;
  comment?: string;
}

export interface UserBasicInfo {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email: string;
  phone?: string;
  address?: string;
  location?: string;
  role: string;
  profileSummary: string;
  profilePhoto?: string;
  links?: Link[];
}

export interface UserDataItems {
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

export interface UserData extends UserBasicInfo, UserDataItems { }

export interface ResumeLabels {
  profileSummary?: string;
  workExperiences?: string;
  education?: string;
  projects?: string;
  skills?: string;
  languages?: string;
  email?: string;
  phone?: string;
  location?: string;
  address?: string;
  lastUpdated?: string;
  present?: string;
  link?: string;
  certification?: string;
  contractType?: string;
  tags?: string;
}

export interface Template {
  id: string;
  name: string;
  PDF: React.FC<TemplateProps>;
}
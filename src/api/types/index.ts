import TemplateProps from "../common/TemplateProps";

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  link: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Language {
  id: string;
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Fluent" | "Native";
}

export interface UserDataItems {
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

export interface UserBasicInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  profileSummary: string;
  profilePhoto: string;
}

export interface UserData extends UserDataItems, UserBasicInfo { }

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
  lastUpdated?: string;
  present?: string;
  address?: string;
};

export interface Template {
  id: string;
  name: string;
  PDF: React.FC<TemplateProps>;
}
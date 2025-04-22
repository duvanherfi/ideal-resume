import TemplateProps from "../templates/common/TemplateProps";

export interface BasicInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  profileSummary: string;
  profilePhoto: string; 
}

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

export interface ResumeData extends BasicInfo {
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

export interface ResumeLabels {
  profileSummary?: string;
  workExperiences?: string;
  education?: string;
  projects?: string;
  skills?: string;
  languages?: string;
};

export interface Template {
  id: string;
  name: string;
  PDF: React.FC<TemplateProps>;
}
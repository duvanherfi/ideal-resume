import { Certification } from "./Certification";

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

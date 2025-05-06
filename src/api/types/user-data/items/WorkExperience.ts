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

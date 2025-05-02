
export interface Skill {
  id: string;
  name: string;
  category?: string; // e.g. "Technical", "Soft Skill"
  level: number; // e.g. 1-5
  yearsExperience?: number;
  certificationUrl?: string;
}

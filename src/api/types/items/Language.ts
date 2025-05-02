import { Certification } from "./Certification";


export interface Language {
  id: string;
  name: string;
  proficiency: string;
  certification?: Certification;
  comment?: string;
}

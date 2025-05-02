import { Education } from "./Education";
import { Language } from "./Language";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { WorkExperience } from "./WorkExperience";


export interface UserDataItems {
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

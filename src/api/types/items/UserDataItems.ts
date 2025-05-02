import type { Education } from "./Education";
import type { Language } from "./Language";
import type { Project } from "./Project";
import type { Skill } from "./Skill";
import type { WorkExperience } from "./WorkExperience";

export interface UserDataItems {
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

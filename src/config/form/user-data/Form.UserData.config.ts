import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import education from "./Form.UserData.Education.config";
import languages from "./Form.UserData.Language.config";
import projects from "./Form.UserData.Project.config";
import skills from "./Form.UserData.Skills.config";
import workExperiences from "./Form.UserData.WorkExperiences.config";

const config = {
    workExperiences,
    education,
    projects,
    skills,
    languages
};

const getFormConfig = (dataKey: keyof UserDataItems) => {
    return config[dataKey];
};

export default getFormConfig;
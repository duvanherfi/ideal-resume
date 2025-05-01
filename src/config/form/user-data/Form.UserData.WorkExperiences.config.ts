import FieldsExperience from "@config/fields/Fields.Experience.config";
import { WorkExperience } from "@resume-api/types";
import I18nKeys from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";
import FormConfig from "./Form.UserData.types";

const workExperiences: FormConfig<WorkExperience> = {
    dataKey: "workExperiences",
    title: I18nKeys.FORM.DATA.EXPERIENCE.TITLE,
    fields: FieldsExperience,
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
    empty: () => ({
        id: uuidv4(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
        location: "",
        contractType: "",
        tags: "",
        link: ""
    })
};

export default workExperiences;
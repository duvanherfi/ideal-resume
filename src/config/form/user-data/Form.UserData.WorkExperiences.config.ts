import { v4 as uuidv4 } from "uuid";
import { WorkExperience } from "@resume-api/types";
import FieldsExperience from "@config/fields/Fields.Experience.config";
import FormConfig from "./Form.UserData.types";

const workExperiences: FormConfig<WorkExperience> = {
    dataKey: "workExperiences",
    title: "form.experience.title",
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
import { WorkExperience } from "../../../../api/types";
import { FormGenericProps } from "../common/form/FormGeneric";
import FieldsExperience, { getEmptyExperience } from "./fields/FieldsExperience.config";

const FormExperienceConfig: FormGenericProps<WorkExperience> = {
    dataKey: "workExperiences",
    title: "form.experience.title",
    fields: FieldsExperience,
    emptyItem: getEmptyExperience,
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
};

export default FormExperienceConfig;
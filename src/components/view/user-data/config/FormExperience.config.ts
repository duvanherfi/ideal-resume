import { WorkExperience } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsExperience from "./fields/FieldsExperience.config";

const FormExperienceConfig: FormGenericProps<WorkExperience> = {
    dataKey: "workExperiences",
    title: "form.experience.title",
    fields: FieldsExperience,
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
};

export default FormExperienceConfig;
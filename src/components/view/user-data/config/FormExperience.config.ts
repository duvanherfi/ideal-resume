import { WorkExperience } from "../../../../api/types";
import { MultiItemFormProps } from "../../../ui/form/form/MultiItemForm";
import FieldsExperience from "./fields/FieldsExperience.config";

const dataKey = "workExperiences";

const FormExperienceConfig: MultiItemFormProps<WorkExperience> = {
    dataKey,
    title: "form.experience.title",
    fields: FieldsExperience,
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
};

export default FormExperienceConfig;
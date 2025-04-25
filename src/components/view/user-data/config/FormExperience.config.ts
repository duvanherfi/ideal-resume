import { WorkExperience } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsExperience from "./fields/FieldsExperience.config";
import emptyItems from "./FormItemEmpty";

const dataKey = "workExperiences";

const FormExperienceConfig: FormGenericProps<WorkExperience> = {
    dataKey,
    title: "form.experience.title",
    fields: FieldsExperience,
    emptyItem: emptyItems[dataKey],
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
};

export default FormExperienceConfig;
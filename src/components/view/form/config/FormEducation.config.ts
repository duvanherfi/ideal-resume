import { Education } from "../../../../api/types";
import { FormGenericProps } from "../common/form/FormGeneric";
import FieldsEducation, { getEmptyEducation } from "./fields/FieldsEducation.config";

const FormEducationConfig: FormGenericProps<Education> = {
    dataKey: "education",
    title: "form.education.title",
    fields: FieldsEducation,
    emptyItem: getEmptyEducation,
    isValid: (education: Education) => Boolean(education.institution && education.degree && education.startDate),
};

export default FormEducationConfig;
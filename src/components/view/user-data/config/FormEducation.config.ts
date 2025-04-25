import { Education } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsEducation from "./fields/FieldsEducation.config";

const FormEducationConfig: FormGenericProps<Education> = {
    dataKey: "education",
    title: "form.education.title",
    fields: FieldsEducation,
    isValid: (education: Education) => Boolean(education.institution && education.degree && education.startDate),
};

export default FormEducationConfig;
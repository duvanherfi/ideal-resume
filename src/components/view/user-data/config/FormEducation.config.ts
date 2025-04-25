import { Education } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsEducation from "./fields/FieldsEducation.config";
import emptyItems from "./FormItemEmpty";

const dataKey = "education";

const FormEducationConfig: FormGenericProps<Education> = {
    dataKey,
    title: "form.education.title",
    fields: FieldsEducation,
    emptyItem: emptyItems[dataKey],
    isValid: (education: Education) => Boolean(education.institution && education.degree && education.startDate),
};

export default FormEducationConfig;
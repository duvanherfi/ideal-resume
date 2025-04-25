import { Education } from "../../../../api/types";
import { MultiItemFormProps } from "../../../ui/form/form/MultiItemForm";
import FieldsEducation from "./fields/FieldsEducation.config";

const dataKey = "education";

const FormEducationConfig: MultiItemFormProps<Education> = {
    dataKey,
    title: "form.education.title",
    fields: FieldsEducation,
    isValid: (education: Education) => Boolean(education.institution && education.degree && education.startDate),
};

export default FormEducationConfig;
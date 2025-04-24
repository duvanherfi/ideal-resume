import { v4 as uuidv4 } from "uuid";
import { Education } from "../../../../../api/types";
import { FormField } from "../../../../ui/form/field/ListGenericFields";

const FieldsEducation: FormField<Education>[] = [
    {
        type: "text",
        name: "institution",
        label: "form.education.field.institution",
        required: true,
    },
    {
        type: "text",
        name: "degree",
        label: "form.education.field.degree",
        required: true,
    },
    {
        type: "date",
        name: "startDate",
        label: "form.education.field.startDate",
        required: true,
    },
    {
        type: "date",
        name: "endDate",
        label: "form.education.field.endDate",
        placeholder: "Leave blank for current education",
    },
];

export const getEmptyEducation = (): Education => ({
    id: uuidv4(),
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
});

export default FieldsEducation;
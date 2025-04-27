import { WorkExperience } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsExperience: FormField<WorkExperience>[] = [
    {
        type: "text",
        name: "company",
        label: "form.experience.field.company",
        required: true,
    },
    {
        type: "text",
        name: "role",
        label: "form.experience.field.role",
        required: true,
    },
    {

        type: "date",
        name: "startDate",
        label: "form.experience.field.startDate",
        required: true,
    },
    {
        type: "date",
        name: "endDate",
        label: "form.experience.field.endDate",
        placeholder: "Leave blank for current position",
    },
    {
        type: "textarea",
        name: "description",
        label: "form.experience.field.description",
    },
];

export default FieldsExperience;
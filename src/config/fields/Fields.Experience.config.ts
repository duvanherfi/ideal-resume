import { WorkExperience } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsExperience: FormField<WorkExperience>[] = [
    { type: "text", name: "company", label: "form.data.experience.field.company", required: true },
    { type: "text", name: "role", label: "form.data.experience.field.role", required: true },
    { type: "date", name: "startDate", label: "form.data.experience.field.startDate", required: true },
    { type: "date", name: "endDate", label: "form.data.experience.field.endDate", placeholder: "Leave blank for current position" },
    { type: "text", name: "location", label: "form.data.experience.field.location" },
    { type: "text", name: "contractType", label: "form.data.experience.field.contractType", suggestions: "form.data.experience.field.contractType.suggestions", },
    { type: "textarea", name: "description", label: "form.data.experience.field.description" },
    { type: "text", name: "tags", label: "form.data.experience.field.tags", placeholder: "form.data.experience.field.tags.placeholder" },
    { type: "url", name: "link", label: "form.data.experience.field.link" },
];

export default FieldsExperience;
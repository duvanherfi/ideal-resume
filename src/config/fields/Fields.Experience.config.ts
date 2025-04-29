import { WorkExperience } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsExperience: FormField<WorkExperience>[] = [
    { type: "text", name: "company", label: "form.experience.field.company", required: true },
    { type: "text", name: "role", label: "form.experience.field.role", required: true },
    { type: "text", name: "location", label: "form.experience.field.location" },
    { type: "date", name: "startDate", label: "form.experience.field.startDate", required: true },
    { type: "date", name: "endDate", label: "form.experience.field.endDate", placeholder: "Leave blank for current position" },
    { type: "text", name: "contractType", label: "form.experience.field.contractType", suggestions: "form.experience.field.contractType.suggestions", },
    { type: "textarea", name: "description", label: "form.experience.field.description" },
    { type: "text", name: "tags", label: "form.experience.field.tags", placeholder: "form.experience.field.tags.placeholder" },
    { type: "url", name: "link", label: "form.experience.field.link" },
];

export default FieldsExperience;
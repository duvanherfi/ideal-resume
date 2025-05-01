import { Education } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsEducation: FormField<Education>[] = [
    { type: "text", name: "institution", label: "form.data.education.field.institution", required: true },
    { type: "text", name: "degree", label: "form.data.education.field.degree", required: true },
    { type: "date", name: "startDate", label: "form.data.education.field.startDate", required: true },
    { type: "date", name: "endDate", label: "form.data.education.field.endDate", placeholder: "Leave blank for current education" },
    { type: "text", name: "location", label: "form.data.education.field.location" },
    { type: "text", name: "gpa", label: "form.data.education.field.gpa" },
    { type: "checkbox", name: "present", label: "form.data.education.field.present" },
    { type: "textarea", name: "description", label: "form.data.education.field.description" },
];

export default FieldsEducation;
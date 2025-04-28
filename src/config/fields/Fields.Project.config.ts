import { Project } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsProject: FormField<Project>[] = [
  { type: "text", name: "name", label: "form.project.field.name", required: true },
  { type: "url", name: "link", label: "form.project.field.link", placeholder: "https://..." },
  { type: "date", name: "startDate", label: "form.project.field.startDate" },
  { type: "date", name: "endDate", label: "form.project.field.endDate" },
  { type: "text", name: "role", label: "form.project.field.role" },
  { type: "textarea", name: "description", label: "form.project.field.description" },
  { type: "text", name: "technologies", label: "form.project.field.technologies", placeholder: "Comma-separated" },
  { type: "file", name: "imageUrl", label: "form.project.field.image" },
];

export default FieldsProject;
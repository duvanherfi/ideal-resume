import { Project } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsProject: FormField<Project>[] = [
  { type: "text", name: "name", label: "form.data.project.field.name", required: true },
  { type: "url", name: "link", label: "form.data.project.field.link", placeholder: "https://..." },
  { type: "date", name: "startDate", label: "form.data.project.field.startDate" },
  { type: "date", name: "endDate", label: "form.data.project.field.endDate" },
  { type: "text", name: "role", label: "form.data.project.field.role" },
  { type: "textarea", name: "description", label: "form.data.project.field.description" },
  { type: "text", name: "tags", label: "form.data.project.field.tags", placeholder: "form.data.project.field.tags.placeholder" },
  { type: "file", name: "imageUrl", label: "form.data.project.field.image" },
];

export default FieldsProject;
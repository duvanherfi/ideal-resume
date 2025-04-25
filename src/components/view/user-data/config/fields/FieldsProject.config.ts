import { Project } from "../../../../../api/types";
import { FormField } from "../../../../ui/form/field/ListGenericFields";

const FieldsProject: FormField<Project>[] = [
  {
    type: "text",
    name: "name",
    label: "form.projects.field.name",
    required: true,
  },
  {
    type: "text",
    name: "link",
    label: "form.projects.field.link",
    placeholder: "https://...",
  },
  {
    type: "textarea",
    name: "description",
    label: "form.projects.field.description",
  },
];

export default FieldsProject;
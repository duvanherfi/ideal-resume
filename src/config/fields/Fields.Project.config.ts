import { Project } from "@resume-api/types";
import { FormField } from "../../components/view/common/form/field/GenericField";

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
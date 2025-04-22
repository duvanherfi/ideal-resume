import { v4 as uuidv4 } from "uuid";
import { Project } from "../../../../../api/types";
import { FormField } from "../../common/field/ListGenericFields";

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

export const getEmptyProject = (): Project => ({
  id: uuidv4(),
  name: "",
  link: "",
  description: "",
});

export default FieldsProject;
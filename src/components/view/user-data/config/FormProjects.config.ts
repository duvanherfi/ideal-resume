import { Project } from "../../../../api/types";
import { MultiItemFormProps } from "../../../ui/form/form/MultiItemForm";
import FieldsProject from "./fields/FieldsProject.config";

const dataKey = "projects";

const FormProjectsConfig: MultiItemFormProps<Project> = ({
    dataKey,
    title: "form.projects.title",
    fields: FieldsProject,
    isValid: (project: Project) => Boolean(project.name),
});

export default FormProjectsConfig;
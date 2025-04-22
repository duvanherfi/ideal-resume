import { Project } from "../../../types";
import { FormGenericProps } from "../common/form/FormGeneric";
import FieldsProject, { getEmptyProject } from "./fields/FieldsProject.config";

const FormProjectsConfig: FormGenericProps<Project> = ({
    dataKey: "projects",
    title: "form.projects.title",
    fields: FieldsProject,
    emptyItem: getEmptyProject,
    isValid: (project: Project) => Boolean(project.name),
});

export default FormProjectsConfig;
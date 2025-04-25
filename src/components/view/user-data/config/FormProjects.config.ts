import { Project } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsProject from "./fields/FieldsProject.config";
import emptyItems from "./FormItemEmpty";

const dataKey = "projects";

const FormProjectsConfig: FormGenericProps<Project> = ({
    dataKey,
    title: "form.projects.title",
    fields: FieldsProject,
    emptyItem: emptyItems[dataKey],
    isValid: (project: Project) => Boolean(project.name),
});

export default FormProjectsConfig;
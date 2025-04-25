import { v4 as uuidv4 } from "uuid";
import { Project } from "../../api/types";
import FieldsProject from "../fields/Fields.Project.config";
import FormConfig from "./Form.UserData.types";

const projects: FormConfig<Project> = {
    dataKey: "projects",
    title: "form.projects.title",
    fields: FieldsProject,
    isValid: (project: Project) => Boolean(project.name),
    empty: {
        id: uuidv4(),
        name: "",
        link: "",
        description: "",
    }
};

export default projects;
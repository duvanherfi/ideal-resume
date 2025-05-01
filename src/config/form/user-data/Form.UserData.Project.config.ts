import { v4 as uuidv4 } from "uuid";
import { Project } from "@resume-api/types";
import FieldsProject from "@config/fields/Fields.Project.config";
import FormConfig from "./Form.UserData.types";

const projects: FormConfig<Project> = {
    dataKey: "projects",
    title: "form.project.title",
    fields: FieldsProject,
    isValid: (project: Project) => Boolean(project.name),
    empty: () => ({
        id: uuidv4(),
        name: "",
        link: "",
        description: "",
        startDate: "",
        endDate: "",
        role: "",
        tags: "",
        imageUrl: ""
    })
};

export default projects;
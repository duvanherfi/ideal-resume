import FieldsProject from "@config/fields/Fields.Project.config";
import { Project } from "@resume-api/types";
import I18nKeys from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";
import FormConfig from "./Form.UserData.types";

const projects: FormConfig<Project> = {
    dataKey: "projects",
    title: I18nKeys.FORM.DATA.PROJECT.TITLE,
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
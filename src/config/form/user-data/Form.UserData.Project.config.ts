import FieldsProject from "@config/fields/Fields.Project.config";
import { UserDataItems } from "@resume-api/types/items/UserDataItems";
import { Project } from "@resume-api/types/items/Project";
import { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";

const projects: FormConfig<UserDataItems, Project> = {
    dataKey: "projects",
    title: I18n.FORM.DATA.PROJECT.TITLE,
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
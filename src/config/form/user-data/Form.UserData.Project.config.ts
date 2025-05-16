import FieldsProject from "@config/fields/user-data/Fields.UserData.Project.config";
import type { FormConfig } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import type { Project } from "@resume-api/types/user-data/items/Project";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
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
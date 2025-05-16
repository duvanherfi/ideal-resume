import FieldsExperience from "@config/fields/user-data/Fields.UserData.Experience.config";
import type { FormConfig } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import { v4 as uuidv4 } from "uuid";

const workExperiences: FormConfig<UserDataItems, WorkExperience> = {
    dataKey: "workExperiences",
    title: I18n.FORM.DATA.EXPERIENCE.TITLE,
    fields: FieldsExperience,
    isValid: (experience: WorkExperience) => Boolean(experience.company && experience.role && experience.startDate),
    empty: () => ({
        id: uuidv4(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
        location: "",
        contractType: "",
        tags: "",
        link: ""
    })
};

export default workExperiences;
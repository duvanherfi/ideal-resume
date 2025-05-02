import FieldsExperience from "@config/fields/Fields.Experience.config";
import { UserDataItems } from "@resume-api/types/items/UserDataItems";
import { WorkExperience } from "@resume-api/types/items/WorkExperience";
import { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";
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
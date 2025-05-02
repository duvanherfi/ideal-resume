import FieldsSkills from "@config/fields/Fields.Skills.config";
import { UserDataItems } from "@resume-api/types/items/UserDataItems";
import { Skill } from "@resume-api/types/items/Skill";
import { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";

const skills: FormConfig<UserDataItems, Skill> = {
    dataKey: "skills",
    title: I18n.FORM.DATA.SKILLS.TITLE,
    fields: FieldsSkills,
    isValid: (skill: Skill) => Boolean(skill.name),
    empty: () => ({
        id: uuidv4(),
        name: "",
        level: 3,
        category: "",
        yearsExperience: 0,
        certificationUrl: ""
    })
};

export default skills;
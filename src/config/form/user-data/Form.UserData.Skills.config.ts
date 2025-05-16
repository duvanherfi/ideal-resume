import FieldsSkills from "@config/fields/user-data/Fields.UserData.Skills.config";
import type { FormConfig } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import type { Skill } from "@resume-api/types/user-data/items/Skill";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
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
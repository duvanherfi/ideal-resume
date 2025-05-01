import FieldsSkills from "@config/fields/Fields.Skills.config";
import { Skill } from "@resume-api/types";
import I18n from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";
import FormConfig from "./Form.UserData.types";

const skills: FormConfig<Skill> = {
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
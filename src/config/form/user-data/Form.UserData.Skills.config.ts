import { v4 as uuidv4 } from "uuid";
import { Skill } from "@resume-api/types";
import FieldsSkills from "@config/fields/Fields.Skills.config";
import FormConfig from "./Form.UserData.types";

const skills: FormConfig<Skill> = {
    dataKey: "skills",
    title: "form.data.skills.title",
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
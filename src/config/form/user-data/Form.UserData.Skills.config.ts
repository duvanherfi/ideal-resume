import { v4 as uuidv4 } from "uuid";
import { Skill } from "../../../api/types";
import FieldsSkills from "../../fields/Fields.Skills.config";
import FormConfig from "./Form.UserData.types";

const skills: FormConfig<Skill> = {
    dataKey: "skills",
    title: "form.skills.title",
    fields: FieldsSkills,
    isValid: (skill: Skill) => Boolean(skill.name),
    empty: () => ({
        id: uuidv4(),
        name: "",
        level: 3,
    })
};

export default skills;
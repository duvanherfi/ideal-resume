import { Skill } from "../../../api/types";
import { FormGenericProps } from "../common/form/FormGeneric";
import FieldsSkills, { getEmptySkill } from "./fields/FieldsSkills.config";

const FormSkillsConfig: FormGenericProps<Skill> = ({
    dataKey: "skills",
    title: "form.skills.title",
    fields: FieldsSkills,
    emptyItem: getEmptySkill,
    isValid: (skill: Skill) => Boolean(skill.name),
});

export default FormSkillsConfig;
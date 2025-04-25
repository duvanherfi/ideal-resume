import { Skill } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsSkills from "./fields/FieldsSkills.config";

const FormSkillsConfig: FormGenericProps<Skill> = ({
    dataKey: "skills",
    title: "form.skills.title",
    fields: FieldsSkills,
    isValid: (skill: Skill) => Boolean(skill.name),
});

export default FormSkillsConfig;
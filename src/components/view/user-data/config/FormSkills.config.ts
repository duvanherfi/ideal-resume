import { Skill } from "../../../../api/types";
import { MultiItemFormProps } from "../../common/form/form/MultiItemForm";
import FieldsSkills from "./fields/FieldsSkills.config";

const dataKey = "skills";

const FormSkillsConfig: MultiItemFormProps<Skill> = ({
    dataKey,
    title: "form.skills.title",
    fields: FieldsSkills,
    isValid: (skill: Skill) => Boolean(skill.name),
});

export default FormSkillsConfig;
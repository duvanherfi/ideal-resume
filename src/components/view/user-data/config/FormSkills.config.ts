import { Skill } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsSkills from "./fields/FieldsSkills.config";
import emptyItems from "./FormItemEmpty";

const dataKey = "skills";

const FormSkillsConfig: FormGenericProps<Skill> = ({
    dataKey: "skills",
    title: "form.skills.title",
    fields: FieldsSkills,
    emptyItem: emptyItems[dataKey],
    isValid: (skill: Skill) => Boolean(skill.name),
});

export default FormSkillsConfig;
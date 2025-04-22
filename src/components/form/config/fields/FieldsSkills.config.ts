import { v4 as uuidv4 } from "uuid";
import { Skill } from "../../../../api/types";
import { FormField } from "../../common/field/ListGenericFields";

const FieldsSkills: FormField<Skill>[] = [
    {
        type: "text",
        name: "name",
        label: "form.skills.field.name",
        required: true,
    },
    {
        type: "select",
        name: "level",
        label: "form.skills.field.level",
        options: [
            { value: 1, label: "form.skills.option.1" },
            { value: 2, label: "form.skills.option.2" },
            { value: 3, label: "form.skills.option.3" },
            { value: 4, label: "form.skills.option.4" },
            { value: 5, label: "form.skills.option.5" },
        ],
    },
];

export const getEmptySkill = (): Skill => ({
    id: uuidv4(),
    name: "",
    level: 3,
});

export default FieldsSkills;
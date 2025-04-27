import { Skill } from "@resume-api/types";
import { FormField } from "../../components/view/common/form/field/GenericField";

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

export default FieldsSkills;
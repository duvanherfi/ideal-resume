import { Skill } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsSkills: FormField<Skill>[] = [
    { type: "text", name: "name", label: "form.data.skills.field.name", required: true },
    {
        type: "select",
        name: "level",
        label: "form.data.skills.field.level",
        options: [
            { value: 1, label: "form.data.skills.option.1" },
            { value: 2, label: "form.data.skills.option.2" },
            { value: 3, label: "form.data.skills.option.3" },
            { value: 4, label: "form.data.skills.option.4" },
            { value: 5, label: "form.data.skills.option.5" },
        ],
    },
    { type: "number", name: "yearsExperience", label: "form.data.skills.field.yearsExperience" },
    { type: "url", name: "certificationUrl", label: "form.data.skills.field.certificationUrl" },
];

export default FieldsSkills;
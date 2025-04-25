import { Language } from "../../../../../api/types";
import { FormField } from "../../../common/form/field/FormFieldsContainer";

const FieldsLanguage: FormField<Language>[] = [
    {
        type: "text",
        name: "name",
        label: "form.language.field.name",
        required: true,
    },
    {
        type: "select",
        name: "proficiency",
        label: "form.language.field.proficiency",
        options: [
            { value: "Beginner", label: "form.language.option.1" },
            { value: "Intermediate", label: "form.language.option.2" },
            { value: "Advanced", label: "form.language.option.3" },
            { value: "Fluent", label: "form.language.option.4" },
            { value: "Native", label: "form.language.option.5" },
        ],
    },
];

export default FieldsLanguage;
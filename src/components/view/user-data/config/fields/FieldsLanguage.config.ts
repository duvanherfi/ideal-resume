import { v4 as uuidv4 } from "uuid";
import { Language } from "../../../../../api/types";
import { FormField } from "../../../../ui/form/field/ListGenericFields";

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

export const getEmptyLanguage = (): Language => ({
    id: uuidv4(),
    name: "",
    proficiency: "Intermediate",
});

export default FieldsLanguage;
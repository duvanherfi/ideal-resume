import { Language } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsLanguage: FormField<Language>[] = [
    { type: "text", name: "name", label: "form.data.language.field.name", required: true },
    {
        type: "text",
        name: "proficiency",
        label: "form.data.language.field.proficiency",
        suggestions: "form.data.language.field.proficiency.suggestions",
    },
    //{ type: "textarea", name: "comment", label: "form.data.language.field.comment" },
    //{ type: "text", name: "certification.name", label: "form.data.language.field.certificationName" },
    //{ type: "text", name: "certification.institution", label: "form.data.language.field.certificationInstitution" },
    //{ type: "date", name: "certification.date", label: "form.data.language.field.certificationDate" },
    //{ type: "url", name: "certification.credentialUrl", label: "form.data.language.field.certificationUrl" },
];


export default FieldsLanguage;
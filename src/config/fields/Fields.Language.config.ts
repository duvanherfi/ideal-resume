import { Language } from "@resume-api/types";
import { FormField } from "@components/view/common/form/field/GenericField";

const FieldsLanguage: FormField<Language>[] = [
    { type: "text", name: "name", label: "form.language.field.name", required: true },
    {
        type: "select",
        name: "proficiency",
        label: "form.language.field.proficiency",
        options: [/*"Beginner", "Intermediate", "Advanced", "Fluent", "Native"*/],
    },
    //{ type: "textarea", name: "comment", label: "form.language.field.comment" },
    //{ type: "text", name: "certification.name", label: "form.language.field.certificationName" },
    //{ type: "text", name: "certification.institution", label: "form.language.field.certificationInstitution" },
    //{ type: "date", name: "certification.date", label: "form.language.field.certificationDate" },
    //{ type: "url", name: "certification.credentialUrl", label: "form.language.field.certificationUrl" },
];


export default FieldsLanguage;
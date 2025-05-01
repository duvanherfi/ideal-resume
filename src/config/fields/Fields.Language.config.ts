import { FormField } from "@components/view/common/form/field/GenericField";
import { Language } from "@resume-api/types";
import I18nKeys from "src/locales/I18nKeys";

const FieldsLanguage: FormField<Language>[] = [
    { type: "text", name: "name", label: I18nKeys.FORM.DATA.LANGUAGE.FIELD.NAME, required: true },
    { type: "text", name: "proficiency", label: I18nKeys.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY, suggestions: I18nKeys.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY_SUGGESTIONS, },
];

export default FieldsLanguage;
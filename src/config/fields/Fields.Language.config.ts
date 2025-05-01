import { FormField } from "@config/form/user-data/Form.UserData.types";
import { Language } from "@resume-api/types";
import I18n from "src/locales/I18nKeys";

const FieldsLanguage: FormField<Language>[] = [
    { type: "text", name: "name", label: I18n.FORM.DATA.LANGUAGE.FIELD.NAME, required: true },
    { type: "text", name: "proficiency", label: I18n.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY, suggestions: I18n.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY_SUGGESTIONS, },
];

export default FieldsLanguage;
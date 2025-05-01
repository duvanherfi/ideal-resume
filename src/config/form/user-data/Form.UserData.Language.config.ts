import FieldsLanguage from "@config/fields/Fields.Language.config";
import { Language } from "@resume-api/types";
import I18n from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";
import FormConfig from "./Form.UserData.types";

const languages: FormConfig<Language> = {
    dataKey: "languages",
    title: I18n.FORM.DATA.LANGUAGE.TITLE,
    fields: FieldsLanguage,
    isValid: (language: Language) => Boolean(language.name),
    empty: () => ({
        id: uuidv4(),
        name: "",
        proficiency: "Intermediate",
        certification: undefined,
        comment: ""
    })
};

export default languages;
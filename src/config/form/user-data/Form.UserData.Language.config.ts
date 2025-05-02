import FieldsLanguage from "@config/fields/Fields.Language.config";
import { UserDataItems } from "@resume-api/types/items/UserDataItems";
import { Language } from "@resume-api/types/items/Language";
import { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";
import { v4 as uuidv4 } from "uuid";

const languages: FormConfig<UserDataItems, Language> = {
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
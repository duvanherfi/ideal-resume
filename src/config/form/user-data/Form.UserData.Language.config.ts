import FieldsLanguage from "@config/fields/user-data/Fields.UserData.Language.config";
import type { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import type { Language } from "@resume-api/types/user-data/items/Language";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
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
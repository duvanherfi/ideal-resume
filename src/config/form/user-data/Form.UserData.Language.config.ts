import { v4 as uuidv4 } from "uuid";
import { Language } from "@resume-api/types";
import FieldsLanguage from "@config/fields/Fields.Language.config";
import FormConfig from "./Form.UserData.types";

const languages: FormConfig<Language> = {
    dataKey: "languages",
    title: "form.data.language.title",
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
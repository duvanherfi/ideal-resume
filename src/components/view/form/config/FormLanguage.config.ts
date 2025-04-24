import { Language } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsLanguage, { getEmptyLanguage } from "./fields/FieldsLanguage.config";

const FormLanguageConfig: FormGenericProps<Language> = ({
    dataKey: "languages",
    title: "form.language.title",
    fields: FieldsLanguage,
    emptyItem: getEmptyLanguage,
    isValid: (language: Language) => Boolean(language.name),
});

export default FormLanguageConfig;
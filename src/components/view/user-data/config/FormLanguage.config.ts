import { Language } from "../../../../api/types";
import { FormGenericProps } from "../../../ui/form/form/FormGeneric";
import FieldsLanguage from "./fields/FieldsLanguage.config";
import emptyItems from "./FormItemEmpty";

const dataKey = "languages";

const FormLanguageConfig: FormGenericProps<Language> = ({
    dataKey,
    title: "form.language.title",
    fields: FieldsLanguage,
    emptyItem: emptyItems[dataKey],
    isValid: (language: Language) => Boolean(language.name),
});

export default FormLanguageConfig;
import { Language } from "../../../../api/types";
import { MultiItemFormProps } from "../../common/form/form/MultiItemForm";
import FieldsLanguage from "./fields/FieldsLanguage.config";

const dataKey = "languages";

const FormLanguageConfig: MultiItemFormProps<Language> = ({
    dataKey,
    title: "form.language.title",
    fields: FieldsLanguage,
    isValid: (language: Language) => Boolean(language.name),
});

export default FormLanguageConfig;
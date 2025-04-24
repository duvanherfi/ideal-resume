import React from "react";
import { Language } from "../../../../api/types";
import FormGeneric from "../../../ui/form/form/FormGeneric";
import FormLanguageConfig from "../config/FormLanguage.config";

const FormLanguages: React.FC = () => {
  return (
    <FormGeneric<Language> {...FormLanguageConfig} />
  );
};

export default FormLanguages;
import React from "react";
import { Language } from "../../../../api/types";
import MultiItemForm from "../../common/form/form/MultiItemForm";
import FormLanguageConfig from "../config/FormLanguage.config";

const FormLanguages: React.FC = () => {
  return (
    <MultiItemForm<Language> {...FormLanguageConfig} />
  );
};

export default FormLanguages;
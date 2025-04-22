import React from "react";
import { Language, Skill } from "../../../types";
import FormGeneric from "../common/form/FormGeneric";
import FormLanguageConfig from "../config/FormLanguage.config";
import FormSkillsConfig from "../config/FormSkills.config";

const FormSkills: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <FormGeneric<Skill> {...FormSkillsConfig} />
      <FormGeneric<Language> {...FormLanguageConfig} />
    </div>
  );
};

export default FormSkills;
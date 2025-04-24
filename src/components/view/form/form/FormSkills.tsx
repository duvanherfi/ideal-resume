import React from "react";
import { Language, Skill } from "../../../../api/types";
import FormGeneric from "../common/form/FormGeneric";
import FormLanguageConfig from "../config/FormLanguage.config";
import FormSkillsConfig from "../config/FormSkills.config";

const FormSkills: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row xl:flex-col">
      <FormGeneric<Skill> {...FormSkillsConfig} />
      <FormGeneric<Language> {...FormLanguageConfig} />
    </div>
  );
};

export default FormSkills;
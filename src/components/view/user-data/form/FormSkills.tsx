import React from "react";
import { Skill } from "../../../../api/types";
import FormGeneric from "../../../ui/form/form/FormGeneric";
import FormSkillsConfig from "../config/FormSkills.config";

const FormSkills: React.FC = () => {
  return (
    <FormGeneric<Skill> {...FormSkillsConfig} />
  );
};

export default FormSkills;
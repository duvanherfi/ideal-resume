import React from "react";
import { Skill } from "../../../../api/types";
import MultiItemForm from "../../common/form/form/MultiItemForm";
import FormSkillsConfig from "../config/FormSkills.config";

const FormSkills: React.FC = () => {
  return (
    <MultiItemForm<Skill> {...FormSkillsConfig} />
  );
};

export default FormSkills;
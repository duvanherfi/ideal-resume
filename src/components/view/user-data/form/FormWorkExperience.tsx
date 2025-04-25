import React from "react";
import { WorkExperience } from "../../../../api/types";
import MultiItemForm from "../../../ui/form/form/MultiItemForm";
import FormExperienceConfig from "../config/FormExperience.config";

const FormWorkExperience: React.FC = () => {
  return (
    <MultiItemForm<WorkExperience> {...FormExperienceConfig} />
  );
};

export default FormWorkExperience;
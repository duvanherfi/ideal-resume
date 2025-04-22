import React from "react";
import { WorkExperience } from "../../../types";
import FormGeneric from "../common/form/FormGeneric";
import FormExperienceConfig from "../config/FormExperience.config";

const FormWorkExperience: React.FC = () => {
  return (
    <FormGeneric<WorkExperience> {...FormExperienceConfig} />
  );
};

export default FormWorkExperience;
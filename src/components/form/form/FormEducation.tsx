import React from "react";
import { Education } from "../../../types";
import FormGeneric from "../common/form/FormGeneric";
import FormEducationConfig from "../config/FormEducation.config";

const FormEducation: React.FC = () => {
  return (
    <FormGeneric<Education> {...FormEducationConfig} />
  );
};

export default FormEducation;
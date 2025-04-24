import React from "react";
import { Education } from "../../../../api/types";
import FormGeneric from "../../../ui/form/form/FormGeneric";
import FormEducationConfig from "../config/FormEducation.config";

const FormEducation: React.FC = () => {
  return (
    <FormGeneric<Education> {...FormEducationConfig} />
  );
};

export default FormEducation;
import React from "react";
import { Education } from "../../../../api/types";
import MultiItemForm from "../../common/form/form/MultiItemForm";
import FormEducationConfig from "../config/FormEducation.config";

const FormEducation: React.FC = () => {
  return (
    <MultiItemForm<Education> {...FormEducationConfig} />
  );
};

export default FormEducation;
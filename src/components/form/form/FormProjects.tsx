import React from "react";
import { Project } from "../../../types";
import FormGeneric from "../common/form/FormGeneric";
import FormProjectsConfig from "../config/FormProjects.config";

const FormProjects: React.FC = () => {
  return (
    <FormGeneric<Project> {...FormProjectsConfig} />
  );
};

export default FormProjects;
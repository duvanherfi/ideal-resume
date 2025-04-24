import React from "react";
import { Project } from "../../../../api/types";
import FormProjectsConfig from "../config/FormProjects.config";
import FormGeneric from "../../../ui/form/form/FormGeneric";

const FormProjects: React.FC = () => {
  return (
    <FormGeneric<Project> {...FormProjectsConfig} />
  );
};

export default FormProjects;
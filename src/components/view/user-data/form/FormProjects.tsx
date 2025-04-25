import React from "react";
import { Project } from "../../../../api/types";
import FormProjectsConfig from "../config/FormProjects.config";
import MultiItemForm from "../../common/form/form/MultiItemForm";

const FormProjects: React.FC = () => {
  return (
    <MultiItemForm<Project> {...FormProjectsConfig} />
  );
};

export default FormProjects;
import { createContext } from "react";
import { Template } from "../../types";

export interface ResumeTemplateContextType {
  active: Template | null;
  select: (template: Template) => void;
  getAll: Template[];
}

const ResumeTemplateContext = createContext<ResumeTemplateContextType | undefined>(undefined);

export default ResumeTemplateContext;
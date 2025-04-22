import { createContext } from "react";
import { ResumeData } from "../../types";

export interface ResumeDataContextType {
  get: ResumeData;
  update: (data: Partial<ResumeData>) => void;
  updateField: (property: keyof ResumeData, value: any) => void;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(undefined);

export default ResumeDataContext;
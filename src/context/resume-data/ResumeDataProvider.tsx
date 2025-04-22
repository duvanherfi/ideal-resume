import React, { ReactNode, useMemo, useState } from "react";
import { ResumeData } from "../../api/types";
import initialResumeData from "./initialResumeData";
import ResumeDataContext, { ResumeDataContextType } from "./ResumeDataContext";

interface ResumeDataProviderProps {
  children: ReactNode;
  defaultData?: ResumeData;
}

const ResumeDataProvider: React.FC<ResumeDataProviderProps> = ({ children, defaultData }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultData ?? initialResumeData);

  const update = (data: Partial<ResumeData>) => {
    setResumeData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const updateField = (property: keyof ResumeData, value: any) => {
    setResumeData(prevData => ({
      ...prevData,
      [property]: value
    }));
  };

  const value = useMemo<ResumeDataContextType>(() => ({
    get: resumeData,
    update,
    updateField
  }), [resumeData]);

  return (
    <ResumeDataContext.Provider value={value}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export default ResumeDataProvider;
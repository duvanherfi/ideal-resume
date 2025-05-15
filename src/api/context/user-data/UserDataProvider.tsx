import ResumeStorage from "@resume-api/storage/ResumeStorage";
import UserData from "@resume-api/types/user-data/UserData";
import React, { ReactNode, useMemo, useState } from "react";
import initialUserData from "./initialUserData";
import UserDataContext, { type UserDataContextType } from "./UserDataContext";

export interface UserDataProviderProps {
  children: ReactNode;
  defaultData?: UserData;
}

/**
 * Provider que gestiona los datos del CV y su estado actual
 */
const UserDataProvider: React.FC<UserDataProviderProps> = ({ children, defaultData }) => {
  const latestData = ResumeStorage.getLatest();
  const latestId = latestData ? localStorage.getItem('resumes:latest') : null;

  const [userData, setUserData] = useState<UserData>(
    defaultData ?? latestData ?? initialUserData
  );

  const [currentResumeId, setCurrentResumeId] = useState<string | null>(latestId);

  const update = (data: Partial<UserData>) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const updateField = (property: keyof UserData, value: any) => {
    setUserData(prevData => ({
      ...prevData,
      [property]: value
    }));
  };

  const save = (name: string) => {
    const id = ResumeStorage.save(userData, name);
    setCurrentResumeId(id);
    return id;
  };

  const createNew = () => {
    setUserData(initialUserData);
    setCurrentResumeId(null);
  };

  const value = useMemo<UserDataContextType>(() => ({
    get: userData,
    update,
    updateField,
    save,
    currentResumeId,
    setCurrentResumeId,
    createNew,
  }), [userData, currentResumeId]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
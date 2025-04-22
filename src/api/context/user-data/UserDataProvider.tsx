import React, { ReactNode, useMemo, useState } from "react";
import { UserData } from "../../types";
import initialUserData from "./initialUserData";
import UserDataContext, { UserDataContextType } from "./UserDataContext";

interface UserDataProviderProps {
  children: ReactNode;
  defaultData?: UserData;
}

const UserDataProvider: React.FC<UserDataProviderProps> = ({ children, defaultData }) => {
  const [userData, setUserData] = useState<UserData>(defaultData ?? initialUserData);

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

  const value = useMemo<UserDataContextType>(() => ({
    get: userData,
    update,
    updateField
  }), [userData]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
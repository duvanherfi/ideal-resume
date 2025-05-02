import { UserData } from "@resume-api/types";
import { createContext } from "react";

export interface UserDataContextType {
  get: UserData;
  update: (data: Partial<UserData>) => void;
  updateField: (property: keyof UserData, value: any) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export default UserDataContext;
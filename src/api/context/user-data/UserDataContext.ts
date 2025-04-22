import { createContext } from "react";
import { UserData } from "../../types";

export interface UserDataContextType {
  get: UserData;
  update: (data: Partial<UserData>) => void;
  updateField: (property: keyof UserData, value: any) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export default UserDataContext;
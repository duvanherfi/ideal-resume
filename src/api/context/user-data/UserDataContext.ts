import UserData from "@resume-api/types/user-data/UserData";
import { createContext } from "react";

export interface UserDataContextType {
  get: UserData;
  update: (data: Partial<UserData>) => void;
  updateField: (property: keyof UserData, value: any) => void;
  save: (name: string) => string;
  createNew: () => void;
  currentResumeId: string | null;
  setCurrentResumeId: (id: string) => void;
}

const UserDataContext = createContext<UserDataContextType | null>(null);

export default UserDataContext;
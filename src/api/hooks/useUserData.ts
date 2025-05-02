import UserDataContext, { type UserDataContextType } from "@resume-api/context/user-data/UserDataContext";
import { useContext } from "react";

const useUserData = (): UserDataContextType => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("useUserData must be used within a UserDataProvider");
    }
    return context;
};

export default useUserData;
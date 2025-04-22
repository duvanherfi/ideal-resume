import { useContext } from "react";
import LanguageContext from "../context/language/LanguageContext";

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export default useLanguage;
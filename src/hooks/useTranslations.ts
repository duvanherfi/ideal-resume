import translations from "../locales/translations";
import useLanguage from "./useLanguage";

const useTranslations = () => {
    const { lang } = useLanguage();
    
    return {
        t: (key: string) => {
            return translations[lang][key] ?? key;
        }
    };
}

export default useTranslations;
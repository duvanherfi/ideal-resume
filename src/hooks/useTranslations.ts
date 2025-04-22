import translations from "../locales/translations";
import useLanguage from "./useLanguage";

type UseTranslationsType = {
    t: (key: string) => string;
};

const useTranslations = (): UseTranslationsType => {
    const { lang } = useLanguage();
    
    return {
        t: (key: string) => {
            return translations[lang][key] ?? key;
        }
    };
}

export default useTranslations;
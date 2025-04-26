import translations from "../locales/translations";
import useLanguage from "./useLanguage";

type UseTranslationsType = {
    t: (key: string) => string;
    list: (key: string) => string[];
};

const useTranslations = (): UseTranslationsType => {
    const { lang } = useLanguage();

    return {
        t: (key: string): string => {
            return translations[lang][key] as string ?? key;
        },
        list: (key: string): string[] => translations[lang][key] as string[] ?? []
    };
}

export default useTranslations;
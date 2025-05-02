import wordings from "src/locales/wordings";
import useLanguage from "./useLanguage";

type UseI18NType = {
    t: (key: string) => string;
    tlist: (key: string) => string[];
};

const useI18N = (): UseI18NType => {
    const { lang } = useLanguage();

    return {
        t: (key: string): string => {
            return wordings[lang][key] as string ?? key;
        },
        tlist: (key: string): string[] => wordings[lang][key] as string[] ?? []
    };
}

export default useI18N;
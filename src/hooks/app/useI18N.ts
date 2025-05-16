import wordings from "src/context/language/common/wordings";
import useLanguage from "./useLanguage";

type UseI18N = {
    t: (key: string) => string;
    tlist: (key: string) => string[];
};

const useI18N = (): UseI18N => {
    const { lang } = useLanguage();

    return {
        t: (key: string): string => {
            return wordings[lang][key] as string ?? key;
        },
        tlist: (key: string): string[] => wordings[lang][key] as string[] ?? []
    };
}

export default useI18N;
import Select from "@components/ui/input/Select";
import useIsMobile from "@hooks/useIsMobile";
import useLanguage from "@hooks/useLanguage";
import { SelectOption } from "@hooks/useSelectInput";
import React from "react";
import { Locale } from "src/context/language/types/types";

const LanguageSelector: React.FC = () => {
    const isMobile = useIsMobile();
    const { lang, setLang, LANGUAGES } = useLanguage();

    const languageOptions: SelectOption[] = LANGUAGES.map((language) => ({
        label: `${language.flag} ${!isMobile ? language.label : ""}`,
        value: language.code
    }));

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Locale);
    };

    return (
        <Select name="language" value={lang} onChange={handleLanguageChange} options={languageOptions} />
    );
};

export default LanguageSelector;
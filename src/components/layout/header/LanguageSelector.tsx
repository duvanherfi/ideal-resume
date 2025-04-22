import React, { useState, useRef, useEffect } from "react";
import useLanguage from "../../../hooks/useLanguage";
import { Locale } from "../../../locales/translations";
import Icons, { ChevronDirection } from "../../ui/icons/Icons";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
];

const LanguageSelector: React.FC = () => {
    const { lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = LANGUAGES.find((language) => language.code === lang) || LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center self-start gap-2 px-2 py-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Select language"
            >
                <span className="mr-1 text-gray-700 dark:text-gray-200 font-medium">
                    {currentLanguage.flag}
                </span>
                <span className="hidden md:block">
                    {currentLanguage.label}
                </span>
                <Icons.Chevron direction={isOpen ? ChevronDirection.DOWN : ChevronDirection.UP} />
            </button>

            {isOpen && (
                <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 animate-fadeIn">
                    <div className="py-1 max-h-60 overflow-auto">
                        {LANGUAGES.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => {
                                    setLang(language.code);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center justify-between w-full px-4 py-2 text-sm ${lang === language.code
                                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-base">{language.flag}</span>
                                    <span className="hidden md:block">{language.label}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
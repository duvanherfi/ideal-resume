import es from "./es.json";
import en from "./en.json";

export type Locale = "en" | "es";

export type Translations = {
    [K in Locale]: {
        [prop: string]: string;
    };
};

const translations: Translations = {
    en,
    es,
};

export default translations;
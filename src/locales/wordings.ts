import es from "./es.json";
import en from "./en.json";

export type Locale = "en" | "es";

export type Wordings = {
    [K in Locale]: {
        [prop: string]: string | string[];
    };
};

const wordings: Wordings = {
    en,
    es,
};

export default wordings;
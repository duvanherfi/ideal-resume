export interface TemplateColorScheme {
    primary: string;
    titles: string;
    subtitles: string;
    badge: string;
    skill: string;
}

interface TemplateTheme {
    color: TemplateColorScheme;
    font: string;
}

export default TemplateTheme;


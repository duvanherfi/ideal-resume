export interface TemplateColorScheme {
    all: string;
    primary: string;
    titles: string;
    subtitles: string;
    badge: string;
    skill: string;
}

export enum TemplateColorSchemeKey {
    ALL = 'all',
    PRIMARY = 'primary',
    TITLES = 'titles',
    SUBTITLES = 'subtitles',
    BADGE = 'badge',
    SKILL = 'skill',
}

interface TemplateTheme {
    color: TemplateColorScheme;
    font: string;
}

export default TemplateTheme;


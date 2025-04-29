import { Font } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import TemplateTheme from '../../common/TemplateTheme';
import { FontRoboto } from '../helper/TemplateFonts';
import TemplateStyleSheet,
{
    CommonStyles,
    EducationStyles,
    ExperienceStyles,
    FooterStyles,
    HeaderStyles,
    LanguageStyles,
    LayoutStyles,
    ProjectStyles,
    SectionStyles,
    SkillStyles,
    SummaryStyles,
} from '../helper/TemplateStyleSheet';

Font.register(FontRoboto);

// Elegant purple primary with soft accent
const defaultThemeColors: TemplateTheme = {
    primary: '#8E44AD',
};

const page = (): Style => ({
    fontFamily: 'Roboto',
    fontSize: 10,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 12,
    },
    techContainer: {
        display: 'flex' as const,
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        gap: 4,
    },
    date: {
        container: {
            fontSize: 8,
            color: '#6B7280',
            marginBottom: 2,
        },
        text: {},
    },
    badge: {
        container: {
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: `${theme.primary}33`, // 20% opacity
            alignSelf: 'flex-start' as const,
            marginBottom: 4,
        },
        text: {
            fontSize: 8,
            color: theme.primary,
            fontWeight: 600 as const,
        },
    },
});

const layout = (): LayoutStyles => ({
    row: {
        flexDirection: 'row' as const,
        marginTop: 8,
    },
    mainContent: {
        flexDirection: 'column' as const,
        flex: 1,
    },
    column: {
        main: {
            width: '65%',
            paddingRight: 15,
        },
        side: {
            width: '35%',
            paddingLeft: 15,
            borderLeftWidth: 1,
            borderLeftColor: '#E5E7EB',
        },
    },
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        marginBottom: 18,
    },
    header: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        marginBottom: 6,
    },
    title: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.primary,
        textTransform: 'uppercase' as const,
        letterSpacing: 1,
        paddingBottom: 2,
        borderBottomWidth: 2,
        borderBottomColor: theme.primary,
    },
    headerLine: {},
    side: {
        container: {
            marginBottom: 20,
        },
        header: {
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB',
            marginBottom: 8,
        },
        title: {
            fontFamily: 'Roboto',
            fontSize: 11,
            fontWeight: 600,
            color: theme.primary,
        },
    },
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        marginBottom: 20,
    },
    main: {
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        marginBottom: 8,
    },
    name: {
        container: {},
        text: {
            fontSize: 26,
            fontWeight: 700,
            color: theme.primary,
            marginBottom: 2,
        },
    },
    role: {
        fontSize: 12,
        color: '#4B5563',
        marginBottom: 6,
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 6,
        borderWidth: 2,
        borderColor: theme.primary,
    },
    contact: {
        container: {
            flexDirection: 'row' as const,
            gap: 8,
        },
        item: {
            flexDirection: 'row' as const,
            alignItems: 'center' as const,
        },
        label: {
            fontSize: 8,
            fontWeight: 600 as const,
            color: theme.primary,
            marginRight: 4,
        },
        value: {
            fontSize: 8,
        },
        divider: {
            height: 12,
            width: 1,
            backgroundColor: '#E0E0E0',
        },
    },
});

const summary = (): SummaryStyles => ({
    text: {
        fontSize: 9,
        lineHeight: 1.5,
        margin: 4,
        padding: 6,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        textAlign: 'justify' as const,
    },
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 14,
        paddingLeft: 6,
        borderLeftWidth: 3,
        borderLeftColor: theme.primary,
    },
    header: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 4,
    },
    company: {
        fontSize: 12,
        fontWeight: 600,
        color: '#111827',
    },
    role: {
        fontSize: 10,
        fontWeight: 700,
        color: theme.primary,
    },
    contractType: {
        fontSize: 8,
        color: '#6B7280',
    },
    location: {
        fontSize: 8,
        color: '#6B7280',
    },
    description: {
        fontSize: 9,
        lineHeight: 1.4,
        marginTop: 2,
    },
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 12,
        paddingLeft: 6,
        borderLeftWidth: 3,
        borderLeftColor: theme.primary,
    },
    header: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 2,
    },
    degree: {
        fontSize: 11,
        fontWeight: 600,
        color: theme.primary,
    },
    institution: {
        fontSize: 10,
        fontWeight: 600,
        color: '#111827',
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
        marginTop: 2,
    },
    location: {
        fontSize: 8,
        color: '#6B7280',
    },
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        marginBottom: 10,
    },
    item: {
        padding: 6,
        marginBottom: 8,
        backgroundColor: `${theme.primary}10`, // 6% opacity
        borderRadius: 4,
    },
    name: {
        fontSize: 10,
        fontWeight: 600,
        marginBottom: 2,
    },
    link: {
        fontSize: 8,
        textDecoration: 'underline' as const,
        marginBottom: 2,
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
    },
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        gap: 4,
        marginBottom: 10,
    },
    item: {
        backgroundColor: `${theme.primary}20`,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    name: {
        fontSize: 8,
        color: theme.primary,
        fontWeight: 600 as const,
    },
    bar: {
        container: {},
        fill: {},
    },
});

const language = (theme: TemplateTheme): LanguageStyles => ({
    container: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        marginBottom: 4,
    },
    item: {},
    name: {
        fontSize: 9,
        fontWeight: 600 as const,
    },
    proficiency: {
        fontSize: 9,
        color: theme.primary,
    },
});

const footer = (): FooterStyles => ({
    container: {
        marginTop: 20,
        alignItems: 'center' as const,
    },
    text: {
        fontSize: 7,
        color: '#9CA3AF',
    },
});

const styleBuilder = (theme: TemplateTheme = defaultThemeColors): TemplateStyleSheet => ({
    page: page(),
    common: common(theme),
    layout: layout(),
    section: section(theme),
    header: header(theme),
    summary: summary(),
    experience: experience(theme),
    education: education(theme),
    project: project(theme),
    skill: skill(theme),
    language: language(theme),
    footer: footer(),
});

export default styleBuilder;
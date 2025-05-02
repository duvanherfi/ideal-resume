import { Font } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import TemplateTheme from '../../common/TemplateTheme';
import { darkenHexColor, getContrastingTextColor, lightenHexColor } from '../../common/helper/colorHelper';
import { FontOpenSans } from './common/templateFonts';
import TemplateStyleSheet, { CommonStyles, EducationStyles, ExperienceStyles, FooterStyles, HeaderStyles, LanguageStyles, LayoutStyles, ProjectStyles, SectionStyles, SkillStyles, SummaryStyles } from './common/TemplateStyleSheet';

Font.register(FontOpenSans);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        500: "#6B7280",
        700: "#4B5563",
    }
};

const page = (): Style => ({
    fontFamily: 'Open Sans',
    padding: 0,
    backgroundColor: colors.white,
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    date: {
        container: {
            alignItems: 'flex-end',
        },
        text: {
            fontSize: 10,
            color: colors.gray[500],
        },
    },
    badge: {
        container: {
            backgroundColor: lightenHexColor(theme.primary, 90),
            borderRadius: 10,
            paddingVertical: 3,
            paddingHorizontal: 8,
            margin: 3,
            flexDirection: 'row',
        },
        text: {
            fontSize: 9,
            color: darkenHexColor(theme.primary, 20),
        },
    },
});

const layout = (): LayoutStyles => ({
    row: {
        flexDirection: 'row',
    },
    mainContent: {
        flex: 1,
    },
    column: {
        main: {
            flex: 1,
            padding: 20,
        },
        side: {
            flex: 1,
            padding: 20,
            borderRightWidth: 1,
            borderRightColor: colors.gray[200],
        },
    },
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    header: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: darkenHexColor(theme.primary),
        marginBottom: 10,
    },
    headerLine: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    side: {
        container: {
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
        },
        header: {
            marginBottom: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: darkenHexColor(theme.primary),
            marginBottom: 10,
        },
    },
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        backgroundColor: theme.primary,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        padding: 16,
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: getContrastingTextColor(theme.primary),
    },
    name: {
        container: {
            marginLeft: 10,
        },
        text: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 3,
        },
    },
    role: {
        fontSize: 14,
        color: colors.gray[50],
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white',
        marginRight: 15,
    },
    contact: {
        container: {
            alignItems: 'flex-end',
        },
        item: {
            alignItems: 'flex-end',
        },
        label: {
            fontWeight: 'bold',
            fontSize: 12,
        },
        value: {
            fontSize: 10,
            marginBottom: 3,
        },
        divider: {
            marginVertical: 2,
        },
    },
});

const summary = (): SummaryStyles => ({
    text: {
        fontSize: 10,
        color: colors.gray[700],
        lineHeight: 1.5,
    },
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    role: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    company: {
        color: theme.primary,
    },
    contractType: {
        fontSize: 10,
        color: colors.gray[500],
    },
    location: {
        fontSize: 10,
        fontStyle: 'italic',
        color: colors.gray[500],
    },
    description: {
        fontSize: 10,
        color: colors.gray[700],
        lineHeight: 1.5,
    },
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    degree: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    institution: {
        fontSize: 11,
        color: theme.primary,
    },
    description: {
        fontSize: 10,
        color: colors.gray[700],
    },
    location: {
        fontSize: 10,
        fontStyle: 'italic',
        color: colors.gray[500],
    },
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: '48%',
        marginBottom: 10,
        marginRight: '2%',
        padding: 8,
        backgroundColor: colors.gray[50],
        borderRadius: 4,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    link: {
        fontSize: 9,
        color: theme.primary,
        marginBottom: 4,
    },
    description: {
        fontSize: 9,
        color: colors.gray[700],
    },
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    item: {
        backgroundColor: lightenHexColor(theme.primary, 90),
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 8,
        margin: 3,
        flexDirection: 'row',
    },
    name: {
        fontSize: 9,
        color: darkenHexColor(theme.primary, 20),
    },
    bar: {
        container: {
            marginTop: 4,
            height: 6,
            width: '100%',
            backgroundColor: lightenHexColor(theme.primary, 90),
            borderRadius: 3,
        },
        fill: {
            height: '100%',
            backgroundColor: theme.primary,
            borderRadius: 3,
        },
    }
});

const language = (): LanguageStyles => ({
    container: {
        marginBottom: 8,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    proficiency: {
        fontSize: 9,
        color: colors.gray[500],
    },
});

const footer = (): FooterStyles => ({
    container: {
        padding: 10,
        backgroundColor: colors.gray[50],
        alignItems: 'center',
    },
    text: {
        fontSize: 8,
        color: colors.gray[500],
    },
});

const templateStyle = (theme: TemplateTheme): TemplateStyleSheet => ({
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
    language: language(),
    footer: footer(),
});

export default templateStyle;
import { Font } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { FontRoboto } from "./common/templateFonts";
import type TemplateStyleSheet from "./common/TemplateStyleSheet";
import type { CommonStyles, EducationStyles, ExperienceStyles, FooterStyles, HeaderStyles, LanguageStyles, LayoutStyles, ProjectStyles, SectionStyles, SkillStyles, SummaryStyles } from "./common/TemplateStyleSheet";

Font.register(FontRoboto);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#E0E0E0",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        900: "#111827"
    }
};

const page = (): Style => ({
    fontFamily: "Roboto",
    fontSize: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        height: 1,
        backgroundColor: colors.gray[300],
        marginVertical: 12,
    },
    techContainer: {
        display: "flex" as const,
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 4,
    },
    date: {
        container: {
            fontSize: 8,
            color: colors.gray[500],
            marginBottom: 2,
        },
        text: {},
    },
    badge: {
        container: {
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: `${theme.color.badge}33`, // 20% opacity
            alignSelf: "flex-start" as const,
            marginBottom: 4,
        },
        text: {
            fontSize: 8,
            color: theme.color.badge,
            fontWeight: 600 as const,
        },
    },
});

const layout = (): LayoutStyles => ({
    row: {
        flexDirection: "row" as const,
        marginTop: 8,
    },
    mainContent: {
        flexDirection: "column" as const,
        flex: 1,
    },
    column: {
        main: {
            width: "65%",
            paddingRight: 15,
        },
        side: {
            width: "35%",
            paddingLeft: 15,
            borderLeftWidth: 1,
            borderLeftColor: colors.gray[200],
        },
    },
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        marginBottom: 18,
    },
    header: {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        marginBottom: 6,
    },
    title: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.color.primary,
        textTransform: "uppercase" as const,
        letterSpacing: 1,
        paddingBottom: 2,
        borderBottomWidth: 2,
        borderBottomColor: theme.color.primary,
    },
    headerLine: {},
    side: {
        container: {
            marginBottom: 20,
        },
        header: {
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray[200],
            marginBottom: 8,
        },
        title: {
            fontFamily: "Roboto",
            fontSize: 11,
            fontWeight: 600,
            color: theme.color.primary,
        },
    },
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        flexDirection: "column" as const,
        alignItems: "center" as const,
        marginBottom: 20,
    },
    main: {
        flexDirection: "column" as const,
        alignItems: "center" as const,
        marginBottom: 8,
    },
    name: {
        container: {},
        text: {
            fontSize: 26,
            fontWeight: 700,
            color: theme.color.primary,
            marginBottom: 2,
        },
    },
    role: {
        fontSize: 12,
        color: colors.gray[600],
        marginBottom: 6,
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 6,
        borderWidth: 2,
        borderColor: theme.color.primary,
    },
    contact: {
        container: {
            flexDirection: "row" as const,
            gap: 8,
        },
        item: {
            flexDirection: "row" as const,
            alignItems: "center" as const,
        },
        label: {
            fontSize: 8,
            fontWeight: 600 as const,
            color: theme.color.primary,
            marginRight: 4,
        },
        value: {
            fontSize: 8,
        },
        divider: {
            height: 12,
            width: 1,
            backgroundColor: colors.gray[300],
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
        borderColor: colors.gray[300],
        borderRadius: 4,
        textAlign: "justify" as const,
    },
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 14,
        paddingLeft: 6,
        borderLeftWidth: 3,
        borderLeftColor: theme.color.primary,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 4,
    },
    company: {
        fontSize: 12,
        fontWeight: 600,
        color: colors.gray[900],
    },
    role: {
        fontSize: 10,
        fontWeight: 700,
        color: theme.color.primary,
    },
    contractType: {
        fontSize: 8,
        color: colors.gray[500],
    },
    location: {
        fontSize: 8,
        color: colors.gray[500],
    },
    description: {
        fontSize: 9,
        lineHeight: 1.4,
        marginTop: 2,
        marginBottom: 8,
    },
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 12,
        paddingLeft: 6,
        borderLeftWidth: 3,
        borderLeftColor: theme.color.primary,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 2,
    },
    degree: {
        fontSize: 11,
        fontWeight: 600,
        color: theme.color.primary,
    },
    institution: {
        fontSize: 10,
        fontWeight: 600,
        color: colors.gray[900],
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
        marginTop: 2,
    },
    location: {
        fontSize: 8,
        color: colors.gray[500],
    },
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        marginBottom: 10,
    },
    item: {
        padding: 6,
        marginBottom: 8,
        backgroundColor: `${theme.color.primary}10`, // 6% opacity
        borderRadius: 4,
    },
    name: {
        fontSize: 10,
        fontWeight: 600,
        marginBottom: 2,
    },
    link: {
        fontSize: 8,
        textDecoration: "underline" as const,
        marginBottom: 2,
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
        marginBottom: 8,
    },
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 4,
        marginBottom: 10,
    },
    item: {
        backgroundColor: `${theme.color.skill}20`,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    name: {
        fontSize: 8,
        color: theme.color.skill,
        fontWeight: 600 as const,
    },
    bar: {
        container: {},
        fill: {},
    },
});

const language = (theme: TemplateTheme): LanguageStyles => ({
    container: {
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    name: {
        fontSize: 10,
    },
    proficiency: {
        fontSize: 9,
        color: theme.color.primary,
    }
});

const footer = (): FooterStyles => ({
    container: {
        marginTop: 20,
        alignItems: "center" as const,
    },
    text: {
        fontSize: 7,
        color: colors.gray[400],
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
    language: language(theme),
    footer: footer(),
});

export default templateStyle;
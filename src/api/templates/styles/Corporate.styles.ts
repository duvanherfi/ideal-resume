import { Font } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import TemplateTheme from "@resume-api/common/TemplateTheme";
import { FontRoboto } from "./common/templateFonts";
import TemplateStyleSheet, { CommonStyles, EducationStyles, ExperienceStyles, FooterStyles, HeaderStyles, LanguageStyles, LayoutStyles, ProjectStyles, SectionStyles, SkillStyles, SummaryStyles } from "./common/TemplateStyleSheet";

Font.register(FontRoboto);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        100: "#F9FAFB",
        200: "#F3F4F6",
        300: "#E5E7EB",
        400: "#D1D5DB",
        500: "#9CA3AF",
        600: "#6B7280",
        700: "#4B5563",
        900: "#111827",
    }
};

const page = (): Style => ({
    fontFamily: "Roboto",
    fontSize: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    color: "#333333",
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        height: 1,
        backgroundColor: "#E2E8F0",
        marginVertical: 10,
    },
    techContainer: {
        display: "flex" as const,
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 4,
        alignSelf: "flex-end" as const,
        justifySelf: "center" as const,
    },

    date: {
        container: {
            fontSize: 9,
            marginBottom: 4,
            color: colors.gray[600],
        },
        text: {}
    },

    badge: {
        container: {
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: `${theme.primary}33`, // 20% opacity
            alignSelf: "flex-start" as const,
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
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
    },
    mainContent: {
        flexDirection: "row" as const,
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
            borderLeftColor: colors.gray[300],
        },
    },
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        marginBottom: 20,
    },
    header: {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        marginBottom: 10,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 600,
        color: theme.primary,
        marginRight: 10,
    },
    headerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[300],
    },
    side: {
        container: {
            marginBottom: 20,
        },
        header: {
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray[300],
            marginBottom: 8,
        },
        title: {
            fontFamily: "Roboto",
            fontSize: 14,
            fontWeight: 600,
            color: theme.primary,
        },
    },
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        marginBottom: 12,
    },
    main: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 6,
    },
    name: {
        container: {
            flex: 1,
        },
        text: {
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 700,
            color: theme.primary,
            marginBottom: 5,
        },
    },
    role: {
        fontSize: 14,
        color: colors.gray[700],
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: theme.primary,
    },
    contact: {
        container: {
            flexDirection: "row" as const,
            backgroundColor: colors.gray[200],
            padding: 10,
            borderRadius: 5,
            justifyContent: "space-between" as const,
            alignItems: "center" as const,
        },
        item: {
            flexDirection: "row" as const,
            alignItems: "center" as const,
        },
        label: {
            fontWeight: 600,
            fontSize: 9,
            color: theme.primary,
            marginRight: 5,
        },
        value: {
            fontSize: 9,
        },
        divider: {
            height: 15,
            width: 1,
            backgroundColor: colors.gray[400],
        },
    },
});

const summary = (): SummaryStyles => ({
    text: {
        fontSize: 10,
        lineHeight: 1.6,
        textAlign: "justify" as const,
    },
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 12,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 3,
    },
    company: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 600,
        color: colors.gray[900],
    },
    role: {
        fontSize: 11,
        fontWeight: 600,
        color: theme.primary,
        marginBottom: 4,
    },
    contractType: {
        fontSize: 9,
        fontWeight: 400,
        color: colors.gray[900],
    },
    location: {
        fontSize: 9,
        color: colors.gray[900],
        alignSelf: "flex-end" as const,
    },
    description: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: "justify" as const,
    },
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 10,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 2,
    },
    degree: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: 600,
        color: theme.primary,
    },
    institution: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 600,
        color: colors.gray[900],
    },
    description: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: "justify" as const,
    },
    location: {
        fontSize: 9,
        color: colors.gray[900],
        alignSelf: "flex-end" as const,
    },
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        gap: 8,
    },
    item: {
        marginBottom: 8,
        padding: 6,
        backgroundColor: colors.gray[100],
        borderRadius: 4,
        borderLeftWidth: 2,
        borderLeftColor: theme.primary,
    },
    name: {
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: 600,
        marginBottom: 3,
    },
    link: {
        fontSize: 8,
        color: theme.primary,
        textDecoration: "none" as const,
        marginBottom: 3,
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
        paddingBottom: 4
    },
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        gap: 6,
    },
    item: {
        marginBottom: 6,
    },
    name: {
        fontSize: 9,
        marginBottom: 3,
    },
    bar: {
        container: {
            height: 4,
            backgroundColor: colors.gray[300],
            borderRadius: 2,
            width: "100%",
        },
        fill: {
            height: 4,
            backgroundColor: theme.primary,
            borderRadius: 2,
        },
    },
});

const language = (theme: TemplateTheme): LanguageStyles => ({
    container: {
        gap: 5,
    },
    item: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: 5,
    },
    name: {
        fontSize: 9,
    },
    proficiency: {
        fontSize: 9,
        color: theme.primary,
    },
});

const footer = (): FooterStyles => ({
    container: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[300],
        paddingTop: 10,
        marginTop: 20,
        alignItems: "center" as const,
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
    language: language(theme),
    footer: footer(),
});

export default templateStyle;
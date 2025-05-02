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
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
    },
    blue: {
        50: "#EFF6FF",
        100: "#DBEAFE",
        200: "#BFDBFE",
        300: "#93C5FD",
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
        800: "#1E40AF",
        900: "#1E3A8A",
    }
};

const page = (): Style => ({
    fontFamily: "Roboto",
    fontSize: 10,
    paddingHorizontal: 35,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    color: colors.gray[800],
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        height: 1,
        backgroundColor: colors.gray[200],
        marginVertical: 6,
    },
    techContainer: {
        display: "flex" as const,
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 4,
        marginTop: 4,
    },
    date: {
        container: {
            fontSize: 7,
            color: colors.gray[600],
            marginBottom: 3,
        },
        text: {}
    },
    badge: {
        container: {
            paddingVertical: 2,
            paddingHorizontal: 5,
            borderRadius: 3,
            backgroundColor: colors.gray[200],
            borderWidth: 1,
            borderColor: theme.primary,
            alignSelf: "flex-start" as const,
        },
        text: {
            fontSize: 8,
            color: theme.primary,
            fontWeight: 500 as const,
        },
    },
});

const layout = (): LayoutStyles => ({
    row: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
    },
    column: {
        main: {
            width: "65%",
            paddingRight: 15,
        },
        side: {
            width: "35%",
            paddingLeft: 15,
            paddingRight: 4,
            borderLeftWidth: 1,
            borderLeftColor: colors.gray[200],
            backgroundColor: colors.gray[50],
            borderRadius: 4,
        },
    },
    mainContent: {
        flexDirection: "row" as const,
        flex: 1,
    }
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        marginBottom: 15,
    },
    header: {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        marginBottom: 8,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: 600,
        color: theme.primary,
        marginRight: 10,
        textTransform: "uppercase" as const,
    },
    headerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[300],
    },
    side: {
        container: {
            marginBottom: 15,
            paddingVertical: 5,
        },
        header: {
            marginBottom: 8,
            paddingBottom: 3,
            borderBottomWidth: 1,
            borderBottomColor: theme.primary,
        },
        title: {
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: 600,
            color: theme.primary,
            textTransform: "uppercase" as const,
        },
    },
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        marginBottom: 10,
    },
    main: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "flex-start" as const,
        marginBottom: 10,
    },
    name: {
        container: {
            flex: 1,
        },
        text: {
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: 700,
            color: theme.primary,
            textTransform: "uppercase" as const,
        },
    },
    role: {
        fontSize: 13,
        fontWeight: 500,
        color: colors.gray[700],
        marginTop: 2,
    },
    photo: {
        width: 65,
        height: 65,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: theme.primary,
    },
    contact: {
        container: {
            flexDirection: "row" as const,
            justifyContent: "space-between" as const,
            alignItems: "center" as const,
            marginTop: 5,
        },
        item: {
            flexDirection: "row" as const,
            alignItems: "center" as const,
            marginRight: 10,
        },
        label: {
            fontWeight: 600,
            fontSize: 9,
            color: theme.primary,
            marginRight: 4,
        },
        value: {
            fontSize: 9,
            color: colors.gray[700],
        },
        divider: {
            height: 10,
            width: 1,
            backgroundColor: colors.gray[300],
            marginHorizontal: 5,
        },
    },
});

const summary = (): SummaryStyles => ({
    text: {
        fontSize: 10,
        lineHeight: 1.5,
        textAlign: "justify" as const,
        color: colors.gray[700],
    },
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
        borderBottomStyle: "dashed" as const,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "flex-start" as const,
        marginBottom: 3,
    },
    company: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: 700,
        color: colors.gray[800],
    },
    role: {
        fontSize: 10,
        fontWeight: 600,
        color: theme.primary,
        marginBottom: 3,
    },
    contractType: {
        fontSize: 9,
        fontWeight: 400,
        color: colors.gray[600],
    },
    location: {
        fontSize: 9,
        color: colors.gray[600],
        textAlign: "right" as const,
    },
    description: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: "justify" as const,
        color: colors.gray[700],
    },
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 10,
    },
    header: {
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
        alignItems: "flex-start" as const,
        marginBottom: 3,
    },
    degree: {
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: 600,
        color: theme.primary,
    },
    institution: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: 700,
        color: colors.gray[800],
    },
    description: {
        fontSize: 9,
        lineHeight: 1.5,
        color: colors.gray[700],
        textAlign: "justify" as const,
    },
    location: {
        fontSize: 7,
        color: colors.gray[600],
    },
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        gap: 8,
    },
    item: {
        marginBottom: 10,
        padding: 8,
        backgroundColor: colors.white,
        borderRadius: 4,
        borderLeftWidth: 2,
        borderLeftColor: theme.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    name: {
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: 700,
        marginBottom: 3,
        color: theme.primary,
    },
    link: {
        fontSize: 8,
        color: theme.primary,
        textDecoration: "underline" as const,
        marginBottom: 3,
    },
    description: {
        fontSize: 8,
        lineHeight: 1.4,
        paddingBottom: 4,
        color: colors.gray[700],
    },
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        gap: 6,
    },
    item: {
        marginBottom: 8,
    },
    name: {
        fontSize: 9,
        fontWeight: 600,
        marginBottom: 3,
        color: colors.gray[800],
    },
    bar: {
        container: {
            height: 5,
            backgroundColor: colors.gray[200],
            borderRadius: 2,
            width: "100%",
        },
        fill: {
            height: 5,
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
        marginBottom: 6,
    },
    name: {
        fontSize: 9,
        fontWeight: 600,
        color: colors.gray[800],
    },
    proficiency: {
        fontSize: 9,
        color: theme.primary,
        fontWeight: 500,
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
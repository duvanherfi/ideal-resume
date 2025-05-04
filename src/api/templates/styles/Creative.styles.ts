import { Font } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import { darkenHexColor, getContrastingTextColor, lightenHexColor } from "@resume-api/common/colorHelper";
import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { FontRoboto } from "./common/templateFonts";
import type TemplateStyleSheet from "./common/TemplateStyleSheet";
import type { CommonStyles, EducationStyles, ExperienceStyles, FooterStyles, HeaderStyles, LanguageStyles, LayoutStyles, ProjectStyles, SectionStyles, SkillStyles, SummaryStyles } from "./common/TemplateStyleSheet";

Font.register(FontRoboto);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        200: "#666666",
        300: "#444444",
        400: "#333333",
        500: "#111827",
    }
};

const page = (): Style => ({
    fontFamily: "Roboto",
    padding: 0,
    backgroundColor: colors.white,
});

const common = (theme: TemplateTheme): CommonStyles => ({
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: lightenHexColor(theme.color.primary, 80),
    },
    techContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "0.5rem",
    },
    date: {
        container: {
            fontSize: 9,
            color: colors.gray[200],
        },
        text: {
            fontSize: 9,
            color: colors.gray[200],
        }
    },
    badge: {
        container: {
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: `${theme.color.badge}33`,
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

const layout = (theme: TemplateTheme): LayoutStyles => ({
    row: {
        flexDirection: "row",
    },
    mainContent: {
        flexDirection: "column",
        height: "100%",
    },
    column: {
        main: {
            width: "65%",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 30,
        },
        side: {
            width: "35%",
            backgroundColor: lightenHexColor(theme.color.primary, 95),
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 30,
        }
    }
});

const section = (theme: TemplateTheme): SectionStyles => ({
    container: {
        marginBottom: 20,
        paddingBottom: 10,
    },
    header: {
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: darkenHexColor(theme.color.titles, 15),
    },
    headerLine: {
        borderBottomWidth: 2,
        borderBottomColor: theme.color.primary,
        paddingBottom: 3,
    },
    side: {
        container: {
            marginBottom: 25,
        },
        header: {
            marginBottom: 10,
        },
        title: {
            fontSize: 14,
            fontWeight: "bold",
            color: darkenHexColor(theme.color.titles, 15),
        }
    }
});

const header = (theme: TemplateTheme): HeaderStyles => ({
    container: {
        backgroundColor: theme.color.primary,
        color: getContrastingTextColor(theme.color.primary),
        padding: 10,
        flexDirection: "column",
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    name: {
        container: {
            marginLeft: 15,
        },
        text: {
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
            marginBottom: 5,
        }
    },
    role: {
        fontSize: 12,
        color: lightenHexColor(theme.color.subtitles, 85),
        fontWeight: "medium",
    },
    photo: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        overflow: "hidden",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    contact: {
        container: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderTopColor: lightenHexColor(theme.color.primary, 30),
            paddingTop: 10,
        },
        item: {
            width: "32%",
            marginBottom: 5,
        },
        label: {
            fontSize: 8,
            color: lightenHexColor(theme.color.primary, 85),
            fontWeight: "medium",
            marginBottom: 2,
        },
        value: {
            fontSize: 9,
            color: "white",
        },
        divider: {
            borderTopWidth: 1,
            borderTopColor: lightenHexColor(theme.color.primary, 30),
        }
    }
});

const summary = (): SummaryStyles => ({
    text: {
        fontSize: 10,
        lineHeight: 1.6,
        color: colors.gray[300],
    }
});

const experience = (theme: TemplateTheme): ExperienceStyles => ({
    item: {
        marginBottom: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    role: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.gray[400],
    },
    company: {
        fontSize: 11,
        color: theme.color.subtitles,
        fontWeight: "medium",
        marginBottom: 5,
    },
    contractType: {
        fontSize: 9,
        fontWeight: 400,
        color: colors.gray[500],
    },
    location: {
        fontSize: 9,
        color: colors.gray[500],
        alignSelf: "flex-end"
    },
    description: {
        fontSize: 10,
        color: colors.gray[300],
        lineHeight: 1.6,
    }
});

const education = (theme: TemplateTheme): EducationStyles => ({
    item: {
        marginBottom: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 4
    },
    degree: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.gray[400],
    },
    institution: {
        fontSize: 11,
        color: theme.color.subtitles,
        marginTop: 3,
    },
    description: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: "justify",
    },
    location: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: "right",
    }
});

const project = (theme: TemplateTheme): ProjectStyles => ({
    container: {
        marginTop: 5,
    },
    item: {
        marginBottom: 12,
        padding: 8,
        backgroundColor: "white",
        borderRadius: 5,
        borderLeftWidth: 3,
        borderLeftColor: theme.color.primary,
    },
    name: {
        fontSize: 11,
        fontWeight: "bold",
        color: colors.gray[400],
        marginBottom: 3,
    },
    link: {
        fontSize: 8,
        color: theme.color.primary,
        marginBottom: 4,
    },
    description: {
        fontSize: 9,
        color: colors.gray[300],
        lineHeight: 1.4,
        marginBottom: 12,
    }
});

const skill = (theme: TemplateTheme): SkillStyles => ({
    container: {
        marginTop: 5,
    },
    item: {
        marginBottom: 8,
    },
    name: {
        fontSize: 10,
        color: colors.gray[400],
        marginBottom: 3,
    },
    bar: {
        container: {
            height: 4,
            backgroundColor: lightenHexColor(theme.color.skill, 70),
            borderRadius: 2,
            overflow: "hidden",
        },
        fill: {
            height: "100%",
            backgroundColor: theme.color.skill,
            borderRadius: 2,
        }
    }
});

const language = (theme: TemplateTheme): LanguageStyles => ({
    container: {
        marginTop: 5,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: lightenHexColor(theme.color.primary, 80),
    },
    name: {
        fontSize: 10,
        color: colors.gray[400],
    },
    proficiency: {
        fontSize: 9,
        color: theme.color.primary,
        fontWeight: "medium",
    }
});

const footer = (theme: TemplateTheme): FooterStyles => ({
    container: {
        padding: 10,
        backgroundColor: lightenHexColor(theme.color.primary, 95),
        alignItems: "center",
    },
    text: {
        fontSize: 8,
        color: colors.gray[200],
    }
});

const templateStyle = (theme: TemplateTheme): TemplateStyleSheet => ({
    page: page(),
    common: common(theme),
    layout: layout(theme),
    section: section(theme),
    header: header(theme),
    summary: summary(),
    experience: experience(theme),
    education: education(theme),
    project: project(theme),
    skill: skill(theme),
    language: language(theme),
    footer: footer(theme),
});

export default templateStyle;
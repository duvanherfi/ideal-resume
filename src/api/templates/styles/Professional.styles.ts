import { Font } from '@react-pdf/renderer';
import TemplateTheme from '../../common/TemplateTheme';
import { FontRoboto } from '../helper/TemplateFonts';
import { lightenHexColor } from '../helper/templateStyleHelper';
import TemplateStyleSheet from '../helper/TemplateStyleSheet';

Font.register(FontRoboto);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
    },
};

const styleBuilder = (theme: TemplateTheme): TemplateStyleSheet => ({
    page: {
        fontFamily: 'Roboto',
        padding: 0,
        backgroundColor: colors.white,
    },

    // Common styles
    common: {
        divider: {
            height: 2,
            backgroundColor: lightenHexColor(theme.primary, 75),
            width: '100%',
        },
        techContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 8,
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
                backgroundColor: lightenHexColor(theme.primary, 85),
                borderRadius: 4,
                paddingVertical: 2,
                paddingHorizontal: 6,
                margin: 2,
            },
            text: {
                fontSize: 9,
                color: theme.primary,
            },
        },
    },

    // Layout styles
    layout: {
        row: {
            flexDirection: 'row',
            flex: 1,
        },
        mainContent: {
            flex: 1,
        },
        column: {
            main: {
                width: '65%',
                padding: 20,
                paddingRight: 15,
            },
            side: {
                width: '35%',
                backgroundColor: colors.gray[50],
                padding: 20,
                paddingLeft: 15,
            },
        },
    },

    // Section styles
    section: {
        container: {
            marginBottom: 20,
        },
        header: {
            marginBottom: 12,
        },
        title: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.primary,
            textTransform: 'uppercase',
            marginBottom: 4,
        },
        headerLine: {
            height: 2,
            backgroundColor: lightenHexColor(theme.primary, 75),
            width: '100%',
        },
        side: {
            container: {
                marginBottom: 20,
            },
            header: {
                marginBottom: 12,
            },
            title: {
                fontSize: 14,
                fontWeight: 700,
                color: theme.primary,
                textTransform: 'uppercase',
                marginBottom: 4,
            },
        },
    },

    // Header styles
    header: {
        container: {
            backgroundColor: colors.gray[50],
            borderBottomWidth: 3,
            borderBottomColor: theme.primary,
            padding: 20,
        },
        main: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
        },
        name: {
            container: {
                flex: 1,
            },
            text: {
                fontSize: 24,
                fontWeight: 700,
                color: theme.primary,
                marginBottom: 4,
            },
        },
        role: {
            fontSize: 14,
            fontWeight: 500,
            color: colors.gray[500],
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            },
            item: {
                minWidth: '30%',
                marginRight: 10,
            },
            label: {
                fontSize: 9,
                fontWeight: 700,
                color: theme.primary,
                textTransform: 'uppercase',
                marginBottom: 2,
            },
            value: {
                fontSize: 10,
                color: colors.gray[700],
            },
            divider: {
                marginVertical: 1,
            },
        },
    },

    // Summary styles
    summary: {
        text: {
            fontSize: 10,
            lineHeight: 1.5,
            color: colors.gray[700],
        },
    },

    // Experience styles
    experience: {
        item: {
            marginBottom: 15,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
        },
        role: {
            fontSize: 12,
            fontWeight: 700,
            color: colors.gray[900],
        },
        company: {
            fontSize: 11,
            fontWeight: 500,
            color: theme.primary,
            marginBottom: 4,
        },
        contractType: {
            fontSize: 10,
            color: colors.gray[500],
        },
        location: {
            fontSize: 10,
            color: colors.gray[500],
        },
        description: {
            fontSize: 10,
            lineHeight: 1.5,
            color: colors.gray[700],
        },
    },

    // Education styles
    education: {
        item: {
            marginBottom: 12,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
        },
        degree: {
            fontSize: 12,
            fontWeight: 700,
            color: colors.gray[900],
        },
        institution: {
            fontSize: 11,
            fontWeight: 500,
            marginBottom: 4,
            color: theme.primary,
        },
        description: {
            fontSize: 10,
            lineHeight: 1.5,
            color: colors.gray[700],
        },
        location: {
            fontSize: 10,
            color: colors.gray[500],
        },
    },

    // Project styles
    project: {
        container: {
            marginBottom: 20,
        },
        item: {
            marginBottom: 12,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: lightenHexColor(theme.primary, 85),
        },
        name: {
            fontSize: 11,
            fontWeight: 700,
            color: colors.gray[900],
            marginBottom: 2,
        },
        link: {
            fontSize: 9,
            color: theme.primary,
            marginBottom: 3,
            textDecoration: 'none',
        },
        description: {
            fontSize: 9,
            lineHeight: 1.4,
            color: colors.gray[700],
        },
    },

    // Skill styles
    skill: {
        container: {
            marginBottom: 10,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        name: {
            fontSize: 10,
            fontWeight: 500,
            color: colors.gray[900],
        },
        bar: {
            container: {
                flexDirection: 'row',
            },
            fill: {
                width: 6,
                height: 6,
                borderRadius: 3,
                marginHorizontal: 1,
                backgroundColor: theme.primary,
            },
        },
    },

    // Language styles
    language: {
        container: {
            marginBottom: 10,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        name: {
            fontSize: 10,
            fontWeight: 500,
            color: colors.gray[900],
        },
        proficiency: {
            fontSize: 10,
            color: theme.primary,
            fontWeight: 500,
        },
    },

    // Footer styles
    footer: {
        container: {
            padding: 10,
            backgroundColor: colors.gray[50],
            borderTopWidth: 1,
            borderTopColor: lightenHexColor(theme.primary, 75),
            alignItems: 'center',
        },
        text: {
            fontSize: 8,
            color: colors.gray[500],
        },
    },
});

export default styleBuilder;
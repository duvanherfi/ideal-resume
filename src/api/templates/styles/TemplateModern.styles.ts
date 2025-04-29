import { Font } from '@react-pdf/renderer';
import TemplateTheme from '../../common/TemplateTheme';
import { FontOpenSans } from '../helper/TemplateFonts';
import { darkenHexColor, getContrastingTextColor, lightenHexColor } from '../helper/templateStyleHelper';
import TemplateStyleSheet from '../helper/TemplateStyleSheet';

Font.register(FontOpenSans);

const defaultThemeColors: TemplateTheme = {
    primary: '#4F46E5',
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors): TemplateStyleSheet => ({
    page: {
        fontFamily: 'Open Sans',
        padding: 0,
        backgroundColor: '#FFFFFF',
    },

    // Common styles
    common: {
        divider: {
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB', // gray-200
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
                color: '#6B7280', // gray-500
            },
        },
        badge: {
            container: {
                backgroundColor: lightenHexColor(theme.primary, 90), // indigo-100
                borderRadius: 10,
                paddingVertical: 3,
                paddingHorizontal: 8,
                margin: 3,
                flexDirection: 'row',
            },
            text: {
                fontSize: 9,
                color: darkenHexColor(theme.primary, 20), // indigo-800
            },
        },
    },

    // Layout styles
    layout: {
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
                borderRightColor: '#E5E7EB', // gray-200
            },
        },
    },

    // Section styles
    section: {
        container: {
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB', // gray-200
        },
        header: {
            marginBottom: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: darkenHexColor(theme.primary), // indigo-700
            marginBottom: 10,
        },
        headerLine: {
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB', // gray-200
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
                color: darkenHexColor(theme.primary), // indigo-700
                marginBottom: 10,
            },
        },
    },

    // Header styles
    header: {
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
            color: '#F9FAFB', // indigo-200
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
    },

    // Summary styles
    summary: {
        text: {
            fontSize: 10,
            color: '#4B5563', // gray-700
            lineHeight: 1.5,
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
            marginBottom: 5,
        },
        role: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        company: {
            color: theme.primary, // indigo-600
        },
        contractType: {
            fontSize: 10,
            color: '#6B7280', // gray-500
        },
        location: {
            fontSize: 10,
            fontStyle: 'italic',
            color: '#6B7280', // gray-500
        },
        description: {
            fontSize: 10,
            color: '#4B5563', // gray-700
            lineHeight: 1.5,
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
            marginBottom: 2,
        },
        degree: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        institution: {
            fontSize: 11,
            color: theme.primary, // indigo-600
        },
        description: {
            fontSize: 10,
            color: '#4B5563', // gray-700
        },
        location: {
            fontSize: 10,
            fontStyle: 'italic',
            color: '#6B7280', // gray-500
        },
    },

    // Project styles
    project: {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        item: {
            width: '48%',
            marginBottom: 10,
            marginRight: '2%',
            padding: 8,
            backgroundColor: '#F9FAFB', // gray-50
            borderRadius: 4,
        },
        name: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 2,
        },
        link: {
            fontSize: 9,
            color: theme.primary, // indigo-600
            marginBottom: 4,
        },
        description: {
            fontSize: 9,
            color: '#4B5563', // gray-700
        },
    },

    // Skill styles
    skill: {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 15,
        },
        item: {
            backgroundColor: lightenHexColor(theme.primary, 90), // indigo-100
            borderRadius: 10,
            paddingVertical: 3,
            paddingHorizontal: 8,
            margin: 3,
            flexDirection: 'row',
        },
        name: {
            fontSize: 9,
            color: darkenHexColor(theme.primary, 20), // indigo-800
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
    },

    // Language styles
    language: {
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
            color: theme.primary,
        },
    },

    // Footer styles
    footer: {
        container: {
            padding: 10,
            backgroundColor: '#F9FAFB', // gray-100
            alignItems: 'center',
        },
        text: {
            fontSize: 8,
            color: '#6B7280', // gray-500
        },
    },
});

export default styleBuilder;
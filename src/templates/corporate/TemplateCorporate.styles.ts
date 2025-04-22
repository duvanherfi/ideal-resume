import { Font, StyleSheet } from '@react-pdf/renderer';
import TemplateTheme from '../common/TemplateTheme';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
    ],
});

const defaultThemeColors: TemplateTheme = {
    primary: '#1E40AF',
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 10,
        padding: 30,
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },

    // Header styles
    headerContainer: {
        marginBottom: 20,
    },
    headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 700,
        color: theme.primary,
        marginBottom: 5,
    },
    role: {
        fontSize: 14,
        color: '#4B5563', // Gray-600
    },
    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: theme.primary,
    },
    contactContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6', // Gray-100
        padding: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactLabel: {
        fontWeight: 600,
        fontSize: 9,
        color: theme.primary,
        marginRight: 5,
    },
    contactValue: {
        fontSize: 9,
    },
    contactDivider: {
        height: 15,
        width: 1,
        backgroundColor: '#D1D5DB', // Gray-300
    },

    // Main content layout
    mainContent: {
        flexDirection: 'row',
        flex: 1,
    },
    mainColumn: {
        width: '65%',
        paddingRight: 15,
    },
    sideColumn: {
        width: '35%',
        paddingLeft: 15,
        borderLeftWidth: 1,
        borderLeftColor: '#E5E7EB', // Gray-200
    },

    // Section styles
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 600,
        color: theme.primary,
        marginRight: 10,
    },
    sectionHeaderLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB', // Gray-200
    },

    // About section
    summaryText: {
        fontSize: 10,
        lineHeight: 1.6,
        textAlign: 'justify',
    },

    // Experience section
    experienceItem: {
        marginBottom: 12,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3,
    },
    experienceCompany: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: 12,
        color: '#111827', // Gray-900
    },
    dateContainer: {
        fontSize: 9,
        color: '#6B7280', // Gray-500
    },
    experienceRole: {
        fontSize: 11,
        fontWeight: 600,
        color: theme.primary,
        marginBottom: 4,
    },
    experienceDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        textAlign: 'justify',
    },

    // Education section
    educationItem: {
        marginBottom: 10,
    },
    educationContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    educationDegree: {
        fontFamily: 'Roboto',
        fontSize: 11,
        fontWeight: 600,
        color: theme.primary,
    },
    educationInstitution: {
        fontSize: 10,
        color: '#374151', // Gray-700
    },

    // Side content
    sideContent: {
        paddingTop: 2,
    },
    sideSection: {
        marginBottom: 20,
    },
    sideSectionHeader: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB', // Gray-200
        marginBottom: 8,
    },
    sideSectionTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 600,
        color: theme.primary,
    },

    // Projects section
    projectsContainer: {
        gap: 8,
    },
    projectItem: {
        marginBottom: 8,
        padding: 6,
        backgroundColor: '#F9FAFB', // Gray-50
        borderRadius: 4,
        borderLeftWidth: 2,
        borderLeftColor: theme.primary,
    },
    projectName: {
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: 600,
        marginBottom: 3,
    },
    projectLink: {
        fontSize: 8,
        color: theme.primary,
        textDecoration: 'none',
        marginBottom: 3,
    },
    projectDescription: {
        fontSize: 8,
        lineHeight: 1.4,
    },

    // Skills section
    skillsContainer: {
        gap: 6,
    },
    skillItem: {
        marginBottom: 6,
    },
    skillName: {
        fontSize: 9,
        marginBottom: 3,
    },
    skillBarContainer: {
        height: 4,
        backgroundColor: '#E5E7EB', // Gray-200
        borderRadius: 2,
        width: '100%',
    },
    skillBarFill: {
        height: 4,
        backgroundColor: theme.primary,
        borderRadius: 2,
    },

    // Languages section
    languagesContainer: {
        gap: 5,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    languageName: {
        fontSize: 9,
    },
    languageProficiency: {
        fontSize: 9,
        color: theme.primary,
    },

    // Footer
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB', // Gray-200
        paddingTop: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 8,
        color: '#9CA3AF', // Gray-400
    },
});

export default styleBuilder;
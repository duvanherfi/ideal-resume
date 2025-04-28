import { Font, StyleSheet } from '@react-pdf/renderer';
import TemplateTheme from '../../common/TemplateTheme';

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
    primary: '#2D3748',
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        minHeight: "100%",
        fontSize: 11,
        padding: 20,
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },
    headerContainer: {
        paddingBottom: 8,
    },
    headerMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
    },
    profilePhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontSize: 22,
        fontWeight: 700,
        color: theme.primary,
        marginBottom: 2,
    },
    role: {
        fontSize: 12,
        color: '#718096', // Cool gray
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E8F0', // Light gray
        marginVertical: 10,
    },
    contactGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
    },
    contactItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    contactLabel: {
        fontSize: 12,
        marginRight: 5,
    },
    contactValue: {
        fontSize: 9,
        color: '#4A5568', // Gray
    },

    // Content layout
    content: {
        flexDirection: 'row',
        marginTop: 10,
    },
    mainColumn: {
        width: '65%',
        paddingRight: 15,
    },
    sideColumn: {
        width: '35%',
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#E2E8F0', // Light gray
        backgroundColor: '#F7FAFC', // Very light gray
    },

    // Section styles
    section: {
        marginBottom: 14,
    },
    sideSection: {
        marginBottom: 14,
        paddingLeft: 5,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0', // Light gray
    },
    sectionIcon: {
        fontSize: 12,
        marginRight: 5,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 500,
        color: theme.primary,
    },

    // Profile summary
    summaryText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#4A5568', // Gray
    },

    // Work experience
    experienceItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    dateContainer: {
        width: '20%',
    },
    dateText: {
        fontSize: 9,
        color: '#718096', // Cool gray
    },
    experienceContent: {
        width: '80%',
    },
    experienceRole: {
        fontSize: 11,
        fontWeight: 500,
        marginBottom: 2,
    },
    experienceCompany: {
        fontSize: 10,
        color: theme.primary,
        marginBottom: 3,
    },
    experienceDescription: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#4A5568', // Gray
    },

    // Education
    educationItem: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    educationContent: {
        width: '80%',
    },
    educationDegree: {
        fontSize: 11,
        fontWeight: 500,
        marginBottom: 2,
    },
    educationInstitution: {
        fontSize: 10,
        color: theme.primary,
    },

    // Projects
    projectsContainer: {
        marginTop: 5,
    },
    projectItem: {
        marginBottom: 8,
        padding: 5,
        backgroundColor: '#EDF2F7', // Very light cool gray
        borderRadius: 3,
    },
    projectTitle: {
        fontSize: 10,
        fontWeight: 500,
        marginBottom: 2,
    },
    projectLink: {
        fontSize: 8,
        color: theme.primary,
        marginBottom: 3,
        textDecoration: 'none',
    },
    projectDescription: {
        fontSize: 8,
        lineHeight: 1.4,
        color: '#4A5568', // Gray
    },

    // Skills
    skillsContainer: {
        marginTop: 5,
        paddingTop: 5,
    },
    skillItem: {
        marginBottom: 6,
    },
    skillName: {
        fontSize: 10,
        marginBottom: 2,
    },
    skillLevelContainer: {
        flexDirection: 'row',
    },
    skillLevelFilled: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: theme.primary,
        marginRight: 2,
    },
    skillLevelEmpty: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#E2E8F0', // Light gray
        marginRight: 2,
    },

    // Languages
    languagesContainer: {
        marginTop: 5,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    languageName: {
        fontSize: 10,
    },
    languageProficiency: {
        fontSize: 9,
        color: theme.primary,
    },

    // Footer
    footer: {
        marginTop: 20,
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0', // Light gray
        alignItems: 'center',
    },
    footerText: {
        fontSize: 8,
        color: '#A0AEC0', // Gray
    },
});

export type TemplateMinimalistStyles = ReturnType<typeof styleBuilder>;

export default styleBuilder;
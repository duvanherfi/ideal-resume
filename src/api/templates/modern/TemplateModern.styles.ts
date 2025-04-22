import { Font, StyleSheet } from '@react-pdf/renderer';
import { darkenHexColor, lightenHexColor } from '../../common/templateHelper';
import TemplateTheme from '../../common/TemplateTheme';

Font.register({
    family: 'Open Sans',
    fonts: [
        { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
        { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
        { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
    ],
});

const defaultThemeColors: TemplateTheme = {
    primary: '#4F46E5',
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Open Sans',
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        backgroundColor: theme.primary,
        color: 'white',
        padding: 16,
    },
    headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white',
        marginRight: 15,
    },
    nameContainer: {
        marginLeft: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    role: {
        fontSize: 14,
        color: '#F9FAFB', // indigo-200
    },
    contactItem: {
        alignItems: 'flex-end',
    },
    contactValue: {
        fontSize: 10,
        color: '#F9FAFB', // indigo-200
        marginBottom: 3,
    },
    contactLabel: {
        color: 'white',
        fontWeight: 'bold',
    },
    section: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB', // gray-200
    },
    twoColumnSection: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        padding: 20,
    },
    leftColumn: {
        borderRightWidth: 1,
        borderRightColor: '#E5E7EB', // gray-200
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: darkenHexColor(theme.primary), // indigo-700
        marginBottom: 10,
    },
    experienceItem: {
        marginBottom: 15,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    experienceRole: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    experienceCompany: {
        color: theme.primary, // indigo-600
    },
    dateText: {
        fontSize: 10,
        color: '#6B7280', // gray-500
    },
    experienceDescription: {
        fontSize: 10,
        color: '#4B5563', // gray-700
        lineHeight: 1.5,
    },
    projectsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    projectItem: {
        width: '48%',
        marginBottom: 10,
        marginRight: '2%',
        padding: 8,
        backgroundColor: '#F9FAFB', // gray-50
        borderRadius: 4,
    },
    projectTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    projectLink: {
        fontSize: 9,
        color: theme.primary, // indigo-600
        marginBottom: 4,
    },
    projectDescription: {
        fontSize: 9,
        color: '#4B5563', // gray-700
    },
    educationItem: {
        marginBottom: 12,
    },
    educationContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    educationDegree: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    educationInstitution: {
        fontSize: 11,
        color: theme.primary, // indigo-600
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    skillItem: {
        backgroundColor: lightenHexColor(theme.primary, 90), // indigo-100
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 8,
        margin: 3,
        flexDirection: 'row',
    },
    skillText: {
        fontSize: 9,
        color: darkenHexColor(theme.primary, 20), // indigo-800
    },
    skillLevel: {
        fontSize: 9,
        color: lightenHexColor(theme.primary), // indigo-500
        marginLeft: 3,
    },
    footer: {
        padding: 10,
        backgroundColor: '#F9FAFB', // gray-100
        alignItems: 'center',
    },
    footerText: {
        fontSize: 8,
        color: '#6B7280', // gray-500
    },
});

export default styleBuilder;
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
    primary: '#3E6B89', // Elegant blue shade
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        padding: 30,
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },
    
    // Header Styles
    headerContainer: {
        marginBottom: 15,
    },
    headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontSize: 28,
        fontWeight: 700,
        color: theme.primary,
        letterSpacing: 1,
    },
    role: {
        fontSize: 14,
        color: '#5A6B7B',
        marginTop: 4,
    },
    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: theme.primary,
    },
    divider: {
        height: 3,
        backgroundColor: theme.primary,
        marginTop: 8,
        width: '30%',
    },
    
    // Contact Section
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E9EF',
    },
    contactGroup: {
        flexDirection: 'row',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    contactLabel: {
        fontSize: 12,
        marginRight: 6,
        color: theme.primary,
    },
    contactValue: {
        fontSize: 10,
        color: '#4A5568',
    },
    
    // Content Layout
    mainContent: {
        flexDirection: 'row',
    },
    mainColumn: {
        width: '65%',
        paddingRight: 15,
    },
    sideColumn: {
        width: '35%',
        paddingLeft: 15,
        borderLeftWidth: 1,
        borderLeftColor: '#E5E9EF',
    },
    
    // Section Styles
    section: {
        marginBottom: 20,
    },
    sideSection: {
        marginBottom: 20,
    },
    sectionHeader: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E9EF',
        paddingBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 700,
        color: theme.primary,
        letterSpacing: 0.5,
    },
    
    // Profile Summary
    summaryText: {
        fontSize: 10,
        lineHeight: 1.6,
        color: '#4A5568',
    },
    
    // Timeline & Experience Styles
    timelineContainer: {
        marginTop: 10,
    },
    timelineColumn: {
        width: '22%',
        alignItems: 'center',
        position: 'relative',
    },
    timelineDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.primary,
        marginBottom: 4,
    },
    timelineLine: {
        width: 1,
        height: '85%',
        backgroundColor: '#E5E9EF',
        position: 'absolute',
        top: 12,
        left: '50%',
    },
    dateContainer: {
        backgroundColor: '#F7F9FB',
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 3,
        marginTop: 5,
        width: '90%',
    },
    dateText: {
        fontSize: 8,
        textAlign: 'center',
        color: '#5A6B7B',
    },
    contentColumn: {
        width: '78%',
        paddingLeft: 10,
    },
    
    // Work Experience
    experienceItem: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    experienceRole: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 2,
    },
    experienceCompany: {
        fontSize: 11,
        color: theme.primary,
        marginBottom: 4,
    },
    experienceDescription: {
        fontSize: 9,
        lineHeight: 1.6,
        color: '#4A5568',
    },
    
    // Education
    educationItem: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    educationDegree: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 2,
    },
    educationInstitution: {
        fontSize: 11,
        color: theme.primary,
    },
    
    // Skills
    skillsContainer: {
        marginTop: 5,
    },
    skillItem: {
        marginBottom: 10,
    },
    skillName: {
        fontSize: 10,
        marginBottom: 3,
    },
    skillBarContainer: {
        height: 4,
        backgroundColor: '#E5E9EF',
        borderRadius: 2,
        overflow: 'hidden',
    },
    skillBarFill: {
        height: '100%',
        backgroundColor: theme.primary,
    },
    
    // Projects
    projectsContainer: {
        marginTop: 5,
    },
    projectItem: {
        marginBottom: 10,
        padding: 6,
        backgroundColor: '#F7F9FB',
        borderRadius: 4,
        borderLeftWidth: 2,
        borderLeftColor: theme.primary,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 700,
        marginBottom: 3,
    },
    projectLink: {
        fontSize: 8,
        color: theme.primary,
        marginBottom: 4,
        textDecoration: 'none',
    },
    projectDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: '#4A5568',
    },
    
    // Languages
    languagesContainer: {
        marginTop: 5,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E9EF',
    },
    languageNameContainer: {
        flex: 1,
    },
    languageName: {
        fontSize: 10,
    },
    languageProficiencyContainer: {
        backgroundColor: '#F0F4F8',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 10,
    },
    languageProficiency: {
        fontSize: 8,
        color: theme.primary,
        fontWeight: 700,
    },
    
    // Footer
    footer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E9EF',
        paddingTop: 10,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 8,
        color: '#9AA5B4',
    },
});

export default styleBuilder;
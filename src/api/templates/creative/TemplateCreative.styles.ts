import { Font, StyleSheet } from '@react-pdf/renderer';
import { darkenHexColor, getContrastingTextColor, lightenHexColor } from '../../common/templateStyleHelper';
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
    primary: '#5D48E3',
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    mainContent: {
        flexDirection: 'column',
        height: '100%',
    },
    contentContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    mainColumn: {
        width: '65%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    sideColumn: {
        width: '35%',
        backgroundColor: lightenHexColor(theme.primary, 95),
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 30,
    },
    headerContainer: {
        backgroundColor: theme.primary,
        color: getContrastingTextColor(theme.primary),
        padding: 20,
        flexDirection: 'column',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    photoWrapper: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        overflow: 'hidden',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    nameContainer: {
        marginLeft: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    role: {
        fontSize: 12,
        color: lightenHexColor(theme.primary, 85),
        fontWeight: 'medium',
    },
    contactContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: lightenHexColor(theme.primary, 30),
        paddingTop: 10,
    },
    contactItem: {
        width: '32%',
        marginBottom: 5,
    },
    contactLabel: {
        fontSize: 8,
        color: lightenHexColor(theme.primary, 85),
        fontWeight: 'medium',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 9,
        color: 'white',
    },
    section: {
        marginBottom: 20,
        paddingBottom: 10,
    },
    sideSection: {
        marginBottom: 25,
    },
    sectionTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: theme.primary,
        marginBottom: 10,
        paddingBottom: 3,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: darkenHexColor(theme.primary, 15),
    },
    experienceItem: {
        marginBottom: 15,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    experienceRole: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333333',
    },
    experienceCompany: {
        fontSize: 11,
        color: theme.primary,
        fontWeight: 'medium',
        marginBottom: 5,
    },
    dateText: {
        fontSize: 9,
        color: '#666666',
    },
    experienceDescription: {
        fontSize: 10,
        color: '#444444',
        lineHeight: 1.6,
    },
    educationItem: {
        marginBottom: 12,
    },
    educationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    educationDegree: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333333',
    },
    educationInstitution: {
        fontSize: 11,
        color: theme.primary,
        marginTop: 3,
    },
    projectsContainer: {
        marginTop: 5,
    },
    projectItem: {
        marginBottom: 12,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        borderLeftWidth: 3,
        borderLeftColor: theme.primary,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 3,
    },
    projectLink: {
        fontSize: 8,
        color: theme.primary,
        marginBottom: 4,
    },
    projectDescription: {
        fontSize: 9,
        color: '#444444',
        lineHeight: 1.4,
    },
    skillsContainer: {
        marginTop: 5,
    },
    skillItem: {
        marginBottom: 8,
    },
    skillName: {
        fontSize: 10,
        color: '#333333',
        marginBottom: 3,
    },
    skillLevelContainer: {
        height: 4,
        backgroundColor: lightenHexColor(theme.primary, 70),
        borderRadius: 2,
        overflow: 'hidden',
    },
    skillLevelBar: {
        height: '100%',
        backgroundColor: theme.primary,
        borderRadius: 2,
    },
    languagesContainer: {
        marginTop: 5,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: lightenHexColor(theme.primary, 80),
    },
    languageName: {
        fontSize: 10,
        color: '#333333',
    },
    languageProficiency: {
        fontSize: 9,
        color: theme.primary,
        fontWeight: 'medium',
    },
    footer: {
        padding: 10,
        backgroundColor: lightenHexColor(theme.primary, 95),
        alignItems: 'center',
    },
    footerText: {
        fontSize: 8,
        color: '#666666',
    },
});

export type TemplateCreativeStyles = ReturnType<typeof styleBuilder>;

export default styleBuilder;
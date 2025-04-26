import { Font, StyleSheet } from '@react-pdf/renderer';
import { lightenHexColor } from '../../common/templateStyleHelper';
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
    primary: '#2563EB', // A professional blue color
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors) => StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        backgroundColor: '#F8FAFC', // Very light slate
        borderBottomWidth: 3,
        borderBottomColor: theme.primary,
        padding: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: theme.primary,
        marginBottom: 4,
    },
    role: {
        fontSize: 14,
        fontWeight: 500,
        color: '#64748B', // Slate-500
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    contactItem: {
        minWidth: '30%',
        marginRight: 10,
    },
    contactLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: theme.primary,
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 10,
        color: '#334155', // Slate-700
    },
    contentContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    leftColumn: {
        width: '65%',
        padding: 20,
        paddingRight: 15,
    },
    rightColumn: {
        width: '35%',
        backgroundColor: '#F8FAFC', // Very light slate
        padding: 20,
        paddingLeft: 15,
    },
    section: {
        marginBottom: 20,
    },
    rightColumnSection: {
        marginBottom: 20,
    },
    sectionHeader: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.primary,
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    divider: {
        height: 2,
        backgroundColor: lightenHexColor(theme.primary, 75),
        width: '100%',
    },
    // Summary
    summaryText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#334155', // Slate-700
    },
    // Experience
    experienceItem: {
        marginBottom: 15,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    experienceRole: {
        fontSize: 12,
        fontWeight: 700,
        color: '#0F172A', // Slate-900
    },
    experienceCompany: {
        fontSize: 11,
        fontWeight: 500,
        color: theme.primary,
        marginBottom: 4,
    },
    dateText: {
        fontSize: 10,
        color: '#64748B', // Slate-500
    },
    experienceDescription: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#334155', // Slate-700
    },
    // Education
    educationItem: {
        marginBottom: 12,
    },
    educationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    educationDegree: {
        fontSize: 12,
        fontWeight: 700,
        color: '#0F172A', // Slate-900
    },
    educationInstitution: {
        fontSize: 11,
        fontWeight: 500,
        color: theme.primary,
    },
    // Projects
    projectItem: {
        marginBottom: 12,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: lightenHexColor(theme.primary, 85),
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#0F172A', // Slate-900
        marginBottom: 2,
    },
    projectLink: {
        fontSize: 9,
        color: theme.primary,
        marginBottom: 3,
        textDecoration: 'none',
    },
    projectDescription: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#334155', // Slate-700
    },
    // Skills
    skillItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    skillName: {
        fontSize: 10,
        fontWeight: 500,
        color: '#0F172A', // Slate-900
    },
    skillLevelContainer: {
        flexDirection: 'row',
    },
    skillLevelDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 1,
    },
    skillLevelDotFilled: {
        backgroundColor: theme.primary,
    },
    skillLevelDotEmpty: {
        backgroundColor: lightenHexColor(theme.primary, 85),
    },
    // Languages
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    languageName: {
        fontSize: 10,
        fontWeight: 500,
        color: '#0F172A', // Slate-900
    },
    languageProficiency: {
        fontSize: 10,
        color: theme.primary,
        fontWeight: 500,
    },
});

export default styleBuilder;
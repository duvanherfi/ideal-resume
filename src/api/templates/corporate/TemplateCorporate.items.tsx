import { Link, Text, View } from "@react-pdf/renderer";
import { ItemTemplateProps } from "../../common/TemplateProps";
import { Education, Language, Project, Skill, WorkExperience } from "../../types";
import { TemplateCorporateStyles } from "./TemplateCorporate.styles";

type ContactProps = { label?: string, value?: string, styles: TemplateCorporateStyles };
type SkillLevelProps = { level: number, styles: TemplateCorporateStyles };
type CurrentTemplateItemProps<T> = ItemTemplateProps<T, TemplateCorporateStyles>;

export const Contact = ({ label, value, styles }: ContactProps) => value ? (
    <View style={styles.contactItem}>
        <Text style={styles.contactLabel}>{label}:</Text>
        <Text style={styles.contactValue}>{value}</Text>
    </View>
) : null;

export const ExperienceItem = ({ styles, item, labels }: CurrentTemplateItemProps<WorkExperience>) => (
    <View style={styles.experienceItem}>
        <View style={styles.experienceHeader}>
            <Text style={styles.experienceCompany}>{item.company}</Text>
            <Text style={styles.dateContainer}>
                {item.startDate} - {item.endDate === 'Present' ? labels.present : item.endDate}
            </Text>
        </View>
        <Text style={styles.experienceRole}>{item.role}</Text>
        <Text style={styles.experienceDescription}>{item.description}</Text>
    </View>
);

export const EducationItem = ({ styles, item }: CurrentTemplateItemProps<Education>) => (
    <View style={styles.educationItem}>
        <View style={styles.educationContent}>
            <Text style={styles.educationDegree}>{item.degree}</Text>
            <Text style={styles.dateContainer}>{item.startDate} - {item.endDate}</Text>
        </View>
        <Text style={styles.educationInstitution}>{item.institution}</Text>
    </View>
);

export const ProjectItem = ({ styles, item }: CurrentTemplateItemProps<Project>) => (
    <View style={styles.projectItem}>
        <Text style={styles.projectName}>{item.name}</Text>
        {item.link && (
            <Link src={item.link} style={styles.projectLink}>
                {item.link}
            </Link>
        )}
        <Text style={styles.projectDescription}>{item.description}</Text>
    </View>
);

export const LanguageItem = ({ styles, item }: CurrentTemplateItemProps<Language>) => (
    <View style={styles.languageItem}>
        <Text style={styles.languageName}>{item.name}</Text>
        <Text style={styles.languageProficiency}>{item.proficiency}</Text>
    </View>
);

export const SkillLevel = ({ level, styles }: SkillLevelProps) => (
    <View style={styles.skillBarContainer}>
        <View style={[styles.skillBarFill, { width: `${level * 20}%` }]} />
    </View>
);

export const SkillItem = ({ styles, item }: CurrentTemplateItemProps<Skill>) => (
    <View style={styles.skillItem}>
        <Text style={styles.skillName}>{item.name}</Text>
        <SkillLevel level={item.level} styles={styles} />
    </View>
);
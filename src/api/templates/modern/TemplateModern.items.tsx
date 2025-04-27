import { Link, Text, View } from "@react-pdf/renderer";
import { ItemTemplateProps } from "../../common/TemplateProps";
import { Education, Language, Project, Skill, WorkExperience } from "../../types";
import { TemplateModernStyles } from "./TemplateModern.styles";

type ContactProps = { label?: string, value?: string, styles: TemplateModernStyles };
type SkillLevelProps = { level: number, styles: TemplateModernStyles };
type CurrentTemplateItemProps<T> = ItemTemplateProps<T, TemplateModernStyles>;

export const Contact = ({ label, value, styles }: ContactProps) => value ? (
    <View style={styles.contactItem}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={styles.contactValue}>{value}</Text>
    </View>
) : null;

export const ExperienceItem = ({ styles, item }: CurrentTemplateItemProps<WorkExperience>) => (
    <View style={styles.experienceItem}>
        <View style={styles.experienceHeader}>
            <Text style={styles.experienceRole}>
                {item.role} at <Text style={styles.experienceCompany}>{item.company}</Text>
            </Text>
            <Text style={styles.dateText}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.experienceDescription}>{item.description}</Text>
    </View>
);

export const EducationItem = ({ styles, item }: CurrentTemplateItemProps<Education>) => (
    <View style={styles.educationItem}>
        <View style={styles.educationContent}>
            <Text style={styles.educationDegree}>{item.degree}</Text>
            <Text style={styles.dateText}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.educationInstitution}>{item.institution}</Text>
    </View>
);

export const ProjectItem = ({ styles, item }: CurrentTemplateItemProps<Project>) => (
    <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>{item.name}</Text>
        <Link src={item.link} style={styles.projectLink}>
            {item.link}
        </Link>
        <Text style={styles.projectDescription}>{item.description}</Text>
    </View>
);

export const SkillLevel = ({ level, styles }: SkillLevelProps) => (
    <Text style={styles.skillLevel}>
        {level ? '★'.repeat(level) + '☆'.repeat(5 - level) : ''}
    </Text>
);

export const SkillItem = ({ styles, item }: CurrentTemplateItemProps<Skill>) => (
    <View style={styles.skillItem}>
        <Text style={styles.skillText}>
            {item.name} <SkillLevel level={item.level} styles={styles} />
        </Text>
    </View>
);

export const LanguageItem = ({ styles, item }: CurrentTemplateItemProps<Language>) => (
    <View style={styles.skillItem}>
        <Text style={styles.skillText}>
            {item.name} ({item.proficiency})
        </Text>
    </View>
);
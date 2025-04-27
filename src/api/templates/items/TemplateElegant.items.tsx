import { Link, Text, View } from "@react-pdf/renderer";
import { ItemTemplateProps } from "../../common/TemplateProps";
import { Education, Language, Project, Skill, WorkExperience } from "../../types";
import { TemplateElegantStyles } from "../styles/TemplateElegant.styles";

type ContactProps = { label?: string, value?: string, styles: TemplateElegantStyles };
type SkillLevelProps = { level: number, styles: TemplateElegantStyles };
type CurrentTemplateItemProps<T> = ItemTemplateProps<T, TemplateElegantStyles>;

export const Contact = ({ label, value, styles }: ContactProps) => value ? (
    <View style={styles.contactItem}>
        <Text style={styles.contactLabel}>{label}:</Text>
        <Text style={styles.contactValue}>{value}</Text>
    </View>
) : null;

export const ExperienceItem = ({ styles, item, labels }: CurrentTemplateItemProps<WorkExperience>) => (
    <View style={styles.experienceItem}>
        <View style={styles.timelineColumn}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineLine} />
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{item.startDate}</Text>
                <Text style={styles.dateText}>-</Text>
                <Text style={styles.dateText}>{item.endDate || labels.present}</Text>
            </View>
        </View>
        <View style={styles.contentColumn}>
            <Text style={styles.experienceRole}>{item.role}</Text>
            <Text style={styles.experienceCompany}>{item.company}</Text>
            <Text style={styles.experienceDescription}>{item.description}</Text>
        </View>
    </View>
);

export const EducationItem = ({ styles, item, labels }: CurrentTemplateItemProps<Education>) => (
    <View style={styles.educationItem}>
        <View style={styles.timelineColumn}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineLine} />
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{item.startDate}</Text>
                <Text style={styles.dateText}>-</Text>
                <Text style={styles.dateText}>{item.endDate || labels.present}</Text>
            </View>
        </View>
        <View style={styles.contentColumn}>
            <Text style={styles.educationDegree}>{item.degree}</Text>
            <Text style={styles.educationInstitution}>{item.institution}</Text>
        </View>
    </View>
);

export const ProjectItem = ({ styles, item }: CurrentTemplateItemProps<Project>) => (
    <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>{item.name}</Text>
        {item.link && (
            <Link src={item.link} style={styles.projectLink}>
                {item.link}
            </Link>
        )}
        <Text style={styles.projectDescription}>{item.description}</Text>
    </View>
);

export const SkillLevel = ({ level, styles }: SkillLevelProps) => {
    const percentage = (level / 5) * 100;
    return (
        <View style={styles.skillBarContainer}>
            <View style={[styles.skillBarFill, { width: `${percentage}%` }]} />
        </View>
    );
};

export const SkillItem = ({ styles, item }: CurrentTemplateItemProps<Skill>) => (
    <View style={styles.skillItem}>
        <Text style={styles.skillName}>{item.name}</Text>
        <SkillLevel level={item.level} styles={styles} />
    </View>
);

export const LanguageItem = ({ styles, item }: CurrentTemplateItemProps<Language>) => (
    <View style={styles.languageItem}>
        <View style={styles.languageNameContainer}>
            <Text style={styles.languageName}>{item.name}</Text>
        </View>
        <View style={styles.languageProficiencyContainer}>
            <Text style={styles.languageProficiency}>{item.proficiency}</Text>
        </View>
    </View>
);
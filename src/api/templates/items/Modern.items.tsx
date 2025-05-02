import { Link, Text, View } from "@react-pdf/renderer";
import { TemplateItemProps, TemplateSectionProps } from "@resume-api/types/template/TemplateProps";
import { WorkExperience } from "@resume-api/types/items/WorkExperience";
import { Project } from "@resume-api/types/items/Project";
import { Language } from "@resume-api/types/items/Language";
import { Skill } from "@resume-api/types/items/Skill";
import { Education } from "@resume-api/types/items/Education";

export const ProfileSummary: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.section.container}>
        <Text style={styles.section.title}>{labels.profileSummary}</Text>
        <Text style={styles.experience.description}>{data.profileSummary}</Text>
    </View>
);

export const ExperienceItem = ({ styles, item }: TemplateItemProps<WorkExperience>) => (
    <View style={styles.experience.item}>
        <View style={styles.experience.header}>
            <Text style={styles.experience.role}>
                {item.role} - <Text style={styles.experience.company}>{item.company}</Text>
            </Text>
            <Text style={styles.common.date.text}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.experience.description}>{item.description}</Text>
    </View>
);

export const EducationItem = ({ styles, item }: TemplateItemProps<Education>) => (
    <View style={styles.education.item}>
        <View style={styles.education.header}>
            <Text style={styles.education.degree}>{item.degree}</Text>
            <Text style={styles.common.date.text}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.education.institution}>{item.institution}</Text>
    </View>
);

export const ProjectItem = ({ styles, item }: TemplateItemProps<Project>) => (
    <View style={styles.project.item}>
        <Text style={styles.project.name}>{item.name}</Text>
        <Link src={item.link} style={styles.project.link}>
            {item.link}
        </Link>
        <Text style={styles.project.description}>{item.description}</Text>
    </View>
);

export const SkillItem = ({ styles, item }: TemplateItemProps<Skill>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>
            {item.name} (
            <Text style={styles.skill.bar.container}>
                {item.level ? '★'.repeat(item.level) + '☆'.repeat(5 - item.level) : ''}
            </Text>
            )
        </Text>
    </View>
);

export const LanguageItem = ({ styles, item }: TemplateItemProps<Language>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>
            {item.name} ({item.proficiency})
        </Text>
    </View>
);
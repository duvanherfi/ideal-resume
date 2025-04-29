import { Link, Text, View } from "@react-pdf/renderer";
import { ItemProps, SectionTemplateProps } from "../../common/TemplateProps";
import { Education, Language, Project, Skill, WorkExperience } from "../../types";

export const ProfileSummary: React.FC<SectionTemplateProps> = ({ data, styles, labels }) => (
    <View style={styles.section.container}>
        <View style={styles.section.header}>
            <Text style={styles.section.title}>{labels.profileSummary}</Text>
            <View style={styles.common.divider} />
        </View>
        <Text style={styles.summary.text}>{data.profileSummary}</Text>
    </View>
);

export const ExperienceItem = ({ styles, item }: ItemProps<WorkExperience>) => (
    <View style={styles.experience.item}>
        <View style={styles.experience.header}>
            <Text style={styles.experience.role}>{item.role}</Text>
            <Text style={styles.common.date.text}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.experience.company}>{item.company}</Text>
        <Text style={styles.experience.description}>{item.description}</Text>
    </View>
);

export const EducationItem = ({ styles, item }: ItemProps<Education>) => (
    <View style={styles.education.item}>
        <View style={styles.education.header}>
            <Text style={styles.education.degree}>{item.degree}</Text>
            <Text style={styles.common.date.text}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
        <Text style={styles.education.institution}>{item.institution}</Text>
    </View>
);

export const ProjectItem = ({ styles, item }: ItemProps<Project>) => (
    <View style={styles.project.item}>
        <Text style={styles.project.name}>{item.name}</Text>
        {item.link && (
            <Link src={item.link} style={styles.project.link}>
                {item.link}
            </Link>
        )}
        <Text style={styles.project.description}>{item.description}</Text>
    </View>
);

export const SkillItem = ({ styles, item }: ItemProps<Skill>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>{item.name}</Text>
        <View style={styles.skill.bar.container}>
            {[1, 2, 3, 4, 5].map((level) => (
                <View key={level} style={level <= item.level ? styles.skill.bar.fill : {}} />
            ))}
        </View>
    </View>
);

export const LanguageItem = ({ styles, item }: ItemProps<Language>) => (
    <View style={styles.language.item}>
        <Text style={styles.language.name}>{item.name}</Text>
        <Text style={styles.language.proficiency}>{item.proficiency}</Text>
    </View>
);
import { Link, Text, View } from "@react-pdf/renderer";
import { ItemProps } from "../../common/TemplateProps";
import { Education, Language, Project, Skill, WorkExperience } from "../../types";

export const ExperienceItem = ({ styles, item }: ItemProps<WorkExperience>) => (
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
        <Link src={item.link} style={styles.project.link}>
            {item.link}
        </Link>
        <Text style={styles.project.description}>{item.description}</Text>
    </View>
);

export const SkillItem = ({ styles, item }: ItemProps<Skill>) => (
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

export const LanguageItem = ({ styles, item }: ItemProps<Language>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>
            {item.name} ({item.proficiency})
        </Text>
    </View>
);
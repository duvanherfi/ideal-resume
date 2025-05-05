import { Link, Text, View } from "@react-pdf/renderer";
import { getTimeRange } from "@resume-api/utils/templateUtils";
import TechList from "@resume-api/templates/components/common/TechList";
import TextEmptySafe from "@resume-api/templates/components/common/TextEmptySafe";
import type { Education } from "@resume-api/types/items/Education";
import type { Language } from "@resume-api/types/items/Language";
import type { Project } from "@resume-api/types/items/Project";
import type { Skill } from "@resume-api/types/items/Skill";
import type { WorkExperience } from "@resume-api/types/items/WorkExperience";
import type { TemplateItemProps, TemplateSectionProps } from "@resume-api/types/template/TemplateProps";

export const ProfileSummary: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.section.container}>
        <View style={styles.section.header}>
            <Text style={styles.section.title}>{labels.profileSummary}</Text>
        </View>
        <Text style={styles.summary.text}>{data.profileSummary}</Text>
    </View>
);

export const ExperienceItem = ({ styles, item, labels }: TemplateItemProps<WorkExperience>) => (
    <View style={styles.experience.item}>
        <View style={styles.experience.header}>
            <Text style={styles.experience.role}>{item.role}</Text>
            <Text style={styles.experience.company}>{item.company}</Text>
        </View>
        <Text style={styles.common.date.container}>{getTimeRange(item, labels)}</Text>
        <Text style={styles.experience.description}>{item.description}</Text>
        <TechList item={item} styles={styles} />
    </View>
);

export const EducationItem = ({ styles, item, labels }: TemplateItemProps<Education>) => (
    <View style={styles.education.item}>
        <Text style={styles.education.degree}>{item.degree}</Text>
        <Text style={styles.education.institution}>{item.institution}</Text>
        <Text style={styles.common.date.container}>{getTimeRange(item, labels)}</Text>
        <Text style={styles.education.description}>{item.description}</Text>
    </View>
);

export const ProjectItem = ({ styles, item, labels }: TemplateItemProps<Project>) => (
    <View style={styles.project.item}>
        <Text style={styles.project.name}>{item.name}</Text>
        <TextEmptySafe style={styles.common.date.container} condition={!!item.startDate}>{getTimeRange(item, labels)}</TextEmptySafe>
        {item.link && <Link src={item.link} style={styles.project.link}>{item.link}</Link>}
        <Text style={styles.project.description}>{item.description}</Text>
        <TechList item={item} styles={styles} />
    </View>
);

export const SkillItem = ({ styles, item }: TemplateItemProps<Skill>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>{item.name}</Text>
    </View>
);

export const LanguageItem = ({ styles, item }: TemplateItemProps<Language>) => (
    <View style={styles.language.container}>
        <Text style={styles.language.name}>{item.name}</Text>
        <Text style={styles.language.proficiency}>{item.proficiency}</Text>
    </View>
);
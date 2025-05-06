import { Link, Text, View } from "@react-pdf/renderer";
import TechList from "@resume-api/templates/components/common/TechList";
import TextEmptySafe from "@resume-api/templates/components/common/TextEmptySafe";
import type { Education } from "@resume-api/types/user-data/items/Education";
import type { Language } from "@resume-api/types/user-data/items/Language";
import type { Project } from "@resume-api/types/user-data/items/Project";
import type { Skill } from "@resume-api/types/user-data/items/Skill";
import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import type { TemplateItemProps, TemplateSectionProps } from "@resume-api/types/template/TemplateProps";

export const ProfileSummary: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.section.container}>
        <View style={styles.section.header}>
            <Text style={styles.section.title}>
                {labels.profileSummary}
            </Text>
            <View style={styles.section.headerLine} />
        </View>
        <Text style={styles.summary.text}>{data.profileSummary}</Text>
    </View>
);

export const ExperienceItem = ({ styles, item, labels }: TemplateItemProps<WorkExperience>) => (
    <View style={styles.experience.item}>
        <View style={styles.common.date.container}>
            <Text style={styles.common.date.text}>{item.startDate}</Text>
            <Text style={styles.common.date.text}>-</Text>
            <Text style={styles.common.date.text}>{item.endDate ?? labels.present}</Text>
        </View>
        <View style={styles.experience.header}>
            <View style={styles.layout.row}>
                <Text style={styles.experience.role}>{item.role}</Text>
                <TextEmptySafe style={styles.experience.contractType}>{item.contractType}</TextEmptySafe>
            </View>
            <View style={styles.layout.row}>
                <Text style={styles.experience.company}>{item.company}</Text>
            </View>
            <Text style={styles.experience.description}>{item.description}</Text>
            <TechList item={item} styles={styles} />
        </View>
    </View>
);

export const EducationItem = ({ styles, item, labels }: TemplateItemProps<Education>) => (
    <View style={styles.education.item}>
        <View style={styles.common.date.container}>
            <Text style={styles.common.date.text}>{item.startDate}</Text>
            <Text style={styles.common.date.text}>-</Text>
            <Text style={styles.common.date.text}>{item.endDate ?? labels.present}</Text>
        </View>
        <View style={styles.education.header}>
            <View style={styles.layout.row}>
                <Text style={styles.education.degree}>{item.degree}</Text>
                <TextEmptySafe style={styles.education.description} condition={!!item.gpa}>GPA: {item.gpa}</TextEmptySafe>
            </View>
            <View style={styles.layout.row}>
                <Text style={styles.education.institution}>{item.institution}</Text>
                <TextEmptySafe style={styles.education.location}>{item.location}</TextEmptySafe>
            </View>
            <TextEmptySafe style={styles.education.description}>{item.description}</TextEmptySafe>
        </View>
    </View>
);

export const ProjectItem = ({ styles, item }: TemplateItemProps<Project>) => (
    <View style={styles.project.item}>
        <Text style={styles.project.name}>{item.name}</Text>
        <Link src={item.link} style={styles.project.link}>
            {item.link}
        </Link>
        <Text style={styles.project.description}>{item.description}</Text>
        <TechList item={item} styles={styles} />
    </View>
);

export const SkillItem = ({ styles, item }: TemplateItemProps<Skill>) => (
    <View style={styles.skill.item}>
        <Text style={styles.skill.name}>{item.name}</Text>
        <View style={styles.skill.bar.container}>
            {[...Array(5)].map((_, i) => (
                <View
                    key={item.level + i}
                    style={i < item.level ? styles.skill.bar.fill : {}}
                />
            ))}
        </View>
    </View>
);

export const LanguageItem = ({ styles, item }: TemplateItemProps<Language>) => (
    <View style={styles.language.item}>
        <Text style={styles.language.name}>{item.name}</Text>
        <Text style={styles.language.proficiency}>{item.proficiency}</Text>
    </View>
);
import { Link, Text, View } from "@react-pdf/renderer";
import { getTimeRange } from "@resume-api/common/templateDataHelper";
import { TemplateItemProps, TemplateSectionProps } from "@resume-api/types/template/TemplateProps";
import TechList from "@resume-api/components/common/TechList";
import TextEmptySafe from "@resume-api/components/common/TextEmptySafe";
import { WorkExperience } from "@resume-api/types/items/WorkExperience";
import { Project } from "@resume-api/types/items/Project";
import { Language } from "@resume-api/types/items/Language";
import { Skill } from "@resume-api/types/items/Skill";
import { Education } from "@resume-api/types/items/Education";

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
        <View style={styles.experience.header}>
            <Text style={styles.experience.company}>{item.company}</Text>
            <TechList item={item} styles={styles} />
        </View>
        <View style={styles.experience.header}>
            <Text style={styles.experience.role}>{item.role}</Text>
            <TextEmptySafe style={styles.experience.contractType}>{item.contractType}</TextEmptySafe>
        </View>
        <Text style={styles.common.date.container}>
            {getTimeRange(item, labels)}
        </Text>
        <Text style={styles.experience.description}>{item.description}</Text>
    </View>
);

export const EducationItem = ({ styles, item, labels }: TemplateItemProps<Education>) => (
    <View style={styles.education.item}>
        <View style={styles.education.header}>
            <Text style={styles.education.institution}>{item.institution}</Text>
            <TextEmptySafe style={styles.education.location}>{item.location}</TextEmptySafe>
        </View>
        <View style={styles.education.header}>
            <Text style={styles.education.degree}>{item.degree}</Text>
            <Text style={styles.common.date.container}>
                {getTimeRange(item, labels)}
            </Text>
        </View>
        <TextEmptySafe style={styles.education.description} condition={!!item.gpa}>GPA: {item.gpa}</TextEmptySafe>
        <TextEmptySafe style={styles.education.description}>{item.description}</TextEmptySafe>
    </View>
);


export const ProjectItem = ({ styles, item, labels }: TemplateItemProps<Project>) => (
    <View style={styles.project.item}>
        <Text style={styles.project.name}>{item.name}</Text>
        <TextEmptySafe style={styles.common.date.container} condition={(!!item.startDate || !!item.endDate)}>{getTimeRange(item, labels)}</TextEmptySafe>
        <TextEmptySafe style={styles.project.name}>{item.role}</TextEmptySafe>
        {item.link ? (<Link src={item.link} style={styles.project.link}>{item.link}</Link>) : null}
        <Text style={styles.project.description}>{item.description}</Text>
        <TechList item={item} styles={styles} />
    </View>
);

export const SkillItem = ({ styles, item }: TemplateItemProps<Skill>) => (
    <View style={styles.skill.item}>
        <View style={styles.layout.row}>
            <Text style={styles.skill.name}>{item.name}</Text>
            <TextEmptySafe style={styles.skill.name} condition={(item.yearsExperience !== undefined)}>
                {item.yearsExperience} años
            </TextEmptySafe>
        </View>
        <View style={styles.skill.bar.container}>
            <View style={[styles.skill.bar.fill, { width: `${(item.level / 5) * 100}%` }]} />
        </View>
        {item.certificationUrl ? (
            <Link src={item.certificationUrl} style={styles.skill.name}>{item.certificationUrl}</Link>
        ) : null}
    </View>
);

export const LanguageItem = ({ styles, item }: TemplateItemProps<Language>) => (
    <View style={styles.language.item}>
        <Text style={styles.language.name}>{item.name}</Text>
        <Text style={styles.language.proficiency}>{item.proficiency}</Text>
    </View>
);
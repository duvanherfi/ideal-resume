import { Text, View } from "@react-pdf/renderer";
import type { Education } from "@resume-api/types/user-data/items/Education";
import type { Language } from "@resume-api/types/user-data/items/Language";
import type { Project } from "@resume-api/types/user-data/items/Project";
import type { Skill } from "@resume-api/types/user-data/items/Skill";
import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import type { MultiItemSectionProps } from "@resume-api/types/template/TemplateProps";

export const WorkExperienceSection: React.FC<MultiItemSectionProps<WorkExperience>> = ({
    data,
    styles,
    labels,
    ItemComponent
}) => (
    <View style={styles.section.container}>
        <View style={styles.section.header}>
            <Text style={styles.section.title}>
                {labels.workExperiences}
            </Text>
            <View style={styles.section.headerLine} />
        </View>
        {data.workExperiences.map((exp, index) => (
            <ItemComponent key={exp.id || index} item={exp} styles={styles} labels={labels} />
        ))}
    </View>
);

export const EducationSection: React.FC<MultiItemSectionProps<Education>> = ({
    data,
    styles,
    labels,
    ItemComponent
}) => (
    <View style={styles.section.container}>
        <View style={styles.section.header}>
            <Text style={styles.section.title}>
                {labels.education}
            </Text>
            <View style={styles.section.headerLine} />
        </View>
        {data.education.map((edu, index) => (
            <ItemComponent key={edu.id || index} item={edu} styles={styles} labels={labels} />
        ))}
    </View>
);

export const ProjectsSection: React.FC<MultiItemSectionProps<Project>> = ({
    data,
    styles,
    labels,
    ItemComponent
}) => (
    <View style={styles.section.side.container}>
        <View style={styles.section.side.header}>
            <Text style={styles.section.side.title}>
                {labels.projects}
            </Text>
        </View>
        <View style={styles.project.container}>
            {data.projects.map((project, index) => (
                <ItemComponent key={project.id || index} item={project} styles={styles} labels={labels} />
            ))}
        </View>
    </View>
);

export const SkillsSection: React.FC<MultiItemSectionProps<Skill>> = ({
    data,
    styles,
    labels,
    ItemComponent
}) => (
    <View style={styles.section.side.container}>
        <View style={styles.section.side.header}>
            <Text style={styles.section.side.title}>
                {labels.skills}
            </Text>
        </View>
        <View style={styles.skill.container}>
            {data.skills.map((skill, index) => (
                <ItemComponent key={skill.id || index} item={skill} styles={styles} labels={labels} />
            ))}
        </View>
    </View>
);

export const LanguagesSection: React.FC<MultiItemSectionProps<Language>> = ({
    data,
    styles,
    labels,
    ItemComponent
}) => (
    <View style={styles.section.side.container}>
        <View style={styles.section.side.header}>
            <Text style={styles.section.side.title}>
                {labels.languages}
            </Text>
        </View>
        <View style={styles.language.container}>
            {data.languages.map((language, index) => (
                <ItemComponent key={language.id || index} item={language} styles={styles} labels={labels} />
            ))}
        </View>
    </View>
);
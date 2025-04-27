import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import { Contact, EducationItem, ExperienceItem, LanguageItem, ProjectItem, SkillItem } from "./TemplateMinimalist.items";
import { TemplateMinimalistStyles } from "./TemplateMinimalist.styles";

const ProfileSummary: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.profileSummary}
            </Text>
        </View>
        <Text style={styles.summaryText}>{data.profileSummary}</Text>
    </View>
);

const WorkExperienceSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.workExperiences}
            </Text>
        </View>
        {data.workExperiences.map((exp, index) => (
            <ExperienceItem key={exp.id || index} item={exp} styles={styles} labels={labels} />
        ))}
    </View>
);

const EducationSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.education}
            </Text>
        </View>
        {data.education.map((edu, index) => (
            <EducationItem key={edu.id || index} item={edu} labels={labels} styles={styles} />
        ))}
    </View>
);

const ProjectsSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.projects}
            </Text>
        </View>
        <View style={styles.projectsContainer}>
            {data.projects.map((project, index) => (
                <ProjectItem key={project.id || index} item={project} labels={labels} styles={styles} />
            ))}
        </View>
    </View>
);

const SkillsSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.skills}
            </Text>
        </View>
        <View style={styles.skillsContainer}>
            {data.skills.map((skill, index) => (
                <SkillItem key={skill.id || index} item={skill} labels={labels} styles={styles} />
            ))}
        </View>
    </View>
);

const LanguagesSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.languages}
            </Text>
        </View>
        <View style={styles.languagesContainer}>
            {data.languages.map((language, index) => (
                <LanguageItem key={language.id || index} item={language} labels={labels} styles={styles} />
            ))}
        </View>
    </View>
);

//-----------------------------------
//LAYOUT
export const ProfileHeader: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles }) => (
    <View style={styles.headerContainer}>
        <View style={styles.headerMain}>
            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.profilePhoto} />) : null}
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.role}>
                    {data.workExperiences && data.workExperiences.length > 0
                        ? data.workExperiences[0].role
                        : ''}
                </Text>
            </View>
        </View>
    </View>
);

export const ContactSection: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = ({ data, styles, labels }) => (
    <View style={styles.contactGroup}>
        <Contact label={labels.email} value={data.email} styles={styles} />
        <Contact label={labels.phone} value={data.phone} styles={styles} />
        <Contact label={labels.location} value={data.address} styles={styles} />
    </View>
);

export const MainColumn: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = (props: SectionTemplateProps<TemplateMinimalistStyles>) => (
    <View style={props.styles.mainColumn}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} /> : null}
        {props.data.education.length > 0 ? <EducationSection  {...props} /> : null}
    </View>
);

export const SideColumn: React.FC<SectionTemplateProps<TemplateMinimalistStyles>> = (props: SectionTemplateProps<TemplateMinimalistStyles>) => (
    <View style={props.styles.sideColumn}>
        {props.data.skills.length > 0 ? <SkillsSection  {...props} /> : null}
        {props.data.projects.length > 0 ? <ProjectsSection  {...props} /> : null}
        {props.data.languages.length > 0 ? <LanguagesSection  {...props} /> : null}
    </View>
);
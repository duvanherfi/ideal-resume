import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import { Contact, EducationItem, ExperienceItem, LanguageItem, ProjectItem, SkillItem } from "../items/TemplateCorporate.items";
import { TemplateCorporateStyles } from "../styles/TemplateCorporate.styles";

const ProfileSummary: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.profileSummary}
            </Text>
            <View style={styles.sectionHeaderLine} />
        </View>
        <Text style={styles.summaryText}>{data.profileSummary}</Text>
    </View>
);

const WorkExperienceSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.workExperiences}
            </Text>
            <View style={styles.sectionHeaderLine} />
        </View>
        {data.workExperiences.map((exp, index) => (
            <ExperienceItem key={exp.id || index} item={exp} styles={styles} labels={labels} />
        ))}
    </View>
);

const EducationSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                {labels.education}
            </Text>
            <View style={styles.sectionHeaderLine} />
        </View>
        {data.education.map((edu, index) => (
            <EducationItem key={edu.id || index} item={edu} labels={labels} styles={styles} />
        ))}
    </View>
);

const ProjectsSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sideSectionHeader}>
            <Text style={styles.sideSectionTitle}>
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

const SkillsSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sideSectionHeader}>
            <Text style={styles.sideSectionTitle}>
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

const LanguagesSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.sideSection}>
        <View style={styles.sideSectionHeader}>
            <Text style={styles.sideSectionTitle}>
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
export const ProfileHeader: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles }) => (
    <View style={styles.headerContainer}>
        <View style={styles.headerMain}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.role}>{data.role}</Text>
            </View>
            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.profilePhoto} />) : null}
        </View>
    </View>
);

export const ContactSection: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = ({ data, styles, labels }) => (
    <View style={styles.contactContainer}>
        <Contact label={labels.email} value={data.email} styles={styles} />
        <View style={styles.contactDivider} />
        <Contact label={labels.phone} value={data.phone} styles={styles} />
        <View style={styles.contactDivider} />
        <Contact label={labels.location} value={data.address} styles={styles} />
    </View>
);

export const MainColumn: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = (props: SectionTemplateProps<TemplateCorporateStyles>) => (
    <View style={props.styles.mainColumn}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} /> : null}
        {props.data.education.length > 0 ? <EducationSection  {...props} /> : null}
    </View>
)

export const SideColumn: React.FC<SectionTemplateProps<TemplateCorporateStyles>> = (props: SectionTemplateProps<TemplateCorporateStyles>) => (
    <View style={props.styles.sideColumn}>
        <View style={props.styles.sideContent}>
            {props.data.languages.length > 0 ? <LanguagesSection  {...props} /> : null}
            {props.data.skills.length > 0 ? <SkillsSection  {...props} /> : null}
            {props.data.projects.length > 0 ? <ProjectsSection  {...props} /> : null}
        </View>
    </View>
);
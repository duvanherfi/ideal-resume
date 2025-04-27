import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import { Contact, EducationItem, ExperienceItem, LanguageItem, ProjectItem, SkillItem } from "../items/TemplateModern.items";
import { TemplateModernStyles } from "../styles/TemplateModern.styles";

const ProfileContainer: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles }) => (
    <View style={styles.profileContainer}>
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
);

const ContactSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <View style={styles.contactItem}>
        <Contact label={labels.email} value={data.email} styles={styles} />
        <Contact label={labels.phone} value={data.phone} styles={styles} />
        <Contact label={labels.location} value={data.address} styles={styles} />
    </View>
);

const ProfileSummary: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{labels.profileSummary}</Text>
        <Text style={styles.experienceDescription}>{data.profileSummary}</Text>
    </View>
);

const WorkExperienceSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{labels.workExperiences}</Text>
        {data.workExperiences.map((exp, index) => (
            <ExperienceItem key={exp.id || index} item={exp} styles={styles} labels={labels} />
        ))}
    </View>
);

const EducationSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{labels.education}</Text>
        {data.education.map((edu, index) => (
            <EducationItem key={edu.id || index} item={edu} labels={labels} styles={styles} />
        ))}
    </View>
);

const ProjectsSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <View style={[styles.column, styles.leftColumn]}>
        <Text style={styles.sectionTitle}>{labels.projects}</Text>
        <View style={styles.projectsGrid}>
            {data.projects.map((project, index) => (
                <ProjectItem key={project.id || index} item={project} labels={labels} styles={styles} />
            ))}
        </View>
    </View>
);

const SkillsSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <>
        <Text style={styles.sectionTitle}>{labels.skills}</Text>
        <View style={styles.skillsContainer}>
            {data.skills.map((skill, index) => (
                <SkillItem key={skill.id || index} item={skill} labels={labels} styles={styles} />
            ))}
        </View>
    </>
);

const LanguagesSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = ({ data, styles, labels }) => (
    <>
        <Text style={styles.sectionTitle}>{labels.languages}</Text>
        <View style={styles.skillsContainer}>
            {data.languages.map((language, index) => (
                <LanguageItem key={language.id || index} item={language} labels={labels} styles={styles} />
            ))}
        </View>
    </>
);

//-----------------------------------
//LAYOUT
export const ProfileHeader: React.FC<SectionTemplateProps<TemplateModernStyles>> = (props) => (
    <View style={props.styles.headerContainer}>
        <View style={props.styles.headerMain}>
            <ProfileContainer {...props} />
            <ContactSection {...props} />
        </View>
    </View>
);

export const MainSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = (props) => (
    <>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection {...props} /> : null}
        {props.data.education.length > 0 ? <EducationSection {...props} /> : null}
    </>
);

export const TwoColumnsSection: React.FC<SectionTemplateProps<TemplateModernStyles>> = (props) => (
    <View style={props.styles.twoColumnSection}>
        {props.data.projects.length > 0 ? <ProjectsSection {...props} /> : null}
        <View style={props.styles.column}>
            {props.data.skills.length > 0 ? <SkillsSection {...props} /> : null}
            {props.data.languages.length > 0 ? <LanguagesSection {...props} /> : null}
        </View>
    </View>
);
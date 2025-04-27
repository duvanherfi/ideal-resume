import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import { ContactItem, EducationItem, ExperienceItem, LanguageItem, ProjectItem, SkillItem } from "../items/TemplateProfessional.items";
import { TemplateProfessionalStyles } from "../styles/TemplateProfessional.styles";

const ProfileSummary: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.profileSummary}</Text>
            <View style={styles.divider} />
        </View>
        <Text style={styles.summaryText}>{data.profileSummary}</Text>
    </View>
);

const WorkExperienceSection: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.workExperiences}</Text>
            <View style={styles.divider} />
        </View>
        {data.workExperiences.map((exp, index) => (
            <ExperienceItem key={exp.id || index} item={exp} styles={styles} labels={labels} />
        ))}
    </View>
);

const EducationSection: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.education}</Text>
            <View style={styles.divider} />
        </View>
        {data.education.map((edu, index) => (
            <EducationItem key={edu.id || index} item={edu} labels={labels} styles={styles} />
        ))}
    </View>
);

const ProjectsSection: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.rightColumnSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.projects}</Text>
            <View style={styles.divider} />
        </View>
        {data.projects.map((project, index) => (
            <ProjectItem key={project.id || index} item={project} labels={labels} styles={styles} />
        ))}
    </View>
);

const SkillsSection: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.rightColumnSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.skills}</Text>
            <View style={styles.divider} />
        </View>
        {data.skills.map((skill, index) => (
            <SkillItem key={skill.id || index} item={skill} labels={labels} styles={styles} />
        ))}
    </View>
);

const LanguagesSection: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.rightColumnSection}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{labels.languages}</Text>
            <View style={styles.divider} />
        </View>
        {data.languages.map((language, index) => (
            <LanguageItem key={language.id || index} item={language} labels={labels} styles={styles} />
        ))}
    </View>
);

//-----------------------------------
// LAYOUT COMPONENTS
export const ProfileHeader: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = ({ data, styles, labels }) => (
    <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.role}>{data.role}</Text>
            </View>

            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.profilePhoto} />) : null}
        </View>

        <View style={styles.contactContainer}>
            <ContactItem label={labels.email} value={data.email} styles={styles} />
            <ContactItem label={labels.phone} value={data.phone} styles={styles} />
            <ContactItem label={labels.location} value={data.address} styles={styles} />
        </View>
    </View>
);

export const LeftColumn: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = (props) => (
    <View style={props.styles.leftColumn}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection {...props} /> : null}
        {props.data.education.length > 0 ? <EducationSection {...props} /> : null}
    </View>
);

export const RightColumn: React.FC<SectionTemplateProps<TemplateProfessionalStyles>> = (props) => (
    <View style={props.styles.rightColumn}>
        {props.data.skills.length > 0 ? <SkillsSection {...props} /> : null}
        {props.data.languages.length > 0 ? <LanguagesSection {...props} /> : null}
        {props.data.projects.length > 0 ? <ProjectsSection {...props} /> : null}
    </View>
);
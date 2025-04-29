import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import Contact from "../common/Contact";
import { EducationSection, LanguagesSection, ProjectsSection, SkillsSection, WorkExperienceSection } from "../common/sections/TemplateSections";
import { EducationItem, ExperienceItem, LanguageItem, ProjectItem, SkillItem } from "../items/TemplateModern.items";

const ProfileContainer: React.FC<SectionTemplateProps> = ({ data, styles }) => (
    <View style={styles.header.container}>
        {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.header.photo} />) : null}
        <View style={styles.header.name.container}>
            <Text style={styles.header.name.text}>{`${data.firstName} ${data.lastName}`}</Text>
            <Text style={styles.header.role}>{data.role}</Text>
        </View>
    </View>
);

const ContactSection: React.FC<SectionTemplateProps> = ({ data, styles, labels }) => (
    <View style={styles.header.contact.item}>
        <Contact label={labels.email} value={data.email} styles={styles} />
        <Contact label={labels.phone} value={data.phone} styles={styles} />
        <Contact label={labels.location} value={data.address} styles={styles} />
    </View>
);

const ProfileSummary: React.FC<SectionTemplateProps> = ({ data, styles, labels }) => (
    <View style={styles.section.container}>
        <Text style={styles.section.title}>{labels.profileSummary}</Text>
        <Text style={styles.experience.description}>{data.profileSummary}</Text>
    </View>
);

export const ProfileHeader: React.FC<SectionTemplateProps> = (props) => (
    <View style={props.styles.header.container}>
        <View style={props.styles.header.main}>
            <ProfileContainer {...props} />
            <ContactSection {...props} />
        </View>
    </View>
);

export const MainSection: React.FC<SectionTemplateProps> = (props) => (
    <>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} ItemComponent={ExperienceItem} /> : null}
        {props.data.education.length > 0 ? <EducationSection  {...props} ItemComponent={EducationItem} /> : null}
    </>
);

export const TwoColumnsSection: React.FC<SectionTemplateProps> = (props) => (
    <View style={props.styles.layout.row}>
        {props.data.projects.length > 0 ? <ProjectsSection  {...props} ItemComponent={ProjectItem} /> : null}
        <View style={props.styles.layout.column}>
            {props.data.skills.length > 0 ? <SkillsSection  {...props} ItemComponent={SkillItem} /> : null}
            {props.data.languages.length > 0 ? <LanguagesSection  {...props} ItemComponent={LanguageItem} /> : null}
        </View>
    </View>
);
import { Image, Text, View } from "@react-pdf/renderer";
import { SectionTemplateProps } from "../../common/TemplateProps";
import Contact from "../common/Contact";
import { EducationSection, LanguagesSection, ProjectsSection, SkillsSection, WorkExperienceSection } from "../common/sections/TemplateSections";
import { EducationItem, ExperienceItem, LanguageItem, ProfileSummary, ProjectItem, SkillItem } from "../items/TemplateElegant.items";

export const ProfileHeader: React.FC<SectionTemplateProps> = ({ data, styles }) => (
    <View style={styles.header.container}>
        <View style={styles.header.main}>
            <View style={styles.header.name.container}>
                <Text style={styles.header.name.text}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.header.role}>{data.role}</Text>
            </View>
            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.header.photo} />) : null}
        </View>
        <View style={styles.common.divider} />
    </View>
);

export const ContactSection: React.FC<SectionTemplateProps> = ({ data, styles, labels }) => (
    <View style={styles.header.contact.container}>
        <View style={styles.header.contact.container}>
            <Contact label={labels.email} value={data.email} styles={styles} />
            <Contact label={labels.phone} value={data.phone} styles={styles} />
        </View>
        <View style={styles.header.contact.container}>
            <Contact label={labels.location} value={data.address} styles={styles} />
        </View>
    </View>
);

export const MainColumn: React.FC<SectionTemplateProps> = (props: SectionTemplateProps) => (
    <View style={props.styles.layout.column.main}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} ItemComponent={ExperienceItem} /> : null}
        {props.data.education.length > 0 ? <EducationSection  {...props} ItemComponent={EducationItem} /> : null}
    </View>
);

export const SideColumn: React.FC<SectionTemplateProps> = (props: SectionTemplateProps) => (
    <View style={props.styles.layout.column.side}>
        {props.data.projects.length > 0 ? <ProjectsSection  {...props} ItemComponent={ProjectItem} /> : null}
        {props.data.skills.length > 0 ? <SkillsSection  {...props} ItemComponent={SkillItem} /> : null}
        {props.data.languages.length > 0 ? <LanguagesSection  {...props} ItemComponent={LanguageItem} /> : null}
    </View>
);
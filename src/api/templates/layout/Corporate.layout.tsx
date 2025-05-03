import { Image, Text, View } from "@react-pdf/renderer";
import Contact from "@resume-api/templates/components/common/Contact";
import { EducationSection, LanguagesSection, ProjectsSection, SkillsSection, WorkExperienceSection } from "@resume-api/templates/components/sections/TemplateSections";
import { EducationItem, ExperienceItem, LanguageItem, ProfileSummary, ProjectItem, SkillItem } from "@resume-api/templates/items/Corporate.items";
import type { TemplateSectionProps } from "@resume-api/types/template/TemplateProps";

export const ProfileHeader: React.FC<TemplateSectionProps> = ({ data, styles }) => (
    <View style={styles.header.container}>
        <View style={styles.header.main}>
            <View style={styles.header.name.container}>
                <Text style={styles.header.name.text}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.header.role}>{data.role}</Text>
            </View>
            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.header.photo} />) : null}
        </View>
    </View>
);

export const ContactSection: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.header.contact.container}>
        <Contact label={labels.email} value={data.email} styles={styles} />
        <View style={styles.header.contact.divider} />
        <Contact label={labels.phone} value={data.phone} styles={styles} />
        <View style={styles.header.contact.divider} />
        <Contact label={labels.location} value={data.location} styles={styles} />
    </View>
);

export const MainColumn: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.main}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} ItemComponent={ExperienceItem} /> : null}
        {props.data.education.length > 0 ? <EducationSection  {...props} ItemComponent={EducationItem} /> : null}
    </View>
)

export const SideColumn: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.side}>
        <View style={props.styles.section.side.container}>
            {props.data.languages.length > 0 ? <LanguagesSection  {...props} ItemComponent={LanguageItem} /> : null}
            {props.data.skills.length > 0 ? <SkillsSection  {...props} ItemComponent={SkillItem} /> : null}
            {props.data.projects.length > 0 ? <ProjectsSection  {...props} ItemComponent={ProjectItem} /> : null}
        </View>
    </View>
);
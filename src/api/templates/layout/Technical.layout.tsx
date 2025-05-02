import { Image, Text, View } from "@react-pdf/renderer";
import { TemplateSectionProps } from "@resume-api/common/TemplateProps";
import Contact from "@resume-api/components/common/Contact";
import { EducationSection, LanguagesSection, ProjectsSection, SkillsSection, WorkExperienceSection } from "@resume-api/components/sections/TemplateSections";
import { EducationItem, ExperienceItem, LanguageItem, ProfileSummary, ProjectItem, SkillItem } from "../items/Technical.items";

export const HeaderSection: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.header.container}>
        <View style={styles.header.main}>
            <View style={styles.header.name.container}>
                <Text style={styles.header.name.text}>{`${data.firstName} ${data.lastName}`}</Text>
                <Text style={styles.header.role}>{data.role}</Text>
                <Contact label={labels.email} value={data.email} styles={styles} />
                <View style={styles.header.contact.divider} />
                <Contact label={labels.phone} value={data.phone} styles={styles} />
                <View style={styles.header.contact.divider} />
                <Contact label={labels.location} value={data.location} styles={styles} />
            </View>
            {data.profilePhoto ? (<Image src={data.profilePhoto} style={styles.header.photo} />) : null}
        </View>
    </View>
);

export const MainContent: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.main}>
        {props.data.profileSummary ? <ProfileSummary {...props} /> : null}
        {props.data.workExperiences.length > 0 ? <WorkExperienceSection  {...props} ItemComponent={ExperienceItem} /> : null}
        {props.data.projects.length > 0 ? <ProjectsSection  {...props} ItemComponent={ProjectItem} /> : null}
    </View>
);

export const SidebarSection: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.side}>
        {props.data.education.length > 0 ? <EducationSection  {...props} ItemComponent={EducationItem} /> : null}
        {props.data.skills.length > 0 ? <SkillsSection  {...props} ItemComponent={SkillItem} /> : null}
        {props.data.languages.length > 0 ? <LanguagesSection  {...props} ItemComponent={LanguageItem} /> : null}
    </View>
);
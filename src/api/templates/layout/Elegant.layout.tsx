import { Image, Text, View } from "@react-pdf/renderer";
import Contact from "@resume-api/templates/components/common/Contact";
import { EducationSection, LanguagesSection, ProjectsSection, SkillsSection, WorkExperienceSection } from "@resume-api/templates/components/sections/TemplateSections";
import { EducationItem, ExperienceItem, LanguageItem, ProfileSummary, ProjectItem, SkillItem } from "@resume-api/templates/items/Elegant.items";
import type { TemplateSectionProps } from "@resume-api/types/template/TemplateProps";

export const ProfileHeader: React.FC<TemplateSectionProps> = ({ data, styles, labels }) => (
    <View style={styles.header.container}>
        {data.profilePhoto && <Image src={data.profilePhoto} style={styles.header.photo} />}
        <Text style={styles.header.name.text}>{`${data.firstName} ${data.lastName}`}</Text>
        <Text style={styles.header.role}>{data.role}</Text>
        <View style={styles.header.contact.container}>
            <Contact label={labels.email} value={data.email} styles={styles} />
            <Contact label={labels.phone} value={data.phone} styles={styles} />
            <Contact label={labels.location} value={data.location} styles={styles} />
        </View>
    </View>
);

export const MainSection: React.FC<TemplateSectionProps> = props => (
    <View style={props.styles.layout.mainContent}>
        {props.data.profileSummary && <ProfileSummary {...props} />}
        <View style={props.styles.layout.row}>
            <MainColumn {...props} />
            <SideColumn {...props} />
        </View>

    </View>
);

export const MainColumn: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.main}>
        {props.data.workExperiences.length > 0 && (
            <WorkExperienceSection {...props} ItemComponent={ExperienceItem} />
        )}
        {props.data.education.length > 0 && (
            <EducationSection {...props} ItemComponent={EducationItem} />
        )}
    </View>
)

export const SideColumn: React.FC<TemplateSectionProps> = (props: TemplateSectionProps) => (
    <View style={props.styles.layout.column.side}>
        {props.data.projects.length > 0 && (
            <ProjectsSection {...props} ItemComponent={ProjectItem} />
        )}
        {props.data.skills.length > 0 && (
            <SkillsSection {...props} ItemComponent={SkillItem} />
        )}
        {props.data.languages.length > 0 && (
            <LanguagesSection {...props} ItemComponent={LanguageItem} />
        )}
    </View>
);
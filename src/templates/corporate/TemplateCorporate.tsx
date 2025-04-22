import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import TemplateProps from '../common/TemplateProps';
import styleBuilder from './TemplateCorporate.styles';

// Define labels with default values
const labels = {
    about: "About",
    experience: "Professional Experience",
    education: "Academic Background",
    projects: "Key Projects",
    skills: "Technical Skills",
    languages: "Languages",
    email: "Email",
    phone: "Phone",
    location: "Location",
    lastUpdated: "Last updated",
    present: "Present"
};

const TemplateCorporate: React.FC<TemplateProps> = ({ data, theme }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    // Header
    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.headerMain}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
                    <Text style={styles.role}>
                        {data.workExperiences && data.workExperiences.length > 0
                            ? data.workExperiences[0].role
                            : ''}
                    </Text>
                </View>
                {data.profilePhoto && (
                    <Image src={data.profilePhoto} style={styles.profilePhoto} />
                )}
            </View>

        </View>
    );

    const ContactSection = () => (
        <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>
                    {labels.email}:
                </Text>
                <Text style={styles.contactValue}>{data.email}</Text>
            </View>
            <View style={styles.contactDivider} />
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>
                    {labels.phone}:
                </Text>
                <Text style={styles.contactValue}>{data.phone}</Text>
            </View>
            <View style={styles.contactDivider} />
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>
                    {labels.location}:
                </Text>
                <Text style={styles.contactValue}>{data.address}</Text>
            </View>
        </View>
    );

    //-----------------------------------
    // About section
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    {labels.about}
                </Text>
                <View style={styles.sectionHeaderLine} />
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // Work Experience
    const ExperienceItem = (exp: WorkExperience) => (
        <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.dateContainer}>
                    {exp.startDate} - {exp.endDate === 'Present' ? labels.present : exp.endDate}
                </Text>
            </View>
            <Text style={styles.experienceRole}>{exp.role}</Text>
            <Text style={styles.experienceDescription}>{exp.description}</Text>
        </View>
    );

    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    {labels.experience}
                </Text>
                <View style={styles.sectionHeaderLine} />
            </View>
            {data.workExperiences.map((exp, index) => (
                <ExperienceItem key={exp.id || index} {...exp} />
            ))}
        </View>
    );

    //-----------------------------------
    // Education
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.educationContent}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.dateContainer}>{edu.startDate} - {edu.endDate}</Text>
            </View>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    {labels.education}
                </Text>
                <View style={styles.sectionHeaderLine} />
            </View>
            {data.education.map((edu, index) => (
                <EducationItem key={edu.id || index} {...edu} />
            ))}
        </View>
    );

    //-----------------------------------
    // Projects
    const ProjectItem = (project: Project) => (
        <View style={styles.projectItem}>
            <Text style={styles.projectName}>{project.name}</Text>
            {project.link && (
                <Link src={project.link} style={styles.projectLink}>
                    {project.link}
                </Link>
            )}
            <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
    );

    const ProjectsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sideSectionHeader}>
                <Text style={styles.sideSectionTitle}>
                    {labels.projects}
                </Text>
            </View>
            <View style={styles.projectsContainer}>
                {data.projects.map((project, index) => (
                    <ProjectItem key={project.id || index} {...project} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // Skills
    const SkillLevel = ({ level }: { level: number }) => (
        <View style={styles.skillBarContainer}>
            <View style={[styles.skillBarFill, { width: `${level * 20}%` }]} />
        </View>
    );

    const SkillItem = (skill: Skill) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <SkillLevel level={skill.level} />
        </View>
    );

    const SkillsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sideSectionHeader}>
                <Text style={styles.sideSectionTitle}>
                    {labels.skills}
                </Text>
            </View>
            <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                    <SkillItem key={skill.id || index} {...skill} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // Languages
    const LanguageItem = (language: Language) => (
        <View style={styles.languageItem}>
            <Text style={styles.languageName}>{language.name}</Text>
            <Text style={styles.languageProficiency}>{language.proficiency}</Text>
        </View>
    );

    const LanguagesSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sideSectionHeader}>
                <Text style={styles.sideSectionTitle}>
                    {labels.languages}
                </Text>
            </View>
            <View style={styles.languagesContainer}>
                {data.languages.map((language, index) => (
                    <LanguageItem key={language.id || index} {...language} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // Layout for side column
    const SideColumn = () => (
        <View style={styles.sideColumn}>
            <View style={styles.sideContent}>
                {data.projects.length > 0 && <ProjectsSection />}
                {data.skills.length > 0 && <SkillsSection />}
                {data.languages.length > 0 && <LanguagesSection />}
            </View>
        </View>
    );

    //-----------------------------------
    // Main Layout
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader />
                <ContactSection />
                <View style={styles.mainContent}>
                    <View style={styles.mainColumn}>
                        {data.profileSummary && <ProfileSummary />}
                        {data.workExperiences.length > 0 && <WorkExperienceSection />}
                        {data.education.length > 0 && <EducationSection />}
                    </View>
                    <SideColumn />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCorporate;
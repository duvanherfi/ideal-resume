import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import TemplateProps from '../common/TemplateProps';
import styleBuilder from './TemplateElegant.styles';

const TemplateElegant: React.FC<TemplateProps> = ({ data, theme }) => {
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
            <View style={styles.divider} />
        </View>
    );

    const ContactSection = () => (
        <View style={styles.contactContainer}>
            <View style={styles.contactGroup}>
                <View style={styles.contactItem}>
                    <Text style={styles.contactLabel}>✉</Text>
                    <Text style={styles.contactValue}>{data.email}</Text>
                </View>
                <View style={styles.contactItem}>
                    <Text style={styles.contactLabel}>☎</Text>
                    <Text style={styles.contactValue}>{data.phone}</Text>
                </View>
            </View>
            <View style={styles.contactGroup}>
                <View style={styles.contactItem}>
                    <Text style={styles.contactLabel}>⌂</Text>
                    <Text style={styles.contactValue}>{data.address}</Text>
                </View>
            </View>
        </View>
    );

    //-----------------------------------
    // Profile Summary
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Professional Profile
                </Text>
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // Work Experience
    const ExperienceItem = (exp: WorkExperience) => (
        <View style={styles.experienceItem}>
            <View style={styles.timelineColumn}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{exp.startDate}</Text>
                    <Text style={styles.dateText}>-</Text>
                    <Text style={styles.dateText}>{exp.endDate || 'Present'}</Text>
                </View>
            </View>
            <View style={styles.contentColumn}>
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.experienceDescription}>{exp.description}</Text>
            </View>
        </View>
    );

    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Work Experience</Text>
            </View>
            <View style={styles.timelineContainer}>
                {data.workExperiences.map((exp, index) => (
                    <ExperienceItem key={exp.id || index} {...exp} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // Education
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.timelineColumn}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{edu.startDate}</Text>
                    <Text style={styles.dateText}>-</Text>
                    <Text style={styles.dateText}>{edu.endDate || 'Present'}</Text>
                </View>
            </View>
            <View style={styles.contentColumn}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationInstitution}>{edu.institution}</Text>
            </View>
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Education
                </Text>
            </View>
            <View style={styles.timelineContainer}>
                {data.education.map((edu, index) => (
                    <EducationItem key={edu.id || index} {...edu} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // Projects
    const ProjectItem = (project: Project) => (
        <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.name}</Text>
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
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Projects</Text>
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
    const SkillLevel = ({ level }: { level: number }) => {
        const percentage = (level / 5) * 100;
        return (
            <View style={styles.skillBarContainer}>
                <View style={[styles.skillBarFill, { width: `${percentage}%` }]} />
            </View>
        );
    };

    const SkillItem = (skill: Skill) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <SkillLevel level={skill.level} />
        </View>
    );

    const SkillsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Skills</Text>
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
            <View style={styles.languageNameContainer}>
                <Text style={styles.languageName}>{language.name}</Text>
            </View>
            <View style={styles.languageProficiencyContainer}>
                <Text style={styles.languageProficiency}>{language.proficiency}</Text>
            </View>
        </View>
    );

    const LanguagesSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Languages
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
            {data.projects.length > 0 && <ProjectsSection />}
            {data.skills.length > 0 && <SkillsSection />}
            {data.languages.length > 0 && <LanguagesSection />}
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

export default TemplateElegant;
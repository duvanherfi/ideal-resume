import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import TemplateProps from '../common/TemplateProps';
import styleBuilder from './TemplateMinimalist.styles';

const TemplateMinimalist: React.FC<TemplateProps> = ({ data, theme }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    //Header
    const ProfileContainer = () => (
        <View style={styles.headerMain}>
            {data.profilePhoto && (
                <Image src={data.profilePhoto} style={styles.profilePhoto} />
            )}
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

    const ContactSection = () => (
        <View style={styles.contactGroup}>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>✉</Text>
                <Text style={styles.contactValue}>{data.email}</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>☎</Text>
                <Text style={styles.contactValue}>{data.phone}</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>⌂</Text>
                <Text style={styles.contactValue}>{data.address}</Text>
            </View>
        </View>
    );

    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <ProfileContainer />
            <View style={styles.divider} />
            <ContactSection />
        </View>
    );

    //-----------------------------------
    //Profile summary
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    About Me
                </Text>
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // Work Experience
    const ExperienceItem = (exp: WorkExperience) => (
        <View style={styles.experienceItem}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{exp.startDate}</Text>
                <Text style={styles.dateText}>-</Text>
                <Text style={styles.dateText}>{exp.endDate}</Text>
            </View>
            <View style={styles.experienceContent}>
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
            {data.workExperiences.map((exp, index) => (
                <ExperienceItem key={exp.id || index} {...exp} />
            ))}
        </View>
    );

    //-----------------------------------
    //Education
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{edu.startDate}</Text>
                <Text style={styles.dateText}>-</Text>
                <Text style={styles.dateText}>{edu.endDate}</Text>
            </View>
            <View style={styles.educationContent}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationInstitution}>{edu.institution}</Text>
            </View>
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Education</Text>
            </View>
            {data.education.map((edu, index) => (
                <EducationItem key={edu.id || index} {...edu} />
            ))}
        </View>
    );

    //-----------------------------------
    //Projects
    const ProjectItem = (project: Project) => (
        <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Link src={project.link} style={styles.projectLink}>
                {project.link}
            </Link>
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
    //Skills
    const SkillLevel = ({ level }: { level: number }) => {
        return (
            <View style={styles.skillLevelContainer}>
                {[...Array(5)].map((_, i) => (
                    <View
                        key={i}
                        style={i < level ? styles.skillLevelFilled : styles.skillLevelEmpty}
                    />
                ))}
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
    //Languages
    const LanguageItem = (language: Language) => (
        <View style={styles.languageItem}>
            <Text style={styles.languageName}>{language.name}</Text>
            <Text style={styles.languageProficiency}>{language.proficiency}</Text>
        </View>
    );

    const LanguagesSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Languages</Text>
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
            {data.skills.length > 0 && <SkillsSection />}
            {data.projects.length > 0 && <ProjectsSection />}
            {data.languages.length > 0 && <LanguagesSection />}
        </View>
    );

    //-----------------------------------
    //Main Layout
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader />
                <View style={styles.content}>
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

export default TemplateMinimalist;
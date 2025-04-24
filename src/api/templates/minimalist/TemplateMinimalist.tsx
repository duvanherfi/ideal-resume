import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import styleBuilder from './TemplateMinimalist.styles';

const TemplateMinimalist: React.FC<TemplateProps> = ({ data, theme, labels }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    //HEADER
    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <ProfileContainer />
            <View style={styles.divider} />
            <ContactSection />
        </View>
    );

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

    const Contact = ({ label, value }: { label?: string, value?: string }) => value ? (
        <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>{label}</Text>
            <Text style={styles.contactValue}>{value}</Text>
        </View>
    ) : null;

    const ContactSection = () => (
        <View style={styles.contactGroup}>
            <Contact label={labels.email} value={data.email} />
            <Contact label={labels.phone} value={data.phone} />
            <Contact label={labels.location} value={data.address} />
        </View>
    );

    //-----------------------------------
    //PROFILE SUMMARY
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    {labels.profileSummary}
                </Text>
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    //ITEMS
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

    const ProjectItem = (project: Project) => (
        <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Link src={project.link} style={styles.projectLink}>
                {project.link}
            </Link>
            <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
    );

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

    const LanguageItem = (language: Language) => (
        <View style={styles.languageItem}>
            <Text style={styles.languageName}>{language.name}</Text>
            <Text style={styles.languageProficiency}>{language.proficiency}</Text>
        </View>
    );

    //-----------------------------------
    //SECTIONS
    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.workExperiences}</Text>
            </View>
            {data.workExperiences.map((exp, index) => (
                <ExperienceItem key={exp.id || index} {...exp} />
            ))}
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.education}</Text>
            </View>
            {data.education.map((edu, index) => (
                <EducationItem key={edu.id || index} {...edu} />
            ))}
        </View>
    );

    const ProjectsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.projects}</Text>
            </View>
            <View style={styles.projectsContainer}>
                {data.projects.map((project, index) => (
                    <ProjectItem key={project.id || index} {...project} />
                ))}
            </View>
        </View>
    );

    const SkillsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.skills}</Text>
            </View>
            <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                    <SkillItem key={skill.id || index} {...skill} />
                ))}
            </View>
        </View>
    );

    const LanguagesSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.languages}</Text>
            </View>
            <View style={styles.languagesContainer}>
                {data.languages.map((language, index) => (
                    <LanguageItem key={language.id || index} {...language} />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    //LAYOUT
    const MainColumn = () => (
        <View style={styles.mainColumn}>
            {data.profileSummary && <ProfileSummary />}
            {data.workExperiences.length > 0 && <WorkExperienceSection />}
            {data.education.length > 0 && <EducationSection />}
        </View>
    );

    const SideColumn = () => (
        <View style={styles.sideColumn}>
            {data.skills.length > 0 && <SkillsSection />}
            {data.projects.length > 0 && <ProjectsSection />}
            {data.languages.length > 0 && <LanguagesSection />}
        </View>
    );

    //-----------------------------------
    //DOCUMENT
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader />
                <View style={styles.content}>
                    <MainColumn />
                    <SideColumn />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateMinimalist;
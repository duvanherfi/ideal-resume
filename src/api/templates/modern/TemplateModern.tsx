import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import styleBuilder from './TemplateModern.styles';
import TemplateProps from '../../common/TemplateProps';
import { WorkExperience, Education, Project, Skill, Language } from '../../types';

const TemplateModern: React.FC<TemplateProps> = ({ data, theme }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    //Header
    const ProfileContainer = () => (
        <View style={styles.profileContainer}>
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

    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.headerMain}>
                <ProfileContainer />
                <ContactSection />
            </View>
        </View>
    );

    const ContactSection = () => (
        <View style={styles.contactItem}>
            <Text style={styles.contactValue}>
                <Text style={styles.contactLabel}>{"Email: "}</Text>
                {data.email}
            </Text>
            <Text style={styles.contactValue}>
                <Text style={styles.contactLabel}>{"Phone: "}</Text>
                {data.phone}
            </Text>
            <Text style={styles.contactValue}>
                <Text style={styles.contactLabel}>{"Address: "}</Text>
                {data.address}
            </Text>
        </View>
    );

    //-----------------------------------
    //Profile summary
    const ProfileSummary = () => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{"Profile Summary"}</Text>
            <Text style={styles.experienceDescription}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // Work Experience
    const ExperienceItem = (exp: WorkExperience) => (
        <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
                <Text style={styles.experienceRole}>
                    {exp.role} at <Text style={styles.experienceCompany}>{exp.company}</Text>
                </Text>
                <Text style={styles.dateText}>{`${exp.startDate} - ${exp.endDate}`}</Text>
            </View>
            <Text style={styles.experienceDescription}>{exp.description}</Text>
        </View>
    );

    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{"Work Experience"}</Text>
            {data.workExperiences.map(exp => <ExperienceItem key={exp.id} {...exp} />)}
        </View>
    );

    //-----------------------------------
    //Education
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.educationContent}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.dateText}>{`${edu.startDate} - ${edu.endDate}`}</Text>
            </View>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{"Education"}</Text>
            {data.education.map((edu) => <EducationItem key={edu.id} {...edu} />)}
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
        <View style={[styles.column, styles.leftColumn]}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.projectsGrid}>
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
            <Text style={styles.skillLevel}>
                {level ? '★'.repeat(level) + '☆'.repeat(5 - level) : ''}
            </Text>
        );
    };

    const SkillItem = (skill: Skill) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillText}>
                {skill.name} <SkillLevel level={skill.level} />
            </Text>
        </View>
    );

    const SkillsSection = () => (
        <>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                    <SkillItem key={skill.id || index} {...skill} />
                ))}
            </View>
        </>
    );

    //-----------------------------------
    //Languages
    const LanguageItem = (language: Language) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillText}>
                {language.name} ({language.proficiency})
            </Text>
        </View>
    );

    const LanguagesSection = () => (
        <>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.skillsContainer}>
                {data.languages.map((language, index) => (
                    <LanguageItem key={language.id || index} {...language} />
                ))}
            </View>
        </>
    );

    //-----------------------------------
    // Layout for last row
    const TwoColumnsSection = () => (
        <View style={styles.twoColumnSection}>
            {data.projects.length > 0 && <ProjectsSection />}
            <View style={styles.column}>
                {data.skills.length > 0 && <SkillsSection />}
                {data.languages.length > 0 && <LanguagesSection />}
            </View>
        </View>
    );

    //-----------------------------------
    //Main Layout
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader />
                {data.profileSummary && <ProfileSummary />}
                {data.workExperiences.length > 0 && <WorkExperienceSection />}
                {data.education.length > 0 && <EducationSection />}
                <TwoColumnsSection />
            </Page>
        </Document>
    )
}

export default TemplateModern;
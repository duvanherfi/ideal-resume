import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import styleBuilder from './TemplateCreative.styles';
import TemplateProps from '../../common/TemplateProps';
import { WorkExperience, Education, Project, Skill, Language } from '../../types';

const TemplateCreative: React.FC<TemplateProps> = ({ data, theme, labels }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    //Header
    const ProfileContainer = () => (
        <View style={styles.profileContainer}>
            {data.profilePhoto && (
                <View style={styles.photoWrapper}>
                    <Image src={data.profilePhoto} style={styles.profilePhoto} />
                </View>
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
        <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>{labels.email}</Text>
                <Text style={styles.contactValue}>{data.email}</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>{labels.phone}</Text>
                <Text style={styles.contactValue}>{data.phone}</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>{labels.address}</Text>
                <Text style={styles.contactValue}>{data.address}</Text>
            </View>
        </View>
    );

    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <ProfileContainer />
            <ContactSection />
        </View>
    );

    //-----------------------------------
    //Profile summary
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{labels.profileSummary}</Text>
            </View>
            <Text style={styles.experienceDescription}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // Work Experience
    const ExperienceItem = (exp: WorkExperience) => (
        <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.dateText}>{`${exp.startDate} - ${exp.endDate}`}</Text>
            </View>
            <Text style={styles.experienceCompany}>{exp.company}</Text>
            <Text style={styles.experienceDescription}>{exp.description}</Text>
        </View>
    );

    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{labels.workExperiences}</Text>
            </View>
            {data.workExperiences.map(exp => <ExperienceItem key={exp.id} {...exp} />)}
        </View>
    );

    //-----------------------------------
    //Education
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.educationHeader}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.dateText}>{`${edu.startDate} - ${edu.endDate}`}</Text>
            </View>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
        </View>
    );

    const EducationSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{labels.education}</Text>
            </View>
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
        <View style={styles.sideSection}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{labels.projects}</Text>
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
    const SkillItem = (skill: Skill) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={styles.skillLevelContainer}>
                <View style={[styles.skillLevelBar, { width: `${skill.level * 20}%` }]} />
            </View>
        </View>
    );

    const SkillsSection = () => (
        <View style={styles.sideSection}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{labels.skills}</Text>
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
            <View style={styles.sectionTitleContainer}>
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
    // Layout
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.mainContent}>
                    <ProfileHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.leftColumn}>
                            {data.profileSummary && <ProfileSummary />}
                            {data.workExperiences.length > 0 && <WorkExperienceSection />}
                            {data.education.length > 0 && <EducationSection />}
                        </View>
                        <View style={styles.rightColumn}>
                            {data.skills.length > 0 && <SkillsSection />}
                            {data.languages.length > 0 && <LanguagesSection />}
                            {data.projects.length > 0 && <ProjectsSection />}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCreative;
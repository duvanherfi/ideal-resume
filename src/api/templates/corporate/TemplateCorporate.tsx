import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import styleBuilder from './TemplateCorporate.styles';

const TemplateCorporate: React.FC<TemplateProps> = ({ data, theme, labels }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    //HEADER
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

    const Contact = ({ label, value }: { label?: string, value?: string }) => value ? (
        <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>{label}:</Text>
            <Text style={styles.contactValue}>{value}</Text>
        </View>
    ) : null;

    const ContactSection = () => (
        <View style={styles.contactContainer}>
            <Contact label={labels.email} value={data.email} />
            <View style={styles.contactDivider} />
            <Contact label={labels.phone} value={data.phone} />
            <View style={styles.contactDivider} />
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
                <View style={styles.sectionHeaderLine} />
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    //ITEMS
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

    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.educationContent}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.dateContainer}>{edu.startDate} - {edu.endDate}</Text>
            </View>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
        </View>
    );

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
                <Text style={styles.sectionTitle}>
                    {labels.workExperiences}
                </Text>
                <View style={styles.sectionHeaderLine} />
            </View>
            {data.workExperiences.map((exp, index) => (
                <ExperienceItem key={exp.id || index} {...exp} />
            ))}
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
    //LAYOUT
    const MainColumn = () => (
        <View style={styles.mainColumn}>
            {data.profileSummary && <ProfileSummary />}
            {data.workExperiences.length > 0 && <WorkExperienceSection />}
            {data.education.length > 0 && <EducationSection />}
        </View>
    )

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
    //DOCUMENT
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader />
                <ContactSection />
                <View style={styles.mainContent}>
                    <MainColumn />
                    <SideColumn />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCorporate;
import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { Education, Language, Project, Skill, WorkExperience } from '../../types';
import styleBuilder from './TemplateProfessional.styles';

const TemplateProfessional: React.FC<TemplateProps> = ({ data, theme, labels }) => {
    const styles = styleBuilder(theme || undefined);

    //-----------------------------------
    // HEADER
    const ProfileHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
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
            
            <View style={styles.contactContainer}>
                {data.email && (
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>{labels.email}</Text>
                        <Text style={styles.contactValue}>{data.email}</Text>
                    </View>
                )}
                
                {data.phone && (
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>{labels.phone}</Text>
                        <Text style={styles.contactValue}>{data.phone}</Text>
                    </View>
                )}
                
                {data.address && (
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>{labels.location}</Text>
                        <Text style={styles.contactValue}>{data.address}</Text>
                    </View>
                )}
            </View>
        </View>
    );

    //-----------------------------------
    // PROFILE SUMMARY
    const ProfileSummary = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.profileSummary}</Text>
                <View style={styles.divider} />
            </View>
            <Text style={styles.summaryText}>{data.profileSummary}</Text>
        </View>
    );

    //-----------------------------------
    // EXPERIENCE ITEMS
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

    //-----------------------------------
    // EDUCATION ITEMS
    const EducationItem = (edu: Education) => (
        <View style={styles.educationItem}>
            <View style={styles.educationHeader}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.dateText}>{`${edu.startDate} - ${edu.endDate}`}</Text>
            </View>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
        </View>
    );

    //-----------------------------------
    // PROJECT ITEMS
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

    //-----------------------------------
    // SKILL ITEMS
    const SkillItem = (skill: Skill) => (
        <View style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={styles.skillLevelContainer}>
                {[1, 2, 3, 4, 5].map((level) => (
                    <View 
                        key={level}
                        style={[
                            styles.skillLevelDot,
                            level <= skill.level ? styles.skillLevelDotFilled : styles.skillLevelDotEmpty
                        ]}
                    />
                ))}
            </View>
        </View>
    );

    //-----------------------------------
    // LANGUAGE ITEMS
    const LanguageItem = (language: Language) => (
        <View style={styles.languageItem}>
            <Text style={styles.languageName}>{language.name}</Text>
            <Text style={styles.languageProficiency}>{language.proficiency}</Text>
        </View>
    );

    //-----------------------------------
    // SECTIONS
    const WorkExperienceSection = () => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.workExperiences}</Text>
                <View style={styles.divider} />
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
                <View style={styles.divider} />
            </View>
            {data.education.map((edu, index) => (
                <EducationItem key={edu.id || index} {...edu} />
            ))}
        </View>
    );

    const ProjectsSection = () => (
        <View style={styles.rightColumnSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.projects}</Text>
                <View style={styles.divider} />
            </View>
            {data.projects.map((project, index) => (
                <ProjectItem key={project.id || index} {...project} />
            ))}
        </View>
    );

    const SkillsSection = () => (
        <View style={styles.rightColumnSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.skills}</Text>
                <View style={styles.divider} />
            </View>
            {data.skills.map((skill, index) => (
                <SkillItem key={skill.id || index} {...skill} />
            ))}
        </View>
    );

    const LanguagesSection = () => (
        <View style={styles.rightColumnSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{labels.languages}</Text>
                <View style={styles.divider} />
            </View>
            {data.languages.map((language, index) => (
                <LanguageItem key={language.id || index} {...language} />
            ))}
        </View>
    );

    //-----------------------------------
    // LAYOUT
    return (
        <Document>
            <Page size="A4" style={styles.page}>
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
            </Page>
        </Document>
    );
};

export default TemplateProfessional;
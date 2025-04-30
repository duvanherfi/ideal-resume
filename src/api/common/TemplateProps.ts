import TemplateStyleSheet, { EducationStyles, ExperienceStyles, LanguageStyles, ProjectStyles, SkillStyles } from "@resume-api/templates/helper/TemplateStyleSheet";
import { Education, Language, Project, ResumeLabels, Skill, UserData, WorkExperience } from "../types";
import TemplateTheme from "./TemplateTheme";

interface TemplateProps {
    data: UserData;
    labels: ResumeLabels;
    theme: TemplateTheme;
}

export type StyleTemplateProps<T> = { styles: T };
export type TemplateItemGenericStyleProps<T, K> = StyleTemplateProps<K> & { item: T } & { labels: ResumeLabels };
export type SimpleItemProps<T> = StyleTemplateProps<TemplateStyleSheet> & { item: T };

export type TemplateItemProps<T> = TemplateItemGenericStyleProps<T, TemplateStyleSheet>;
export type TemplateSectionProps = TemplateProps & StyleTemplateProps<TemplateStyleSheet>;
export type MultiItemSectionProps<T> = TemplateSectionProps & { ItemComponent: React.FC<TemplateItemProps<T>>; };

export type ExperienceItemProps = TemplateItemGenericStyleProps<WorkExperience, ExperienceStyles>;
export type EducationItemProps = TemplateItemGenericStyleProps<Education, EducationStyles>;
export type ProjectItemProps = TemplateItemGenericStyleProps<Project, ProjectStyles>;
export type SkillItemProps = TemplateItemGenericStyleProps<Skill, SkillStyles>;
export type LanguageItemProps = TemplateItemGenericStyleProps<Language, LanguageStyles>;

export default TemplateProps;
import TemplateStyleSheet, { EducationStyles, ExperienceStyles, LanguageStyles, ProjectStyles, SkillStyles } from "@resume-api/templates/helper/TemplateStyleSheet";
import { Education, Language, Project, ResumeLabels, Skill, UserData, WorkExperience } from "../types";
import TemplateTheme from "./TemplateTheme";

interface TemplateProps {
    data: UserData;
    labels: ResumeLabels;
    theme: TemplateTheme;
}

export type StyleTemplateProps<T> = { styles: T };
export type ItemTemplateProps<T, K> = StyleTemplateProps<K> & { item: T } & { labels: ResumeLabels };
export type SimpleItemProps<T> = StyleTemplateProps<TemplateStyleSheet> & { item: T };
export type ItemProps<T> = ItemTemplateProps<T, TemplateStyleSheet>;
export type SectionTemplateProps = TemplateProps & StyleTemplateProps<TemplateStyleSheet>;
export type MultiItemSectionProps<T> = SectionTemplateProps & { ItemComponent: React.FC<ItemProps<T>>; };

export type ExperienceItemProps = ItemTemplateProps<WorkExperience, ExperienceStyles>;
export type EducationItemProps = ItemTemplateProps<Education, EducationStyles>;
export type ProjectItemProps = ItemTemplateProps<Project, ProjectStyles>;
export type SkillItemProps = ItemTemplateProps<Skill, SkillStyles>;
export type LanguageItemProps = ItemTemplateProps<Language, LanguageStyles>;

export default TemplateProps;
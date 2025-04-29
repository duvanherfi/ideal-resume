import { Style } from '@react-pdf/types';

interface ContainerProps { container: Style; }
interface TextProps { text: Style; }
interface ItemProps { item: Style; }
interface DateProps extends ContainerProps, TextProps { }
export interface BadgeStyles extends ContainerProps, TextProps { }

export interface CommonStyles {
    divider: Style;
    techContainer: Style;
    date: DateProps;
    badge: BadgeStyles;
}

export interface LayoutStyles {
    row: Style;
    mainContent: Style;
    column: {
        main: Style;
        side: Style;
    };
}

export interface SectionStyles extends ContainerProps {
    header: Style;
    title: Style;
    headerLine: Style;
    side: {
        container: Style;
        header: Style;
        title: Style;
    };
}

interface Contact extends ContainerProps, ItemProps {
    label: Style;
    value: Style;
    divider: Style;
}

interface HeaderName extends ContainerProps, TextProps { }

export interface HeaderStyles extends ContainerProps {
    main: Style;
    name: HeaderName;
    role: Style;
    photo: Style;
    contact: Contact;
}

export interface SummaryStyles {
    text: Style;
}

export interface ExperienceStyles extends ItemProps {
    header: Style;
    company: Style;
    role: Style;
    contractType: Style;
    location: Style;
    description: Style;
}

export interface EducationStyles extends ItemProps {
    header: Style;
    degree: Style;
    institution: Style;
    description: Style;
    location: Style;
}

export interface ProjectStyles extends ContainerProps, ItemProps {
    name: Style;
    link: Style;
    description: Style;
}

interface SkillBar extends ContainerProps { fill: Style; }

export interface SkillStyles extends ContainerProps, ItemProps {
    name: Style;
    bar: SkillBar;
}

export interface LanguageStyles extends ContainerProps, ItemProps {
    name: Style;
    proficiency: Style;
}

export interface FooterStyles extends ContainerProps, TextProps { }

interface TemplateStyleSheet {
    page: Style;
    common: CommonStyles;
    layout: LayoutStyles;
    section: SectionStyles;
    header: HeaderStyles;
    summary: SummaryStyles;
    experience: ExperienceStyles;
    education: EducationStyles;
    project: ProjectStyles;
    skill: SkillStyles;
    language: LanguageStyles;
    footer: FooterStyles;
}

export default TemplateStyleSheet;
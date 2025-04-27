import { UserData, ResumeLabels } from "../types";
import TemplateTheme from "./TemplateTheme";

interface TemplateProps {
    data: UserData;
    labels: ResumeLabels;
    theme?: TemplateTheme;
}

export type StyleTemplateProps<T> = { styles: T };
export type SectionTemplateProps<T> = TemplateProps & StyleTemplateProps<T>;
export type ItemTemplateProps<T, K> = StyleTemplateProps<K> & { item: T } & { labels: ResumeLabels };

export default TemplateProps;
import type TemplateStyleSheet from "@resume-api/templates/styles/common/TemplateStyleSheet";
import type { ResumeLabels } from "@resume-api/types/template/ResumeLabels";
import { type UserData } from "@resume-api/types/user-data/UserData";
import type TemplateTheme from "./TemplateTheme";

interface TemplateProps {
    data: UserData;
    labels: ResumeLabels;
    theme: TemplateTheme;
}

type StyleTemplateProps<T> = { styles: T };
type TemplateItemGenericStyleProps<T, K> = StyleTemplateProps<K> & { item: T } & { labels: ResumeLabels };

export type SimpleItemProps<T> = StyleTemplateProps<TemplateStyleSheet> & { item: T };
export type TemplateItemProps<T> = TemplateItemGenericStyleProps<T, TemplateStyleSheet>;
export type TemplateSectionProps = TemplateProps & StyleTemplateProps<TemplateStyleSheet>;
export type MultiItemSectionProps<T> = TemplateSectionProps & { ItemComponent: React.FC<TemplateItemProps<T>>; };

export default TemplateProps;
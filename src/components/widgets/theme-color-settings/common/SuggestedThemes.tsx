import useI18N from "@hooks/useI18N";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import I18n from "src/locales/I18nKeys";
import ThemeColorBadge from "./ThemeColorBadge";

interface SuggestedThemesProps {
    property: keyof TemplateColorScheme;
}

const SuggestedThemes: React.FC<SuggestedThemesProps> = ({ property }) => {
    const { t } = useI18N();

    const suggestions = [
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.BLUE), color: "#3B82F6" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.GREEN), color: "#10B981" },
        //{ name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.PURPLE), color: "#8B5CF6" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.RED), color: "#EF4444" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.ORANGE), color: "#F59E0B" },
        //{ name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.YELLOW), color: "#FACC15" },
        //{ name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.TEAL), color: "#14B8A6" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.CYAN), color: "#06B6D4" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.INDIGO), color: "#6366F1" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.PINK), color: "#EC4899" },
        { name: t(I18n.THEME.COLOR.SUGGESTED.OPTION.GRAY), color: "#6B7280" },
    ];

    return (
        <div className="flex flex-col">
            <span className="text-xs font-medium text-secondary-600 dark:text-secondary-200 mb-2">
                {t(I18n.THEME.COLOR.SUGGESTED.LABEL)}
            </span>
            <div className="flex flex-wrap gap-2">
                {suggestions.map((theme) => (
                    <ThemeColorBadge key={theme.name} property={property} {...theme} />
                ))}
            </div>
        </div>
    );
};

export default SuggestedThemes;
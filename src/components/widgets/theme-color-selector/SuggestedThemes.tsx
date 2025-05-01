import useI18N from "@hooks/useI18N";
import I18n from "src/locales/I18nKeys";
import ThemeColorBadge, { ThemeColorBadgeProps } from "./ThemeColorBadge";

const SuggestedThemes = () => {
    const { t } = useI18N();

    const suggestions: ThemeColorBadgeProps[] = [
        { name: t(I18n.THEMES.SUGGESTED.OPTION.BLUE), value: { primary: "#3B82F6" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.GREEN), value: { primary: "#10B981" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.PURPLE), value: { primary: "#8B5CF6" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.RED), value: { primary: "#EF4444" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.ORANGE), value: { primary: "#F59E0B" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.YELLOW), value: { primary: "#FACC15" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.TEAL), value: { primary: "#14B8A6" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.CYAN), value: { primary: "#06B6D4" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.INDIGO), value: { primary: "#6366F1" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.PINK), value: { primary: "#EC4899" } },
        { name: t(I18n.THEMES.SUGGESTED.OPTION.GRAY), value: { primary: "#6B7280" } },
    ];

    return (
        <div className="flex flex-col">
            <span className="text-xs font-medium text-secondary-600 dark:text-secondary-200 mb-2">
                {t(I18n.THEMES.SUGGESTED.LABEL)}
            </span>
            <div className="flex flex-wrap gap-2">
                {suggestions.map((theme) => (
                    <ThemeColorBadge key={theme.name} {...theme} />
                ))}
            </div>
        </div>
    );
};

export default SuggestedThemes;
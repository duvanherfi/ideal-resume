import useTranslations from "../../../hooks/useTranslations";
import ThemeColorBadge, { ThemeColorBadgeProps } from "./ThemeColorBadge";

const SuggestedThemes = () => {
    const { t } = useTranslations();

    const suggestions: ThemeColorBadgeProps[] = [
        { name: t("themes.suggested.option.blue"), value: { primary: "#3B82F6" } },
        { name: t("themes.suggested.option.green"), value: { primary: "#10B981" } },
        { name: t("themes.suggested.option.purple"), value: { primary: "#8B5CF6" } },
        { name: t("themes.suggested.option.red"), value: { primary: "#EF4444" } },
        { name: t("themes.suggested.option.orange"), value: { primary: "#F59E0B" } }
    ];

    return (
        <div className="flex flex-col">
            <span className="text-xs font-medium text-secondary-600 dark:text-secondary-200 mb-2">
                {t("themes.suggested.label")}
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
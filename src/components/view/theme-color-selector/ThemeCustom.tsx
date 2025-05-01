import useResumeTheme from "@api-hooks/useResumeTheme";
import useI18N from "@hooks/useI18N";
import I18nKeys from "src/locales/I18nKeys";
import ThemeColorBadge from "./ThemeColorBadge";

const ThemeCustom = () => {
    const { t } = useI18N();
    const theme = useResumeTheme();

    return (
        <div className="flex flex-col">
            <label className="text-xs font-medium text-secondary-600 dark:text-secondary-200 mb-2" htmlFor="primary-color">
                {t(I18nKeys.THEMES.CUSTOMIZE.LABEL)}
            </label>
            <div className="flex items-center relative">
                <input
                    id="primary-color"
                    type="color"
                    value={theme.get?.primary}
                    onChange={(e) => theme.changeProperty("primary", e.target.value)}
                    className="h-10 w-10 cursor-pointer p-0 opacity-0 absolute z-10"
                    aria-label="Select primary color"
                />
                {theme.get?.primary &&
                    <ThemeColorBadge {...{ name: theme.get?.primary, value: { primary: theme.get?.primary ?? '' } }} />}
            </div>
        </div>
    );
};

export default ThemeCustom;
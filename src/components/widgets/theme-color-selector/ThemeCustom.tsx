import useResumeTheme from "@api-hooks/useResumeTheme";
import useI18N from "@hooks/useI18N";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import I18n from "src/locales/I18nKeys";
import ThemeColorBadge from "./ThemeColorBadge";

interface ThemeColorBadgeProps {
    property: keyof TemplateColorScheme;
}

const ThemeCustom: React.FC<ThemeColorBadgeProps> = ({ property }) => {
    const { t } = useI18N();
    const theme = useResumeTheme();
    const color = theme.getColor(property);

    return (
        <div className="flex flex-col">
            <label className="text-xs font-medium text-secondary-600 dark:text-secondary-200 mb-2" htmlFor={`color-${property}`}>
                {t(I18n.THEMES.CUSTOMIZE.LABEL)}
            </label>
            <div className="flex items-center relative">
                <input
                    id={`color-${property}`}
                    type="color"
                    value={color}
                    onChange={(e) => theme.changeColor(property, e.target.value)}
                    className="h-10 w-10 cursor-pointer p-0 opacity-0 absolute z-10"
                    aria-label={`Select ${property} color`}
                />
                <ThemeColorBadge name={color} color={color} property={property} />
            </div>
        </div>
    );
};

export default ThemeCustom;
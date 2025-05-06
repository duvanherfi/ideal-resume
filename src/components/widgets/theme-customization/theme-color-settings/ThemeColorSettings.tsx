import GlassCard from "@components/ui/glass-card/GlassCard";
import Icons from "@icons/Icons";
import ViewTitle from "@components/widgets/common/ViewTitle";
import AdvancedThemeSettings from "@components/widgets/theme-customization/theme-color-settings/AdvancedThemeSettings";
import GenericThemeColorSettings from "@components/widgets/theme-customization/theme-color-settings/GenericThemeColorSettings";
import I18n from "src/locales/I18nKeys";

const ThemeColorSettings: React.FC = () => {
    return (
        <GlassCard>
            <ViewTitle simple title={I18n.THEME.COLOR.TITLE} subtitle={I18n.THEME.COLOR.SUBTITLE} className="pb-4" />
            <div className="space-y-4">
                <GenericThemeColorSettings />
                <AdvancedThemeSettings />
            </div>
            <Icons.LineSeparator />
        </GlassCard>
    );
};

export default ThemeColorSettings;
import GlassCard from "@components/ui/GlassCard";
import ViewTitle from "@components/widgets/common/ViewTitle";
import AdvancedThemeSettings from "@components/widgets/theme-color-settings/AdvancedThemeSettings";
import ThemeColorSettings from "@components/widgets/theme-color-settings/ThemeColorSettings";
import I18n from "src/locales/I18nKeys";

const ViewColorSettings: React.FC = () => {
    return (
        <GlassCard>
            <ViewTitle simple title={I18n.THEME.COLOR.TITLE} subtitle={I18n.THEME.COLOR.SUBTITLE} className="pb-4" />
            <div className="space-y-4">
                <ThemeColorSettings />
                <AdvancedThemeSettings />
            </div>
        </GlassCard>
    );
};

export default ViewColorSettings;
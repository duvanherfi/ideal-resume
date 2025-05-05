import GlassCard from "@components/ui/GlassCard";
import Subtitle from "@components/ui/text/Subtitle";
import CustomTheme from "@components/widgets/theme-color-settings/common/CustomTheme";
import SuggestedThemes from "@components/widgets/theme-color-settings/common/SuggestedThemes";
import { TemplateColorScheme, TemplateColorSchemeKey } from "@resume-api/types/template/TemplateTheme";
import I18n from "src/locales/I18nKeys";

interface ThemeColorSettingsProps {
    property?: keyof TemplateColorScheme;
}

const ThemeColorSettings: React.FC<ThemeColorSettingsProps> = ({ property = TemplateColorSchemeKey.ALL }) => {
    return (
        <GlassCard className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row justify-between items-center">
            <Subtitle>{I18n.THEME.COLOR.SCHEME(property)}</Subtitle>
            <div className="flex flex-row space-x-8 space-y-0">
                <CustomTheme property={property} />
                <SuggestedThemes property={property} />
            </div>
        </GlassCard>
    );
};

export default ThemeColorSettings;
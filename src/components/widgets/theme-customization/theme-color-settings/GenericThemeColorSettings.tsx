import GlassCard from "@components/ui/glass-card/GlassCard";
import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import CustomTheme from "@components/widgets/theme-customization/theme-color-settings/common/CustomTheme";
import SuggestedThemes from "@components/widgets/theme-customization/theme-color-settings/common/SuggestedThemes";
import { TemplateColorScheme, TemplateColorSchemeKey } from "@resume-api/types/template/TemplateTheme";
import I18n from "src/locales/I18nKeys";

interface GenericThemeColorSettingsProps {
    property?: keyof TemplateColorScheme;
}

const GenericThemeColorSettings: React.FC<GenericThemeColorSettingsProps> = ({ property = TemplateColorSchemeKey.ALL }) => {
    return (
        <GlassCard className="flex flex-col space-y-2 lg:space-y-4">
            <div className="flex flex-col space-y-2 pb-4 2xl:pb-0">
                <Subtitle>{I18n.THEME.COLOR.SCHEME.TITLE(property)}</Subtitle>
                <Text className="text-secondary-600 dark:text-secondary-400 text-xs md:text-sm">
                    {I18n.THEME.COLOR.SCHEME.SUBTITLE(property)}
                </Text>
            </div>

            <div className="flex flex-row space-x-8">
                <CustomTheme property={property} />
                <SuggestedThemes property={property} />
            </div>
        </GlassCard>


    );
};

export default GenericThemeColorSettings;
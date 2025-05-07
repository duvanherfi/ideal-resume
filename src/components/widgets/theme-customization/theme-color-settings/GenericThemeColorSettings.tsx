import Icons from "@components/ui/icons/Icons";
import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import CustomTheme from "@components/widgets/theme-customization/theme-color-settings/common/CustomTheme";
import SuggestedThemes from "@components/widgets/theme-customization/theme-color-settings/common/SuggestedThemes";
import I18n from "@language/common/I18nKeys";
import { TemplateColorScheme, TemplateColorSchemeKey } from "@resume-api/types/template/TemplateTheme";

interface GenericThemeColorSettingsProps {
    property?: keyof TemplateColorScheme;
}

const GenericThemeColorSettings: React.FC<GenericThemeColorSettingsProps> = ({ property = TemplateColorSchemeKey.ALL }) => {
    return (
        <div className="flex flex-col space-y-2 lg:space-y-4 py-2 xl:py-6 xl:px-8 bg-accent-100/40 dark:bg-accent-950/20 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl shadow-md p-4 w-full mx-auto border">
            <div className="flex flex-col space-y-2 pb-4 2xl:pb-0">
                <Subtitle>{I18n.THEME.COLOR.SCHEME.TITLE(property)}</Subtitle>
                <Text className="text-secondary-600 dark:text-secondary-400 text-xs md:text-sm">
                    {I18n.THEME.COLOR.SCHEME.SUBTITLE(property)}
                </Text>
            </div>
            <Icons.LineSeparator />
            <div className="flex flex-row space-x-8">
                <CustomTheme property={property} />
                <SuggestedThemes property={property} />
            </div>
        </div>


    );
};

export default GenericThemeColorSettings;
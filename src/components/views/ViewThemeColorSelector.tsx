import GlassCard from "@components/ui/GlassCard";
import Subtitle from "@components/ui/text/Subtitle";
import ViewTitle from "@components/widgets/common/ViewTitle";
import SuggestedThemes from "@components/widgets/theme-color-selector/SuggestedThemes";
import ThemeCustom from "@components/widgets/theme-color-selector/ThemeCustom";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import I18n from "src/locales/I18nKeys";

const ViewThemeColorSelector: React.FC = () => {
    const theme = useResumeTheme();

    return (
        <GlassCard>
            <ViewTitle simple title={I18n.THEMES.TITLE} subtitle={I18n.THEMES.SUBTITLE} className="pb-4" />
            {theme.getAllPropertyColors().map(property => (
                <GlassCard key={property}>
                    <Subtitle>{I18n.THEMES.COLOR_SCHEME(property)}</Subtitle>
                    <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                        <ThemeCustom property={property} />
                        <SuggestedThemes property={property} />
                    </div>
                </GlassCard>
            ))}
        </GlassCard>
    );
};

export default ViewThemeColorSelector;
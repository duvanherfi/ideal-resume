import GlassCard from "@components/ui/GlassCard";
import Subtitle from "@components/ui/text/Subtitle";
import ViewTitle from "@components/widgets/common/ViewTitle";
import SuggestedThemes from "@components/widgets/theme-color-selector/SuggestedThemes";
import ThemeCustom from "@components/widgets/theme-color-selector/ThemeCustom";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import I18n from "src/locales/I18nKeys";

const ViewCustomizeColor: React.FC = () => {
    const theme = useResumeTheme();

    return (
        <GlassCard>
            <ViewTitle simple title={I18n.THEME.COLOR.TITLE} subtitle={I18n.THEME.COLOR.SUBTITLE} className="pb-4" />
            {theme.getColorKeys().map(property => (
                <GlassCard key={property} className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row justify-between items-center">
                    <Subtitle>{I18n.THEME.COLOR.SCHEME(property)}</Subtitle>
                    <div className="flex flex-row space-x-8 space-y-0">
                        <ThemeCustom property={property} />
                        <SuggestedThemes property={property} />
                    </div>
                </GlassCard>
            ))}
        </GlassCard>
    );
};

export default ViewCustomizeColor;
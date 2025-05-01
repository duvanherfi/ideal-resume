import I18n from "src/locales/I18nKeys";
import GlassCard from "../ui/GlassCard";
import ViewTitle from "../widgets/common/ViewTitle";
import SuggestedThemes from "../widgets/theme-color-selector/SuggestedThemes";
import ThemeCustom from "../widgets/theme-color-selector/ThemeCustom";

const ViewThemeColorSelector = () => {
    return (
        <GlassCard>
            <ViewTitle simple title={I18n.THEMES.TITLE} subtitle={I18n.THEMES.SUBTITLE} className="pb-4" />
            <GlassCard>
                <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                    <ThemeCustom />
                    <SuggestedThemes />
                </div>
            </GlassCard>
        </GlassCard>
    );
};

export default ViewThemeColorSelector;
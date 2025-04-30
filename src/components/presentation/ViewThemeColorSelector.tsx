import GlassCard from "../ui/GlassCard";
import ViewTitle from "../view/common/ViewTitle";
import SuggestedThemes from "../view/theme-color-selector/SuggestedThemes";
import ThemeCustom from "../view/theme-color-selector/ThemeCustom";

const ViewThemeColorSelector = () => {
    return (
        <GlassCard>
            <div className="2xl:w-full">
                <ViewTitle simple title="themes.title" subtitle="themes.subtitle" className="pb-4" />
                <GlassCard>
                    <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                        <ThemeCustom />
                        <SuggestedThemes />
                    </div>
                </GlassCard>
            </div>
        </GlassCard>
    );
};

export default ViewThemeColorSelector;
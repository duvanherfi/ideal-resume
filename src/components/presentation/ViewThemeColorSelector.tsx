import GlassCard from "../ui/GlassCard";
import ViewTitle from "../view/common/ViewTitle";
import SuggestedThemes from "../view/theme-color-selector/SuggestedThemes";
import ThemeCustom from "../view/theme-color-selector/ThemeCustom";

const ViewThemeColorSelector = () => {
    return (
        <div className="2xl:w-full xl:px-8 2xl:px-16">
            <ViewTitle title="themes.title" subtitle="themes.subtitle" />
            <GlassCard>
                <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                    <ThemeCustom />
                    <SuggestedThemes />
                </div>
            </GlassCard>
        </div>
    );
};

export default ViewThemeColorSelector;
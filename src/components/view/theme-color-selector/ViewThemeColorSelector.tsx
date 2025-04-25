import GlassCard from "../../ui/GlassCard";
import ViewTitle from "../common/ViewTitle";
import SuggestedThemes from "./SuggestedThemes";
import ThemeCustom from "./ThemeCustom";

const ViewThemeColorSelector = () => {
    return (
        <div className="2xl:w-full lg:px-16">
            <ViewTitle title="themes.title" subtitle="themes.subtitle" />
            <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg shadow-md p-4 w-full mx-auto border`}>
                <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                    <ThemeCustom />
                    <SuggestedThemes />
                </div>
            </GlassCard>
        </div>
    );
};

export default ViewThemeColorSelector;
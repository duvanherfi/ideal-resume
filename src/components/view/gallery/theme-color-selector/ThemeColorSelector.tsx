import SuggestedThemes from "./SuggestedThemes";
import CustomTheme from "./ThemeCustom";

const ThemeColorSelector = () => {
    return (
        <div className="w-max mx-auto space-y-4">
            <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
                <CustomTheme />
                <SuggestedThemes />
            </div>
        </div>
    );
};

export default ThemeColorSelector;
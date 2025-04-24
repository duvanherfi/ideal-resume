import SuggestedThemes from "./SuggestedThemes";
import ThemeCustom from "./ThemeCustom";

const ViewThemeColorSelector = () => {
    return (
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
            <ThemeCustom />
            <SuggestedThemes />
        </div>
    );
};

export default ViewThemeColorSelector;
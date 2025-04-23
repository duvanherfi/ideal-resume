import useTranslations from "../../../../hooks/useTranslations";
import SuggestedThemes from "./SuggestedThemes";
import CustomTheme from "./ThemeCustom";

const ThemeColorSelector = () => {
    const { t } = useTranslations();

    return (
        <div className="w-full space-y-4 xl:px-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-x-6 lg:gap-x-8">
                <CustomTheme />
                <SuggestedThemes />
            </div>
        </div>
    );
};

export default ThemeColorSelector;
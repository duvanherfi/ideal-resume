import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import themeCustomizationTabs from "@config/tabs/Tabs.ThemeCustomization.config";
import I18n from "@language/common/I18nKeys";

const ThemeCustomization: React.FC = () => {
    return (
        <div className="space-y-4">
            <ViewTitle simple title={I18n.CUSTOMIZE.TITLE} />
            <TabsContainer {...themeCustomizationTabs} />
        </div>
    );
};

export default ThemeCustomization;
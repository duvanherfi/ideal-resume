import customizeTabs from "@config/tabs/customizeTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import I18n from "src/locales/I18nKeys";

const ViewCustomizeTemplate: React.FC = () => {
    return (
        <div className="my-auto">
            <ViewTitle title={I18n.CUSTOMIZE.TITLE} />
            <TabsContainer {...customizeTabs} />
        </div>
    );
};

export default ViewCustomizeTemplate;
import customizeTabs from "@components/tabs/customizeTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import I18nKeys from "src/locales/I18nKeys";

const ViewCustomizeTemplate = () => {
    return (
        <div className="my-auto">
            <ViewTitle title={I18nKeys.CUSTOMIZE.TITLE} />
            <TabsContainer {...customizeTabs} />
        </div>
    );
};

export default ViewCustomizeTemplate;
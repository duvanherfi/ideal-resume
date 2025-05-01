import customizeTabs from "@components/tabs/customizeTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/view/common/ViewTitle";

const ViewCustomizeTemplate = () => {
    return (
        <div className="my-auto">
            <ViewTitle title="customize.title" />
            <TabsContainer {...customizeTabs} />
        </div>
    );
};

export default ViewCustomizeTemplate;
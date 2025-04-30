import customizeTabs from "@components/tabs/customizeTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/view/common/ViewTitle";

const ViewCustomizeTemplate = () => {
    return (
        <div className="my-auto">
            <ViewTitle title="screen.customize.title" />
            <TabsContainer className="" items={customizeTabs} slideDirection="bottom" inline />
        </div>
    );
};

export default ViewCustomizeTemplate;
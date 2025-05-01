import TabsContainer from "@components/ui/tabs/TabsContainer";
import mobileLayoutTabs from "./mobileLayoutTabs";

const MobileLayout = () => {
    return (
        <div className="min-h-screen xl:hidden py-12 overflow-x-hidden">
            <TabsContainer {...mobileLayoutTabs} />
        </div>
    );
}

export default MobileLayout;
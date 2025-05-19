import TabsContainer from "@components/ui/tabs/TabsContainer";
import layoutMobileTabs from "@config/tabs/Tabs.LayoutMobile.config";

const LayoutMobile: React.FC = () => {
    return (
        <div className="min-h-screen py-14 overflow-x-hidden">
            <TabsContainer {...layoutMobileTabs} />
        </div>
    );
}

export default LayoutMobile;
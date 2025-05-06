import TabsContainer from "@components/ui/tabs/TabsContainer";
import layoutMobileTabs from "../../../../config/tabs/layoutMobileTabs";

const LayoutMobile: React.FC = () => {
    return (
        <div className="min-h-screen py-12 overflow-x-hidden">
            <TabsContainer {...layoutMobileTabs} />
        </div>
    );
}

export default LayoutMobile;
import TabsContainer from "../../../ui/tabs/TabsContainer";
import mobileScreenTabs from "./mobileScreenTabs";

const MobileLayout = () => {
    return (
        <div className="min-h-screen xl:hidden py-12 overflow-x-hidden">
            <TabsContainer
                items={mobileScreenTabs}
                contentClassName="w-full"
                animationDuration={300}
                slideDirection="right"
                tabsClassName="fixed bottom-0 z-50 h-16 w-full"
            />
        </div>
    );
}

export default MobileLayout;
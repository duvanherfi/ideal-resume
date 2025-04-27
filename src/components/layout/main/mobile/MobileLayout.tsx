import TabsContainer from "../../../ui/tabs/TabsContainer";
import mobileScreenTabs from "./mobileScreenTabs";

const MobileLayout = () => {
    return (
        <div className="min-h-screen xl:hidden py-12 overflow-x-hidden">
            <TabsContainer
                items={mobileScreenTabs}
                defaultIndex={0}
                contentClassName="sm:px-4 md:px-8 w-full"
                animationDuration={300}
                slideDirection="right"
                tabsClassName="fixed bottom-0 z-50 h-16"
            />
        </div>
    );
}

export default MobileLayout;
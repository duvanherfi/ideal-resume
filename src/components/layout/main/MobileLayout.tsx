import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import TabsContainer from "../../ui/tabs/TabsContainer";
import screenTabs from "./screenTabs";

const MobileLayout = () => {
    const template = useResumeTemplate();

    return (
        <div className="py-8 xl:py-16 min-h-screen xl:hidden">
            <TabsContainer
                items={screenTabs.filter(tab => !(tab.id === "preview" && !template.active))}
                defaultIndex={0}
                className="mt-8"
                contentClassName="lg:px-16"
                animationDuration={300}
                slideDirection="right"
                tabsClassName="fixed bottom-0 z-50 h-16"
            />
        </div>
    );
}

export default MobileLayout;
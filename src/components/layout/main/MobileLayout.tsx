import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import TabsContainer from "../../ui/tabs/TabsContainer";
import screenTabs from "./screenTabs";

const MobileLayout = () => {
    const template = useResumeTemplate();

    return (
        <div className="min-h-screen xl:hidden">
            <TabsContainer
                items={screenTabs.filter(tab => !(tab.id === "preview" && !template.active))}
                defaultIndex={0}
                contentClassName=""
                animationDuration={300}
                slideDirection="right"
                tabsClassName="fixed bottom-0 z-50 h-16"
            />
        </div>
    );
}

export default MobileLayout;
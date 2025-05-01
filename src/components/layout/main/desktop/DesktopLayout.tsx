import ViewTemplatePreview from "@components/view/ViewTemplatePreview";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import desktopLayoutTabs from "./desktopLayoutTabs";

const DesktopLayout = () => {
    return (
        <div className="hidden xl:grid lg:grid-cols-2 2xl:grid-cols-3 xl:h-screen overflow-hidden mt-14">
            <TabsContainer {...desktopLayoutTabs} />
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;
import ViewTemplatePreview from "@components/views/ViewTemplatePreview";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import layoutDesktopTabs from "@config/tabs/Tabs.LayoutDesktop.config";

const LayoutDesktop: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 xl:h-screen overflow-hidden mt-16">
            <TabsContainer {...layoutDesktopTabs} />
            <ViewTemplatePreview />
        </div>
    );
}

export default LayoutDesktop;
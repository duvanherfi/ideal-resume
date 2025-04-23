import TabsContainer from "../../../ui/tabs/TabsContainer";
import ViewTemplatePreview from "../../../view/preview/ViewTemplatePreview";
import desktopScreenTabs from "./desktopScreenTabs";

const DesktopLayout = () => {
    return (
        <div className="py-32 px-16 min-h-screen hidden xl:grid xl:grid-cols-2">
            <TabsContainer
                items={desktopScreenTabs}
                defaultIndex={0}
                slideDirection="left"
            />
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;
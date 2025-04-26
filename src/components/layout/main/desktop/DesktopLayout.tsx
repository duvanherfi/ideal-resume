import TabsContainer from "../../../ui/tabs/TabsContainer";
import ViewTemplatePreview from "../../../view/preview/ViewTemplatePreview";
import desktopScreenTabs from "./desktopScreenTabs";

const DesktopLayout = () => {
    return (
        <div className="hidden xl:grid lg:grid-cols-2 2xl:grid-cols-3 xl:h-screen overflow-hidden mt-12">
            <div className="2xl:col-span-2 w-full overflow-y-auto h-full scrollbar">
                <TabsContainer
                    items={desktopScreenTabs}
                    defaultIndex={0}
                    slideDirection="left"
                    contentClassName="xl:pb-80 2xl:px-8 2xl:pb-32"
                    tabsClassName=""
                />
            </div>
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;
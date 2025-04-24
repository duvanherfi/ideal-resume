import TabsContainer from "../../../ui/tabs/TabsContainer";
import ViewTemplatePreview from "../../../view/preview/ViewTemplatePreview";
import desktopScreenTabs from "./desktopScreenTabs";

const DesktopLayout = () => {
    return (
        <div className="hidden xl:grid xl:grid-cols-3 xl:h-screen overflow-hidden mt-16">
            <div className="col-span-2 w-full overflow-y-auto h-full pr-4 scrollbar">
                <TabsContainer
                    items={desktopScreenTabs}
                    defaultIndex={0}
                    slideDirection="left"
                    contentClassName="px-8 pb-32"
                    tabsClassName=""
                />
            </div>
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;
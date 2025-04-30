import TabsContainer from "../../../ui/tabs/TabsContainer";
import ViewTemplatePreview from "../../../presentation/ViewTemplatePreview";
import desktopScreenTabs from "./desktopScreenTabs";

const DesktopLayout = () => {
    return (
        <div className="hidden xl:grid lg:grid-cols-2 2xl:grid-cols-3 xl:h-screen overflow-hidden mt-14">
            <TabsContainer
                items={desktopScreenTabs}
                slideDirection="left"
                contentClassName="lg:pb-80 2xl:px-8 2xl:pb-32"
                tabsClassName=""
                className="2xl:col-span-2 w-full overflow-y-auto h-full scrollbar"
                inline
            />
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;
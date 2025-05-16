import type { TabType, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewCustomization from "@components/views/ViewCustomization";
import ViewTemplateGallery from "@components/views/ViewTemplateGallery";
import ViewUserDataForm from "@components/views/ViewUserDataForm";
import Icons from "@icons/Icons";
import I18n from "@language/common/I18nKeys";

const tabs: TabType[] = [
  {
    id: "userData",
    text: I18n.APP.TAB.FORM,
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    text: I18n.APP.TAB.GALLERY,
    component: <ViewTemplateGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "customize",
    text: I18n.APP.TAB.CUSTOMIZE,
    component: <ViewCustomization />,
    children: <Icons.Customize />
  },
];

const layoutDesktopTabs: TabsContainerProps = {
  tabs,
  slideDirection: "left",
  inline: true,
  className: "2xl:col-span-2 w-full overflow-y-auto h-full scrollbar",
  tabsClassName: "",
  contentClassName: "lg:pb-32 2xl:px-8",
};

export default layoutDesktopTabs;
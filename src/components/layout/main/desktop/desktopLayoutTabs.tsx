import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewCustomizeTemplate from "@components/views/ViewCustomizeTemplate";
import ViewThumbGallery from "@components/views/ViewThumbGallery";
import ViewUserDataForm from "@components/views/ViewUserDataForm";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
  {
    id: "userData",
    text: I18n.APP.TAB.FORM,
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "templates",
    text: I18n.APP.TAB.GALLERY,
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "labels",
    text: I18n.APP.TAB.CUSTOMIZE,
    component: <ViewCustomizeTemplate />,
    children: <Icons.Customize />
  },
];

const desktopLayoutTabs: TabsContainerProps = {
  tabs,
  slideDirection: "left",
  inline: true,
  className: "2xl:col-span-2 w-full overflow-y-auto h-full scrollbar",
  tabsClassName: "",
  contentClassName: "lg:pb-80 2xl:px-8 2xl:pb-32",
}

export default desktopLayoutTabs;
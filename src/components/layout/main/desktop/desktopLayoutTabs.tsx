import ViewCustomizeTemplate from "@components/presentation/ViewCustomizeTemplate";
import ViewThumbGallery from "@components/presentation/ViewThumbGallery";
import ViewUserDataForm from "@components/presentation/ViewUserDataForm";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";

const tabs: Tab[] = [
  {
    id: "userData",
    text: "app.tab.form",
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "templates",
    text: "app.tab.gallery",
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "labels",
    text: "app.tab.customize",
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
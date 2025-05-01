import ViewTemplatePreview from "@components/presentation/ViewTemplatePreview";
import ViewThumbGallery from "@components/presentation/ViewThumbGallery";
import ViewUserDataForm from "@components/presentation/ViewUserDataForm";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";

const tabs: Tab[] = [
  {
    id: "form",
    text: "app.tab.form",
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    text: "app.tab.gallery",
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "preview",
    text: "app.tab.preview",
    component: <ViewTemplatePreview />,
    children: <Icons.View />
  }
];

const mobileLayoutTabs: TabsContainerProps = {
  tabs,
  animationDuration: 300,
  slideDirection: "right",
  tabsClassName: "fixed bottom-0 z-50 h-16 w-full",
  contentClassName: "w-full",
}

export default mobileLayoutTabs;
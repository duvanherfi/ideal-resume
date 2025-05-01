import ViewTemplatePreview from "@components/view/ViewTemplatePreview";
import ViewThumbGallery from "@components/view/ViewThumbGallery";
import ViewUserDataForm from "@components/view/ViewUserDataForm";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import I18nKeys from "src/locales/I18nKeys";

const tabs: Tab[] = [
  {
    id: "form",
    text: I18nKeys.APP.TAB.FORM,
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    text: I18nKeys.APP.TAB.GALLERY,
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "preview",
    text: I18nKeys.APP.TAB.PREVIEW,
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
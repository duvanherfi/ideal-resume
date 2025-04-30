import ViewUserDataForm from "../../../presentation/ViewUserDataForm";
import ViewTemplatePreview from "../../../presentation/ViewTemplatePreview";
import { Tab } from "../../../ui/tabs/TabsContainer";
import Icons from "../../../ui/icons/Icons";
import ViewThumbGallery from "../../../presentation/ViewThumbGallery";

const mobileScreenTabs: Tab[] = [
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

export default mobileScreenTabs;
import ViewUserDataForm from "../../../view/user-data/ViewUserDataForm";
import ViewTemplatePreview from "../../../view/preview/ViewTemplatePreview";
import GlassCard from "../../../ui/GlassCard";
import { Tab } from "../../../ui/tabs/TabsContainer";
import Icons from "../../../ui/icons/Icons";
import ViewThumbGallery from "../../../view/gallery/ViewThumbGallery";

const mobileScreenTabs: Tab[] = [
  {
    id: "form",
    name: "app.tab.form",
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    name: "app.tab.gallery",
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "preview",
    name: "app.tab.preview",
    component: <ViewTemplatePreview />,
    children: <Icons.View />
  }
];

export default mobileScreenTabs;
import { Tab } from "../../../ui/tabs/TabsContainer";
import LabelsForm from "../../../view/form/LabelsForm";
import UserDataForm from "../../../view/form/UserDataForm";
import ViewThumbGallery from "../../../view/gallery/ViewThumbGallery";

const desktopScreenTabs: Tab[] = [
  {
    id: "userData",
    name: "screen.form.data.title",
    component: <UserDataForm />,
  },
  {
    id: "templates",
    name: "gallery.templates.title",
    component: <ViewThumbGallery />,
  },
  {
    id: "labels",
    name: "screen.form.labels.title",
    component: <LabelsForm />,
  },
];

export default desktopScreenTabs;
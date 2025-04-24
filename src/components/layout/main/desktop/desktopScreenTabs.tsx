import Icons from "../../../ui/icons/Icons";
import { Tab } from "../../../ui/tabs/TabsContainer";
import ViewLabelsForm from "../../../view/form/ViewLabelsForm";
import ViewUserDataForm from "../../../view/form/ViewUserDataForm";
import ViewThumbGallery from "../../../view/gallery/ViewThumbGallery";

const desktopScreenTabs: Tab[] = [
  {
    id: "userData",
    name: "screen.form.data.title",
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "templates",
    name: "gallery.templates.title",
    component: <ViewThumbGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "labels",
    name: "screen.form.labels.title",
    component: <ViewLabelsForm />,
    children: <Icons.Draw />
  },
];

export default desktopScreenTabs;
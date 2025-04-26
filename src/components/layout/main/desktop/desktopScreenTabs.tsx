import Icons from "../../../ui/icons/Icons";
import { Tab } from "../../../ui/tabs/TabsContainer";
import ViewCustomizeTemplate from "../../../presentation/ViewCustomizeTemplate";
import ViewThumbGallery from "../../../presentation/ViewThumbGallery";
import ViewUserDataForm from "../../../presentation/ViewUserDataForm";

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
    name: "screen.customize.title",
    component: <ViewCustomizeTemplate />,
    children: <Icons.Draw />
  },
];

export default desktopScreenTabs;
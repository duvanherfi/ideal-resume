import Icons from "../../../ui/icons/Icons";
import { Tab } from "../../../ui/tabs/TabsContainer";
import ViewCustomizeTemplate from "../../../presentation/ViewCustomizeTemplate";
import ViewThumbGallery from "../../../presentation/ViewThumbGallery";
import ViewUserDataForm from "../../../presentation/ViewUserDataForm";

const desktopScreenTabs: Tab[] = [
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

export default desktopScreenTabs;
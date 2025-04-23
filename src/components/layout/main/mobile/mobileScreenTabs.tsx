import ViewForm from "../../../view/form/ViewForm";
import ViewTemplatePreview from "../../../view/preview/ViewTemplatePreview";
import GlassCard from "../../../ui/GlassCard";
import { Tab } from "../../../ui/tabs/TabsContainer";
import Icons from "../../../ui/icons/Icons";
import ViewGallery from "../../../view/gallery/ViewGallery";

const mobileScreenTabs: Tab[] = [
  {
    id: "form",
    name: "app.tab.form",
    component: <ViewForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    name: "app.tab.gallery",
    component: (
      <GlassCard className={`bg-white/50 border-primary-500/30 dark:bg-black/60 dark:border-primary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
        <ViewGallery />
      </GlassCard>
    ),
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
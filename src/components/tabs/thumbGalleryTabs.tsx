import Icons from "@components/ui/icons/Icons";
import { Tab } from "@components/ui/tabs/TabsContainer";
import TemplateThumbCarousel from "@components/view/gallery/TemplateThumbCarousel";
import TemplateThumbGrid from "@components/view/gallery/TemplateThumbGrid";

const thumbGalleryTabs: Tab[] = [
    {
        id: "carousel",
        component: <TemplateThumbCarousel />,
        text: "gallery.mode.carousel",
        children: <Icons.Carousel />
    },
    {
        id: "grid",
        component: <TemplateThumbGrid />,
        text: "gallery.mode.grid",
        children: <Icons.Grid />
    },
];

export default thumbGalleryTabs;
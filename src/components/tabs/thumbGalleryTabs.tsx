import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import TemplateThumbCarousel from "@components/view/gallery/TemplateThumbCarousel";
import TemplateThumbGrid from "@components/view/gallery/TemplateThumbGrid";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <TemplateThumbCarousel />,
        text: "gallery.viewMode.carousel",
        children: <Icons.Carousel />
    },
    {
        id: "grid",
        component: <TemplateThumbGrid />,
        text: "gallery.viewMode.grid",
        children: <Icons.Grid />
    },
];

const thumbGalleryTabs: TabsContainerProps = {
    tabs,
    className: "hidden xl:block",
    slideDirection: "left",
    tabsClassName: "flex align-end items-center w-64",
    inline: true
}

export default thumbGalleryTabs;
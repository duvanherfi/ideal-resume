import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import TemplateThumbCarousel from "@components/widgets/gallery/carousel/TemplateThumbCarousel";
import TemplateThumbGrid from "@components/widgets/gallery/grid/TemplateThumbGrid";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <TemplateThumbCarousel />,
        children: <Icons.Carousel />,
        text: I18n.GALLERY.VIEW_MODE.CAROUSEL,
    },
    {
        id: "grid",
        component: <TemplateThumbGrid />,
        children: <Icons.Grid />,
        text: I18n.GALLERY.VIEW_MODE.GRID,
    },
];

const thumbGalleryTabs: TabsContainerProps = {
    tabs,
    className: "hidden xl:block",
    slideDirection: "bottom",
    tabsClassName: "flex align-end items-center w-64",
    inline: true
}

export default thumbGalleryTabs;
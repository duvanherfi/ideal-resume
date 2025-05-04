import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import TemplateCarouselGallery from "@components/widgets/gallery/carousel/TemplateCarouselGallery";
import TemplateGridGallery from "@components/widgets/gallery/grid/TemplateGridGallery";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <TemplateCarouselGallery />,
        children: <Icons.Carousel />,
        text: I18n.GALLERY.VIEW_MODE.CAROUSEL,
    },
    {
        id: "grid",
        component: <TemplateGridGallery />,
        children: <Icons.Grid />,
        text: I18n.GALLERY.VIEW_MODE.GRID,
    },
];

const thumbGalleryTabs: TabsContainerProps = {
    tabs,
    className: "hidden md:block",
    slideDirection: "bottom",
    tabsClassName: "flex align-end items-center w-64",
    inline: true
}

export default thumbGalleryTabs;
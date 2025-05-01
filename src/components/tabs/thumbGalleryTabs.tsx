import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import TemplateThumbCarousel from "@components/widgets/gallery/TemplateThumbCarousel";
import TemplateThumbGrid from "@components/widgets/gallery/TemplateThumbGrid";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <TemplateThumbCarousel />,
        text: I18n.GALLERY.VIEW_MODE.CAROUSEL,
        children: <Icons.Carousel />
    },
    {
        id: "grid",
        component: <TemplateThumbGrid />,
        text: I18n.GALLERY.VIEW_MODE.GRID,
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
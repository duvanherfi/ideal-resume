import ViewLabelsForm from "@components/views/ViewLabelsForm";
import ViewThemeColorSelector from "@components/views/ViewThemeColorSelector";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <ViewThemeColorSelector />,
        text: I18n.THEMES.TITLE,
        children: <Icons.Draw />
    },
    {
        id: "grid",
        component: <ViewLabelsForm />,
        text: I18n.FORM.LABELS.TITLE,
        children: <Icons.Header />
    },
];

const customizeTabs: TabsContainerProps ={
    tabs,
    slideDirection:"bottom",
    inline: true
}

export default customizeTabs;
import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewLabelsForm from "@components/views/ViewLabelsForm";
import ViewThemeColorSelector from "@components/views/ViewThemeColorSelector";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <ViewThemeColorSelector />,
        children: <Icons.Draw />,
        text: I18n.THEME.COLOR.TITLE,
    },
    {
        id: "grid",
        component: <ViewLabelsForm />,
        children: <Icons.Header />,
        text: I18n.FORM.LABELS.TITLE,
    },
];

const customizeTabs: TabsContainerProps ={
    tabs,
    slideDirection:"bottom",
    inline: true
}

export default customizeTabs;
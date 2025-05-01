import ViewLabelsForm from "@components/presentation/ViewLabelsForm";
import ViewThemeColorSelector from "@components/presentation/ViewThemeColorSelector";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import I18nKeys from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <ViewThemeColorSelector />,
        text: I18nKeys.THEMES.TITLE,
        children: <Icons.Draw />
    },
    {
        id: "grid",
        component: <ViewLabelsForm />,
        text: I18nKeys.FORM.LABELS.TITLE,
        children: <Icons.Header />
    },
];

const customizeTabs: TabsContainerProps ={
    tabs,
    slideDirection:"bottom",
    inline: true
}

export default customizeTabs;
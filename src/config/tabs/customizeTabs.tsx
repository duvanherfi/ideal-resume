import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewColorSettings from "@components/views/ViewThemeColorSettings";
import ThemeFontSettings from "@components/widgets/theme-font-settings/ThemeFontSettings";
import FormLabels from "@components/widgets/form-labels/FormLabels";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "theme",
        component: <ViewColorSettings />,
        children: <Icons.Draw />,
        text: I18n.THEME.COLOR.TITLE,
    }, 
    {
        id: "labels",
        component: <FormLabels />,
        children: <Icons.Header />,
        text: I18n.FORM.LABELS.TITLE,
    },
    {
        id: "font",
        component: <ThemeFontSettings />,
        children: <Icons.Text />,
        text: I18n.FORM.FONT.TITLE,
    },
];

const customizationTabs: TabsContainerProps = {
    tabs,
    slideDirection: "bottom",
    inline: true
}

export default customizationTabs;
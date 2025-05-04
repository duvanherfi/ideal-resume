import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewCustomizeColor from "@components/views/ViewCustomizeColor";
import FormFonts from "@components/widgets/form-fonts/FormFonts";
import FormLabels from "@components/widgets/form-labels/FormLabels";
import Icons from "@icons/Icons";
import I18n from "src/locales/I18nKeys";

const tabs: Tab[] = [
    {
        id: "theme",
        component: <ViewCustomizeColor />,
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
        component: <FormFonts />,
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
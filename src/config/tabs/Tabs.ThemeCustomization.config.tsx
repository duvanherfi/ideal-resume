import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ThemeColorSettings from "@components/widgets/theme/theme-color-settings/ThemeColorSettings";
import ThemeFontSettings from "@components/widgets/theme/theme-font-settings/ThemeFontSettings";
import Icons from "@icons/Icons";
import I18n from "@language/common/I18nKeys";

const tabs: Tab[] = [
    {
        id: "theme",
        component: <ThemeColorSettings />,
        children: <Icons.Draw />,
        text: I18n.THEME.COLOR.TITLE,
    },
    {
        id: "font",
        component: <ThemeFontSettings />,
        children: <Icons.Text />,
        text: I18n.FORM.FONT.TITLE,
    },
];

const themeCustomizationTabs: TabsContainerProps = {
    tabs,
    slideDirection: "bottom",
    inline: true
};

export default themeCustomizationTabs;
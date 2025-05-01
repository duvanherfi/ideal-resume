import ViewLabelsForm from "@components/presentation/ViewLabelsForm";
import ViewThemeColorSelector from "@components/presentation/ViewThemeColorSelector";
import Icons from "@components/ui/icons/Icons";
import { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";

const tabs: Tab[] = [
    {
        id: "carousel",
        component: <ViewThemeColorSelector />,
        text: "themes.title",
        children: <Icons.Draw />
    },
    {
        id: "grid",
        component: <ViewLabelsForm />,
        text: "form.labels.title",
        children: <Icons.Header />
    },
];

const customizeTabs: TabsContainerProps ={
    tabs,
    slideDirection:"bottom",
    inline: true
}

export default customizeTabs;
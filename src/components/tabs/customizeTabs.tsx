import ViewLabelsForm from "@components/presentation/ViewLabelsForm";
import ViewThemeColorSelector from "@components/presentation/ViewThemeColorSelector";
import Icons from "@components/ui/icons/Icons";
import { Tab } from "@components/ui/tabs/TabsContainer";

const customizeTabs: Tab[] = [
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

export default customizeTabs;
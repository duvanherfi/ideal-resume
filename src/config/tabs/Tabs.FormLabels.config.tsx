import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import GenericFormLabels from "@components/widgets/form-labels/GenericFormLabels";
import FormLabelsHeader from "@config/form/labels/Form.Labels.Header.config";
import FormLabelsOthers from "@config/form/labels/Form.Labels.Others.config";
import FormLabelsSections from "@config/form/labels/Form.Labels.Sections.config";
import Icons from "@icons/Icons";

const tabs: Tab[] = [
    {
        id: "header",
        component: <GenericFormLabels {...FormLabelsHeader} />,
        children: <Icons.Header />
    },
    {
        id: "sections",
        component: <GenericFormLabels {...FormLabelsSections} />,
        children: <Icons.Sections />
    },
    {
        id: "other",
        component: <GenericFormLabels {...FormLabelsOthers} />,
        children: <Icons.Other />
    },
];

const formLabelsTabs: TabsContainerProps = {
    tabs,
    slideDirection: "right"
};

export default formLabelsTabs;
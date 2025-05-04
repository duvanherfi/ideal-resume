import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import GenericFormLabels from "@components/widgets/form-labels/GenericFormLabels";
import { FieldsLabelsHeader, FieldsLabelsOthers, FieldsLabelsSections } from "@config/form/labels/Form.Labels.Sections.config";
import Icons from "@icons/Icons";

const tabs: Tab[] = [
    {
        id: "header",
        component: <GenericFormLabels {...FieldsLabelsHeader} />,
        children: <Icons.Header />
    },
    {
        id: "sections",
        component: <GenericFormLabels {...FieldsLabelsSections} />,
        children: <Icons.Sections />
    },
    {
        id: "other",
        component: <GenericFormLabels {...FieldsLabelsOthers} />,
        children: <Icons.Other />
    },
];

const formLabelsTabs: TabsContainerProps = {
    tabs,
    slideDirection: "bottom"
}

export default formLabelsTabs;
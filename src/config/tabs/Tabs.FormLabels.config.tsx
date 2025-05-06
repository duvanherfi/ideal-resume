import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import GenericFormLabels from "@components/widgets/form-labels/GenericFormLabels";
import FieldsLabelsHeader from "@config/fields/labels/Fields.Labels.Header.config";
import FieldsLabelsOthers from "@config/fields/labels/Fields.Labels.Others.config";
import FieldsLabelsSections from "@config/fields/labels/Fields.Labels.Sections.config";
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
    slideDirection: "right"
}

export default formLabelsTabs;
import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import FormLabels from "@components/widgets/form-labels/FormLabels";
import { FieldsLabelsHeader, FieldsLabelsOthers, FieldsLabelsSections } from "@config/form/labels/Form.Labels.Sections.config";
import Icons from "@icons/Icons";

const tabs: Tab[] = [
    {
        id: "header",
        component: <FormLabels {...FieldsLabelsHeader} />,
        children: <Icons.Header />
    },
    {
        id: "sections",
        component: <FormLabels {...FieldsLabelsSections} />,
        children: <Icons.Sections />
    },
    {
        id: "other",
        component: <FormLabels {...FieldsLabelsOthers} />,
        children: <Icons.Other />
    },
];

const formLabelsTabs: TabsContainerProps = {
    tabs,
    slideDirection: "bottom"
}

export default formLabelsTabs;
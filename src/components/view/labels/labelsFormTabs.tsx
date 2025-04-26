import Icons from "../../ui/icons/Icons";
import { Tab } from "../../ui/tabs/TabsContainer";
import { FieldsLabelsHeader, FieldsLabelsOthers, FieldsLabelsSections } from "./form/fields/FormLabelsSectionsProps.config";
import FormLabels from "./form/FormLabels";

const labelsFormTabs: Tab[] = [
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

export default labelsFormTabs;
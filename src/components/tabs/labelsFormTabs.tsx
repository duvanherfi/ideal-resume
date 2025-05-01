import { FieldsLabelsHeader, FieldsLabelsOthers, FieldsLabelsSections } from "../../config/form/labels/FormLabelsSectionsProps.config";
import Icons from "../ui/icons/Icons";
import { Tab, TabsContainerProps } from "../ui/tabs/TabsContainer";
import FormLabels from "../view/labels/FormLabels";

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

const labelsFormTabs: TabsContainerProps = {
    tabs,
    slideDirection: "bottom"
}

export default labelsFormTabs;
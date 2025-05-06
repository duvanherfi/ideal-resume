import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";

const FieldsLabelsOthers: FormLabelsProps = {
    title: "form.labels.section.others",
    fields: [
        {
            type: "text",
            name: "lastUpdated",
            label: "form.labels.field.lastUpdated",
            suggestions: "form.labels.field.lastUpdated.suggestions"
        },
        {
            type: "text",
            name: "present",
            label: "form.labels.field.present",
            suggestions: "form.labels.field.present.suggestions"
        }
    ]
};

export default FieldsLabelsOthers;
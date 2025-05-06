import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";

const FieldsLabelsHeader: FormLabelsProps = {
    title: "form.labels.section.header",
    fields: [
        {
            type: "text",
            name: "email",
            label: "form.labels.field.email",
            suggestions: "form.labels.field.email.suggestions"
        },
        {
            type: "text",
            name: "phone",
            label: "form.labels.field.phone",
            suggestions: "form.labels.field.phone.suggestions"
        },
        {
            type: "text",
            name: "location",
            label: "form.labels.field.location",
            suggestions: "form.labels.field.location.suggestions"
        },
    ]
};

export default FieldsLabelsHeader;
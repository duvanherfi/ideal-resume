import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";
import I18n from "@language/common/I18nKeys";

const FieldsLabelsOthers: FormLabelsProps = {
    title: I18n.FORM.LABELS.SECTION.OTHERS,
    fields: [
        {
            type: "text",
            name: "lastUpdated",
            label: I18n.FORM.LABELS.FIELD.LAST_UPDATED,
            suggestions: I18n.FORM.LABELS.FIELD.LAST_UPDATED_SUGGESTIONS
        },
        {
            type: "text",
            name: "present",
            label: I18n.FORM.LABELS.FIELD.PRESENT,
            suggestions: I18n.FORM.LABELS.FIELD.PRESENT_SUGGESTIONS
        }
    ]
};

export default FieldsLabelsOthers;
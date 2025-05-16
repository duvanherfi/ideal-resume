import { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import { ResumeLabels } from "@resume-api/types/template/ResumeLabels";

const FieldsLabelsOthers: FormField<ResumeLabels>[] = [
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
];

export default FieldsLabelsOthers;
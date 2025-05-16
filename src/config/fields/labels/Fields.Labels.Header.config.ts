import { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import { ResumeLabels } from "@resume-api/types/template/ResumeLabels";

const FieldsLabelsHeader: FormField<ResumeLabels>[] = [
    {
        type: "text",
        name: "email",
        label: I18n.FORM.LABELS.FIELD.EMAIL,
        suggestions: I18n.FORM.LABELS.FIELD.EMAIL_SUGGESTIONS
    },
    {
        type: "text",
        name: "phone",
        label: I18n.FORM.LABELS.FIELD.PHONE,
        suggestions: I18n.FORM.LABELS.FIELD.PHONE_SUGGESTIONS
    },
    {
        type: "text",
        name: "location",
        label: I18n.FORM.LABELS.FIELD.LOCATION,
        suggestions: I18n.FORM.LABELS.FIELD.LOCATION_SUGGESTIONS
    },
];

export default FieldsLabelsHeader;
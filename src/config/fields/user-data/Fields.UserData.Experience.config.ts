import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import type { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";

const FieldsExperience: FormField<WorkExperience>[] = [
    { type: "date", name: "startDate", label: I18n.FORM.DATA.EXPERIENCE.FIELD.START_DATE, required: true },
    { type: "date", name: "endDate", label: I18n.FORM.DATA.EXPERIENCE.FIELD.END_DATE, placeholder: "Leave blank for current position" },
    { type: "text", name: "company", label: I18n.FORM.DATA.EXPERIENCE.FIELD.COMPANY, required: true },
    { type: "text", name: "role", label: I18n.FORM.DATA.EXPERIENCE.FIELD.ROLE, required: true },
    { type: "text", name: "contractType", label: I18n.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE, suggestions: I18n.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE_SUGGESTIONS },
    { type: "text", name: "tags", label: I18n.FORM.DATA.EXPERIENCE.FIELD.TAGS, placeholder: I18n.FORM.DATA.EXPERIENCE.FIELD.TAGS_PLACEHOLDER },
    { type: "text", name: "location", label: I18n.FORM.DATA.EXPERIENCE.FIELD.LOCATION },
    { type: "url", name: "link", label: I18n.FORM.DATA.EXPERIENCE.FIELD.LINK },
    { type: "textarea", name: "description", label: I18n.FORM.DATA.EXPERIENCE.FIELD.DESCRIPTION },
];

export default FieldsExperience;
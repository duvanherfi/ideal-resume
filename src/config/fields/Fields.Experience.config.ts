import { FormField } from "@components/view/common/form/field/GenericField";
import { WorkExperience } from "@resume-api/types";
import I18nKeys from "src/locales/I18nKeys";

const FieldsExperience: FormField<WorkExperience>[] = [
    { type: "text", name: "company", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.COMPANY, required: true },
    { type: "text", name: "role", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.ROLE, required: true },
    { type: "date", name: "startDate", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.START_DATE, required: true },
    { type: "date", name: "endDate", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.END_DATE, placeholder: "Leave blank for current position" },
    { type: "text", name: "location", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.LOCATION },
    { 
        type: "text", 
        name: "contractType", 
        label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE, 
        suggestions: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE_SUGGESTIONS
    },
    { type: "textarea", name: "description", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.DESCRIPTION },
    { 
        type: "text", 
        name: "tags", 
        label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.TAGS, 
        placeholder: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.TAGS_PLACEHOLDER 
    },
    { type: "url", name: "link", label: I18nKeys.FORM.DATA.EXPERIENCE.FIELD.LINK },
];


export default FieldsExperience;
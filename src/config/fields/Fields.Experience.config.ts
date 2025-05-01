import { FormField } from "@config/form/user-data/Form.UserData.types";
import { WorkExperience } from "@resume-api/types";
import I18n from "src/locales/I18nKeys";

const FieldsExperience: FormField<WorkExperience>[] = [
    { type: "text", name: "company", label: I18n.FORM.DATA.EXPERIENCE.FIELD.COMPANY, required: true },
    { type: "text", name: "role", label: I18n.FORM.DATA.EXPERIENCE.FIELD.ROLE, required: true },
    { type: "date", name: "startDate", label: I18n.FORM.DATA.EXPERIENCE.FIELD.START_DATE, required: true },
    { type: "date", name: "endDate", label: I18n.FORM.DATA.EXPERIENCE.FIELD.END_DATE, placeholder: "Leave blank for current position" },
    { type: "text", name: "location", label: I18n.FORM.DATA.EXPERIENCE.FIELD.LOCATION },
    { 
        type: "text", 
        name: "contractType", 
        label: I18n.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE, 
        suggestions: I18n.FORM.DATA.EXPERIENCE.FIELD.CONTRACT_TYPE_SUGGESTIONS
    },
    { type: "textarea", name: "description", label: I18n.FORM.DATA.EXPERIENCE.FIELD.DESCRIPTION },
    { 
        type: "text", 
        name: "tags", 
        label: I18n.FORM.DATA.EXPERIENCE.FIELD.TAGS, 
        placeholder: I18n.FORM.DATA.EXPERIENCE.FIELD.TAGS_PLACEHOLDER 
    },
    { type: "url", name: "link", label: I18n.FORM.DATA.EXPERIENCE.FIELD.LINK },
];


export default FieldsExperience;
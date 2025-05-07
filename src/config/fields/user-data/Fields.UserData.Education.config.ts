import type { Education } from "@resume-api/types/user-data/items/Education";
import type { FormField } from "@hooks/useMultiItemForm";
import I18n from "@language/common/I18nKeys";

const FieldsEducation: FormField<Education>[] = [
    { type: "text", name: "institution", label: I18n.FORM.DATA.EDUCATION.FIELD.INSTITUTION, required: true },
    { type: "text", name: "degree", label: I18n.FORM.DATA.EDUCATION.FIELD.DEGREE, required: true },
    { type: "date", name: "startDate", label: I18n.FORM.DATA.EDUCATION.FIELD.START_DATE, required: true },
    { type: "date", name: "endDate", label: I18n.FORM.DATA.EDUCATION.FIELD.END_DATE, placeholder: "Leave blank for current education" },
    { type: "text", name: "location", label: I18n.FORM.DATA.EDUCATION.FIELD.LOCATION },
    { type: "text", name: "gpa", label: I18n.FORM.DATA.EDUCATION.FIELD.GPA },
    { type: "checkbox", name: "present", label: I18n.FORM.DATA.EDUCATION.FIELD.PRESENT },
    { type: "textarea", name: "description", label: I18n.FORM.DATA.EDUCATION.FIELD.DESCRIPTION },
];

export default FieldsEducation;
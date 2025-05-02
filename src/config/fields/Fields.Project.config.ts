import { Project } from "@resume-api/types/items/Project";
import { FormField } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";

const FieldsProject: FormField<Project>[] = [
  { type: "text", name: "name", label: I18n.FORM.DATA.PROJECT.FIELD.NAME, required: true },
  { type: "url", name: "link", label: I18n.FORM.DATA.PROJECT.FIELD.LINK, placeholder: "https://..." },
  { type: "date", name: "startDate", label: I18n.FORM.DATA.PROJECT.FIELD.START_DATE },
  { type: "date", name: "endDate", label: I18n.FORM.DATA.PROJECT.FIELD.END_DATE },
  { type: "text", name: "role", label: I18n.FORM.DATA.PROJECT.FIELD.ROLE },
  { type: "textarea", name: "description", label: I18n.FORM.DATA.PROJECT.FIELD.DESCRIPTION },
  { 
      type: "text", 
      name: "tags", 
      label: I18n.FORM.DATA.PROJECT.FIELD.TAGS, 
      placeholder: I18n.FORM.DATA.PROJECT.FIELD.TAGS_PLACEHOLDER 
  },
  { type: "file", name: "imageUrl", label: I18n.FORM.DATA.PROJECT.FIELD.IMAGE },
];

export default FieldsProject;
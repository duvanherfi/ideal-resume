import type { Project } from "@resume-api/types/user-data/items/Project";
import type { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";

const FieldsProject: FormField<Project>[] = [
  { type: "date", name: "startDate", label: I18n.FORM.DATA.PROJECT.FIELD.START_DATE },
  { type: "date", name: "endDate", label: I18n.FORM.DATA.PROJECT.FIELD.END_DATE },
  { type: "text", name: "name", label: I18n.FORM.DATA.PROJECT.FIELD.NAME, required: true },
  { type: "url", name: "link", label: I18n.FORM.DATA.PROJECT.FIELD.LINK, placeholder: "https://..." },
  { type: "text", name: "role", label: I18n.FORM.DATA.PROJECT.FIELD.ROLE },
  { type: "text", name: "tags", label: I18n.FORM.DATA.PROJECT.FIELD.TAGS, placeholder: I18n.FORM.DATA.PROJECT.FIELD.TAGS_PLACEHOLDER },
  { type: "textarea", name: "description", label: I18n.FORM.DATA.PROJECT.FIELD.DESCRIPTION },
  { type: "file", name: "imageUrl", label: I18n.FORM.DATA.PROJECT.FIELD.IMAGE },
];

export default FieldsProject;
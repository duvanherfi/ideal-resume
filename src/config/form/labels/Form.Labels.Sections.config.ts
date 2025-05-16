import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";
import FieldsLabelsSections from "@config/fields/labels/Fields.Labels.Sections.config";
import I18n from "@language/common/I18nKeys";

const FormLabelsSections: FormLabelsProps = {
    title: I18n.FORM.LABELS.SECTION.SECTIONS,
    fields: FieldsLabelsSections
};

export default FormLabelsSections;
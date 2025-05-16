import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";
import FieldsLabelsHeader from "@config/fields/labels/Fields.Labels.Header.config";
import I18n from "@language/common/I18nKeys";

const FormLabelsHeader: FormLabelsProps = {
    title: I18n.FORM.LABELS.SECTION.HEADER,
    fields: FieldsLabelsHeader
};

export default FormLabelsHeader;
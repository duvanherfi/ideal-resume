import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";
import FieldsLabelsOthers from "@config/fields/labels/Fields.Labels.Others.config";
import I18n from "@language/common/I18nKeys";

const FormLabelsOthers: FormLabelsProps = {
    title: I18n.FORM.LABELS.SECTION.OTHERS,
    fields: FieldsLabelsOthers
};

export default FormLabelsOthers;
import { UserDataItems } from "../../api/types";
import { FormField } from "../../components/view/common/form/field/FormFieldsContainer";

interface FormConfig<T> {
    dataKey: keyof UserDataItems;
    title: string;
    fields: FormField<T>[];
    isValid: (item: T) => boolean;
    empty: T;
}

export default FormConfig;
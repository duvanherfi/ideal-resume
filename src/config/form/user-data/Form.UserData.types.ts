import { SelectOption } from "@components/ui/input/Select";
import { UserDataItems } from "@resume-api/types";

export interface FormField<T> {
    name: keyof T;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
    suggestions?: string;
}

interface FormConfig<T> {
    dataKey: keyof UserDataItems;
    title: string;
    fields: FormField<T>[];
    isValid: (item: T) => boolean;
    empty: () => T;
}

export default FormConfig;
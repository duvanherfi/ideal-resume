import React from "react";
import Button from "../../../ui/buttons/Button";
import { SelectOption } from "../../../ui/form/Select";
import Icons from "../../../ui/icons/Icons";
import GenericField from "./GenericField";
import { UseGenericForm } from "../../../../hooks/useGenericForm";

export interface FormField<T> {
    name: keyof T;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
}

interface FormGenericFieldsProps<T extends { id: string }> {
    title: string;
    fields: FormField<T>[];
    isValid: (item: T) => boolean;
    form: UseGenericForm<T>;
}

const ListGenericFields = <T extends { id: string }>(props: FormGenericFieldsProps<T>) => {
    const { title, fields, isValid, form } = props;

    return (
        <div className={"w-full space-y-2"}>
            <h2 className="text-2xl font-semibold mb-8 text-primary-900 dark:text-primary-100">{title}</h2>

            <div className="md:grid md:grid-cols-2 xl:grid-cols-2 gap-4">
                {fields.map((field) => <GenericField key={field.name} {...field} value={form.current[field.name]} onChange={form.change} />)}
            </div>

            <div className="mt-4 flex justify-end">
                {form.isEditing ? (
                    <div className="space-x-2">
                        <Button variant="outline" onClick={form.reset}>
                            Cancel
                        </Button>
                        <Button onClick={form.update}>Update</Button>
                    </div>
                ) : (
                    <Button onClick={form.add} disabled={!isValid(form.current)}>
                        <Icons.Add />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ListGenericFields;
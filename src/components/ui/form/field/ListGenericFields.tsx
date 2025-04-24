import { UseGenericFormType } from "../../../../hooks/useGenericForm";
import Button from "../../buttons/Button";
import Icons from "../../icons/Icons";
import { SelectOption } from "../../input/Select";
import Subtitle from "../../text/Subtitle";
import GenericField from "./GenericField";

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
    form: UseGenericFormType<T>;
}

const ListGenericFields = <T extends { id: string }>(props: FormGenericFieldsProps<T>) => {
    const { title, fields, isValid, form } = props;

    return (
        <div className={"w-full space-y-2"}>
            <Subtitle>{title}</Subtitle>

            <div className="md:grid md:grid-cols-2 xl:grid-cols-2 gap-4">
                {fields.map((field) => <GenericField key={field.name} {...field} value={form.current[field.name]} onChange={form.change} />)}
            </div>

            <div className="mt-4 flex justify-end">
                {form.isEditing ? (
                    <div className="space-x-2">
                        <Button variant="danger" onClick={form.reset}>
                            <Icons.Restore />
                        </Button>
                        <Button variant="secondary" onClick={form.update}>
                            <Icons.FloppyDisk />
                        </Button>
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
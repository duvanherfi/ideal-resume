import Subtitle from "@components/ui/text/Subtitle";
import GenericField from "@components/widgets/common/form/GenericField";
import useI18N from "@hooks/useI18N";
import type { MultiItemFormType } from "@hooks/useMultiItemForm";

interface FormFieldsContainerProps<T extends { id: string }> {
    form: MultiItemFormType<T>;
}

const MultiItemFormFields = <T extends { id: string }>(props: FormFieldsContainerProps<T>) => {
    const { form } = props;
    const { t } = useI18N();

    return (
        <div className="w-full space-y-6">
            <Subtitle>{t(form.title)}</Subtitle>
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {form.fields.map((field) => (
                    <GenericField key={field.name} {...field} value={form.current[field.name]} onChange={form.change} />
                ))}
            </div>
        </div>
    );
};

export default MultiItemFormFields;
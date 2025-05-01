import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import Subtitle from "@components/ui/text/Subtitle";
import GenericField from "@components/view/common/form/field/GenericField";
import { MultiItemFormType } from "@hooks/useMultiItemForm";
import useTranslations from "@hooks/useTranslations";

interface FormFieldsContainerProps<T extends { id: string }> {
    form: MultiItemFormType<T & Record<string, any>>;
}

const MultiItemFormFields = <T extends { id: string }>(props: FormFieldsContainerProps<T>) => {
    const { form } = props;
    const { t } = useTranslations();

    return (
        <div className={"w-full space-y-2"}>
            <Subtitle>{t(form.title)}</Subtitle>

            <div className="md:grid md:grid-cols-2 xl:grid-cols-2 gap-4">
                {form.fields.map((field) => (
                    <GenericField key={field.name} {...field} value={form.current[field.name]} onChange={form.change} />
                ))}
            </div>

            <div className="mt-4 flex justify-end">
                {form.isEditing ? (
                    <div className="space-x-2">
                        <Button variant="secondary" onClick={form.update}>
                            <Icons.Save />
                        </Button>
                        <Button variant="danger" onClick={form.reset}>
                            <Icons.Cross />
                        </Button>
                    </div>
                ) : (
                    <Button onClick={form.add} disabled={!form.isValid(form.current)}>
                        <Icons.Add />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default MultiItemFormFields;
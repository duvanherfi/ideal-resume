import Button from "@components/ui/buttons/Button";
import type { UseMultiItemForm } from "@hooks/useMultiItemForm";
import Icons from "@icons/Icons";

interface MultiItemFormControlsProps<T extends { id: string }> {
    form: UseMultiItemForm<T>;
}

const MultiItemFormControls = <T extends { id: string }>(props: MultiItemFormControlsProps<T>) => {
    const { form } = props;
    
    return (
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
    );
};

export default MultiItemFormControls;
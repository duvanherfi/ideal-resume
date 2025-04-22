import { UseGenericFormType } from "../../../../../hooks/useGenericForm";
import { UserData } from "../../../../../api/types";
import Icons from "../../../../ui/icons/Icons";
import GenericItem from "../items/GenericItem";

interface AddedItemsListProps<T extends { id: string }> {
    title: string;
    dataKey: keyof UserData;
    form: UseGenericFormType<T>;
}

const ListItemsAdded = <T extends { id: string }>(props: AddedItemsListProps<T>) => {
    const { title, dataKey, form } = props;

    return (
        <div className="">
            <Icons.LineSeparator />
            {form.items.length === 0 ? (
                <p className="text-secondary-500 italic p-4">No {title.toLowerCase()} added yet.</p>
            ) : (
                <div className="space-y-2 bg-primary-500/10 dark:bg-primary-900/50 rounded-md">
                    {form.items.map((item) => (
                        <GenericItem
                            key={item.id}
                            dataKey={dataKey}
                            item={item}
                            handleDelete={form.delete}
                            handleEdit={form.edit}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListItemsAdded;
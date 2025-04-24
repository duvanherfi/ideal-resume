import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserData } from "../../../../api/types";
import { UseGenericFormType } from "../../../../hooks/useGenericForm";
import Text from "../../../ui/text/Text";
import GenericItem from "../../../view/user-data/item/GenericItem";
import Icons from "../../icons/Icons";

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
                <Text className="text-secondary-500 italic p-4">{`items.empty.${dataKey}`}</Text>
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <div className="space-y-2 bg-primary-500/10 dark:bg-primary-900/50 rounded-md">
                        {form.items.map((item, index) => (
                            <GenericItem
                                key={item.id}
                                dataKey={dataKey}
                                item={item}
                                index={index}
                                handleDelete={form.delete}
                                handleEdit={form.edit}
                                handleSwap={form.swap}
                            />
                        ))}
                    </div>
                </DndProvider>
            )}
        </div>
    );
};

export default ListItemsAdded;
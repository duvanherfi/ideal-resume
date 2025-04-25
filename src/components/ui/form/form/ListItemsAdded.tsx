import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserDataItems } from "../../../../api/types";
import useGenericForm from "../../../../hooks/useGenericForm";
import Text from "../../../ui/text/Text";
import GenericItem from "../../../view/user-data/item/GenericItem";
import Icons from "../../icons/Icons";

interface AddedItemsListProps<T extends { id: string }> {
    dataKey: keyof UserDataItems;
}

const ListItemsAdded = <T extends { id: string }>(props: AddedItemsListProps<T>) => {
    const { dataKey } = props;
    const form = useGenericForm({ dataKey });

    return (
        <div className="">
            <Icons.LineSeparator />
            {form.items.length === 0 ? (
                <Text className="text-secondary-500 italic p-4">{`items.empty.${dataKey}`}</Text>
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <div className="space-y-2 bg-accent-500/10 dark:bg-accent-900/50 rounded-md lg:p-2">
                        {form.items.map((item, index) => (
                            <GenericItem
                                key={item.id}
                                dataKey={dataKey}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </DndProvider>
            )}
        </div>
    );
};

export default ListItemsAdded;
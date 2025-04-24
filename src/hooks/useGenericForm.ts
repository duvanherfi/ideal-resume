import { useState } from "react";
import { UserData } from "../api/types";
import useUserData from "../api/hooks/useUserData";

export type UseGenericFormType<T> = {
    current: T;
    items: T[];
    isEditing: boolean;
    change: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    add: () => void;
    update: () => void;
    reset: () => void;
    edit: (item: T) => void;
    delete: (id: string) => void;
    swap: (dragIndex: number, hoverIndex: number) => void;
};

interface UseGenericFormProps<T extends { id: string }> {
    dataKey: keyof UserData;
    emptyItem: () => T;
}

const useGenericForm = <T extends { id: string }>(props: UseGenericFormProps<T>): UseGenericFormType<T> => {
    const { dataKey, emptyItem } = props;
    const [currentItem, setCurrentItem] = useState<T>(emptyItem());
    const [isEditing, setIsEditing] = useState(false);
    const data = useUserData();

    const items = data.get[dataKey] as unknown as T[];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCurrentItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        const newItems = [...items, currentItem];
        data.updateField(dataKey, newItems);
        setCurrentItem(emptyItem());
    };

    const handleUpdate = () => {
        const updatedItems = items.map((item) =>
            item.id === currentItem.id ? currentItem : item
        );
        data.updateField(dataKey, updatedItems);
        setCurrentItem(emptyItem());
        setIsEditing(false);
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(emptyItem());
    };

    const handleEdit = (item: T) => {
        setCurrentItem(item);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        const filteredItems = items.filter((item) => item.id !== id);
        data.update({ [dataKey]: filteredItems });
    };

    const handleSwap = (dragIndex: number, hoverIndex: number) => {
        const newItems = [...items];
        const draggedItem = newItems[dragIndex];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, draggedItem);
        data.updateField(dataKey, newItems);
    };

    return {
        current: currentItem,
        items,
        isEditing,
        change: handleChange,
        add: handleAdd,
        update: handleUpdate,
        reset: resetForm,
        edit: handleEdit,
        delete: handleDelete,
        swap: handleSwap,
    };
};

export default useGenericForm;
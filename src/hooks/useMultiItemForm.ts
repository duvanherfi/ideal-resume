import { useState } from "react";
import useUserData from "../api/hooks/useUserData";
import { UserDataItems } from "../api/types";
import { FormField } from "../components/view/common/form/field/FormFieldsContainer";
import getConfig from "../config/form/Form.UserData.config";
import FormConfig from "../config/form/Form.UserData.types";

export type MultiItemFormType<T> = {
    title: string;
    fields: FormField<T>[];
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
    isValid: (item: T) => boolean;
};

interface MultiItemFormProps<T extends { id: string }> {
    dataKey: keyof UserDataItems;
}

const useMultiItemForm = <T extends { id: string }>(props: MultiItemFormProps<T>): MultiItemFormType<T> => {
    const { dataKey } = props;
    const config = getConfig(dataKey) as unknown as FormConfig<T>;
    const [currentItem, setCurrentItem] = useState<T>(config.empty);
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
        setCurrentItem(config.empty);
    };

    const handleUpdate = () => {
        const updatedItems = items.map((item) =>
            item.id === currentItem.id ? currentItem : item
        );
        data.updateField(dataKey, updatedItems);
        setCurrentItem(config.empty);
        setIsEditing(false);
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(config.empty);
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
        title: config.title,
        isValid: config.isValid,
        fields: config.fields,
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

export default useMultiItemForm;
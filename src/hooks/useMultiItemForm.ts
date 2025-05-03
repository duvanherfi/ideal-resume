import { useState } from "react";

interface SelectOption {
    label: string;
    value: string | number;
}

export interface FormField<T> {
    name: keyof T;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
    suggestions?: string;
}

export interface FormConfig<P, T> {
    dataKey: keyof P;
    title: string;
    fields: FormField<T>[];
    empty: () => T;
    isValid: (item: T) => boolean;
}

export type MultiItemFormType<T> = {
    title: string;
    fields: FormField<T>[];
    current: T;
    items: T[];
    isEditing: boolean;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    add: () => void;
    update: () => void;
    reset: () => void;
    edit: (item: T) => void;
    delete: (id: string) => void;
    swap: (dragIndex: number, hoverIndex: number) => void;
    isValid: (item: T) => boolean;
};

export interface DataHook<P> {
    get: P;
    updateField: <K extends keyof P>(field: K, value: P[K]) => void;
    update: (values: Partial<P>) => void;
}

interface MultiItemFormProps<T, P> {
    dataKey: keyof P;
    config: FormConfig<P, T>;
    dataHook: DataHook<P>;
}

const useMultiItemForm = <T extends { id: string }, P extends Record<string, any>>(props: MultiItemFormProps<T, P>): MultiItemFormType<T> => {
    const { dataKey, config, dataHook } = props;
    const [currentItem, setCurrentItem] = useState<T>(config.empty());
    const [isEditing, setIsEditing] = useState(false);

    const items = dataHook.get[dataKey] as unknown as T[];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        const newItems = [...items, currentItem];
        dataHook.updateField(dataKey, newItems as any);
        setCurrentItem(config.empty());
    };

    const handleUpdate = () => {
        const updatedItems = items.map((item) =>
            item.id === currentItem.id ? currentItem : item
        );
        dataHook.updateField(dataKey, updatedItems as any);
        setCurrentItem(config.empty());
        setIsEditing(false);
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(config.empty());
    };

    const handleEdit = (item: T) => {
        setCurrentItem(item);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        const filteredItems = items.filter((item) => item.id !== id);
        dataHook.update({ [dataKey]: filteredItems } as Partial<P>);
    };

    const handleSwap = (dragIndex: number, hoverIndex: number) => {
        const newItems = [...items];
        const draggedItem = newItems[dragIndex];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, draggedItem);
        dataHook.updateField(dataKey, newItems as any);
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
import { ReactNode } from "react";
import Icons from "../../../../ui/icons/Icons";

export interface FormAddedItemGenericProps<T> {
    item: T;
    handleEdit: (item: T) => void;
    handleDelete: (id: string) => void;
}

interface FormAddedItemProps<T> extends FormAddedItemGenericProps<T> {
    children: ReactNode;
}

const FormAddedItem = <T extends { id: string; }>(props: FormAddedItemProps<T>) => {
    return (
        <div className="p-3 border bg-white/70 border-secondary-200 dark:bg-black/70 dark:border-secondary-800 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
                <div className="flex-1 overflow-hidden">
                    {props.children}
                </div>
                <div className="flex-shrink-0 flex space-x-2">
                    <button onClick={() => props.handleEdit(props.item)} className="text-blue-600 hover:text-blue-800">
                        <Icons.Draw />
                    </button>
                    <button onClick={() => props.handleDelete(props.item.id)} className="text-red-600 hover:text-red-800">
                        <Icons.Trash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormAddedItem;
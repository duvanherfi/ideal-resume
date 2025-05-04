import Icons from "@icons/Icons";
import { ReactNode, useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

export interface AddedItemGenericProps<T> {
    item: T;
    index: number;
    handleEdit: (item: T) => void;
    handleDelete: (id: string) => void;
    handleSwap: (dragIndex: number, hoverIndex: number) => void;
}

interface AddedItemProps<T> extends AddedItemGenericProps<T> {
    children: ReactNode;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

const ItemType = {
    ITEM: "ITEM",
};

const ItemForm = <T extends { id: string; }>(props: AddedItemProps<T>) => {
    const { item, index, handleSwap } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>({
        type: ItemType.ITEM,
        item: { id: item.id, index, type: ItemType.ITEM },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
        accept: ItemType.ITEM,
        collect(monitor: DropTargetMonitor<DragItem, void>) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(draggedItem: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = draggedItem.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            if (!clientOffset) {
                return;
            }

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Arrastrar hacia abajo
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Arrastrar hacia arriba
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            // Realizar la acción de reordenamiento
            handleSwap(dragIndex, hoverIndex);

            draggedItem.index = hoverIndex;
        },
    });

    // Inicializar drag & drop refs
    drag(drop(ref));

    const opacity = isDragging ? 0.1 : 1;

    return (
        <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className="p-3 border bg-white/70 border-secondary-200 dark:bg-black/70 dark:border-secondary-800 rounded-lg shadow-sm cursor-move">
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
    );
};

export default ItemForm;
import { UserDataItems } from "../../../../../api/types";
import useMultiItemForm from "../../../../../hooks/useMultiItemForm";
import GlassCard from "../../../../ui/GlassCard";
import FormFieldsContainer from "../field/FormFieldsContainer";
import AddedItemList from "./AddedItemList";

export interface MultiItemFormProps<T extends { id: string }> {
    dataKey: keyof UserDataItems;
}

const MultiItemForm = <T extends { id: string }>(props: MultiItemFormProps<T>) => {
    const { dataKey } = props;
    const form = useMultiItemForm<T>({ dataKey });

    return (
        <div className="space-y-8 w-screen md:w-full">
            <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
                <FormFieldsContainer form={form} {...props} />
                <AddedItemList form={form} dataKey={dataKey} />
            </GlassCard>
        </div>
    );
};

export default MultiItemForm;
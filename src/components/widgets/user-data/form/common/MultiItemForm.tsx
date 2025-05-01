import GlassCard from "@components/ui/GlassCard";
import useMultiItemForm from "@hooks/useMultiItemForm";
import { UserDataItems } from "@resume-api/types";
import AddedItemList from "./AddedItemList";
import MultiItemFormControls from "./MultiItemFormControls";
import MultiItemFormFields from "./MultiItemFormFields";

export interface MultiItemFormProps {
    dataKey: keyof UserDataItems;
}

const MultiItemForm = <T extends { id: string }>(props: MultiItemFormProps) => {
    const { dataKey } = props;
    const form = useMultiItemForm<T>({ dataKey });

    return (
        <GlassCard>
            <MultiItemFormFields form={form} />
            <MultiItemFormControls form={form} />
            <AddedItemList form={form} dataKey={dataKey} />
        </GlassCard>
    );
};

export default MultiItemForm;
import GlassCard from "@components/ui/GlassCard";
import useUserDataForm from "@hooks/useUserDataForm";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import AddedItemList from "./AddedItemList";
import MultiItemFormControls from "./MultiItemFormControls";
import MultiItemFormFields from "../MultiItemFormFields";

export interface MultiItemFormProps {
    dataKey: keyof UserDataItems;
}

const MultiItemForm = <T extends { id: string }>(props: MultiItemFormProps) => {
    const { dataKey } = props;
    const form = useUserDataForm<T>({ dataKey });

    return (
        <GlassCard>
            <MultiItemFormFields form={form} />
            <MultiItemFormControls form={form} />
            <AddedItemList form={form} dataKey={dataKey} />
        </GlassCard>
    );
};

export default MultiItemForm;
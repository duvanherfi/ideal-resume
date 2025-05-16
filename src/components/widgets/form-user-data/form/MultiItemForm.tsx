import GlassCard from "@components/ui/glass-card/GlassCard";
import useUserDataForm from "@hooks/form/useUserDataForm";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import AddedItemList from "./common/AddedItemList";
import MultiItemFormControls from "./common/MultiItemFormControls";
import MultiItemFormFields from "./common/MultiItemFormFields";

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
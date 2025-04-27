import { UserDataItems } from "@resume-api/types";
import useMultiItemForm from "@hooks/useMultiItemForm";
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
        <GlassCard>
            <FormFieldsContainer form={form} {...props} />
            <AddedItemList form={form} dataKey={dataKey} />
        </GlassCard>
    );
};

export default MultiItemForm;
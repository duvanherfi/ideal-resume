import useGenericForm from "../../../../../hooks/useGenericForm";
import useTranslations from "../../../../../hooks/useTranslations";
import { UserData } from "../../../../../api/types";
import GlassCard from "../../../../ui/GlassCard";
import ListGenericFields, { FormField } from "../field/ListGenericFields";
import ListItemsAdded from "./ListItemsAdded";

export interface FormGenericProps<T extends { id: string }> {
    title: string;
    fields: FormField<T>[];
    dataKey: keyof UserData;
    emptyItem: () => T;
    isValid: (item: T) => boolean;
}

const FormGeneric = <T extends { id: string }>(props: FormGenericProps<T>) => {
    const { title, fields, dataKey, emptyItem, isValid } = props;
    const { t } = useTranslations();
    const form = useGenericForm({ dataKey, emptyItem });

    return (
        <div className="space-y-8 w-screen md:w-full">
            <GlassCard className={`bg-accent-100/50 border-accent-500/30 dark:bg-accent-900/30 dark:border-accent-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
                <ListGenericFields
                    title={t(title)}
                    fields={fields}
                    isValid={isValid}
                    form={form}
                />
                <ListItemsAdded
                    title={t(title)}
                    dataKey={dataKey}
                    form={form}
                />
            </GlassCard>
        </div>
    );
};

export default FormGeneric;
import { UserDataItems } from "../../../../api/types";
import useGenericForm from "../../../../hooks/useGenericForm";
import useTranslations from "../../../../hooks/useTranslations";
import GlassCard from "../../GlassCard";
import ListGenericFields, { FormField } from "../field/ListGenericFields";
import ListItemsAdded from "./ListItemsAdded";

export interface FormGenericProps<T extends { id: string }> {
    title: string;
    fields: FormField<T>[];
    dataKey: keyof UserDataItems;
    isValid: (item: T) => boolean;
}

const FormGeneric = <T extends { id: string }>(props: FormGenericProps<T>) => {
    const { title, fields, dataKey, isValid } = props;
    const { t } = useTranslations();

    return (
        <div className="space-y-8 w-screen md:w-full">
            <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
                <ListGenericFields
                    title={t(title)}
                    fields={fields}
                    isValid={isValid}
                    dataKey={dataKey}
                />
                <ListItemsAdded dataKey={dataKey} />
            </GlassCard>
        </div>
    );
};

export default FormGeneric;
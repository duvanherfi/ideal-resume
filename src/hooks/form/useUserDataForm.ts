import useUserData from "@api-hooks/useUserData";
import getFormConfig from "@config/form/user-data/Form.UserData.config";
import useMultiItemForm, { type FormConfig, type UseMultiItemForm } from "@hooks/form/useMultiItemForm";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";

interface UserDataFormProps {
    dataKey: keyof UserDataItems;
}

const useUserDataForm = <T extends { id: string }>(props: UserDataFormProps): UseMultiItemForm<T> => {
    const { dataKey } = props;
    const config = getFormConfig(dataKey);
    const userDataHook = useUserData();

    return useMultiItemForm<T, UserDataItems>({
        dataKey,
        config: config as unknown as FormConfig<UserDataItems, T>,
        dataHook: userDataHook
    });
};

export default useUserDataForm;
import useUserData from "@api-hooks/useUserData";
import getConfig from "@config/form/user-data/Form.UserData.config";
import { UserDataItems } from "@resume-api/types";
import useMultiItemForm, { FormConfig, MultiItemFormType } from "@hooks/useMultiItemForm";

interface UserDataFormProps {
    dataKey: keyof UserDataItems;
}

const useUserDataForm = <T extends { id: string }>(props: UserDataFormProps): MultiItemFormType<T> => {
    const { dataKey } = props;

    const config = getConfig(dataKey);
    const userDataHook = useUserData();

    return useMultiItemForm<T, UserDataItems>({
        dataKey,
        config: config as unknown as FormConfig<UserDataItems, T>,
        dataHook: userDataHook
    });
};

export default useUserDataForm;
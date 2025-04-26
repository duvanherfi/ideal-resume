import { UserBasicInfo } from "../../api/types";
import { FormField } from "../../components/view/common/form/field/GenericField";

const FieldsBasicInfo: FormField<UserBasicInfo>[] = [
    {
        type: "text",
        name: "firstName",
        label: "form.basic.field.firstName",
    },
    {
        type: "text",
        name: "lastName",
        label: "form.basic.field.lastName",
    },
    {
        type: "email",
        name: "email",
        label: "form.basic.field.email",
    },
    {
        type: "text",
        name: "phone",
        label: "form.basic.field.phone",
    },
    {
        type: "date",
        name: "dateOfBirth",
        label: "form.basic.field.dateOfBirth",
    },
    {
        type: "emai",
        name: "email",
        label: "form.basic.field.email",
    },
    {
        type: "textarea",
        name: "profileSummary",
        label: "form.basic.field.profileSummary",
    },
];

export const getEmptyBasicInfo = (): UserBasicInfo => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    profileSummary: "",
    profilePhoto: "",
});

export default FieldsBasicInfo;
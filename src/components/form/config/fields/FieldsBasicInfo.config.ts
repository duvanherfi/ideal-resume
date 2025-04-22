import { BasicInfo } from "../../../../api/types";
import { FormField } from "../../common/field/ListGenericFields";

const FieldsBasicInfo: FormField<BasicInfo>[] = [
    {
        type: "text",
        name: "firstName",
        label: "form.basic.field.firstName",
        required: true,
    },
    {
        type: "text",
        name: "lastName",
        label: "form.basic.field.lastName",
        required: true,
    },
    {
        type: "email",
        name: "email",
        label: "form.basic.field.email",
        required: true,
    },
    {
        type: "text",
        name: "phone",
        label: "form.basic.field.phone",
        required: true,
    },
    {
        type: "date",
        name: "dateOfBirth",
        label: "form.basic.field.dateOfBirth",
    },
    {
        type: "text",
        name: "address",
        label: "form.basic.field.address",
    },
    {
        type: "textarea",
        name: "profileSummary",
        label: "form.basic.field.profileSummary",
    }
];

export const getEmptyBasicInfo = (): BasicInfo => ({
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
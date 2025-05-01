import { FormField } from "@components/view/common/form/field/GenericField";
import { UserBasicInfo } from "@resume-api/types";

const FieldsBasicInfo: FormField<UserBasicInfo>[] = [
    { type: "text", name: "firstName", label: "form.basicInfo.field.firstName" },
    { type: "text", name: "lastName", label: "form.basicInfo.field.lastName" },
    { type: "text", name: "role", label: "form.basicInfo.field.role" },
    { type: "email", name: "email", label: "form.basicInfo.field.email" },
    { type: "text", name: "phone", label: "form.basicInfo.field.phone" },
    { type: "date", name: "dateOfBirth", label: "form.basicInfo.field.dateOfBirth" },
    { type: "text", name: "location", label: "form.basicInfo.field.location" },
    { type: "textarea", name: "profileSummary", label: "form.basicInfo.field.profileSummary" },
    { type: "file", name: "profilePhoto", label: "form.basicInfo.field.profilePhoto" },
];

export const getEmptyBasicInfo = (): UserBasicInfo => ({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    location: "",
    profileSummary: "",
    profilePhoto: "",
    links: [],
});

export default FieldsBasicInfo;
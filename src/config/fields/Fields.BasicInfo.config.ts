import { UserBasicInfo } from "@resume-api/types/basicInfo/UserBasicInfo";
import { FormField } from "@hooks/useMultiItemForm";
import I18n from "src/locales/I18nKeys";

const FieldsBasicInfo: FormField<UserBasicInfo>[] = [
    { type: "text", name: "firstName", label: I18n.FORM.DATA.BASIC_INFO.FIELD.FIRST_NAME },
    { type: "text", name: "lastName", label: I18n.FORM.DATA.BASIC_INFO.FIELD.LAST_NAME },
    { type: "text", name: "role", label: I18n.FORM.DATA.BASIC_INFO.FIELD.ROLE },
    { type: "email", name: "email", label: I18n.FORM.DATA.BASIC_INFO.FIELD.EMAIL },
    { type: "text", name: "phone", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PHONE },
    { type: "date", name: "dateOfBirth", label: I18n.FORM.DATA.BASIC_INFO.FIELD.DATE_OF_BIRTH },
    { type: "text", name: "location", label: I18n.FORM.DATA.BASIC_INFO.FIELD.LOCATION },
    { type: "textarea", name: "profileSummary", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PROFILE_SUMMARY },
    { type: "file", name: "profilePhoto", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PROFILE_PHOTO },
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
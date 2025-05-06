import type { FormField } from "@hooks/useMultiItemForm";
import type { UserBasicInfo } from "@resume-api/types/user-data/basicInfo/UserBasicInfo";
import I18n from "src/locales/I18nKeys";

const FieldsBasicInfo: FormField<UserBasicInfo>[] = [
    { type: "text", name: "firstName", label: I18n.FORM.DATA.BASIC_INFO.FIELD.FIRST_NAME },
    { type: "text", name: "lastName", label: I18n.FORM.DATA.BASIC_INFO.FIELD.LAST_NAME },
    { type: "date", name: "dateOfBirth", label: I18n.FORM.DATA.BASIC_INFO.FIELD.DATE_OF_BIRTH },
    { type: "text", name: "role", label: I18n.FORM.DATA.BASIC_INFO.FIELD.ROLE },
    { type: "email", name: "email", label: I18n.FORM.DATA.BASIC_INFO.FIELD.EMAIL },
    { type: "text", name: "phone", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PHONE },
    { type: "text", name: "location", label: I18n.FORM.DATA.BASIC_INFO.FIELD.LOCATION },
    { type: "file", name: "profilePhoto", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PROFILE_PHOTO },
    { type: "textarea", name: "profileSummary", label: I18n.FORM.DATA.BASIC_INFO.FIELD.PROFILE_SUMMARY },
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
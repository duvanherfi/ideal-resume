import type { UserBasicInfo } from "./basicInfo/UserBasicInfo";
import type { UserDataItems } from "./items/UserDataItems";

export default interface UserData extends UserBasicInfo, UserDataItems { }
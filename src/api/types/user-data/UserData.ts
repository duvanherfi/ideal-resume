import type { UserBasicInfo } from "./basicInfo/UserBasicInfo";
import type { UserDataItems } from "./items/UserDataItems";

export interface UserData extends UserBasicInfo, UserDataItems { }
import { UserBasicInfo } from "./basicInfo/UserBasicInfo";
import { UserDataItems } from "./items/UserDataItems";


export interface UserData extends UserBasicInfo, UserDataItems { }

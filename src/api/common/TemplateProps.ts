import { UserData, ResumeLabels } from "../types";
import TemplateTheme from "./TemplateTheme";

interface TemplateProps {
    data: UserData;
    labels: ResumeLabels;
    theme?: TemplateTheme;
}
export default TemplateProps;
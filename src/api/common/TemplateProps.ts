import { ResumeData, ResumeLabels } from "../types";
import TemplateTheme from "./TemplateTheme";

 interface TemplateProps {
    data: ResumeData;
    labels?: ResumeLabels;
    theme?: TemplateTheme;
}

export default TemplateProps;
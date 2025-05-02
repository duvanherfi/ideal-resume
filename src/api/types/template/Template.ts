import TemplateProps from "../../common/TemplateProps";

export interface Template {
  id: string;
  name: string;
  PDF: React.FC<TemplateProps>;
}
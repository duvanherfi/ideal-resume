import TemplateProps from "./TemplateProps";

export interface Template {
  id: string;
  name: string;
  PDF: React.FC<TemplateProps>;
}
import TemplateCorporate from "../../api/templates/corporate/TemplateCorporate";
import TemplateElegant from "../../api/templates/elegant/TemplateElegant";
import TemplateMinimalist from "../../api/templates/minimalist/TemplateMinimalist";
import TemplateModern from "../../api/modern/TemplateModern";
import { Template } from "../../api/types";

const templates: Template[] = [
    {
        id: "modern",
        name: "Modern",
        PDF: TemplateModern,
    },
    {
        id: "minimalist",
        name: "Minimalist",
        PDF: TemplateMinimalist,
    },
    {
        id: "corporate",
        name: "Corporate",
        PDF: TemplateCorporate,
    },
    {
        id: "elegant",
        name: "Elegant",
        PDF: TemplateElegant,
    },
];

export default templates;
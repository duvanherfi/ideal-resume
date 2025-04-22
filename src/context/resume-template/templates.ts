import TemplateCorporate from "../../templates/corporate/TemplateCorporate";
import TemplateElegant from "../../templates/elegant/TemplateElegant";
import TemplateMinimalist from "../../templates/minimalist/TemplateMinimalist";
import TemplateModern from "../../templates/modern/TemplateModern";
import { Template } from "../../types";

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
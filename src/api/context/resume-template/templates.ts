import TemplateCorporate from "../../templates/corporate/TemplateCorporate";
import TemplateCreative from "../../templates/creative/TemplateCreative";
import TemplateElegant from "../../templates/elegant/TemplateElegant";
import TemplateMinimalist from "../../templates/minimalist/TemplateMinimalist";
import TemplateModern from "../../templates/modern/TemplateModern";
import TemplateProfessional from "../../templates/professional/TemplateProfessional";
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
    {
        id: "creative",
        name: "Creative",
        PDF: TemplateCreative,
    },
    {
        id: "professional",
        name: "Professional",
        PDF: TemplateProfessional
    }
];

export default templates;
import TemplateCorporate from "../../templates/structure/Corporate.template";
import TemplateCreative from "../../templates/structure/Creative.template";
import TemplateElegant from "../../templates/structure/Elegant.template";
import TemplateMinimalist from "../../templates/structure/Minimalist.template";
import TemplateModern from "../../templates/structure/Modern.template";
import TemplateProfessional from "../../templates/structure/Professional.template";
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
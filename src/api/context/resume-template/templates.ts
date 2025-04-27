import TemplateCorporate from "../../templates/structure/TemplateCorporate";
import TemplateCreative from "../../templates/structure/TemplateCreative";
import TemplateElegant from "../../templates/structure/TemplateElegant";
import TemplateMinimalist from "../../templates/structure/TemplateMinimalist";
import TemplateModern from "../../templates/structure/TemplateModern";
import TemplateProfessional from "../../templates/structure/TemplateProfessional";
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
import type { Template } from "@resume-api/types/template/Template";
import TemplateModern from "@resume-api/templates/structure/Modern.template";
import TemplateTechnical from "@resume-api/templates/structure/Technical.template";
import TemplateCorporate from "@resume-api/templates/structure/Corporate.template";
import TemplateCreative from "@resume-api/templates/structure/Creative.template";
import TemplateElegant from "@resume-api/templates/structure/Elegant.template";
import TemplateMinimalist from "@resume-api/templates/structure/Minimalist.template";
import TemplateProfessional from "@resume-api/templates/structure/Professional.template";

export const asyncTemplates: Record<string, () => Promise<any>> = {
    //modern: () => import("@resume-api/templates/structure/Modern.template"),
    minimalist: () => import("@resume-api/templates/structure/Minimalist.template"),
    corporate: () => import("@resume-api/templates/structure/Corporate.template"),
    elegant: () => import("@resume-api/templates/structure/Elegant.template"),
    creative: () => import("@resume-api/templates/structure/Creative.template"),
    professional: () => import("@resume-api/templates/structure/Professional.template"),
    technical: () => import("@resume-api/templates/structure/Technical.template"),
};

const templates: Template[] = [
    /*{
        id: "modern",
        name: "Modern",
        PDF: TemplateModern,
    },*/
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
    },
    {
        id: "technical",
        name: "Technical",
        PDF: TemplateTechnical
    },
    {
        id: "minimalist",
        name: "Minimalist",
        PDF: TemplateMinimalist,
    },
];

export default templates;
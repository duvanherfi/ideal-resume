import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";

const FieldsLabelsSections: FormLabelsProps = {
    title: "form.labels.section.sections",
    fields: [
        {
            type: "text",
            name: "profileSummary",
            label: "form.labels.field.profileSummary",
            suggestions: "form.labels.field.profileSummary.suggestions"
        },
        {
            type: "text",
            name: "workExperiences",
            label: "form.labels.field.workExperiences",
            suggestions: "form.labels.field.workExperiences.suggestions"
        },
        {
            type: "text",
            name: "education",
            label: "form.labels.field.education",
            suggestions: "form.labels.field.education.suggestions"
        },
        {
            type: "text",
            name: "projects",
            label: "form.labels.field.projects",
            suggestions: "form.labels.field.projects.suggestions"
        },
        {
            type: "text",
            name: "skills",
            label: "form.labels.field.skills",
            suggestions: "form.labels.field.skills.suggestions"
        },
        {
            type: "text",
            name: "languages",
            label: "form.labels.field.languages",
            suggestions: "form.labels.field.languages.suggestions"
        }
    ]
};

export default FieldsLabelsSections;
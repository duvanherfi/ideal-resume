import { FormLabelsProps } from "@components/widgets/labels/FormLabels";

export const FieldsLabelsHeader: FormLabelsProps = {
    title: "form.labels.section.header",
    fields: [
        {
            type: "text",
            name: "email",
            label: "form.labels.field.email",
            suggestions: "form.labels.field.email.suggestions"
        },
        {
            type: "text",
            name: "phone",
            label: "form.labels.field.phone",
            suggestions: "form.labels.field.phone.suggestions"
        },
        {
            type: "text",
            name: "location",
            label: "form.labels.field.location",
            suggestions: "form.labels.field.location.suggestions"
        },
    ]
};

export const FieldsLabelsSections: FormLabelsProps = {
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

export const FieldsLabelsOthers: FormLabelsProps = {
    title: "form.labels.section.others",
    fields: [
        {
            type: "text",
            name: "lastUpdated",
            label: "form.labels.field.lastUpdated",
            suggestions: "form.labels.field.lastUpdated.suggestions"
        },
        {
            type: "text",
            name: "present",
            label: "form.labels.field.present",
            suggestions: "form.labels.field.present.suggestions"
        }
    ]
};

const FormLabelsSections: FormLabelsProps[] = [
    FieldsLabelsHeader,
    FieldsLabelsSections,
    FieldsLabelsOthers
];

export default FormLabelsSections;
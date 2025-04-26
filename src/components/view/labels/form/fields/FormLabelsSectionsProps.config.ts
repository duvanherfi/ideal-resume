import { FormLabelsProps } from "../FormLabels";

export const FieldsLabelsHeader: FormLabelsProps = {
    title: "form.labels.section.header",
    fields: [
        {
            type: "text",
            name: "email",
            label: "form.labels.field.email",
            suggestions: ["email", "correo", ""]
        },
        {
            type: "text",
            name: "phone",
            label: "form.labels.field.phone",
        },
        {
            type: "text",
            name: "location",
            label: "form.labels.field.location",
        },
        {
            type: "text",
            name: "profileSummary",
            label: "form.labels.field.profileSummary",
        },
    ]
}

export const FieldsLabelsSections: FormLabelsProps = {
    title: "form.labels.section.sections",
    fields: [
        {
            type: "text",
            name: "workExperiences",
            label: "form.labels.field.workExperiences",
        },
        {
            type: "text",
            name: "education",
            label: "form.labels.field.education",
        },
        {
            type: "text",
            name: "projects",
            label: "form.labels.field.projects",
        },
        {
            type: "text",
            name: "skills",
            label: "form.labels.field.skills",
        },
        {
            type: "text",
            name: "languages",
            label: "form.labels.field.languages",
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
        },
        {
            type: "text",
            name: "present",
            label: "form.labels.field.present",
        }
    ]
};

const FormLabelsSectionsProps: FormLabelsProps[] = [
    FieldsLabelsHeader,
    FieldsLabelsSections,
    FieldsLabelsOthers
];

export default FormLabelsSectionsProps;
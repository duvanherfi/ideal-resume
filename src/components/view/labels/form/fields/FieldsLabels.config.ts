import { ResumeLabels } from "../../../../../api/types";
import { FormField } from "../../../../ui/form/field/FormFieldsContainer";

interface FormFieldSectionContainer {
    title: string;
    fields: FormField<ResumeLabels>[];
}

const FieldsLabelsHeader: FormFieldSectionContainer = {
    title: "form.labels.section.header",
    fields: [
        {
            type: "text",
            name: "email",
            label: "form.labels.field.email",
            required: true,
        },
        {
            type: "text",
            name: "phone",
            label: "form.labels.field.phone",
            required: true,
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
            required: true,
        },
    ]
}

const FieldsLabelsSections: FormFieldSectionContainer = {
    title: "form.labels.section.sections",
    fields: [
        {
            type: "text",
            name: "workExperiences",
            label: "form.labels.field.workExperiences",
            required: true,
        },
        {
            type: "text",
            name: "education",
            label: "form.labels.field.education",
            required: true,
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
            required: true,
        },
        {
            type: "text",
            name: "languages",
            label: "form.labels.field.languages",
        }
    ]
};

const FieldsLabelsOthers: FormFieldSectionContainer = {
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
            required: true,
        }
    ]
};

const FieldsLabels:  FormFieldSectionContainer[] = [
    FieldsLabelsHeader,
    FieldsLabelsSections,
    FieldsLabelsOthers
];

export default FieldsLabels;
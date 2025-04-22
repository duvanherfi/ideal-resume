import { ResumeLabels } from "../../../../../api/types";
import { FormField } from "../../common/field/ListGenericFields";

const FieldsLabels: FormField<ResumeLabels>[] = [
    {
        type: "text",
        name: "profileSummary",
        label: "form.labels.field.profileSummary",
        required: true,
    },
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
    },
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
        name: "lastUpdated",
        label: "form.labels.field.lastUpdated",
    },
    {
        type: "text",
        name: "present",
        label: "form.labels.field.present",
        required: true,
    }
];

export default FieldsLabels;
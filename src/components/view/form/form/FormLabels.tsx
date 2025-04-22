import React from "react";
import useResumeLabels from "../../../../api/hooks/useResumeLabels";
import useTranslations from "../../../../hooks/useTranslations";
import GlassCard from "../../../ui/GlassCard";
import GenericField from "../common/field/GenericField";
import { ResumeLabels } from "../../../../api/types";
import { defaultLabels } from "../../../../api/context/resume-labels/ResumeLabelsContext";

// Definición de tipo para campos del formulario
interface FormField<T> {
    type: "text" | "email" | "date" | "textarea";
    name: keyof T;
    label: string;
    required?: boolean;
}

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

const FormLabels: React.FC = () => {
    const { t } = useTranslations();
    const { labels, updateLabel, resetLabels } = useResumeLabels();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateLabel(name as keyof ResumeLabels, value);
    };

    return (
        <div className="w-screen md:w-full">
            <GlassCard className="bg-accent-100/50 dark:bg-accent-900/30 dark:border-accent-500/20 border-accent-500/30 backdrop-blur-xl rounded-br-lg rounded-bl-lg shadow-md p-4 w-full mx-auto border">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
                        {t("form.labels.title")}
                    </h2>
                    <button
                        onClick={resetLabels}
                        className="px-4 py-2 bg-secondary-500 text-white rounded hover:bg-secondary-600 transition-colors"
                    >
                        {t("form.labels.reset")}
                    </button>
                </div>

                <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {FieldsLabels.map(field => (
                        <GenericField
                            key={field.name as string}
                            type={field.type}
                            name={field.name as string}
                            label={t(field.label)}
                            required={field.required}
                            value={labels[field.name as keyof ResumeLabels] || ""}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default FormLabels;
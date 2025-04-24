import React from "react";
import useResumeLabels from "../../../../api/hooks/useResumeLabels";
import { ResumeLabels } from "../../../../api/types";
import useTranslations from "../../../../hooks/useTranslations";
import GlassCard from "../../../ui/GlassCard";
import Subtitle from "../../../ui/text/Subtitle";
import GenericField from "../../../ui/form/field/GenericField";
import FieldsLabels from "../config/fields/FieldsLabels.config";

const FormLabels: React.FC = () => {
    const { t } = useTranslations();
    const { labels, updateLabel, resetLabels } = useResumeLabels();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateLabel(name as keyof ResumeLabels, value);
    };

    return (
        <div className="w-screen md:w-full my-auto h-full">
            <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
                <div className="flex justify-between items-center mb-8">
                    <Subtitle>form.labels.title</Subtitle>
                </div>

                <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {FieldsLabels.map(field => (
                        <GenericField
                            key={field.name as string}
                            type={field.type}
                            name={field.name as string}
                            label={t(field.label)}
                            required={field.required}
                            value={labels[field.name] ?? ""}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default FormLabels;
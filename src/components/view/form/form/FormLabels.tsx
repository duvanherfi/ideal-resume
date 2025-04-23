import React from "react";
import useResumeLabels from "../../../../api/hooks/useResumeLabels";
import { ResumeLabels } from "../../../../api/types";
import useTranslations from "../../../../hooks/useTranslations";
import GlassCard from "../../../ui/GlassCard";
import GenericField from "../common/field/GenericField";
import FieldsLabels from "../config/fields/FieldsLabels.config";

const FormLabels: React.FC = () => {
    const { t } = useTranslations();
    const { labels, updateLabel, resetLabels } = useResumeLabels();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateLabel(name as keyof ResumeLabels, value);
    };

    return (
        <div className="w-screen md:w-full">
            <GlassCard className={`bg-primary-200/50 dark:bg-primary-900/30 border-accent-500/30 dark:border-accent-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
                        {t("form.labels.title")}
                    </h2>
                    {/** //TODO Review this                
                 <button
                    onClick={resetLabels}
                    className="px-4 py-2 bg-secondary-500 text-white rounded hover:bg-secondary-600 transition-colors"
                >
                    {t("form.labels.reset")}
                </button>
                 */}
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
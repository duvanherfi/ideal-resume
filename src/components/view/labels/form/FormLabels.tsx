import React from "react";
import useResumeLabels from "../../../../api/hooks/useResumeLabels";
import { ResumeLabels } from "../../../../api/types";
import useTranslations from "../../../../hooks/useTranslations";
import GenericField from "../../common/form/field/GenericField";
import GlassCard from "../../../ui/GlassCard";
import Icons from "../../../ui/icons/Icons";
import Subtitle from "../../../ui/text/Subtitle";
import FieldsLabels from "./fields/FieldsLabels.config";

const FormLabels: React.FC = () => {
    const { t } = useTranslations();
    const { labels, updateLabel, resetLabels } = useResumeLabels();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateLabel(name as keyof ResumeLabels, value);
    };

    return (
        <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
            {FieldsLabels.map(section => (
                <>
                    <Subtitle>{section.title}</Subtitle>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.fields.map(field => (
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
                    <Icons.LineSeparator />
                </>
            ))}
        </GlassCard>
    );
};

export default FormLabels;
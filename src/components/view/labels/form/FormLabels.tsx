import React from "react";
import useResumeLabels from "../../../../api/hooks/useResumeLabels";
import { ResumeLabels } from "../../../../api/types";
import GlassCard from "../../../ui/GlassCard";
import Icons from "../../../ui/icons/Icons";
import Subtitle from "../../../ui/text/Subtitle";
import GenericField, { FormField } from "../../common/form/field/GenericField";

export interface FormLabelsProps {
    title: string;
    fields: FormField<ResumeLabels>[];
}

const FormLabels = (props: FormLabelsProps) => {
    const { title, fields } = props;
    const { labels, updateLabel } = useResumeLabels();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateLabel(name as keyof ResumeLabels, value);
    };

    return (
        <GlassCard>
            <Subtitle>{title}</Subtitle>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fields.map(field => (
                    <GenericField
                        key={field.name as string}
                        name={field.name as string}
                        type={field.type}
                        label={field.label}
                        required={field.required}
                        suggestions={field.suggestions}
                        value={labels[field.name] ?? ""}
                        onChange={handleChange}
                    />
                ))}
            </div>
            <Icons.LineSeparator />
        </GlassCard>
    );
};

export default FormLabels;
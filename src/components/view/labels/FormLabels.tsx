import useResumeLabels from "@api-hooks/useResumeLabels";
import GlassCard from "@components/ui/GlassCard";
import Icons from "@components/ui/icons/Icons";
import Subtitle from "@components/ui/text/Subtitle";
import { FormField } from "@config/form/user-data/Form.UserData.types";
import { ResumeLabels } from "@resume-api/types";
import GenericField from "../common/form/GenericField";

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
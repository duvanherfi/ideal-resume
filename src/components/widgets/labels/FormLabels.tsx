import useResumeLabels from "@api-hooks/useResumeLabels";
import GlassCard from "@components/ui/GlassCard";
import Subtitle from "@components/ui/text/Subtitle";
import { FormField } from "@config/form/user-data/Form.UserData.types";
import Icons from "@icons/Icons";
import { ResumeLabels } from "@resume-api/types";
import GenericField from "../common/form/GenericField";

export interface FormLabelsProps {
    title: string;
    fields: FormField<ResumeLabels>[];
}

const FormLabels: React.FC<FormLabelsProps> = ({ title, fields }) => {
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
                    <GenericField key={field.name} value={labels[field.name] ?? ""} onChange={handleChange} {...field} />
                ))}
            </div>
            <Icons.LineSeparator />
        </GlassCard>
    );
};

export default FormLabels;
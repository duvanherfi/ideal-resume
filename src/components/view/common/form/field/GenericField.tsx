import useTranslations from "../../../../../hooks/useTranslations";
import ImageUpload from "../../../../ui/input/ImageUpload";
import Input from "../../../../ui/input/Input";
import Select, { SelectOption } from "../../../../ui/input/Select";
import TextArea from "../../../../ui/input/TextArea";

export interface FormField<T> {
    name: keyof T;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
    suggestions?: string[];
}

const GenericField = (props: any) => {
    const { t } = useTranslations();

    switch (props.type) {
        case "text": case "date":
            return <Input {...props} label={t(props.label)} suggestions={props.suggestions?.map(t)} />;
        case "image":
            return <ImageUpload {...props} label={t(props.label)} />;
        case "textarea":
            return <TextArea {...props} label={t(props.label)} />;
        case "select":
            return <Select {...props} label={t(props.label)} options={props.options.map((option: SelectOption) => ({ ...option, label: t(option.label) }))} />;
        default:
            return null;
    }
}

export default GenericField;
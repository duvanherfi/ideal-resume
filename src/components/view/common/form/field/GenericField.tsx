import useTranslations from "@hooks/useTranslations";
import InputImage from "@components/ui/input/InputImage";
import Input from "@components/ui/input/Input";
import Select, { SelectOption } from "@components/ui/input/Select";
import TextArea from "@components/ui/input/TextArea";

export interface FormField<T> {
    name: keyof T;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
    suggestions?: string;
}

const GenericField = (props: any) => {
    const { t, list } = useTranslations();

    switch (props.type) {
        case "text": case "date": case "email": case "number": case "url":
            return <Input {...props} label={t(props.label)} suggestions={list(props.suggestions)} />;
        case "image":
            return <InputImage {...props} label={t(props.label)} />;
        case "textarea":
            return <TextArea {...props} label={t(props.label)} />;
        case "select":
            return <Select {...props} label={t(props.label)} options={props.options.map((option: SelectOption) => ({ ...option, label: t(option.label) }))} />;
        default:
            return null;
    }
}

export default GenericField;
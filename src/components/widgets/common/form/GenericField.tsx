import Input from "@components/ui/input/Input";
import InputImage from "@components/ui/input/InputImage";
import Select from "@components/ui/input/Select";
import TextArea from "@components/ui/input/TextArea";
import useI18N from "@hooks/useI18N";
import { SelectOption } from "@hooks/useSelectInput";

const GenericField = (props: any) => {
    const { t, tlist: list } = useI18N();

    const label = t(props.label);

    switch (props.type) {
        case "text": case "date": case "email": case "number": case "url":
            return <Input {...props} label={label} suggestions={list(props.suggestions)} />;
        case "image":
            return <InputImage {...props} label={label} />;
        case "textarea":
            return <TextArea {...props} label={label} />;
        case "select":
            return <Select {...props} label={label} options={props.options.map((option: SelectOption) => ({ ...option, label: t(option.label) }))} />;
        default:
            return null;
    }
}

export default GenericField;
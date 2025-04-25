import useTranslations from "../../../../../hooks/useTranslations";
import ImageUpload from "../../../../ui/input/ImageUpload";
import Input from "../../../../ui/input/Input";
import Select, { SelectOption } from "../../../../ui/input/Select";
import TextArea from "../../../../ui/input/TextArea";

const GenericField = (props: any) => {
    const { t } = useTranslations();

    switch (props.type) {
        case "text": case "date":
            return <Input {...props} label={t(props.label)} />;
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
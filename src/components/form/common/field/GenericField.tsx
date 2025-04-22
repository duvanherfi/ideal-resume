import Select, { SelectOption } from "../../../ui/form/Select";
import Input from "../../../ui/form/Input";
import TextArea from "../../../ui/form/TextArea";
import useTranslations from "../../../../hooks/useTranslations";

const GenericField = (props: any) => {
    const { t } = useTranslations();

    switch (props.type) {
        case "text": case "date":
            return <Input {...props} label={t(props.label)} />;
        case "image":
            return <Input {...props} label={t(props.label)} />;
        case "textarea":
            return <TextArea {...props} label={t(props.label)} />;
        case "select":
            return <Select {...props} label={t(props.label)} options={props.options.map((option: SelectOption) => ({ ...option, label: t(option.label) }))} />;
        default:
            return null;
    }
}

export default GenericField;
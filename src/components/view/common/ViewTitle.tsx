import Icons from "../../ui/icons/Icons";
import Title from "../../ui/text/Title";
import Text from "../../ui/text/Text";

interface ViewTitleProps {
    title: string;
    subtitle?: string;
}

const ViewTitle = (props: ViewTitleProps) => {
    return (
        <div className="px-2">
            <Icons.LineSeparator />
            <Title className="">{props.title}</Title>
            {props.subtitle && <Text className="text-secondary-500">{props.subtitle}</Text>}
            <Icons.LineSeparator />
        </div>
    );
};

export default ViewTitle;
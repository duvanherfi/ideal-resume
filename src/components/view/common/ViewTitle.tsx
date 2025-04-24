import Icons from "../../ui/icons/Icons";
import Title from "../../ui/text/Title";
import Text from "../../ui/text/Text";

interface ViewTitleProps {
    title: string;
    subtitle?: string;
}

const ViewTitle = (props: ViewTitleProps) => {
    return (
        <div>
            <Icons.LineSeparator />
            <Title className="hidden lg:block">{props.title}</Title>
            {props.subtitle && <Text className="text-secondary-500">{props.subtitle}</Text>}
            <Icons.LineSeparator />
        </div>
    );
};

export default ViewTitle;
import Icons from "../../ui/icons/Icons";
import Title from "../../ui/text/Title";
import Text from "../../ui/text/Text";

interface ViewTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    simple?: boolean;
}

const ViewTitle = (props: ViewTitleProps) => {
    return (
        <div className={`px-4 ${props.className}`}>
            {!props.simple && <Icons.LineSeparator />}
            <Title>{props.title}</Title>
            {props.subtitle && <Text className="text-secondary-600 dark:text-secondary-400">{props.subtitle}</Text>}
            {!props.simple && <Icons.LineSeparator />}
        </div>
    );
};

export default ViewTitle;
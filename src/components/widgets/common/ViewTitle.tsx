import Text from "@components/ui/text/Text";
import Title from "@components/ui/text/Title";
import Icons from "@icons/Icons";

interface ViewTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    simple?: boolean;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ title, subtitle, className, simple }) => {
    return (
        <div className={`px-4 py-2 ${className}`}>
            <Title>{title}</Title>
            {subtitle && <Text className="text-secondary-600 dark:text-secondary-400 text-xs md:text-lg">{subtitle}</Text>}
            {!simple && <Icons.LineSeparator />}
        </div>
    );
};

export default ViewTitle;
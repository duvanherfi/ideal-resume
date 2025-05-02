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
        <div className={`px-4 ${className}`}>
            {!simple && <Icons.LineSeparator />}
            <Title>{title}</Title>
            {subtitle && <Text className="text-secondary-600 dark:text-secondary-400">{subtitle}</Text>}
            {!simple && <Icons.LineSeparator />}
        </div>
    );
};

export default ViewTitle;
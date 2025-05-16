import Text from "@components/ui/text/Text";
import Title from "@components/ui/text/Title";
import Icons from "@icons/Icons";

interface ViewTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    simple?: boolean;
    children?: React.ReactNode;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ children, title, subtitle, className, simple }) => {
    return (
        <div className={`py-2 ${className}`}>
            <div className="flex items-center space-x-2">
                {children}
                <Title className="px-2">{title}</Title>
            </div>
            {subtitle && <Text className="px-2 text-secondary-600 dark:text-secondary-400 text-xs md:text-lg">{subtitle}</Text>}
            {!simple && <Icons.LineSeparator />}
        </div>
    );
};

export default ViewTitle;
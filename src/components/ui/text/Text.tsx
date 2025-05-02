import useI18N from "@hooks/useI18N";

interface TextProps {
    children: string;
    className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
    const { t } = useI18N();

    return (
        <h2 className={className}>
            {t(children)}
        </h2>
    );
}

export default Text;
import useI18N from "@hooks/app/useI18N";

interface TitleProps {
    children: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    const { t } = useI18N();

    return (
        <h1 className={`${className} text-2xl 2xl:text-4xl font-semibold text-primary-900 dark:text-primary-100 py-2`}>
            {t(children)}
        </h1>
    );
}

export default Title;
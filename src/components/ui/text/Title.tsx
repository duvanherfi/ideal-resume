import useTranslations from "../../../hooks/useTranslations";

interface TitleProps {
    children: string;
    className?: string;
}

const Title = (props: TitleProps) => {
    const { t } = useTranslations();

    return (
        <h2 className={`text-2xl md:text-4xl text-center font-semibold text-primary-900 dark:text-primary-100 py-4 ${props.className}`}>
            {t(props.children)}
        </h2>
    );
}

export default Title;
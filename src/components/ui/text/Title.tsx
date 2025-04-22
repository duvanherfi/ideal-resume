import useTranslations from "../../../hooks/useTranslations";

interface TitleProps {
    children: string;
    className?: string;
}

const Title = (props: TitleProps) => {
    const { t } = useTranslations();

    return (
        <h2 className={`text-2xl md:text-4xl font-semibold text-center text-black/80 dark:text-primary-100 py-4 md:py-8 ${props.className}`}>
            {t(props.children)}
        </h2>
    );
}

export default Title;
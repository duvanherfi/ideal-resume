import useTranslations from "@hooks/useTranslations";

interface TitleProps {
    children: string;
    className?: string;
}

const Title = (props: TitleProps) => {
    const { t } = useTranslations();

    return (
        <h1 className={`text-2xl 2xl:text-4xl font-semibold text-accent-900 dark:text-accent-100 py-2 ${props.className}`}>
            {t(props.children)}
        </h1>
    );
}

export default Title;
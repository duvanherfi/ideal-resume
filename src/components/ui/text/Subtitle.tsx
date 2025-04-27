import useTranslations from "@hooks/useTranslations";

interface TitleProps {
    children: string;
}

const Subtitle = (props: TitleProps) => {
    const { t } = useTranslations();

    return (
        <h2 className="text-2xl font-semibold mb-8 text-accent-900 dark:text-accent-100">
            {t(props.children)}
        </h2>
    );
}

export default Subtitle;
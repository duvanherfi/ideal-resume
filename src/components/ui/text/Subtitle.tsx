import useI18N from "@hooks/useI18N";

interface TitleProps {
    children: string;
}

const Subtitle = (props: TitleProps) => {
    const { t } = useI18N();

    return (
        <h2 className="text-2xl font-semibold mb-8 text-accent-900 dark:text-accent-100">
            {t(props.children)}
        </h2>
    );
}

export default Subtitle;
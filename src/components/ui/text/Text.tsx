import useTranslations from "@hooks/useTranslations";

interface TextProps {
    children: string;
    className?: string;
}

const Text = (props: TextProps) => {
    const { t } = useTranslations();

    return (
        <h2 className={`${props.className}`}>
            {t(props.children)}
        </h2>
    );
}

export default Text;
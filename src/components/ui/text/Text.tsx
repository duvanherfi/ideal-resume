import useI18N from "@hooks/useI18N";

interface TextProps {
    children: string;
    className?: string;
}

const Text = (props: TextProps) => {
    const { t } = useI18N();

    return (
        <h2 className={props.className}>
            {t(props.children)}
        </h2>
    );
}

export default Text;